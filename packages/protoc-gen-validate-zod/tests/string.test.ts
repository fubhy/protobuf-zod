import { it, expect } from "vitest";

it("none - valid", () => {
  expect({ val: "quux" }).toBeValid("tests.harness.cases.StringNone");
});

it("const - valid", () => {
  expect({ val: "foo" }).toBeValid("tests.harness.cases.StringConst");
});

it("const - invalid", () => {
  expect({ val: "bar" }).toBeInvalid("tests.harness.cases.StringConst", 1);
});

it("in - valid", () => {
  expect({ val: "bar" }).toBeValid("tests.harness.cases.StringIn");
});

it("in - invalid", () => {
  expect({ val: "quux" }).toBeInvalid("tests.harness.cases.StringIn", 1);
});

it("not in - valid", () => {
  expect({ val: "quux" }).toBeValid("tests.harness.cases.StringNotIn");
});

it("not in - invalid", () => {
  expect({ val: "fizz" }).toBeInvalid("tests.harness.cases.StringNotIn", 1);
});

it("len - valid", () => {
  expect({ val: "baz" }).toBeValid("tests.harness.cases.StringLen");
});

it("len - valid (multibyte)", () => {
  expect({ val: "你好吖" }).toBeValid("tests.harness.cases.StringLen");
});

it("len - invalid (lt)", () => {
  expect({ val: "go" }).toBeInvalid("tests.harness.cases.StringLen", 1);
});

it("len - invalid (gt)", () => {
  expect({ val: "fizz" }).toBeInvalid("tests.harness.cases.StringLen", 1);
});

it("len - invalid (multibyte)", () => {
  expect({ val: "你好" }).toBeInvalid("tests.harness.cases.StringLen", 1);
});

it("min len - valid", () => {
  expect({ val: "protoc" }).toBeValid("tests.harness.cases.StringMinLen");
});

it("min len - valid (min)", () => {
  expect({ val: "baz" }).toBeValid("tests.harness.cases.StringMinLen");
});

it("min len - invalid", () => {
  expect({ val: "go" }).toBeInvalid("tests.harness.cases.StringMinLen", 1);
});

it("min len - invalid (multibyte)", () => {
  expect({ val: "你好" }).toBeInvalid("tests.harness.cases.StringMinLen", 1);
});

it("max len - valid", () => {
  expect({ val: "foo" }).toBeValid("tests.harness.cases.StringMaxLen");
});

it("max len - valid (max)", () => {
  expect({ val: "proto" }).toBeValid("tests.harness.cases.StringMaxLen");
});

it("max len - valid (multibyte)", () => {
  expect({ val: "你好你好" }).toBeValid("tests.harness.cases.StringMaxLen");
});

it("max len - invalid", () => {
  expect({ val: "1234567890" }).toBeInvalid("tests.harness.cases.StringMaxLen", 1);
});

it("min/max len - valid", () => {
  expect({ val: "quux" }).toBeValid("tests.harness.cases.StringMinMaxLen");
});

it("min/max len - valid (min)", () => {
  expect({ val: "foo" }).toBeValid("tests.harness.cases.StringMinMaxLen");
});

it("min/max len - valid (max)", () => {
  expect({ val: "proto" }).toBeValid("tests.harness.cases.StringMinMaxLen");
});

it("min/max len - valid (multibyte)", () => {
  expect({ val: "你好你好" }).toBeValid("tests.harness.cases.StringMinMaxLen");
});

it("min/max len - invalid (below)", () => {
  expect({ val: "go" }).toBeInvalid("tests.harness.cases.StringMinMaxLen", 1);
});

it("min/max len - invalid (above)", () => {
  expect({ val: "validate" }).toBeInvalid("tests.harness.cases.StringMinMaxLen", 1);
});

it("equal min/max len - valid", () => {
  expect({ val: "proto" }).toBeValid("tests.harness.cases.StringEqualMinMaxLen");
});

it("equal min/max len - invalid", () => {
  expect({ val: "validate" }).toBeInvalid("tests.harness.cases.StringEqualMinMaxLen", 1);
});

it("len bytes - valid", () => {
  expect({ val: "pace" }).toBeValid("tests.harness.cases.StringLenBytes");
});

it("len bytes - invalid (lt)", () => {
  expect({ val: "val" }).toBeInvalid("tests.harness.cases.StringLenBytes", 1);
});

