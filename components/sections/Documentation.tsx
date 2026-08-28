import { BookOpenText, Terminal } from "lucide-react";
import CodeBlock from "@/components/ui/CodeBlock";

export default function Documentation() {
  return (
    <section id="docs" className="section-space dot-field bg-[#d9f8ff]">
      <div className="site-container">
        <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div><span className="eyebrow">Quick start</span><h2 className="section-title">Three calls to a better day.</h2></div>
          <p className="section-copy lg:justify-self-end">Installation is purely ceremonial. The useful methods work exactly how you hope they do.</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="ticket-shadow flex flex-col rounded-[1.75rem] bg-amber p-6 sm:p-8">
            <span className="grid size-11 place-items-center rounded-xl border-2 border-ink bg-white text-violet shadow-[0.2rem_0.2rem_0_#140f2d]"><BookOpenText className="size-5" /></span>
            <h3 className="mt-8 font-display text-2xl font-bold">Install the idea.</h3>
            <p className="mt-3 text-sm leading-6 text-ink/52">Run one imaginary package command. Then ask for the support you actually need.</p>
            <div className="mt-auto pt-8"><CodeBlock language="bash"><span className="text-violet-soft">npm</span> install <span className="text-mint">naeem</span></CodeBlock></div>
          </div>
          <div className="space-y-4">
            <CodeBlock language="typescript">
              <span className="text-signal">import</span>{" { "}<span className="text-amber">Naeem</span>{" } "}<span className="text-signal">from</span>{" "}<span className="text-mint">{'"naas"'}</span>;{"\n\n"}
              <span className="text-signal">const</span> naeem = <span className="text-signal">new</span> <span className="text-amber">Naeem</span>();{"\n\n"}
              naeem.<span className="text-violet-soft">talk</span>();{"\n"}
              naeem.<span className="text-violet-soft">listen</span>();{"\n"}
              naeem.<span className="text-violet-soft">help</span>();
            </CodeBlock>
            <div className="flex items-center gap-3 rounded-xl bg-ink px-5 py-4 text-white"><Terminal className="size-4 text-mint" /><p className="font-mono text-xs text-white/66">Naeem is thinking<span className="ml-1 inline-block animate-pulse text-mint">...</span></p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
