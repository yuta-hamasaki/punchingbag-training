import { PrismaClient, AccessTier, Difficulty, Discipline } from "@prisma/client";

const prisma = new PrismaClient();
const workouts = [
  ["boxing-basics", "Boxing Basics", Discipline.BOXING, Difficulty.BEGINNER, AccessTier.FREE],
  ["jab-practice", "Jab Practice", Discipline.BOXING, Difficulty.BEGINNER, AccessTier.FREE],
  ["power-footwork", "Power & Footwork", Discipline.BOXING, Difficulty.INTERMEDIATE, AccessTier.FREE],
  ["speed-combinations", "Speed Combinations", Discipline.BOXING, Difficulty.INTERMEDIATE, AccessTier.PREMIUM],
  ["heavy-bag-cardio", "Heavy Bag Cardio", Discipline.BOXING, Difficulty.ADVANCED, AccessTier.PREMIUM],
  ["kickboxing-basics", "Kickboxing Basics", Discipline.KICKBOXING, Difficulty.BEGINNER, AccessTier.PREMIUM],
] as const;

async function main() {
  for (const [slug, title, discipline, difficulty, accessTier] of workouts) {
    await prisma.workout.upsert({ where: { slug }, update: {}, create: { slug, title, discipline, difficulty, accessTier, description: `${title} structured heavy bag session`, durationMinutes: 20, roundCount: 3, roundSeconds: 180, restSeconds: 60, combinationIntervalSeconds: 20, equipment: ["Heavy bag", "Gloves", "Hand wraps"], isPublished: true } });
  }
}

main().finally(() => prisma.$disconnect());
