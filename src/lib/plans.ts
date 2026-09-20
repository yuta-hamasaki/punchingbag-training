export const planFeatures = [
  "basic-workouts",
  "seven-day-history",
  "custom-workouts",
  "favorites",
  "advanced-progress",
  "camera-analysis",
] as const;

export type PlanFeature = (typeof planFeatures)[number];
export type PlanId = "FREE" | "PREMIUM";

export const planCatalog: Record<
  PlanId,
  { label: string; monthlyPriceInCents: number; features: readonly PlanFeature[] }
> = {
  FREE: {
    label: "Free",
    monthlyPriceInCents: 0,
    features: ["basic-workouts", "seven-day-history"],
  },
  PREMIUM: {
    label: "Premium",
    monthlyPriceInCents: 499,
    features: [
      "basic-workouts",
      "seven-day-history",
      "custom-workouts",
      "favorites",
      "advanced-progress",
      "camera-analysis",
    ],
  },
};

// TODO(LEARNER:L01-T01)
// プランの機能判定を型安全に実装してください。
// 1. planCatalogから指定プランを取り出す
// 2. featuresに指定機能が含まれるかを返す
// 3. UIの表示だけでなく、将来のサーバー認可にも再利用できる純粋関数にする
export function planHasFeature(_plan: PlanId, _feature: PlanFeature): boolean {
  return false; /* YOUR CODE HERE */
}

// TODO(LEARNER:L01-T02)
// セント単位の料金を表示用文字列へ変換してください。
// 1. Intl.NumberFormatを使う
// 2. 通貨はUSD、localeはen-USにする
// 3. 小数点以下を常に2桁表示する
export function formatMonthlyPrice(_priceInCents: number): string {
  return "$0.00"; /* YOUR CODE HERE */
}
