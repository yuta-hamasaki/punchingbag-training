import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("Lesson 08 exercise contract", () => {
  it("keeps L08-T01 connected to its learning file", () => {
    const source = readFileSync("src/lib/auth/authorization.ts", "utf8");
    expect(source).toContain("TODO(LEARNER:L08-T01)");
  });
  it("keeps L08-T02 connected to its learning file", () => {
    const source = readFileSync("src/lib/auth/authorization.ts", "utf8");
    expect(source).toContain("TODO(LEARNER:L08-T02)");
  });
});
