import { CircleAlert, CircleCheck, Plus } from "lucide-react";
import { changelog } from "@/lib/constants";

const groups = [
  { title: "Added", items: changelog.added, icon: Plus, tone: "text-mint bg-mint/10" },
  { title: "Fixed", items: changelog.fixed, icon: CircleCheck, tone: "text-violet bg-violet/10" },
  { title: "Known issues", items: changelog.knownIssues, icon: CircleAlert, tone: "text-amber bg-amber/12" },
];

export default function Changelog() {
  return (
    <section id="changelog" className="section-space dot-field bg-amber">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <div><span className="eyebrow">Release notes</span><h2 className="section-title">Still becoming a better Naeem.</h2><div className="mt-7 inline-flex items-center gap-3 rounded-xl bg-ink px-4 py-3 text-white"><span className="size-2 rounded-full bg-mint" /><span className="font-mono text-xs font-bold">NaaS {changelog.version}</span></div></div>
          <div className="grid gap-4">
            {groups.map(({ title, items, icon: Icon, tone }) => (
              <article key={title} className="ticket-shadow rounded-[1.5rem] bg-white p-6 sm:p-7">
                <div className="mb-5 flex items-center gap-3"><span className={`grid size-9 place-items-center rounded-xl ${tone}`}><Icon className="size-4" /></span><h3 className="font-display text-xl font-bold">{title}</h3></div>
                <ul className="grid gap-2 sm:grid-cols-2">{items.map((item) => <li key={item} className="rounded-xl border-2 border-ink/7 bg-paper px-4 py-3 text-sm text-ink/62">{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
