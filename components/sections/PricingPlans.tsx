import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Check, HeartHandshake } from "lucide-react";
import { girlPlanPerks, pricingPlans } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap = Icons as unknown as Record<string, LucideIcon>;
const planAccents = ["before:bg-mint", "before:bg-cyan", "before:bg-violet", "before:bg-signal"];

export default function PricingPlans() {
  return (
    <section id="pricing" className="section-space dot-field bg-amber">
      <div className="site-container">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div><span className="eyebrow">Plans</span><h2 className="section-title">Priced like friendship.</h2></div>
          <p className="section-copy md:max-w-md">Choose the operational intensity. Every tier costs exactly what a good conversation should.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan, index) => {
            const Icon = iconMap[plan.icon];
            return (
              <article key={plan.name} className={cn("ticket-shadow relative flex min-h-[28rem] flex-col overflow-hidden rounded-[1.6rem] p-6 before:absolute before:inset-x-0 before:top-0 before:h-3", planAccents[index], plan.highlighted ? "bg-ink text-white" : "bg-white")}>
                {plan.highlighted && <span className="mono-label absolute right-4 top-4 rounded-full bg-signal px-3 py-1.5 text-[0.6rem] text-white">Best signal</span>}
                <span className={cn("mb-8 grid size-11 place-items-center rounded-xl", plan.highlighted ? "bg-white/10 text-violet-soft" : "bg-violet/9 text-violet")}><Icon className="size-5" /></span>
                <h3 className="font-display text-2xl font-bold tracking-[-0.04em]">{plan.name}</h3>
                <p className={cn("mt-2 min-h-12 text-sm leading-6", plan.highlighted ? "text-white/52" : "text-ink/48")}>{plan.description}</p>
                <p className="mt-7 font-display text-4xl font-bold tracking-[-0.05em]">{plan.price}</p>
                <ul className="mt-7 flex-1 space-y-3">
                  {plan.features.map((feature) => <li key={feature} className={cn("flex items-start gap-2.5 text-sm", plan.highlighted ? "text-white/72" : "text-ink/62")}><Check className="mt-0.5 size-4 shrink-0 text-mint" />{feature}</li>)}
                </ul>
                <a href="#deploy" className={cn("mt-8 flex min-h-11 items-center justify-center rounded-xl text-sm font-bold transition-colors", plan.highlighted ? "bg-white text-ink hover:bg-violet-soft" : "bg-ink text-white hover:bg-violet")}>Choose plan</a>
              </article>
            );
          })}
        </div>

        <div className="ticket-shadow mt-8 grid overflow-hidden rounded-[1.75rem] bg-signal text-white lg:grid-cols-[0.7fr_1.3fr]">
          <div className="flex flex-col justify-between border-b-2 border-dashed border-white/35 p-7 lg:border-b-0 lg:border-r-2 sm:p-9">
            <HeartHandshake className="size-8 text-amber" />
            <div className="mt-12"><p className="mono-label text-amber">The girl plan</p><p className="mt-2 font-display text-4xl font-bold tracking-[-0.05em]">৳0 forever.</p><p className="mt-3 text-sm leading-6 text-white/66">No trial ending. No card waiting to be charged.</p></div>
          </div>
          <div className="grid gap-3 p-7 sm:grid-cols-2 sm:p-9">{girlPlanPerks.map((perk) => <div key={perk} className="flex items-center gap-3 rounded-xl border-2 border-ink bg-white px-4 py-3 text-sm font-semibold text-ink shadow-[0.22rem_0.22rem_0_#140f2d]"><Check className="size-4 text-signal" />{perk}</div>)}</div>
        </div>
        <p className="mt-5 text-center font-mono text-[0.66rem] uppercase tracking-[0.1em] text-ink/34">Availability depends on battery, food, sleep, and nonsense.</p>
      </div>
    </section>
  );
}
