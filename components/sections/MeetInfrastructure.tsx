import Image from "next/image";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { naeemProfile } from "@/lib/constants";

const iconMap = Icons as unknown as Record<string, LucideIcon>;

export default function MeetInfrastructure() {
  return (
    <section id="team" className="section-space dot-field bg-amber">
      <div className="site-container">
        <div className="mb-12"><span className="eyebrow">The infrastructure</span><h2 className="section-title">Yes, it is just Naeem.</h2></div>
        <div className="ticket-shadow grid overflow-hidden rounded-[2rem] bg-white lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative min-h-[30rem] overflow-hidden bg-ink sm:min-h-[38rem] lg:min-h-0">
            <Image src="/img/naeem-infrastructure-v2.png" alt="Naeem at his human infrastructure workstation" fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover" style={{ objectPosition: "50% 46%" }} />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/62 to-transparent p-7 pt-32 text-white sm:p-9">
              <p className="font-display text-4xl font-bold tracking-[-0.05em]">Naeem</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-white/54">Chief Naeem Officer</p>
            </div>
          </div>
          <div className="p-6 sm:p-9 lg:p-12">
            <p className="max-w-xl font-display text-3xl font-semibold leading-tight tracking-[-0.04em]">A single point of contact with an unusually broad job description.</p>
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {naeemProfile.map((item) => {
                const Icon = iconMap[item.icon];
                return <div key={item.label} className="rounded-xl border border-ink/8 bg-paper p-4"><Icon className="size-4 text-violet" /><p className="mono-label mt-5 text-ink/34">{item.label}</p><p className="mt-1 text-sm font-semibold leading-5">{item.value}</p></div>;
              })}
            </div>
            <a href="#deploy" className="button-primary mt-8">Request this infrastructure <ArrowUpRight className="size-4" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
