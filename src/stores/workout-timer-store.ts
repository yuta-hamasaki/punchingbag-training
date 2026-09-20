import { create } from "zustand";
import type { WorkoutTimerState } from "@/features/workout-timer/types";

type TimerStore = { state: WorkoutTimerState; deadlineMs: number | null; pausedRemainingMs: number | null; pause(nowMs: number): void; resume(nowMs: number): void };

export const useWorkoutTimerStore = create<TimerStore>((set, get) => ({
  state: "idle", deadlineMs: null, pausedRemainingMs: null,
  // TODO(LEARNER:L05-T01)
  // pause時に残り時間を保存してください。
  // 1. active/resting以外なら何もしない
  // 2. deadlineとnowの差を0未満にしない
  // 3. stateをpausedへ更新する
  pause: (_nowMs) => { void set; void get; /* YOUR CODE HERE */ },
  // TODO(LEARNER:L05-T02)
  // resume時に新しいdeadlineを復元してください。
  // 1. pausedで残り時間がある場合だけ処理する
  // 2. interval回数ではなくnowMs + 残り時間を使う
  // 3. stateをactiveへ戻しpausedRemainingMsを消す
  resume: (_nowMs) => { void set; void get; /* YOUR CODE HERE */ },
}));
