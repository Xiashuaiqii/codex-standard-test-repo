import assert from "node:assert/strict";
import test from "node:test";

import { greet } from "../src/index.js";

test("greets the world by default", () => {
  assert.equal(greet(), "Hello, World!");
});

test("greets a supplied name", () => {
  assert.equal(greet("GitHub"), "Hello, GitHub!");
});

test("falls back to World for blank input", () => {
  assert.equal(greet("   "), "Hello, World!");
});
