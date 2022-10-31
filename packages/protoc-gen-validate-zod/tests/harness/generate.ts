#!/usr/bin/env -S node --no-warnings --loader ts-node/esm

// TODO: Implement this as a protoplugin too... Because why not.

import type { Message } from "@bufbuild/protobuf";
import fs from "fs-extra";
import path from "node:path";
import readline from "node:readline";
import url from "node:url";

import { TestCase } from "./harness.js";
import { registry } from "./registry.js";

async function readTestCases(iterable: AsyncIterable<string>) {
  const cases: [TestCase, Message][] = [];

  for await (const line of iterable) {
    try {
      if (!line) {
        continue;
      }

      const tc = TestCase.fromJson(JSON.parse(line), {
        typeRegistry: registry,
      });

      if (!tc.message) {
        throw new Error("Failed to parse message");
      }

      const type = tc.message.typeUrl.replace("type.googleapis.com/", "");
      const message = registry.findMessage(type);
      if (message === undefined) {
        throw new Error(`Unknown message type ${tc.message.typeUrl}`);
      }

      const instance = new message();
      if (!tc.message.unpackTo(instance)) {
        throw new Error(`Failed to unpack message ${message.typeName}`);
      }

      cases.push([tc, instance]);
    } catch (e) {
      console.error(`Failed decoding for line: ${line}: ${e}`);
      continue;
    }
  }

  return cases;
}

const dirname = url.fileURLToPath(path.dirname(import.meta.url));
const fixtures = path.join(dirname, "cases.txt");

readTestCases(readline.createInterface({ input: fs.createReadStream(fixtures) }))
  .then((cases) => {
    const groups: Record<string, [string, number, Message][]> = {};

    for (const [testcase, message] of cases) {
      const name = testcase.name;

      const prefix = name.slice(0, name.indexOf(" - "));
      const suffix = name.slice(name.indexOf(" - ") + 3);

      const current = (groups[prefix] = groups[prefix] ?? []);
      current.push([suffix, testcase.failures, message]);
    }

    for (const [prefix, cases] of Object.entries(groups)) {
      let output = `import { it, expect } from "vitest";\n`;

      for (const [suffix, failures, message] of cases) {
        const type = message.getType().typeName;
        const json = message.toJsonString({
          typeRegistry: registry,
        });

        output += `\nit("${suffix}", () => {\n`;

        if (failures > 0) {
          output += `  expect(${json}).toBeInvalid("${type}", ${failures});\n`;
        } else {
          output += `  expect(${json}).toBeValid("${type}");\n`;
        }

        output += `});\n`;
      }

      fs.outputFileSync(path.join(dirname, "..", `${prefix}.test.ts`), output);
    }
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
