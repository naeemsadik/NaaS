"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Orbit } from "lucide-react";

export default function FinalCta() {
  const [requested, setRequested] = useState(false);

  return (
    <section id="cta" className="overflow-hidden border-y-2 border-ink bg-[radial-gradient(circle_at_14%_18%,rgba(255,212,71,0.24),transparent_24%),radial-gradient(circle_at_86%_82%,rgba(115,87,255,0.34),transparent_30%),linear-gradient(135deg,#ff4f9a,#d92d77)] text-white">
      <div className="site-container relative py-24 text-center sm:py-32">
        <Orbit className="absolute -left-28 -top-28 size-72 text-white/10" strokeWidth={0.6} aria-hidden="true" />
        <Orbit className="absolute -bottom-36 -right-28 size-80 text-white/10" strokeWidth={0.6} aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl">
          <p className="mono-label text-white/62">No download. No API key. No card.</p>
          <h2 className="mt-6 font-display text-[clamp(3.7rem,9vw,7.5rem)] font-bold leading-[0.88] tracking-[-0.075em]">Ready when you are.</h2>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-white/72">The most useful part of NaaS was already here. You only needed to ask.</p>
          <div className="mt-10 flex min-h-16 items-center justify-center" aria-live="polite">
            {!requested ? (
              <button type="button" className="inline-flex min-h-14 items-center gap-2 rounded-xl border-2 border-ink bg-amber px-7 font-bold text-ink shadow-[0.4rem_0.4rem_0_#140f2d] transition-transform hover:-translate-y-1" onClick={() => setRequested(true)}>Get Naeem <ArrowUpRight className="size-4" /></button>
            ) : (
              <div className="inline-flex items-center gap-3 rounded-xl bg-white px-6 py-4 font-semibold text-ink shadow-2xl"><CheckCircle2 className="size-5 text-mint" />Naeem was already here.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
