import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const source = readFileSync("src/features/navigation/mobile-menu.tsx", "utf8");

describe("Lesson 02 exercise contract", () => {
  for (const todoId of ["L02-T01", "L02-T02"]) {
    it(`keeps ${todoId} connected to its learning file`, () => {
      expect(source).toContain(`TODO(LEARNER:${todoId})`);
    });
  }
});
