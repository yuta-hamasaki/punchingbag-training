# Camera Extension

MVPではカメラ解析を実装しません。`TrainingInputSource`を境界として`TimerTrainingInput`を使い、将来`CameraTrainingInput`へ交換できる設計にします。

生映像はサーバーへ送らず、端末内解析を優先します。明示的な同意、常時表示、拒否時のStandardモード継続、集計値だけの保存を必須原則とします。
