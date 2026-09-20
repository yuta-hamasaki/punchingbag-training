import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const source = readFileSync("src/components/three/heavy-bag.tsx", "utf8");

describe("Lesson 04 exercise contract", () => {
  for (const todoId of ["L04-T01", "L04-T02"]) {
    it(`keeps ${todoId} connected to its learning file`, () => {
      expect(source).toContain(`TODO(LEARNER:${todoId})`);
    });
  }
});
