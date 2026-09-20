import type { TrainingEvent, TrainingInputSource } from "./types";

export class CameraTrainingInput implements TrainingInputSource {
  private stream: MediaStream | null = null;
  private subscribers = new Set<(event: TrainingEvent) => void>();

  async start(): Promise<void> {
    // TODO(LEARNER:L12-T01)
    // 明示的に開始されたときだけカメラ権限を要求してください。
    // 1. navigator.mediaDevicesの存在を確認する
    // 2. videoのみを要求しaudioはfalseにする
    // 3. 取得したMediaStreamをthis.streamへ保存する
    throw new Error("Camera mode is coming soon"); /* YOUR CODE HERE */
  }

  async stop(): Promise<void> {
    // TODO(LEARNER:L12-T02)
    // カメラ資源を確実に解放してください。
    // 1. 全trackへstopを呼ぶ
    // 2. streamをnullに戻す
    // 3. subscribersをclearする
    void this.stream; /* YOUR CODE HERE */
  }

  subscribe(callback: (event: TrainingEvent) => void) { this.subscribers.add(callback); return () => this.subscribers.delete(callback); }
}
