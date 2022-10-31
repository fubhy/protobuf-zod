#!/usr/bin/env node

import { runNodeJs } from "@bufbuild/protoplugin";
import { readFileSync } from "node:fs";
import { createPlugin } from "../dist/index.js";

const { version } = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));

runNodeJs(createPlugin(version));
