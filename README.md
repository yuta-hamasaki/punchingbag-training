# BagWork

ボクシング・キックボクシング初心者向けの、学習型サンドバッグトレーニングWebアプリです。アプリを段階的に作りながらNext.js、TypeScript、3D、API、DB、認証、決済を学びます。

## 学習の始め方

1. `docs/curriculum.md` で全体像を確認します。
2. `docs/lessons/lesson-01-project-foundation.md` を読みます。
3. `src/lib/plans.ts` の `TODO(LEARNER:...)` を自分で実装します。
4. `npm run test:lesson-01` で答え合わせします。
5. 困ったときだけ `docs/hints/lesson-01-hints.md` をHint 1から順に読みます。

## ローカル起動

```bash
cp .env.example .env.local
npm install
npm run dev
```

品質チェックは `npm run lint`、`npm run typecheck`、`npm test` です。模範解答は学習用コードからimportしません。
