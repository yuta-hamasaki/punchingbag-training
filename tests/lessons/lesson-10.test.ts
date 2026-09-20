import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("Lesson 10 exercise contract", () => {
  it("keeps L10-T01 connected to its learning file", () => {
    const source = readFileSync("src/lib/subscription/access.ts", "utf8");
    expect(source).toContain("TODO(LEARNER:L10-T01)");
  });
  it("keeps L10-T02 connected to its learning file", () => {
    const source = readFileSync("src/lib/stripe/webhook.ts", "utf8");
    expect(source).toContain("TODO(LEARNER:L10-T02)");
  });
});
