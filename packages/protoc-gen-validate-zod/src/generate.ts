import { Schema } from "@bufbuild/protoplugin";
import { generateEnumSchema } from "./enum.js";
import { generateMessageSchema } from "./message.js";
import { createFile } from "./utils.js";

export function generateTs(schema: Schema) {
  for (const file of schema.files) {
    const f = createFile(schema, file);
    f.preamble(file);

    for (const enumeration of file.enums) {
      generateEnumSchema(f, enumeration);
    }

    for (const message of file.messages) {
      generateMessageSchema(f, message);
    }
  }
}
