import { describe, expect, it } from "vitest";
import { remainingSeconds } from "@/features/workout-timer/timer-math";

describe("Lesson 11: learner-written edge cases", () => {
  // TODO(LEARNER:L11-T01)
  // remainingSecondsの境界値テストを追加してください。
  // 1. 未来のdeadlineを秒へ切り上げるケース
  // 2. deadlineを過ぎても負数にならないケース
  // 3. 実時間を待たず固定timestampを使う
  it.todo("tests deadline boundaries without waiting");

  // TODO(LEARNER:L11-T02)
  // TimerTrainingInputのunsubscribeをテストしてください。
  // 1. callbackをvi.fnでmockする
  // 2. emit前後の呼び出し回数を検証する
  // 3. unsubscribe後は通知されないことを確認する
  it.todo("stops notifications after unsubscribe");

  it("keeps the imported helper visible to the exercise", () => { expect(typeof remainingSeconds).toBe("function"); });
});
