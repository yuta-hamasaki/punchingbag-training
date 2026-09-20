export type SubscriptionSnapshot = { status: "TRIALING" | "ACTIVE" | "PAST_DUE" | "CANCELED" | "UNPAID"; currentPeriodEnd: Date | null };

export function hasPremiumAccess(subscription: SubscriptionSnapshot | null, now: Date): boolean {
  // TODO(LEARNER:L10-T01)
  // サーバーでPremium権限を判定してください。
  // 1. ACTIVEまたはTRIALINGだけを許可する
  // 2. currentPeriodEndが存在する場合はnowより後か確認する
  // 3. subscriptionがnullならfalseにする
  void subscription; void now; /* YOUR CODE HERE */
  return false;
}