it("len bytes - invalid (gt)", () => {
  expect({ val: "world" }).toBeInvalid("tests.harness.cases.StringLenBytes", 1);
});

it("len bytes - invalid (multibyte)", () => {
  expect({ val: "世界和平" }).toBeInvalid("tests.harness.cases.StringLenBytes", 1);
});

it("min bytes - valid", () => {
  expect({ val: "proto" }).toBeValid("tests.harness.cases.StringMinBytes");
});

it("min bytes - valid (min)", () => {
  expect({ val: "quux" }).toBeValid("tests.harness.cases.StringMinBytes");
});

it("min bytes - valid (multibyte)", () => {
  expect({ val: "你好" }).toBeValid("tests.harness.cases.StringMinBytes");
});

it("min bytes - invalid", () => {
  expect({}).toBeInvalid("tests.harness.cases.StringMinBytes", 1);
});

it("max bytes - valid", () => {
  expect({ val: "foo" }).toBeValid("tests.harness.cases.StringMaxBytes");
});

it("max bytes - valid (max)", () => {
  expect({ val: "12345678" }).toBeValid("tests.harness.cases.StringMaxBytes");
});

it("max bytes - invalid", () => {
  expect({ val: "123456789" }).toBeInvalid("tests.harness.cases.StringMaxBytes", 1);
});

it("max bytes - invalid (multibyte)", () => {
  expect({ val: "你好你好你好" }).toBeInvalid("tests.harness.cases.StringMaxBytes", 1);
});

it("min/max bytes - valid", () => {
  expect({ val: "protoc" }).toBeValid("tests.harness.cases.StringMinMaxBytes");
});

it("min/max bytes - valid (min)", () => {
  expect({ val: "quux" }).toBeValid("tests.harness.cases.StringMinMaxBytes");
});

it("min/max bytes - valid (max)", () => {
  expect({ val: "fizzbuzz" }).toBeValid("tests.harness.cases.StringMinMaxBytes");
});

it("min/max bytes - valid (multibyte)", () => {
  expect({ val: "你好" }).toBeValid("tests.harness.cases.StringMinMaxBytes");
});

it("min/max bytes - invalid (below)", () => {
  expect({ val: "foo" }).toBeInvalid("tests.harness.cases.StringMinMaxBytes", 1);
});

it("min/max bytes - invalid (above)", () => {
  expect({ val: "你好你好你" }).toBeInvalid("tests.harness.cases.StringMinMaxBytes", 1);
});

it("equal min/max bytes - valid", () => {
  expect({ val: "protoc" }).toBeValid("tests.harness.cases.StringEqualMinMaxBytes");
});

it("equal min/max bytes - invalid", () => {
  expect({ val: "foo" }).toBeInvalid("tests.harness.cases.StringEqualMinMaxBytes", 1);
});

it("pattern - valid", () => {
  expect({ val: "Foo123" }).toBeValid("tests.harness.cases.StringPattern");
});

it("pattern - invalid", () => {
  expect({ val: "!@#$%^&*()" }).toBeInvalid("tests.harness.cases.StringPattern", 1);
});

it("pattern - invalid (empty)", () => {
  expect({}).toBeInvalid("tests.harness.cases.StringPattern", 1);
});

it("pattern - invalid (null)", () => {
  expect({ val: "a\u0000" }).toBeInvalid("tests.harness.cases.StringPattern", 1);
});

it("pattern (escapes) - valid", () => {
  expect({ val: "* \\ x" }).toBeValid("tests.harness.cases.StringPatternEscapes");
});

it("pattern (escapes) - invalid", () => {
  expect({ val: "invalid" }).toBeInvalid("tests.harness.cases.StringPatternEscapes", 1);
});

it("pattern (escapes) - invalid (empty)", () => {
  expect({}).toBeInvalid("tests.harness.cases.StringPatternEscapes", 1);
});

it("prefix - valid", () => {
  expect({ val: "foobar" }).toBeValid("tests.harness.cases.StringPrefix");
});

it("prefix - valid (only)", () => {
  expect({ val: "foo" }).toBeValid("tests.harness.cases.StringPrefix");
});

it("prefix - invalid", () => {
  expect({ val: "bar" }).toBeInvalid("tests.harness.cases.StringPrefix", 1);
});

