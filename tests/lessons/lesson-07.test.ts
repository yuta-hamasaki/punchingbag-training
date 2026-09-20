import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("Lesson 07 exercise contract", () => {
  it("keeps L07-T01 connected to its learning file", () => {
    const source = readFileSync("src/repositories/session-repository.ts", "utf8");
    expect(source).toContain("TODO(LEARNER:L07-T01)");
  });
  it("keeps L07-T02 connected to its learning file", () => {
    const source = readFileSync("src/repositories/session-repository.ts", "utf8");
    expect(source).toContain("TODO(LEARNER:L07-T02)");
  });
});
