import { it, expect } from "vitest";

it("none - valid", () => {
  expect({ val: ["1", "2", "3"] }).toBeValid("tests.harness.cases.RepeatedNone");
});

it("embed none - valid", () => {
  expect({ val: [{ val: "1" }] }).toBeValid("tests.harness.cases.RepeatedEmbedNone");
});

it("embed none - valid (nil)", () => {
  expect({}).toBeValid("tests.harness.cases.RepeatedEmbedNone");
});

it("embed none - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.RepeatedEmbedNone");
});

it("embed none - invalid", () => {
  expect({ val: [{ val: "-1" }] }).toBeInvalid("tests.harness.cases.RepeatedEmbedNone", 1);
});

it("cross-package embed none - valid", () => {
  expect({ val: [{ val: "1" }] }).toBeValid("tests.harness.cases.RepeatedEmbedCrossPackageNone");
});

it("cross-package embed none - valid (nil)", () => {
  expect({}).toBeValid("tests.harness.cases.RepeatedEmbedCrossPackageNone");
});

it("cross-package embed none - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.RepeatedEmbedCrossPackageNone");
});

it("cross-package embed none - invalid", () => {
  expect({ val: [{ val: "-1" }] }).toBeInvalid("tests.harness.cases.RepeatedEmbedCrossPackageNone", 1);
});

it("min - valid", () => {
  expect({ val: [{ val: "1" }, { val: "2" }, { val: "3" }] }).toBeValid("tests.harness.cases.RepeatedMin");
});

it("min - valid (equal)", () => {
  expect({ val: [{ val: "1" }, { val: "2" }] }).toBeValid("tests.harness.cases.RepeatedMin");
});

it("min - invalid", () => {
  expect({ val: [{ val: "1" }] }).toBeInvalid("tests.harness.cases.RepeatedMin", 1);
});

it("min - invalid (element)", () => {
  expect({ val: [{ val: "1" }, { val: "-1" }] }).toBeInvalid("tests.harness.cases.RepeatedMin", 1);
});

it("max - valid", () => {
  expect({ val: [1, 2] }).toBeValid("tests.harness.cases.RepeatedMax");
});

it("max - valid (equal)", () => {
  expect({ val: [1, 2, 3] }).toBeValid("tests.harness.cases.RepeatedMax");
});

it("max - invalid", () => {
  expect({ val: [1, 2, 3, 4] }).toBeInvalid("tests.harness.cases.RepeatedMax", 1);
});

it("min/max - valid", () => {
  expect({ val: [1, 2, 3] }).toBeValid("tests.harness.cases.RepeatedMinMax");
});

it("min/max - valid (min)", () => {
  expect({ val: [1, 2] }).toBeValid("tests.harness.cases.RepeatedMinMax");
});

it("min/max - valid (max)", () => {
  expect({ val: [1, 2, 3, 4] }).toBeValid("tests.harness.cases.RepeatedMinMax");
});

it("min/max - invalid (below)", () => {
  expect({}).toBeInvalid("tests.harness.cases.RepeatedMinMax", 1);
});

it("min/max - invalid (above)", () => {
  expect({ val: [1, 2, 3, 4, 5] }).toBeInvalid("tests.harness.cases.RepeatedMinMax", 1);
});

it("exact - valid", () => {
  expect({ val: [1, 2, 3] }).toBeValid("tests.harness.cases.RepeatedExact");
});

it("exact - invalid (below)", () => {
  expect({ val: [1, 2] }).toBeInvalid("tests.harness.cases.RepeatedExact", 1);
});

it("exact - invalid (above)", () => {
  expect({ val: [1, 2, 3, 4] }).toBeInvalid("tests.harness.cases.RepeatedExact", 1);
});

it("unique - valid", () => {
  expect({ val: ["foo", "bar", "baz"] }).toBeValid("tests.harness.cases.RepeatedUnique");
});

it("unique - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.RepeatedUnique");
});

it("unique - valid (case sensitivity)", () => {
  expect({ val: ["foo", "Foo"] }).toBeValid("tests.harness.cases.RepeatedUnique");
});

it("unique - invalid", () => {
  expect({ val: ["foo", "bar", "foo", "baz"] }).toBeInvalid("tests.harness.cases.RepeatedUnique", 1);
});

it("items - valid", () => {
  expect({ val: [1, 2, 3] }).toBeValid("tests.harness.cases.RepeatedItemRule");
});

it("items - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.RepeatedItemRule");
});

it("items - valid (pattern)", () => {
  expect({ val: ["Alpha", "Beta123"] }).toBeValid("tests.harness.cases.RepeatedItemPattern");
});

it("items - invalid", () => {
  expect({ val: [1, -2, 3] }).toBeInvalid("tests.harness.cases.RepeatedItemRule", 1);
});

it("items - invalid (pattern)", () => {
  expect({ val: ["Alpha", "!@#$%^&*()"] }).toBeInvalid("tests.harness.cases.RepeatedItemPattern", 1);
});

it("items - invalid (in)", () => {
  expect({ val: ["baz"] }).toBeInvalid("tests.harness.cases.RepeatedItemIn", 1);
});

