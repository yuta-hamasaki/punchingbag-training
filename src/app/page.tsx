import { ArrowUpRight, Dumbbell, TimerReset, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const metrics = [
  { label: "Weekly goal", value: "3", unit: "sessions", icon: Trophy },
  { label: "Training time", value: "24", unit: "minutes", icon: TimerReset },
  { label: "Current level", value: "01", unit: "foundation", icon: Dumbbell },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-warm-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
        <a href="#top" className="text-xl font-black uppercase tracking-[-0.05em]" aria-label="BagWork home">
          Bag<span className="text-lime">Work</span>
        </a>
        <span className="rounded-full border border-line px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          Lesson 01 · Foundation
        </span>
      </nav>

      <section id="top" className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pt-24">
        <div className="relative z-10">
          <p className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-lime">
            <span className="h-px w-10 bg-lime" /> Train with intent
          </p>
          <h1 className="max-w-4xl text-[clamp(4rem,14vw,9rem)] font-black uppercase leading-[0.78] tracking-[-0.075em]">
            Own every <span className="text-outline">round.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-7 text-muted sm:text-lg">
            コンビネーションに集中する。ラウンドを積み上げる。BagWorkは、一人のバッグトレーニングに明確なリズムをつくります。
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button>Start training <ArrowUpRight className="ml-2 inline size-4" /></Button>
            <Button variant="secondary">Explore workouts</Button>
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-md" aria-hidden="true">
          <div className="absolute left-1/2 top-0 h-16 w-2 -translate-x-1/2 bg-line" />
          <div className="absolute left-1/2 top-14 h-[70%] w-[54%] -translate-x-1/2 rounded-[45%_45%_36%_36%] border border-white/10 bg-gradient-to-r from-[#191b1a] via-[#353936] to-[#111210] shadow-2xl shadow-black" />
          <div className="absolute left-1/2 top-[40%] size-28 -translate-x-1/2 rounded-full border border-lime/30 bg-lime/5 shadow-[0_0_60px_rgba(200,255,61,0.12)]" />
          <p className="absolute bottom-6 right-0 rotate-90 font-mono text-[10px] uppercase tracking-[0.3em] text-muted">Three.js arrives in Lesson 03</p>
        </div>
      </section>

      <section className="border-y border-line bg-panel/60">
        <div className="mx-auto grid max-w-7xl divide-y divide-line px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8">
          {metrics.map(({ label, value, unit, icon: Icon }) => (
            <article key={label} className="flex items-center gap-5 py-7 sm:px-6">
              <Icon className="size-5 text-lime" />
              <div><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{label}</p><p className="mt-1 text-3xl font-black">{value} <span className="text-xs uppercase tracking-wider text-muted">{unit}</span></p></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
