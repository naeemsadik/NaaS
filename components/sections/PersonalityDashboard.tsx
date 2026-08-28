import { BatteryCharging, Gauge, RefreshCw } from "lucide-react";
import { personalityBars } from "@/lib/constants";
import ProgressBar from "@/components/ui/ProgressBar";

export default function PersonalityDashboard() {
  return (
    <section id="dashboard" className="section-space dot-field bg-cyan">
      <div className="site-container grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
        <div>
          <span className="eyebrow">Telemetry</span>
          <h2 className="section-title">The human dashboard.</h2>
          <p className="section-copy mt-6">A live-ish reading of Naeem’s most business-critical systems. Accuracy improves after food.</p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="ticket-shadow -rotate-2 rounded-2xl bg-violet p-5 text-white"><BatteryCharging className="size-5 text-violet-soft" /><p className="mt-7 font-display text-3xl font-bold">61%</p><p className="mt-1 text-xs text-white/55">Social battery</p></div>
            <div className="ticket-shadow rotate-2 rounded-2xl bg-signal p-5 text-white"><Gauge className="size-5 text-white/78" /><p className="mt-7 font-display text-3xl font-bold">94%</p><p className="mt-1 text-xs text-white/55">Food urgency</p></div>
          </div>
        </div>
        <div className="panel p-6 sm:p-9">
          <div className="mb-8 flex items-center justify-between border-b border-ink/8 pb-5">
            <div><p className="mono-label text-ink/34">naeem_core.metrics</p><h3 className="mt-2 font-display text-2xl font-bold">Personality monitor</h3></div>
            <span className="grid size-10 place-items-center rounded-xl bg-mint/12 text-mint"><RefreshCw className="size-4" /></span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">{personalityBars.map((bar) => <ProgressBar key={bar.label} {...bar} />)}</div>
          <p className="mt-8 border-t border-ink/8 pt-5 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-ink/32">Last recalibrated after one snack</p>
        </div>
      </div>
    </section>
  );
}
