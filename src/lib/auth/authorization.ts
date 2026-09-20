import { auth } from "@clerk/nextjs/server";

export async function requireUserId(): Promise<string> {
  // TODO(LEARNER:L08-T01)
  // Clerkの認証結果からuserIdを取得してください。
  // 1. auth()をawaitする
  // 2. userIdがなければ認証エラーをthrowする
  // 3. stringへ型を絞って返す
  void auth; /* YOUR CODE HERE */
  return "LEARNER_TODO";
}

export async function assertOwner(resourceUserId: string): Promise<void> {
  // TODO(LEARNER:L08-T02)
  // 認証ユーザーと所有者を比較してください。
  // 1. requireUserIdを再利用する
  // 2. 一致しなければForbiddenとして扱えるエラーをthrowする
  // 3. クライアントから渡されたuserIdを信用しない
  void resourceUserId; /* YOUR CODE HERE */
}
