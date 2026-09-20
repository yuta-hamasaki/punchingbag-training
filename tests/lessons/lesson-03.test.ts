import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("Lesson 03 exercise contract", () => {
  it("keeps L03-T01 connected to its learning file", () => {
    const source = readFileSync("src/components/three/heavy-bag-scene.tsx", "utf8");
    expect(source).toContain("TODO(LEARNER:L03-T01)");
  });
  it("keeps L03-T02 connected to its learning file", () => {
    const source = readFileSync("src/components/three/heavy-bag.tsx", "utf8");
    expect(source).toContain("TODO(LEARNER:L03-T02)");
  });
});
