import Stripe from "stripe";

export type WebhookDependencies = { stripe: Stripe; secret: string; upsertSubscription(event: Stripe.Event): Promise<void> };

export async function handleStripeWebhook(rawBody: string, signature: string, dependencies: WebhookDependencies) {
  // TODO(LEARNER:L10-T02)
  // Stripe Webhookを署名検証して分岐してください。
  // 1. constructEventでrawBody・signature・secretを検証する
  // 2. 指定されたsubscription関連eventだけを処理する
  // 3. checkout成功画面ではなくWebhookからDB同期を呼ぶ
  void rawBody; void signature; void dependencies; /* YOUR CODE HERE */
  return { received: false };
}
