# API Specification

成功は `{ success: true, data }`、失敗は `{ success: false, error: { code, message, fieldErrors? } }` で統一します。

| Method | Endpoint | 保護 |
|---|---|---|
| GET | `/api/workouts` | 公開一覧、Premium開始時はサーバー確認 |
| GET | `/api/workouts/[id]` | 同上 |
| GET, POST | `/api/sessions` | 認証必須 |
| GET, PATCH, DELETE | `/api/sessions/[id]` | 認証と所有権必須 |
| GET, POST | `/api/favorites` | Premium必須 |
| DELETE | `/api/favorites/[workoutId]` | Premiumと所有権必須 |
| GET, POST | `/api/custom-workouts` | Premium必須 |
| PATCH, DELETE | `/api/custom-workouts/[id]` | Premiumと所有権必須 |
| POST | `/api/stripe/checkout` | 認証必須 |
| POST | `/api/stripe/portal` | 認証必須 |
| POST | `/api/stripe/webhook` | Stripe署名必須 |

Zod検証失敗は422、未認証は401、権限不足は403、不在は404、競合は409を基本とします。削除も統一Envelopeを返すため200を使います。
