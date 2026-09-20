# Lesson 01 Solutions

このファイルは参考資料です。本番コードからimportしません。まずテストと段階的なヒントを使い、明示的に模範解答を確認すると決めた後だけ参照してください。

## L01-T01 模範解答

### 完成コード

```ts
export function planHasFeature(plan: PlanId, feature: PlanFeature): boolean {
  const planDefinition = planCatalog[plan];
  return planDefinition.features.includes(feature);
}
```

### 1行ずつの解説

1行目は引数をUnion型に制限します。2行目は型安全なキーで定義を取得します。3行目は機能一覧に値が存在するかをbooleanで返します。

### なぜこの書き方を使うのか

表示コンポーネントから規則を分離した純粋関数になり、同じ入力に同じ結果を返すためテストが容易です。

### 別の実装方法

機能ごとに許可プランを持つ逆引き表も使えます。機能数や変更頻度に応じて選びます。

### よくある間違い

Premiumかどうかだけを返すと、Freeにも含まれる共通機能を表現できません。

### 実務での注意点

これは機能表の判定です。実際の認可ではDBとStripe Webhookから同期された契約状態をサーバーで確認します。

## L01-T02 模範解答

### 完成コード

```ts
export function formatMonthlyPrice(priceInCents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(priceInCents / 100);
}
```

### 1行ずつの解説

localeを選び、通貨表示とUSDを指定し、桁数を固定してからセントをドルへ変換した値をformatします。

### なぜこの書き方を使うのか

通貨記号や区切り文字を手作業せず、標準APIへ地域化を任せられます。

### 別の実装方法

formatterをモジュール定数として再利用すると、大量描画時の生成コストを減らせます。

### よくある間違い

100で割り忘れること、`toFixed`で通貨表現を手作りすることです。

### 実務での注意点

通貨によって小数桁が異なります。多通貨対応時は通貨ごとのminor unitを扱う設計が必要です。