it("prefix - invalid (case-sensitive)", () => {
  expect({ val: "Foobar" }).toBeInvalid("tests.harness.cases.StringPrefix", 1);
});

it("contains - valid", () => {
  expect({ val: "candy bars" }).toBeValid("tests.harness.cases.StringContains");
});

it("contains - valid (only)", () => {
  expect({ val: "bar" }).toBeValid("tests.harness.cases.StringContains");
});

it("contains - invalid", () => {
  expect({ val: "candy bazs" }).toBeInvalid("tests.harness.cases.StringContains", 1);
});

it("contains - invalid (case-sensitive)", () => {
  expect({ val: "Candy Bars" }).toBeInvalid("tests.harness.cases.StringContains", 1);
});

it("not contains - valid", () => {
  expect({ val: "candy bazs" }).toBeValid("tests.harness.cases.StringNotContains");
});

it("not contains - valid (case-sensitive)", () => {
  expect({ val: "Candy Bars" }).toBeValid("tests.harness.cases.StringNotContains");
});

it("not contains - invalid", () => {
  expect({ val: "candy bars" }).toBeInvalid("tests.harness.cases.StringNotContains", 1);
});

it("not contains - invalid (equal)", () => {
  expect({ val: "bar" }).toBeInvalid("tests.harness.cases.StringNotContains", 1);
});

it("suffix - valid", () => {
  expect({ val: "foobaz" }).toBeValid("tests.harness.cases.StringSuffix");
});

it("suffix - valid (only)", () => {
  expect({ val: "baz" }).toBeValid("tests.harness.cases.StringSuffix");
});

it("suffix - invalid", () => {
  expect({ val: "foobar" }).toBeInvalid("tests.harness.cases.StringSuffix", 1);
});

it("suffix - invalid (case-sensitive)", () => {
  expect({ val: "FooBaz" }).toBeInvalid("tests.harness.cases.StringSuffix", 1);
});

it("email - valid", () => {
  expect({ val: "foo@bar.com" }).toBeValid("tests.harness.cases.StringEmail");
});

it("email - valid (name)", () => {
  expect({ val: "John Smith <foo@bar.com>" }).toBeValid("tests.harness.cases.StringEmail");
});

it("email - invalid", () => {
  expect({ val: "foobar" }).toBeInvalid("tests.harness.cases.StringEmail", 1);
});

it("email - invalid (local segment too long)", () => {
  expect({ val: "x0123456789012345678901234567890123456789012345678901234567890123456789@example.com" }).toBeInvalid(
    "tests.harness.cases.StringEmail",
    1
  );
});

it("email - invalid (hostname too long)", () => {
  expect({ val: "foo@x0123456789012345678901234567890123456789012345678901234567890123456789.com" }).toBeInvalid(
    "tests.harness.cases.StringEmail",
    1
  );
});

it("email - invalid (bad hostname)", () => {
  expect({ val: "foo@-bar.com" }).toBeInvalid("tests.harness.cases.StringEmail", 1);
});

it("email - empty", () => {
  expect({}).toBeInvalid("tests.harness.cases.StringEmail", 1);
});

it("address - valid hostname", () => {
  expect({ val: "example.com" }).toBeValid("tests.harness.cases.StringAddress");
});

it("address - valid hostname (uppercase)", () => {
  expect({ val: "ASD.example.com" }).toBeValid("tests.harness.cases.StringAddress");
});

it("address - valid hostname (hyphens)", () => {
  expect({ val: "foo-bar.com" }).toBeValid("tests.harness.cases.StringAddress");
});

it("address - valid hostname (trailing dot)", () => {
  expect({ val: "example.com." }).toBeValid("tests.harness.cases.StringAddress");
});

it("address - invalid hostname", () => {
  expect({ val: "!@#$%^&" }).toBeInvalid("tests.harness.cases.StringAddress", 1);
});

it("address - invalid hostname (underscore)", () => {
  expect({ val: "foo_bar.com" }).toBeInvalid("tests.harness.cases.StringAddress", 1);
});

it("address - invalid hostname (too long)", () => {
  expect({ val: "x0123456789012345678901234567890123456789012345678901234567890123456789.com" }).toBeInvalid(
    "tests.harness.cases.StringAddress",
    1
  );
});