it("items - valid (in)", () => {
  expect({ val: ["foo"] }).toBeValid("tests.harness.cases.RepeatedItemIn");
});

it("items - invalid (not_in)", () => {
  expect({ val: ["foo"] }).toBeInvalid("tests.harness.cases.RepeatedItemNotIn", 1);
});

it("items - valid (not_in)", () => {
  expect({ val: ["baz"] }).toBeValid("tests.harness.cases.RepeatedItemNotIn");
});

it("items - invalid (enum in)", () => {
  expect({ val: ["Y"] }).toBeInvalid("tests.harness.cases.RepeatedEnumIn", 1);
});

it("items - valid (enum in)", () => {
  expect({ val: ["X"] }).toBeValid("tests.harness.cases.RepeatedEnumIn");
});

it("items - invalid (enum not_in)", () => {
  expect({ val: ["X"] }).toBeInvalid("tests.harness.cases.RepeatedEnumNotIn", 1);
});

it("items - valid (enum not_in)", () => {
  expect({ val: ["Y"] }).toBeValid("tests.harness.cases.RepeatedEnumNotIn");
});

it("items - invalid (embedded enum in)", () => {
  expect({ val: ["B"] }).toBeInvalid("tests.harness.cases.RepeatedEmbeddedEnumIn", 1);
});

it("items - valid (embedded enum in)", () => {
  expect({ val: ["A"] }).toBeValid("tests.harness.cases.RepeatedEmbeddedEnumIn");
});

it("items - invalid (embedded enum not_in)", () => {
  expect({ val: ["A"] }).toBeInvalid("tests.harness.cases.RepeatedEmbeddedEnumNotIn", 1);
});

it("items - valid (embedded enum not_in)", () => {
  expect({ val: ["B"] }).toBeValid("tests.harness.cases.RepeatedEmbeddedEnumNotIn");
});

it("items - invalid (any in)", () => {
  expect({
    val: [{ value: "1970-01-01T00:00:00Z", "@type": "type.googleapis.com/google.protobuf.Timestamp" }],
  }).toBeInvalid("tests.harness.cases.RepeatedAnyIn", 1);
});

it("items - valid (any in)", () => {
  expect({ val: [{ value: "0s", "@type": "type.googleapis.com/google.protobuf.Duration" }] }).toBeValid(
    "tests.harness.cases.RepeatedAnyIn"
  );
});

it("items - invalid (any not_in)", () => {
  expect({
    val: [{ value: "1970-01-01T00:00:00Z", "@type": "type.googleapis.com/google.protobuf.Timestamp" }],
  }).toBeInvalid("tests.harness.cases.RepeatedAnyNotIn", 1);
});

it("items - valid (any not_in)", () => {
  expect({ val: [{ value: "0s", "@type": "type.googleapis.com/google.protobuf.Duration" }] }).toBeValid(
    "tests.harness.cases.RepeatedAnyNotIn"
  );
});

it("embed skip - valid", () => {
  expect({ val: [{ val: "1" }] }).toBeValid("tests.harness.cases.RepeatedEmbedSkip");
});

it("embed skip - valid (invalid element)", () => {
  expect({ val: [{ val: "-1" }] }).toBeValid("tests.harness.cases.RepeatedEmbedSkip");
});

it("min and items len - valid", () => {
  expect({ val: ["aaa", "bbb"] }).toBeValid("tests.harness.cases.RepeatedMinAndItemLen");
});

it("min and items len - invalid (min)", () => {
  expect({}).toBeInvalid("tests.harness.cases.RepeatedMinAndItemLen", 1);
});

it("min and items len - invalid (len)", () => {
  expect({ val: ["x"] }).toBeInvalid("tests.harness.cases.RepeatedMinAndItemLen", 1);
});

it("min and max items len - valid", () => {
  expect({ val: ["aaa", "bbb"] }).toBeValid("tests.harness.cases.RepeatedMinAndMaxItemLen");
});

it("min and max items len - invalid (min_len)", () => {
  expect({}).toBeInvalid("tests.harness.cases.RepeatedMinAndMaxItemLen", 1);
});

it("min and max items len - invalid (max_len)", () => {
  expect({ val: ["aaa", "bbb", "ccc", "ddd"] }).toBeInvalid("tests.harness.cases.RepeatedMinAndMaxItemLen", 1);
});

it("duration - gte - valid", () => {
  expect({ val: ["3s"] }).toBeValid("tests.harness.cases.RepeatedDuration");
});

it("duration - gte - valid (empty)", () => {
  expect({}).toBeValid("tests.harness.cases.RepeatedDuration");
});

it("duration - gte - valid (equal)", () => {
  expect({ val: ["0.001s"] }).toBeValid("tests.harness.cases.RepeatedDuration");
});

it("duration - gte - invalid", () => {
  expect({ val: ["-1s"] }).toBeInvalid("tests.harness.cases.RepeatedDuration", 1);
});

it("exact - valid (ignore_empty)", () => {
  expect({}).toBeValid("tests.harness.cases.RepeatedExactIgnore");
});
