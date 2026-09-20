# Lesson 11 Solutions

本番コードからimportしない参考資料です。段階的なヒントを試し、模範解答を見ると決めた後だけ参照してください。

## L11-T01 模範解答

### 完成コード

```ts
it("tests deadline boundaries without waiting", () => {
  expect(remainingSeconds(2_001, 1_000)).toBe(2);
  expect(remainingSeconds(999, 1_000)).toBe(0);
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

## L11-T02 模範解答

### 完成コード

```ts
it("stops notifications after unsubscribe", () => {
  const callback = vi.fn();
  const input = new TimerTrainingInput();
  const unsubscribe = input.subscribe(callback);
  input.emit({ type: "jab", timestamp: 1 });
  unsubscribe();
  input.emit({ type: "cross", timestamp: 2 });
  expect(callback).toHaveBeenCalledTimes(1);
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
