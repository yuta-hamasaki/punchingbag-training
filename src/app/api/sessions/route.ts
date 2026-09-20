import type { NextRequest } from "next/server";
import { error, ok } from "@/lib/api/responses";
import { createSessionSchema } from "@/lib/validation/session";

export async function GET(request: NextRequest) {
  // TODO(LEARNER:L06-T01)
  // paginationのQuery Parameterを解析してください。
  // 1. pageとpageSizeを数値へ変換する
  // 2. pageは1以上、pageSizeは1〜50に制限する
  // 3. 統一されたPaginated形式を返す
  void request; /* YOUR CODE HERE */
  return ok({ items: [], page: 1, pageSize: 10, total: 0, hasNextPage: false });
}

export async function POST(request: Request) {
  // TODO(LEARNER:L06-T02)
  // JSON bodyを安全に検証してください。
  // 1. request.json()をawaitする
  // 2. createSessionSchema.safeParseを使う
  // 3. 失敗時はfieldErrorsを含む422を返す
  void request; void createSessionSchema; /* YOUR CODE HERE */
  return error("NOT_IMPLEMENTED", "Complete L06-T02", 501);
}
