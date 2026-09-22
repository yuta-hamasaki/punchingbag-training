"use client";

import { useState } from "react";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // TODO(LEARNER:L02-T01)
  // モバイルメニューの開閉を実装してください。
  // 1. 現在値を反転する関数型更新を使う
  // 2. 古いrenderの値に依存しない
  // 3. buttonのaria-expandedと表示を同期させる
  const toggleMenu = () => {
    setIsOpen((prev)=> !prev)
  };

  return <button type="button" aria-expanded={isOpen} onClick={toggleMenu}>{isOpen ? "Close" : "Menu"}</button>;
}

// TODO(LEARNER:L02-T02)
// 現在地を示すリンク判定を実装してください。
// 1. rootは完全一致だけをactiveにする
// 2. 子階層はpathname.startsWithで判定する
// 3. `/workouts-old`のような別prefixを誤判定しない
export function isActivePath(_pathname: string, _href: string): boolean {
  if(_pathname === _href) {
    return true;
  }
  if(_href !== "/" && _pathname.startsWith(_href)) {
    return true;
  }
  return false;
}
