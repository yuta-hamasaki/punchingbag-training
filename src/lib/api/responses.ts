import { NextResponse } from "next/server";
import type { ApiError, ApiSuccess } from "@/types/api";

export function ok<T>(data: T, status = 200) { return NextResponse.json<ApiSuccess<T>>({ success: true, data }, { status }); }
export function error(code: string, message: string, status: number, fieldErrors?: Record<string, string[]>) {
  return NextResponse.json<ApiError>({ success: false, error: { code, message, fieldErrors } }, { status });
}
