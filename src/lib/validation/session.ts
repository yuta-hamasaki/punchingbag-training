import { z } from "zod";

export const createSessionSchema = z.object({
  workoutId: z.string().min(1).optional(), customWorkoutId: z.string().min(1).optional(),
  mode: z.enum(["STANDARD", "CAMERA"]).default("STANDARD"), startedAt: z.iso.datetime(), totalRounds: z.int().positive(),
}).refine((value) => Boolean(value.workoutId) !== Boolean(value.customWorkoutId), "Choose exactly one workout source");
