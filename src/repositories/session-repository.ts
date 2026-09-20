import { prisma } from "@/lib/db/prisma";

export async function findOwnedSession(sessionId: string, userId: string) {
  // TODO(LEARNER:L07-T01)
  // 所有権を同時に確認するPrisma Queryを書いてください。
  // 1. findFirstを使う
  // 2. whereにidとuserIdの両方を含める
  // 3. roundsをroundNumber順でincludeする
  void sessionId; void userId; void prisma; /* YOUR CODE HERE */
  return null;
}

export async function completeSessionInTransaction(sessionId: string, userId: string) {
  // TODO(LEARNER:L07-T02)
  // セッションと未完了roundをTransactionで更新してください。
  // 1. prisma.$transactionを使う
  // 2. userIdを更新条件へ含める
  // 3. endedAtとstatusを同じ処理単位で確定する
  void sessionId; void userId; void prisma; /* YOUR CODE HERE */
  return null;
}
