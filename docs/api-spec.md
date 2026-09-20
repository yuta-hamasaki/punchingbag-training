# API Specification

成功は `{ success: true, data }`、失敗は `{ success: false, error: { code, message, fieldErrors? } }` で統一します。

対象はworkouts、sessions、favorites、custom-workoutsのCRUDと、Stripeのcheckout、portal、webhookです。詳細なRequest、Response、Status CodeはLesson 06以降で実装と一緒に確定します。
