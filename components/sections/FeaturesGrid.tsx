import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { features } from "@/lib/constants";

const iconMap = Icons as unknown as Record<string, LucideIcon>;
const cardTones = ["bg-signal text-white", "bg-violet text-white", "bg-amber text-ink", "bg-cyan text-ink", "bg-ink text-white"];

export default function FeaturesGrid() {
  return (
    <section id="features" className="section-space dot-field bg-[#ffe3ef]">
      <div className="site-container">
        <div className="mb-12 max-w-3xl"><span className="eyebrow">Capabilities</span><h2 className="section-title">Built around what people actually need.</h2></div>
        <div className="grid gap-4 md:grid-cols-6">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            const spans = index < 2 ? "md:col-span-3" : "md:col-span-2";
            return (
              <article key={feature.title} className={`ticket-shadow group min-h-64 rounded-[1.75rem] p-7 transition-transform hover:-translate-y-1 ${cardTones[index]} ${spans}`}>
                <span className="mb-12 grid size-12 place-items-center rounded-2xl border-2 border-ink bg-white text-ink shadow-[0.22rem_0.22rem_0_#140f2d]"><Icon className="size-5" /></span>
                <h3 className="font-display text-2xl font-bold tracking-[-0.04em]">{feature.title}</h3>
                <p className={`mt-3 max-w-md text-sm leading-6 ${index === 2 || index === 3 ? "text-ink/62" : "text-white/68"}`}>{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
