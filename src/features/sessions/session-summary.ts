export type SessionSummaryInput = { completedRounds: number; totalRounds: number; startedAt: Date; endedAt: Date };
export type SessionSummary = { durationSeconds: number; completionPercentage: number };

export function summarizeSession(input: SessionSummaryInput): SessionSummary {
  // TODO(LEARNER:L09-T01)
  // セッション結果を安全に集計してください。
  // 1. 終了-開始を秒へ変換して0未満を防ぐ
  // 2. totalRoundsが0なら完了率を0にする
  // 3. 完了率を0〜100へ制限する
  void input; /* YOUR CODE HERE */
  return { durationSeconds: 0, completionPercentage: 0 };
}

export function canShowCameraMetrics(mode: "STANDARD" | "CAMERA", detectedPunches: number | null): boolean {
  // TODO(LEARNER:L09-T02)
  // 推測値を表示しない条件を実装してください。
  // 1. CAMERAモードだけを対象にする
  // 2. detectedPunchesがnullなら表示しない
  // 3. 0は有効な検出結果として扱う
  void mode; void detectedPunches; /* YOUR CODE HERE */
  return false;
}
