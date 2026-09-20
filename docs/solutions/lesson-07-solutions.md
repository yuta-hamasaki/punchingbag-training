# Lesson 07 Solutions

本番コードからimportしない参考資料です。段階的なヒントを試し、模範解答を見ると決めた後だけ参照してください。

## L07-T01 模範解答

### 完成コード

```ts
return prisma.workoutSession.findFirst({
  where: { id: sessionId, userId },
  include: { rounds: { orderBy: { roundNumber: "asc" } } },
});
```

### 1行ずつの解説

入力を型どおりに受け取り、対象外または危険な値を先に除外し、必要な値を局所変数へ変換してから結果または状態を返しています。各行のAPI名と条件は対象レッスンの「重要な概念」で確認します。

### なぜこの書き方を使うのか

状態や外部入力を直接信用せず、境界を明示すると、型安全性とテスト容易性を両立できるためです。

### 別の実装方法

Reducer、専用service、schema transformなどへ分離する方法があります。規模と再利用箇所が増えた時点で比較します。

### よくある間違い

`any`で型を回避する、境界値を丸めない、認証をUIだけに置く、cleanupを忘れる、時刻をinterval回数だけで計算することです。

### 実務での注意点

外部APIの失敗、ログへ秘密情報を出さないこと、アクセシビリティ、モバイル負荷、同時更新を追加で検討します。

## L07-T02 模範解答

### 完成コード

```ts
return prisma.$transaction(async (tx) => {
  await tx.sessionRound.updateMany({ where: { sessionId, session: { userId }, completed: false }, data: { completed: true } });
  return tx.workoutSession.update({
    where: { id: sessionId, userId },
    data: { status: "COMPLETED", endedAt: new Date() },
  });
});
```

### 1行ずつの解説

入力を型どおりに受け取り、対象外または危険な値を先に除外し、必要な値を局所変数へ変換してから結果または状態を返しています。各行のAPI名と条件は対象レッスンの「重要な概念」で確認します。

### なぜこの書き方を使うのか

状態や外部入力を直接信用せず、境界を明示すると、型安全性とテスト容易性を両立できるためです。

### 別の実装方法

Reducer、専用service、schema transformなどへ分離する方法があります。規模と再利用箇所が増えた時点で比較します。

### よくある間違い

`any`で型を回避する、境界値を丸めない、認証をUIだけに置く、cleanupを忘れる、時刻をinterval回数だけで計算することです。

### 実務での注意点

外部APIの失敗、ログへ秘密情報を出さないこと、アクセシビリティ、モバイル負荷、同時更新を追加で検討します。