it("address - invalid hostname (trailing hyphens)", () => {
  expect({ val: "foo-bar-.com" }).toBeInvalid("tests.harness.cases.StringAddress", 1);
});

it("address - invalid hostname (leading hyphens)", () => {
  expect({ val: "foo-bar.-com" }).toBeInvalid("tests.harness.cases.StringAddress", 1);
});

it("address - invalid hostname (empty)", () => {
  expect({ val: "asd..asd.com" }).toBeInvalid("tests.harness.cases.StringAddress", 1);
});

it("address - invalid hostname (IDNs)", () => {
  expect({ val: "你好.com" }).toBeInvalid("tests.harness.cases.StringAddress", 1);
});

it("address - valid ip (v4)", () => {
  expect({ val: "192.168.0.1" }).toBeValid("tests.harness.cases.StringAddress");
});

it("address - valid ip (v6)", () => {
  expect({ val: "3e::99" }).toBeValid("tests.harness.cases.StringAddress");
});

it("address - invalid ip", () => {
  expect({ val: "ff::fff::0b" }).toBeInvalid("tests.harness.cases.StringAddress", 1);
});

it("hostname - valid", () => {
  expect({ val: "example.com" }).toBeValid("tests.harness.cases.StringHostname");
});

it("hostname - valid (uppercase)", () => {
  expect({ val: "ASD.example.com" }).toBeValid("tests.harness.cases.StringHostname");
});

it("hostname - valid (hyphens)", () => {
  expect({ val: "foo-bar.com" }).toBeValid("tests.harness.cases.StringHostname");
});

it("hostname - valid (trailing dot)", () => {
  expect({ val: "example.com." }).toBeValid("tests.harness.cases.StringHostname");
});

it("hostname - invalid", () => {
  expect({ val: "!@#$%^&" }).toBeInvalid("tests.harness.cases.StringHostname", 1);
});

it("hostname - invalid (underscore)", () => {
  expect({ val: "foo_bar.com" }).toBeInvalid("tests.harness.cases.StringHostname", 1);
});

it("hostname - invalid (too long)", () => {
  expect({ val: "x0123456789012345678901234567890123456789012345678901234567890123456789.com" }).toBeInvalid(
    "tests.harness.cases.StringHostname",
    1
  );
});

it("hostname - invalid (trailing hyphens)", () => {
  expect({ val: "foo-bar-.com" }).toBeInvalid("tests.harness.cases.StringHostname", 1);
});

it("hostname - invalid (leading hyphens)", () => {
  expect({ val: "foo-bar.-com" }).toBeInvalid("tests.harness.cases.StringHostname", 1);
});

it("hostname - invalid (empty)", () => {
  expect({ val: "asd..asd.com" }).toBeInvalid("tests.harness.cases.StringHostname", 1);
});

it("hostname - invalid (IDNs)", () => {
  expect({ val: "你好.com" }).toBeInvalid("tests.harness.cases.StringHostname", 1);
});

it("IP - valid (v4)", () => {
  expect({ val: "192.168.0.1" }).toBeValid("tests.harness.cases.StringIP");
});

it("IP - valid (v6)", () => {
  expect({ val: "3e::99" }).toBeValid("tests.harness.cases.StringIP");
});

it("IP - invalid", () => {
  expect({ val: "foobar" }).toBeInvalid("tests.harness.cases.StringIP", 1);
});

it("IPv4 - valid", () => {
  expect({ val: "192.168.0.1" }).toBeValid("tests.harness.cases.StringIPv4");
});

it("IPv4 - invalid", () => {
  expect({ val: "foobar" }).toBeInvalid("tests.harness.cases.StringIPv4", 1);
});

it("IPv4 - invalid (erroneous)", () => {
  expect({ val: "256.0.0.0" }).toBeInvalid("tests.harness.cases.StringIPv4", 1);
});

it("IPv4 - invalid (v6)", () => {
  expect({ val: "3e::99" }).toBeInvalid("tests.harness.cases.StringIPv4", 1);
});

it("IPv6 - valid", () => {
  expect({ val: "2001:0db8:85a3:0000:0000:8a2e:0370:7334" }).toBeValid("tests.harness.cases.StringIPv6");
});

it("IPv6 - valid (collapsed)", () => {
  expect({ val: "2001:db8:85a3::8a2e:370:7334" }).toBeValid("tests.harness.cases.StringIPv6");
});

