# Architecture

BagWorkはNext.js App Routerを入口にし、画面、機能ロジック、外部サービスを分離します。

```text
App Router → Feature layer → Repository / External services
                 ↓
          Presentation state → React Three Fiber
```

- Route HandlerはHTTP境界、Zod検証、認証結果の受け渡しを担当します。
- RepositoryはPrisma Queryを局所化します。
- Stripe Webhookを契約状態の正とし、成功画面ではPremiumへ変更しません。
- 3D表現はWorkout Stateを直接変更せず、Presentation Stateを受け取ります。
- 将来のカメラ入力は`TrainingInputSource`境界の後ろへ追加します。
