import type { TrainingEvent, TrainingInputSource } from "./types";

export class TimerTrainingInput implements TrainingInputSource {
  private subscribers = new Set<(event: TrainingEvent) => void>();
  async start() {}
  async stop() { this.subscribers.clear(); }
  subscribe(callback: (event: TrainingEvent) => void) { this.subscribers.add(callback); return () => this.subscribers.delete(callback); }
  emit(event: TrainingEvent) { this.subscribers.forEach((subscriber) => subscriber(event)); }
}
