import { ArrowRight, Braces, CircleAlert, RadioTower } from "lucide-react";
import CodeBlock from "@/components/ui/CodeBlock";

const endpoints = [
  { method: "GET", path: "/naeem", note: "Current human status", color: "text-mint" },
  { method: "POST", path: "/request-comfort", note: "Start emotional support", color: "text-signal" },
  { method: "418", path: "/try-again-later", note: "Naeem is being stupid", color: "text-amber" },
];

export default function NaeemApi() {
  return (
    <section id="api" className="section-space grid-noise relative overflow-hidden bg-ink text-white">
      <div className="site-container">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <span className="eyebrow !text-violet-soft">Naeem API</span>
            <h2 className="section-title">Human access. Developer syntax.</h2>
          </div>
          <p className="section-copy !text-white/52 lg:justify-self-end">A fictional REST interface for the least RESTful person you know. Predictable endpoints, unpredictable reply times.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-3">
            {endpoints.map((endpoint, index) => (
              <article key={endpoint.path} className="group flex items-center gap-4 rounded-2xl border-2 border-white/14 bg-white/7 p-4 shadow-[0.3rem_0.3rem_0_rgba(69,215,235,0.35)] transition-transform hover:-translate-y-0.5">
                <span className={`w-12 font-mono text-xs font-bold ${endpoint.color}`}>{endpoint.method}</span>
                <div className="min-w-0 flex-1"><p className="truncate font-mono text-sm text-white/88">{endpoint.path}</p><p className="mt-1 text-xs text-white/38">{endpoint.note}</p></div>
                {index < 2 ? <ArrowRight className="size-4 text-white/28 transition-transform group-hover:translate-x-1" /> : <CircleAlert className="size-4 text-amber" />}
              </article>
            ))}
            <div className="mt-3 rounded-2xl border-2 border-violet-soft/22 bg-violet/22 p-5">
              <div className="mb-3 flex items-center gap-2 text-violet-soft"><RadioTower className="size-4" /><span className="mono-label">Availability note</span></div>
              <p className="text-sm leading-6 text-white/58">All responses are subject to battery, snacks, sleep, and general human latency.</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-24 -top-24 size-64 rounded-full bg-signal/12 blur-3xl" aria-hidden="true" />
            <CodeBlock language="json">
              <span className="text-white/35">{"// GET /naeem"}</span>{"\n"}
              {"{"}{"\n"}
              {"  "}<span className="text-violet-soft">{'"name"'}</span>: <span className="text-mint">{'"Naeem"'}</span>,{"\n"}
              {"  "}<span className="text-violet-soft">{'"mood"'}</span>: <span className="text-mint">{'"hungry"'}</span>,{"\n"}
              {"  "}<span className="text-violet-soft">{'"availability"'}</span>: <span className="text-mint">{'"ask nicely"'}</span>,{"\n"}
              {"  "}<span className="text-violet-soft">{'"reply_time"'}</span>: <span className="text-mint">{'"depends"'}</span>,{"\n"}
              {"  "}<span className="text-violet-soft">{'"will_listen_to_your_rant"'}</span>: <span className="text-amber">true</span>{"\n"}
              {"}"}{"\n\n"}
              <span className="text-white/35">{"// POST /request-comfort"}</span>{"\n"}
              {"{"} <span className="text-violet-soft">{'"success"'}</span>: <span className="text-amber">true</span>, <span className="text-violet-soft">{'"message"'}</span>: <span className="text-mint">{'"Deployed."'}</span> {"}"}
            </CodeBlock>
            <div className="absolute -bottom-4 -left-4 hidden rounded-xl bg-signal p-3 text-white shadow-xl sm:flex sm:items-center sm:gap-2"><Braces className="size-4" /><span className="mono-label">v2.7 stable-ish</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
