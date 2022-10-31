#!/usr/bin/env -S node --no-warnings --loader ts-node/esm

import { runNodeJs } from "@bufbuild/protoplugin";
import { readFileSync } from "node:fs";
import { createPlugin } from "../src/index.js";

const { version } = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));

runNodeJs(createPlugin(`${version}-dev`));
