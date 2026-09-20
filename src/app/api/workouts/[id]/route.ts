import { error } from "@/lib/api/responses";

export async function GET(_request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  return error("WORKOUT_NOT_FOUND", `Workout ${id} is not available yet`, 404);
}
