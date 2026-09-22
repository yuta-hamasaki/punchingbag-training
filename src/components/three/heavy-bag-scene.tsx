"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { HeavyBag } from "./heavy-bag";

export function HeavyBagScene() {
  // TODO(LEARNER:L03-T01)
  // Canvasのcamera設定を完成させてください。
  // 1. バッグ全体が見えるpositionを指定する
  // 2. 視野角を45〜60度に制限する
  // 3. DPRを1〜2に制限して高密度端末の負荷を抑える
  const camera = {
    position: [0, 0.2, 5] as [number, number, number],
    fov: 50,
  };

  return (
    <Canvas camera={camera} dpr={[1, 2]} shadows>
      <Suspense fallback={null}>
        <ambientLight intensity={0.2} />
        <HeavyBag />
      </Suspense>
    </Canvas>
  );
}
