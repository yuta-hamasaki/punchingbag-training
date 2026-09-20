export type WorkoutTimerState = "idle" | "countdown" | "active" | "paused" | "resting" | "completed";
export type TimerConfig = { countdownSeconds: number; roundSeconds: number; restSeconds: number; totalRounds: number };
