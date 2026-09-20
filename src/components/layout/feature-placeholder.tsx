import Link from "next/link";

export function FeaturePlaceholder({ title, lesson, description }: { title: string; lesson: number; description: string }) {
  return <main className="min-h-screen bg-ink px-5 py-16 text-warm-white"><div className="mx-auto max-w-3xl"><Link href="/" className="font-mono text-xs uppercase tracking-widest text-lime">← BagWork</Link><p className="mt-16 font-mono text-xs uppercase tracking-widest text-muted">Lesson {String(lesson).padStart(2, "0")}</p><h1 className="mt-4 text-5xl font-black uppercase sm:text-7xl">{title}</h1><p className="mt-6 max-w-xl text-lg leading-8 text-muted">{description}</p><div className="mt-10 rounded-2xl border border-line bg-panel p-6 text-sm text-muted">この画面の骨格は準備済みです。対応レッスンで重要なロジックを穴埋めします。</div></div></main>;
}
