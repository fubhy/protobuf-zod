import { it, expect } from "vitest";

it("none - valid", () => {
  expect({ val: "cXV1eA==" }).toBeValid("tests.harness.cases.BytesNone");
});

it("const - valid", () => {
  expect({ val: "Zm9v" }).toBeValid("tests.harness.cases.BytesConst");
});

it("const - invalid", () => {
  expect({ val: "YmFy" }).toBeInvalid("tests.harness.cases.BytesConst", 1);
});

it("in - valid", () => {
  expect({ val: "YmFy" }).toBeValid("tests.harness.cases.BytesIn");
});

it("in - invalid", () => {
  expect({ val: "cXV1eA==" }).toBeInvalid("tests.harness.cases.BytesIn", 1);
});

it("not in - valid", () => {
  expect({ val: "cXV1eA==" }).toBeValid("tests.harness.cases.BytesNotIn");
});

it("not in - invalid", () => {
  expect({ val: "Zml6eg==" }).toBeInvalid("tests.harness.cases.BytesNotIn", 1);
});

it("len - valid", () => {
  expect({ val: "YmF6" }).toBeValid("tests.harness.cases.BytesLen");
});

it("len - invalid (lt)", () => {
  expect({ val: "Z28=" }).toBeInvalid("tests.harness.cases.BytesLen", 1);
});

it("len - invalid (gt)", () => {
  expect({ val: "Zml6eg==" }).toBeInvalid("tests.harness.cases.BytesLen", 1);
});

it("min len - valid", () => {
  expect({ val: "Zml6eg==" }).toBeValid("tests.harness.cases.BytesMinLen");
});

it("min len - valid (min)", () => {
  expect({ val: "YmF6" }).toBeValid("tests.harness.cases.BytesMinLen");
});

it("min len - invalid", () => {
  expect({ val: "Z28=" }).toBeInvalid("tests.harness.cases.BytesMinLen", 1);
});

it("max len - valid", () => {
  expect({ val: "Zm9v" }).toBeValid("tests.harness.cases.BytesMaxLen");
});

it("max len - valid (max)", () => {
  expect({ val: "cHJvdG8=" }).toBeValid("tests.harness.cases.BytesMaxLen");
});

it("max len - invalid", () => {
  expect({ val: "MTIzNDU2Nzg5MA==" }).toBeInvalid("tests.harness.cases.BytesMaxLen", 1);
});

it("min/max len - valid", () => {
  expect({ val: "cXV1eA==" }).toBeValid("tests.harness.cases.BytesMinMaxLen");
});

it("min/max len - valid (min)", () => {
  expect({ val: "Zm9v" }).toBeValid("tests.harness.cases.BytesMinMaxLen");
});

it("min/max len - valid (max)", () => {
  expect({ val: "cHJvdG8=" }).toBeValid("tests.harness.cases.BytesMinMaxLen");
});

it("min/max len - invalid (below)", () => {
  expect({ val: "Z28=" }).toBeInvalid("tests.harness.cases.BytesMinMaxLen", 1);
});

it("min/max len - invalid (above)", () => {
  expect({ val: "dmFsaWRhdGU=" }).toBeInvalid("tests.harness.cases.BytesMinMaxLen", 1);
});

it("equal min/max len - valid", () => {
  expect({ val: "cHJvdG8=" }).toBeValid("tests.harness.cases.BytesEqualMinMaxLen");
});

it("equal min/max len - invalid", () => {
  expect({ val: "dmFsaWRhdGU=" }).toBeInvalid("tests.harness.cases.BytesEqualMinMaxLen", 1);
});

it("pattern - valid", () => {
  expect({ val: "Rm9vMTIz" }).toBeValid("tests.harness.cases.BytesPattern");
});

it("pattern - invalid", () => {
  expect({ val: "5L2g5aW95L2g5aW9" }).toBeInvalid("tests.harness.cases.BytesPattern", 1);
});

it("pattern - invalid (empty)", () => {
  expect({}).toBeInvalid("tests.harness.cases.BytesPattern", 1);
});

it("prefix - valid", () => {
  expect({ val: "mZ8I" }).toBeValid("tests.harness.cases.BytesPrefix");
});

it("prefix - valid (only)", () => {
  expect({ val: "mQ==" }).toBeValid("tests.harness.cases.BytesPrefix");
});

it("prefix - invalid", () => {
  expect({ val: "YmFy" }).toBeInvalid("tests.harness.cases.BytesPrefix", 1);
});

it("contains - valid", () => {
  expect({ val: "Y2FuZHkgYmFycw==" }).toBeValid("tests.harness.cases.BytesContains");
});

it("contains - valid (only)", () => {
  expect({ val: "YmFy" }).toBeValid("tests.harness.cases.BytesContains");
});

it("contains - invalid", () => {
  expect({ val: "Y2FuZHkgYmF6cw==" }).toBeInvalid("tests.harness.cases.BytesContains", 1);
});

it("suffix - valid", () => {
  expect({ val: "YnV6eg==" }).toBeValid("tests.harness.cases.BytesSuffix");
});

it("suffix - valid (only)", () => {
  expect({ val: "YnV6eg==" }).toBeValid("tests.harness.cases.BytesSuffix");
});

it("suffix - invalid", () => {
  expect({ val: "Zm9vYmFy" }).toBeInvalid("tests.harness.cases.BytesSuffix", 1);
});

it("suffix - invalid (case-sensitive)", () => {
  expect({ val: "Rm9vQmF6" }).toBeInvalid("tests.harness.cases.BytesSuffix", 1);
});

it("IP - valid (v4)", () => {
  expect({ val: "wKgAAQ==" }).toBeValid("tests.harness.cases.BytesIP");
});

it("IP - valid (v6)", () => {
  expect({ val: "IAENuIWjAAAAAIouA3BzNA==" }).toBeValid("tests.harness.cases.BytesIP");
});

it("IP - invalid", () => {
  expect({ val: "Zm9vYmFy" }).toBeInvalid("tests.harness.cases.BytesIP", 1);
});

it("IPv4 - valid", () => {
  expect({ val: "wKgAAQ==" }).toBeValid("tests.harness.cases.BytesIPv4");
});

it("IPv4 - invalid", () => {
  expect({ val: "Zm9vYmFy" }).toBeInvalid("tests.harness.cases.BytesIPv4", 1);
});

it("IPv4 - invalid (v6)", () => {
  expect({ val: "IAENuIWjAAAAAIouA3BzNA==" }).toBeInvalid("tests.harness.cases.BytesIPv4", 1);
});

it("IPv6 - valid", () => {
  expect({ val: "IAENuIWjAAAAAIouA3BzNA==" }).toBeValid("tests.harness.cases.BytesIPv6");
});

it("IPv6 - invalid", () => {
  expect({ val: "Zm9vYXI=" }).toBeInvalid("tests.harness.cases.BytesIPv6", 1);
});

it("IPv6 - invalid (v4)", () => {
  expect({ val: "wKgAAQ==" }).toBeInvalid("tests.harness.cases.BytesIPv6", 1);
});

it("IPv6 - valid (ignore_empty)", () => {
  expect({}).toBeValid("tests.harness.cases.BytesIPv6Ignore");
});
