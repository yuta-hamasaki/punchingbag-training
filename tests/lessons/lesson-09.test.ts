import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("Lesson 09 exercise contract", () => {
  it("keeps L09-T01 connected to its learning file", () => {
    const source = readFileSync("src/features/sessions/session-summary.ts", "utf8");
    expect(source).toContain("TODO(LEARNER:L09-T01)");
  });
  it("keeps L09-T02 connected to its learning file", () => {
    const source = readFileSync("src/features/sessions/session-summary.ts", "utf8");
    expect(source).toContain("TODO(LEARNER:L09-T02)");
  });
});
