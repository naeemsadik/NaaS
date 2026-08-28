import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { naasFeatures, traditionalSaas } from "@/lib/constants";

const iconMap = Icons as unknown as Record<string, LucideIcon>;

export default function WhatIsNaas() {
  return (
    <section id="product" className="section-space dot-field bg-violet-soft">
      <div className="site-container">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="eyebrow">The product</span>
            <h2 className="section-title">Support without the software.</h2>
            <p className="section-copy mt-6">Traditional services add another account, another interface, and another queue. NaaS keeps the useful part: a person who listens and shows up.</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <article className="ticket-shadow -rotate-1 rounded-[1.75rem] bg-white p-6 sm:p-8">
              <div className="mb-7 flex items-center justify-between"><h3 className="font-display text-2xl font-bold">Traditional SaaS</h3><Icons.X className="size-5 text-signal" /></div>
              <ul className="space-y-3.5">
                {traditionalSaas.map((item) => {
                  const Icon = iconMap[item.icon];
                  return <li key={item.label} className="flex items-center gap-3 rounded-xl border-2 border-ink/8 bg-paper px-4 py-3 text-sm font-semibold text-ink/58"><Icon className="size-4" />{item.label}</li>;
                })}
              </ul>
            </article>

            <article className="ticket-shadow relative rotate-1 overflow-hidden rounded-[1.75rem] bg-signal p-6 text-white sm:translate-y-8 sm:p-8">
              <div className="absolute -right-16 -top-16 size-40 rounded-full border-[2rem] border-amber/35" aria-hidden="true" />
              <div className="relative mb-7 flex items-center justify-between"><h3 className="font-display text-2xl font-bold">NaaS</h3><Icons.Check className="size-5 text-mint" /></div>
              <ul className="relative space-y-3.5">
                {naasFeatures.map((item) => {
                  const Icon = iconMap[item.icon];
                  return <li key={item.label} className="flex items-center gap-3 rounded-xl border-2 border-white/22 bg-white/12 px-4 py-3 text-sm font-semibold text-white"><Icon className="size-4 text-amber" />{item.label}</li>;
                })}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
