import { it, expect } from "vitest";

it("field - valid", () => {
  expect({
    val: {
      const: "abcd",
      intConst: 5,
      floatVal: 1,
      durVal: "3s",
      tsVal: "1970-01-01T00:00:17Z",
      floatConst: 7,
      doubleIn: 123,
      enumConst: "ComplexTWO",
      anyVal: { value: "0s", "@type": "type.googleapis.com/google.protobuf.Duration" },
      repTsVal: ["1970-01-01T00:00:03Z"],
      mapVal: { "-2": "b", "-1": "a" },
      bytesVal: "AJk=",
      x: "foobar",
    },
  }).toBeValid("tests.harness.cases.KitchenSinkMessage");
});

it("valid (unset)", () => {
  expect({}).toBeValid("tests.harness.cases.KitchenSinkMessage");
});

it("field - invalid", () => {
  expect({ val: {} }).toBeInvalid("tests.harness.cases.KitchenSinkMessage", 7);
});

it("field - embedded - invalid", () => {
  expect({ val: { another: {} } }).toBeInvalid("tests.harness.cases.KitchenSinkMessage", 14);
});

it("field - invalid (transitive)", () => {
  expect({ val: { const: "abcd", nested: {}, boolConst: true } }).toBeInvalid(
    "tests.harness.cases.KitchenSinkMessage",
    14
  );
});
