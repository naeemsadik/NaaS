import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Asterisk, Check, Headphones, HeartHandshake, Radio, Sandwich, Sparkles, Zap } from "lucide-react";
import { serverStats } from "@/lib/constants";
import ProgressBar from "@/components/ui/ProgressBar";

const ribbonItems = ["Always listening", "Questionable jokes", "Snack protocol", "Human support", "NaaS live"];

export default function HeroSection() {
  return (
    <section id="hero" className="soft-gradient relative overflow-hidden text-white">
      <div className="grid-noise absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" aria-hidden="true" />
      <div className="absolute -left-24 top-24 size-72 rounded-full bg-signal/24 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-16 top-12 size-80 rounded-full bg-cyan/18 blur-3xl" aria-hidden="true" />
      <p className="pointer-events-none absolute -right-8 top-[14%] hidden font-display text-[18rem] font-extrabold leading-none tracking-[-0.1em] text-white/[0.025] xl:block" aria-hidden="true">NaaS</p>

      <div className="site-container relative grid min-h-[calc(100svh-4.5rem)] items-center gap-16 pb-24 pt-14 lg:grid-cols-[1.02fr_0.98fr] lg:pb-28 lg:pt-20">
        <div className="hero-enter max-w-2xl">
          <div className="sticker mb-7 -rotate-2 bg-amber px-3 py-2 text-ink">
            <Radio className="size-3.5" /> Human infrastructure is live
          </div>
          <h1 className="text-balance font-display text-[clamp(4.4rem,9.5vw,8rem)] font-extrabold leading-[0.8] tracking-[-0.085em]">
            Need a<br />
            <span className="relative inline-block text-signal">
              Naeem?
              <Sparkles className="absolute -right-8 -top-3 size-7 text-amber sm:-right-12 sm:size-9" strokeWidth={2.6} aria-hidden="true" />
            </span>
            <br />We’ve got one.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-white/68 sm:text-xl">Your personal listener, hype man, and chaos manager—deployed with no app, no card, and no awkward onboarding.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="#deploy" className="button-primary border-white bg-signal px-6 shadow-[0.35rem_0.35rem_0_#45d7eb] hover:bg-signal-dark hover:shadow-[0.5rem_0.5rem_0_#45d7eb]">Deploy Naeem <ArrowUpRight className="size-4" /></Link>
            <Link href="#product" className="button-secondary border-white/70 bg-white text-ink px-6">Meet the service <ArrowDownRight className="size-4" /></Link>
          </div>
          <div className="mt-9 flex flex-wrap gap-2.5">
            {["No downloads", "No subscription", "Actually human"].map((item) => <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-2 text-xs font-bold text-white/72"><Check className="size-3.5 text-mint" />{item}</span>)}
          </div>
        </div>

        <div className="hero-enter-delay relative mx-auto w-full max-w-[36rem] lg:ml-auto">
          <div className="absolute inset-[7%] rotate-6 rounded-[3rem] border-2 border-ink bg-cyan shadow-[0.8rem_0.8rem_0_#ff4f9a]" aria-hidden="true" />
          <div className="checker-field absolute -right-6 top-2 size-44 rotate-12 rounded-[2.5rem] border-2 border-ink bg-violet" aria-hidden="true" />

          <div className="relative mx-auto aspect-[0.92] w-[78%] overflow-hidden rounded-[2.7rem] border-[0.65rem] border-white bg-ink shadow-[0_0_0_2px_#140f2d,0.9rem_0.9rem_0_#140f2d]">
            <Image src="/img/hero-naeem-v2.png" alt="Naeem holding his phone in the NaaS color studio" fill sizes="(max-width: 768px) 74vw, 440px" className="object-cover" style={{ objectPosition: "50% 42%" }} priority />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/68 to-transparent px-7 pb-7 pt-28 text-white">
              <div className="flex items-end justify-between gap-4"><div><p className="font-display text-3xl font-extrabold tracking-[-0.05em]">Naeem</p><p className="font-mono text-[0.63rem] uppercase tracking-[0.13em] text-white/58">Chief Naeem Officer</p></div><span className="rounded-full bg-mint px-3 py-1.5 font-mono text-[0.6rem] font-extrabold uppercase tracking-wider text-ink">Online</span></div>
            </div>
          </div>

          <div className="sticker gentle-bob absolute -left-1 top-[10%] -rotate-6 bg-amber px-3 py-3 text-ink sm:-left-7"><Headphones className="size-4" /> Listens</div>
          <div className="sticker absolute -right-1 top-[30%] rotate-6 bg-signal px-3 py-3 text-white sm:-right-8"><Zap className="size-4" /> Hypes</div>
          <div className="sticker absolute -left-3 bottom-[23%] rotate-3 bg-violet px-3 py-3 text-white sm:-left-10"><HeartHandshake className="size-4" /> Shows up</div>
          <div className="sticker absolute -right-1 bottom-[7%] -rotate-3 bg-cyan px-3 py-3 text-ink sm:-right-8"><Sandwich className="size-4" /> Snack ready</div>

          <div className="panel relative z-10 mx-auto -mt-5 w-[94%] bg-white p-5 text-ink sm:p-6">
            <div className="mb-5 flex items-center justify-between ticket-rule pt-4">
              <div><p className="mono-label text-ink/38">Live human telemetry</p><p className="mt-1 font-display text-xl font-extrabold">Running suspiciously well</p></div>
              <Radio className="size-5 text-signal" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">{serverStats.map((stat) => <ProgressBar key={stat.label} {...stat} />)}</div>
          </div>
        </div>
      </div>

      <div className="relative z-20 -mb-3 -rotate-1 overflow-hidden border-y-2 border-ink bg-amber py-3.5 text-ink shadow-[0_-0.35rem_0_#ff4f9a]">
        <div className="marquee-track flex">
          {[0, 1].map((copy) => <div key={copy} className="flex shrink-0 items-center">{ribbonItems.map((item) => <span key={`${copy}-${item}`} className="flex items-center gap-5 px-5 font-display text-lg font-extrabold uppercase tracking-[-0.02em]"><Asterisk className="size-5 text-signal" strokeWidth={3} />{item}</span>)}</div>)}
        </div>
      </div>
    </section>
  );
}