it("IPv6 - invalid", () => {
  expect({ val: "foobar" }).toBeInvalid("tests.harness.cases.StringIPv6", 1);
});

it("IPv6 - invalid (v4)", () => {
  expect({ val: "192.168.0.1" }).toBeInvalid("tests.harness.cases.StringIPv6", 1);
});

it("IPv6 - invalid (erroneous)", () => {
  expect({ val: "ff::fff::0b" }).toBeInvalid("tests.harness.cases.StringIPv6", 1);
});

it("URI - valid", () => {
  expect({ val: "http://example.com/foo/bar?baz=quux" }).toBeValid("tests.harness.cases.StringURI");
});

it("URI - invalid", () => {
  expect({ val: "!@#$%^&*%$#" }).toBeInvalid("tests.harness.cases.StringURI", 1);
});

it("URI - invalid (relative)", () => {
  expect({ val: "/foo/bar?baz=quux" }).toBeInvalid("tests.harness.cases.StringURI", 1);
});

it("URI - valid", () => {
  expect({ val: "http://example.com/foo/bar?baz=quux" }).toBeValid("tests.harness.cases.StringURIRef");
});

it("URI - valid (relative)", () => {
  expect({ val: "/foo/bar?baz=quux" }).toBeValid("tests.harness.cases.StringURIRef");
});

it("URI - invalid", () => {
  expect({ val: "!@#$%^&*%$#" }).toBeInvalid("tests.harness.cases.StringURIRef", 1);
});

it("UUID - valid (nil)", () => {
  expect({ val: "00000000-0000-0000-0000-000000000000" }).toBeValid("tests.harness.cases.StringUUID");
});

it("UUID - valid (v1)", () => {
  expect({ val: "b45c0c80-8880-11e9-a5b1-000000000000" }).toBeValid("tests.harness.cases.StringUUID");
});

it("UUID - valid (v1 - case-insensitive)", () => {
  expect({ val: "B45C0C80-8880-11E9-A5B1-000000000000" }).toBeValid("tests.harness.cases.StringUUID");
});

it("UUID - valid (v2)", () => {
  expect({ val: "b45c0c80-8880-21e9-a5b1-000000000000" }).toBeValid("tests.harness.cases.StringUUID");
});

it("UUID - valid (v2 - case-insensitive)", () => {
  expect({ val: "B45C0C80-8880-21E9-A5B1-000000000000" }).toBeValid("tests.harness.cases.StringUUID");
});

it("UUID - valid (v3)", () => {
  expect({ val: "a3bb189e-8bf9-3888-9912-ace4e6543002" }).toBeValid("tests.harness.cases.StringUUID");
});

it("UUID - valid (v3 - case-insensitive)", () => {
  expect({ val: "A3BB189E-8BF9-3888-9912-ACE4E6543002" }).toBeValid("tests.harness.cases.StringUUID");
});

it("UUID - valid (v4)", () => {
  expect({ val: "8b208305-00e8-4460-a440-5e0dcd83bb0a" }).toBeValid("tests.harness.cases.StringUUID");
});

it("UUID - valid (v4 - case-insensitive)", () => {
  expect({ val: "8B208305-00E8-4460-A440-5E0DCD83BB0A" }).toBeValid("tests.harness.cases.StringUUID");
});

it("UUID - valid (v5)", () => {
  expect({ val: "a6edc906-2f9f-5fb2-a373-efac406f0ef2" }).toBeValid("tests.harness.cases.StringUUID");
});

it("UUID - valid (v5 - case-insensitive)", () => {
  expect({ val: "A6EDC906-2F9F-5FB2-A373-EFAC406F0EF2" }).toBeValid("tests.harness.cases.StringUUID");
});

it("UUID - invalid", () => {
  expect({ val: "foobar" }).toBeInvalid("tests.harness.cases.StringUUID", 1);
});

it("UUID - invalid (bad UUID)", () => {
  expect({ val: "ffffffff-ffff-ffff-ffff-fffffffffffff" }).toBeInvalid("tests.harness.cases.StringUUID", 1);
});

it("UUID - valid (ignore_empty)", () => {
  expect({}).toBeValid("tests.harness.cases.StringUUIDIgnore");
});

