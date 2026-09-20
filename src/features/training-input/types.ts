export type TrainingEvent = { type: "jab" | "cross" | "hook" | "kick" | "movement"; timestamp: number; confidence?: number; side?: "left" | "right" };
export interface TrainingInputSource { start(): Promise<void>; stop(): Promise<void>; subscribe(callback: (event: TrainingEvent) => void): () => void }
