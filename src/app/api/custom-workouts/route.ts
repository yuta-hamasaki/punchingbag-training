import { error, ok } from "@/lib/api/responses";
export async function GET() { return ok([]); }
export async function POST() { return error("PREMIUM_REQUIRED", "Custom workouts require Premium", 403); }
