import { error } from "@/lib/api/responses";

type Context = { params: Promise<{ id: string }> };
export async function GET(_request: Request, context: Context) { const { id } = await context.params; return error("SESSION_NOT_FOUND", id, 404); }
export async function PATCH(_request: Request, context: Context) { const { id } = await context.params; return error("NOT_IMPLEMENTED", id, 501); }
export async function DELETE(_request: Request, context: Context) { const { id } = await context.params; return error("NOT_IMPLEMENTED", id, 501); }
