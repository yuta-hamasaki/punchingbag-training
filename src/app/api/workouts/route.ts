import type { NextRequest } from "next/server";
import { ok } from "@/lib/api/responses";

export async function GET(request: NextRequest) {
  const search = request.nextUrl.searchParams.get("query") ?? "";
  return ok({ items: [], query: search, page: 1, pageSize: 12, total: 0, hasNextPage: false });
}
