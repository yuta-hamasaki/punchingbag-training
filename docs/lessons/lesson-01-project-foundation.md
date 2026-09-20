# Lesson 01: プロジェクト基盤

## このレッスンの目的

完成済みのNext.js基盤を読み、TypeScriptのUnion型と純粋関数を使って料金プランの重要ロジックだけを実装します。設定ファイルを一から書く作業は行いません。

## 完成後にできること

- App Routerの`layout.tsx`と`page.tsx`の役割を説明できる
- TypeScriptのliteral unionが不正な値を防ぐ仕組みを説明できる
- 金額を浮動小数点ではなくセントで保持する理由を説明できる
- lint、型検査、単体テストを使い分けられる

## 前提知識

JavaScriptの関数、配列、オブジェクトの基礎だけを前提にします。

## 今回触るファイル

- `src/lib/plans.ts` — 学習者が編集する唯一のファイル
- `tests/lessons/lesson-01.test.ts` — 答え合わせ
- `src/app/page.tsx` — 完成済みのServer Component例
- `src/app/globals.css` — 完成済みのデザイントークン

## 重要な概念

`as const`は配列要素を単なる`string`ではなく具体的な文字列型として保ちます。そこから作る`PlanFeature`によりタイプミスをコンパイル時に検出できます。機能判定をReactから独立した純粋関数にすると、将来UIとサーバー認可の両方から同じ規則を利用し、テストも容易になります。ただしLesson 10ではDB上の契約状態からプランを決め、クライアントの申告を信用しません。

料金は`4.99`ドルではなく`499`セントで保持します。二進浮動小数点の丸め誤差を避け、Stripeの金額表現とも合わせやすいためです。表示時だけ`Intl.NumberFormat`で地域化します。

UIはモバイルで押しやすい最小高さ、高コントラスト、focus表示、Reduced Motionを基盤に含めています。色をtoken化することで、意味と見た目を分離しています。

## 実装手順

1. `src/lib/plans.ts`で型とcatalogを読む。
2. `L01-T01`を5〜15行以内で実装する。
3. 該当テストだけ実行する。
4. `L01-T02`を実装して再度テストする。
5. lintと型検査を実行する。

## TODO一覧

- `L01-T01`: プランが特定機能を持つか型安全に判定する
- `L01-T02`: セント単位の料金をUSD表示へ変換する

## 動作確認方法

```bash
npm run test:lesson-01
npm run typecheck
npm run lint
npm run dev
```

テスト失敗にはTODO ID、失敗した要件、確認ファイル、最初のヒント、想定原因が表示されます。

## よくあるエラー

- `499`をそのままformatterへ渡して`$499.00`になる
- `toFixed(2)`だけで通貨記号やlocaleを手作業する
- `plan === "PREMIUM"`だけで判定し、Free共通機能を落とす
- `any`で型エラーを隠す

## 理解確認問題

1. `PlanFeature`を単なる`string`にすると何を失いますか。
2. UIでボタンを隠すだけではPremium認可として不十分なのはなぜですか。
3. 料金をセントで保存する利点は何ですか。

## 次のレッスン

Lesson 01のTODOを実装し、レビューとテストが完了した後に、Lesson 02でApp Routerの画面遷移とServer／Client Componentを学びます。
