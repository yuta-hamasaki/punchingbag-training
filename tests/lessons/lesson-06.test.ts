import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("Lesson 06 exercise contract", () => {
  it("keeps L06-T01 connected to its learning file", () => {
    const source = readFileSync("src/app/api/sessions/route.ts", "utf8");
    expect(source).toContain("TODO(LEARNER:L06-T01)");
  });
  it("keeps L06-T02 connected to its learning file", () => {
    const source = readFileSync("src/app/api/sessions/route.ts", "utf8");
    expect(source).toContain("TODO(LEARNER:L06-T02)");
  });
});
