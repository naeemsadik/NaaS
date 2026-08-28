import { Activity, Clock3, Moon, Utensils, WifiOff } from "lucide-react";
import { downtimeCauses } from "@/lib/constants";

const causeIcons = [Moon, Utensils, WifiOff, Clock3, Activity, WifiOff];

export default function NaeemUptime() {
  return (
    <section id="uptime" className="section-space dot-field bg-[#ffe3ef]">
      <div className="site-container">
        <div className="ticket-shadow relative overflow-hidden rounded-[2rem] bg-violet p-7 text-white sm:p-10 lg:p-14">
          <div className="absolute -right-36 -top-36 size-96 rounded-full border-[4rem] border-white/6" aria-hidden="true" />
          <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="mb-7 flex items-center gap-2"><span className="size-2 rounded-full bg-mint shadow-[0_0_0_6px_rgba(39,199,154,0.14)]" /><span className="mono-label text-white/58">Uptime, last 30 days</span></div>
              <p className="font-display text-[clamp(5rem,13vw,10rem)] font-bold leading-[0.8] tracking-[-0.08em]">99.87<span className="text-[0.38em] text-violet-soft">%</span></p>
              <p className="mt-7 max-w-md text-white/58">Remarkably reliable for infrastructure that needs eight hours of sleep.</p>
            </div>
            <div>
              <h3 className="mb-5 font-display text-2xl font-bold">Known causes of downtime</h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {downtimeCauses.map((cause, index) => {
                  const Icon = causeIcons[index];
                  return <div key={cause} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/7 px-4 py-3 text-sm text-white/72"><Icon className="size-4 text-violet-soft" />{cause}</div>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
