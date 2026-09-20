import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("Lesson 05 exercise contract", () => {
  it("keeps L05-T01 connected to its learning file", () => {
    const source = readFileSync("src/stores/workout-timer-store.ts", "utf8");
    expect(source).toContain("TODO(LEARNER:L05-T01)");
  });
  it("keeps L05-T02 connected to its learning file", () => {
    const source = readFileSync("src/stores/workout-timer-store.ts", "utf8");
    expect(source).toContain("TODO(LEARNER:L05-T02)");
  });
});
