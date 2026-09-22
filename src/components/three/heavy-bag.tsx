"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { MathUtils, type Mesh } from "three";

export function HeavyBag() {
  const bag = useRef<Mesh>(null);
  const [selected, setSelected] = useState(false);

  // TODO(LEARNER:L03-T02)
  // 基本GeometryとMaterialを完成させてください。
  // 1. CylinderGeometryのargsを半径・高さ・分割数の順で設定する
  // 2. MeshStandardMaterialにGraphite系の色とroughnessを設定する
  // 3. castShadowを有効にする
  const geometryArgs: [number, number, number, number] = [0.72, 0.62, 2.6, 32];

  useFrame((_state, delta) => {
    if (!bag.current) return;
    // TODO(LEARNER:L04-T01)
    // フレームレート非依存の揺れを実装してください。
    // 1. deltaを0〜0.1へ制限する
    // 2. selectedに応じたtargetRotationを作る
    // 3. MathUtils.lerpで現在値からtargetへ滑らかに近づける
    const safeDelta = Math.min(Math.max(delta, 0), 0.1);
    const targetRotation = selected ? 0.16 : 0;
    const alpha = 1 - Math.exp(-8 * safeDelta);
    bag.current.rotation.z = MathUtils.lerp(
      bag.current.rotation.z,
      targetRotation,
      alpha,
    );
  });

  return (
    <mesh
      ref={bag}
      castShadow
      onClick={(event) => {
        event.stopPropagation();
        setSelected((value) => !value);
      }}
    >
      <cylinderGeometry args={geometryArgs} />
      <meshStandardMaterial color="#252925" roughness={0.72} />
    </mesh>
  );
}

// TODO(LEARNER:L04-T02)
// 選択時の揺れ強度を安全な範囲へ変換してください。
// 1. pointerのX座標を-1〜1へ制限する
// 2. 最大角度を掛ける
// 3. NaNの場合は0を返す
export function pointerToImpulse(pointerX: number, maxAngle = 0.22): number {
  if (!Number.isFinite(pointerX)) return 0;
  const normalizedX = Math.min(1, Math.max(-1, pointerX));
  return normalizedX * maxAngle;
}