it("http header name - valid", () => {
  expect({ val: "clustername" }).toBeValid("tests.harness.cases.StringHttpHeaderName");
});

it("http header name - valid", () => {
  expect({ val: ":path" }).toBeValid("tests.harness.cases.StringHttpHeaderName");
});

it("http header name - valid (nums)", () => {
  expect({ val: "cluster-123" }).toBeValid("tests.harness.cases.StringHttpHeaderName");
});

it("http header name - valid (special token)", () => {
  expect({ val: "!+#&.%" }).toBeValid("tests.harness.cases.StringHttpHeaderName");
});

it("http header name - valid (period)", () => {
  expect({ val: "CLUSTER.NAME" }).toBeValid("tests.harness.cases.StringHttpHeaderName");
});

it("http header name - invalid", () => {
  expect({ val: ":" }).toBeInvalid("tests.harness.cases.StringHttpHeaderName", 1);
});

it("http header name - invalid", () => {
  expect({ val: ":path:" }).toBeInvalid("tests.harness.cases.StringHttpHeaderName", 1);
});

it("http header name - invalid (space)", () => {
  expect({ val: "cluster name" }).toBeInvalid("tests.harness.cases.StringHttpHeaderName", 1);
});

it("http header name - invalid (return)", () => {
  expect({ val: "example\r" }).toBeInvalid("tests.harness.cases.StringHttpHeaderName", 1);
});

it("http header name - invalid (tab)", () => {
  expect({ val: "example\t" }).toBeInvalid("tests.harness.cases.StringHttpHeaderName", 1);
});

it("http header name - invalid (slash)", () => {
  expect({ val: "/test/long/url" }).toBeInvalid("tests.harness.cases.StringHttpHeaderName", 1);
});

it("http header value - valid", () => {
  expect({ val: "cluster.name.123" }).toBeValid("tests.harness.cases.StringHttpHeaderValue");
});

it("http header value - valid (uppercase)", () => {
  expect({ val: "/TEST/LONG/URL" }).toBeValid("tests.harness.cases.StringHttpHeaderValue");
});

it("http header value - valid (spaces)", () => {
  expect({ val: "cluster name" }).toBeValid("tests.harness.cases.StringHttpHeaderValue");
});

it("http header value - valid (tab)", () => {
  expect({ val: "example\t" }).toBeValid("tests.harness.cases.StringHttpHeaderValue");
});

it("http header value - valid (special token)", () => {
  expect({ val: "!#%&./+" }).toBeValid("tests.harness.cases.StringHttpHeaderValue");
});

it("http header value - invalid (NUL)", () => {
  expect({ val: "foo\u0000bar" }).toBeInvalid("tests.harness.cases.StringHttpHeaderValue", 1);
});

it("http header value - invalid (DEL)", () => {
  expect({ val: "" }).toBeInvalid("tests.harness.cases.StringHttpHeaderValue", 1);
});

it("http header value - invalid", () => {
  expect({ val: "example\r" }).toBeInvalid("tests.harness.cases.StringHttpHeaderValue", 1);
});

it("non-strict valid header - valid", () => {
  expect({ val: "cluster.name.123" }).toBeValid("tests.harness.cases.StringValidHeader");
});

it("non-strict valid header - valid (uppercase)", () => {
  expect({ val: "/TEST/LONG/URL" }).toBeValid("tests.harness.cases.StringValidHeader");
});

it("non-strict valid header - valid (spaces)", () => {
  expect({ val: "cluster name" }).toBeValid("tests.harness.cases.StringValidHeader");
});

it("non-strict valid header - valid (tab)", () => {
  expect({ val: "example\t" }).toBeValid("tests.harness.cases.StringValidHeader");
});

it("non-strict valid header - valid (DEL)", () => {
  expect({ val: "" }).toBeValid("tests.harness.cases.StringValidHeader");
});

it("non-strict valid header - invalid (NUL)", () => {
  expect({ val: "foo\u0000bar" }).toBeInvalid("tests.harness.cases.StringValidHeader", 1);
});

it("non-strict valid header - invalid (CR)", () => {
  expect({ val: "example\r" }).toBeInvalid("tests.harness.cases.StringValidHeader", 1);
});

it("non-strict valid header - invalid (NL)", () => {
  expect({ val: "exa\nmple" }).toBeInvalid("tests.harness.cases.StringValidHeader", 1);
});
