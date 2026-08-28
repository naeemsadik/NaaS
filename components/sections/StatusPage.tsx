import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Activity, CircleAlert, CircleCheck, CircleX } from "lucide-react";
import { statusServices } from "@/lib/constants";

const iconMap = Icons as unknown as Record<string, LucideIcon>;
const config = {
  operational: { label: "Operational", icon: CircleCheck, className: "bg-mint/10 text-[#138b6b]" },
  degraded: { label: "Degraded", icon: CircleAlert, className: "bg-amber/14 text-[#996600]" },
  investigating: { label: "Investigating", icon: CircleAlert, className: "bg-amber/14 text-[#996600]" },
  outage: { label: "Outage", icon: CircleX, className: "bg-signal/10 text-signal" },
};

export default function StatusPage() {
  return (
    <section id="status" className="section-space dot-field bg-violet-soft">
      <div className="site-container grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-start">
        <div className="lg:sticky lg:top-28"><span className="eyebrow">System status</span><h2 className="section-title">Mostly operational.</h2><p className="section-copy mt-6">Core human services are online. Common sense is experiencing a long-running incident.</p></div>
        <div className="ticket-shadow overflow-hidden rounded-[1.75rem] bg-paper">
          <div className="flex flex-col gap-4 border-b border-ink/8 bg-ink p-6 text-white sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-xl bg-white/10"><Activity className="size-5 text-mint" /></span><div><p className="font-display text-xl font-bold">Some systems degraded</p><p className="text-xs text-white/42">Updated just now, probably</p></div></div>
            <span className="mono-label rounded-full bg-amber px-3 py-1.5 text-ink">Monitoring</span>
          </div>
          <div className="divide-y divide-ink/7 bg-white">
            {statusServices.map((service) => {
              const ServiceIcon = iconMap[service.icon];
              const state = config[service.status];
              const StatusIcon = state.icon;
              return (
                <div key={service.service} className="flex items-center justify-between gap-4 px-5 py-4 sm:px-7">
                  <div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-xl bg-paper text-ink/48"><ServiceIcon className="size-4" /></span><span className="text-sm font-semibold">{service.service}</span></div>
                  <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold ${state.className}`}><StatusIcon className="size-3.5" />{state.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
