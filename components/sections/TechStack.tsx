import { Cpu, Database, ServerCog } from "lucide-react";
import { techStack } from "@/lib/constants";

export default function TechStack() {
  return (
    <section id="tech-stack" className="section-space bg-[radial-gradient(circle_at_84%_14%,rgba(69,215,235,0.17),transparent_29%),radial-gradient(circle_at_10%_78%,rgba(255,79,154,0.2),transparent_31%),linear-gradient(145deg,#140f2d,#24184d)] text-white">
      <div className="site-container grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
        <div>
          <span className="eyebrow !text-violet-soft">Under the hood</span>
          <h2 className="section-title">A very human stack.</h2>
          <p className="section-copy mt-6 !text-white/52">No microservices. No vector database. Just one person, a phone charger, and enough snacks to stay operational.</p>
          <div className="mt-8 flex gap-3 text-white/46"><Cpu className="size-5" /><Database className="size-5" /><ServerCog className="size-5" /></div>
        </div>
        <div className="overflow-hidden rounded-[1.75rem] border-2 border-cyan bg-[#11101d] shadow-[0.7rem_0.7rem_0_#ff4f9a]">
          <div className="flex items-center justify-between border-b border-white/8 px-5 py-4"><span className="font-mono text-xs text-white/38">naas.system.profile</span><span className="flex items-center gap-2 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-mint"><span className="size-1.5 rounded-full bg-mint" />Connected</span></div>
          <dl className="divide-y divide-white/7">
            {techStack.map((item) => <div key={item.key} className="grid gap-2 px-5 py-4 sm:grid-cols-[9rem_1fr] sm:px-7"><dt className="font-mono text-xs font-bold text-violet-soft">{item.key}</dt><dd className="text-sm text-white/62">{item.value}</dd></div>)}
          </dl>
        </div>
      </div>
    </section>
  );
}
