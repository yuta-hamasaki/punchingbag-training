import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("Lesson 12 exercise contract", () => {
  it("keeps L12-T01 connected to its learning file", () => {
    const source = readFileSync("src/features/training-input/camera-training-input.stub.ts", "utf8");
    expect(source).toContain("TODO(LEARNER:L12-T01)");
  });
  it("keeps L12-T02 connected to its learning file", () => {
    const source = readFileSync("src/features/training-input/camera-training-input.stub.ts", "utf8");
    expect(source).toContain("TODO(LEARNER:L12-T02)");
  });
});
