import { describe, expect, it } from "vitest";
import { formatMonthlyPrice, planHasFeature } from "@/lib/plans";

describe("Lesson 01: type-safe plan foundation", () => {
  it("L01-T01: grants only features included in each plan", () => {
    expect(planHasFeature("FREE", "basic-workouts"), lessonMessage("L01-T01", "Freeの基本ワークアウトを許可できていません")).toBe(true);
    expect(planHasFeature("FREE", "favorites"), lessonMessage("L01-T01", "FreeにPremium機能を許可しています")).toBe(false);
    expect(planHasFeature("PREMIUM", "favorites"), lessonMessage("L01-T01", "Premiumのお気に入りを許可できていません")).toBe(true);
  });

  it("L01-T02: formats cents as an en-US USD price", () => {
    expect(formatMonthlyPrice(499), lessonMessage("L01-T02", "セントからドルへの変換または小数2桁表示を確認してください")).toBe("$4.99");
    expect(formatMonthlyPrice(0), lessonMessage("L01-T02", "無料料金も同じformatterで処理してください")).toBe("$0.00");
  });
});

function lessonMessage(todoId: string, failedRequirement: string): string {
  return [
    `関連TODO: ${todoId}`,
    `失敗した要件: ${failedRequirement}`,
    "確認するファイル: src/lib/plans.ts",
    "最初に見るヒント: docs/hints/lesson-01-hints.md の Hint 1",
    "想定される原因: 仮のreturn値が残っているか、変換条件が不足しています",
  ].join("\n");
}
