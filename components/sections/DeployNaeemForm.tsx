"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, BellRing, Check, CheckCircle2, Coffee, LoaderCircle, MessageCircleQuestion, Send, Siren } from "lucide-react";
import { deployRequirements, deploymentSteps, urgencyLevels } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap = { Coffee, MessageCircleQuestion, BellRing, Siren };

export default function DeployNaeemForm() {
  const [step, setStep] = useState(0);
  const [requirements, setRequirements] = useState<string[]>([]);
  const [urgency, setUrgency] = useState("");
  const [deployIndex, setDeployIndex] = useState(-1);
  const [complete, setComplete] = useState(false);

  function toggleRequirement(requirement: string) {
    setRequirements((current) => current.includes(requirement) ? current.filter((item) => item !== requirement) : [...current, requirement]);
  }

  async function deploy() {
    setStep(3);
    for (let index = 0; index < deploymentSteps.length; index += 1) {
      setDeployIndex(index);
      await new Promise((resolve) => window.setTimeout(resolve, 520));
    }
    setComplete(true);
  }

  function reset() {
    setStep(0);
    setRequirements([]);
    setUrgency("");
    setDeployIndex(-1);
    setComplete(false);
  }

  return (
    <section id="deploy" className="section-space relative overflow-hidden bg-[radial-gradient(circle_at_80%_12%,rgba(115,87,255,0.42),transparent_28%),linear-gradient(145deg,#140f2d,#201649)] text-white">
      <div className="site-container grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <span className="eyebrow !text-violet-soft">Request console</span>
          <h2 className="section-title">Deploy Naeem.</h2>
          <p className="section-copy mt-6 !text-white/52">Tell the system what kind of human support you need. No personal data, payment details, or actual deployment required.</p>
          <div className="mt-9 space-y-3 font-mono text-xs text-white/42">
            {["Select support", "Set urgency", "Confirm request"].map((label, index) => (
              <div key={label} className="flex items-center gap-3"><span className={cn("grid size-6 place-items-center rounded-full border text-[0.6rem]", step >= index ? "border-mint bg-mint text-ink" : "border-white/18")}>{step > index ? <Check className="size-3" /> : index + 1}</span><span className={step >= index ? "text-white/78" : ""}>{label}</span></div>
            ))}
          </div>
        </div>

        <div className="min-h-[34rem] overflow-hidden rounded-[2rem] border-2 border-white bg-white text-ink shadow-[0.8rem_0.8rem_0_#ff4f9a]">
          <div className="flex items-center justify-between border-b-2 border-ink bg-amber px-6 py-4 sm:px-8"><span className="mono-label text-ink/58">deployment.request</span><span className="rounded-full border-2 border-ink bg-white px-3 py-1 font-mono text-xs font-bold text-violet">{Math.min(step + 1, 3)}/3</span></div>
          <div className="p-6 sm:p-8 lg:p-10">
            {step === 0 && (
              <div>
                <h3 className="font-display text-3xl font-bold tracking-[-0.04em]">What do you need?</h3>
                <p className="mt-2 text-sm text-ink/48">Select everything that applies. The system can multitask.</p>
                <fieldset className="mt-7 grid gap-3 sm:grid-cols-2">
                  <legend className="sr-only">Support requirements</legend>
                  {deployRequirements.map((requirement) => {
                    const selected = requirements.includes(requirement);
                    return (
                      <label key={requirement} className={cn("flex min-h-20 cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors", selected ? "border-violet bg-violet/7" : "border-ink/9 bg-paper hover:border-violet/30")}>
                        <input type="checkbox" className="sr-only" checked={selected} onChange={() => toggleRequirement(requirement)} />
                        <span className={cn("mt-0.5 grid size-5 shrink-0 place-items-center rounded-md border", selected ? "border-violet bg-violet text-white" : "border-ink/18 bg-white")}>{selected && <Check className="size-3" />}</span>
                        <span className="text-sm font-semibold leading-5">{requirement}</span>
                      </label>
                    );
                  })}
                </fieldset>
                <div className="mt-8 flex justify-end"><button type="button" className="button-primary" disabled={!requirements.length} onClick={() => setStep(1)}>Continue <ArrowRight className="size-4" /></button></div>
              </div>
            )}

            {step === 1 && (
              <div>
                <h3 className="font-display text-3xl font-bold tracking-[-0.04em]">How urgent is it?</h3>
                <p className="mt-2 text-sm text-ink/48">Be honest. The queue manager is very judgmental.</p>
                <fieldset className="mt-7 grid gap-3 sm:grid-cols-2">
                  <legend className="sr-only">Urgency level</legend>
                  {urgencyLevels.map((level) => {
                    const selected = urgency === level.label;
                    const Icon = iconMap[level.icon as keyof typeof iconMap];
                    return (
                      <label key={level.label} className={cn("cursor-pointer rounded-2xl border p-5 transition-all", selected ? "border-signal bg-signal/7 shadow-lg shadow-signal/8" : "border-ink/9 bg-paper hover:border-signal/30")}>
                        <input type="radio" name="urgency" className="sr-only" value={level.label} checked={selected} onChange={() => setUrgency(level.label)} />
                        <Icon className={cn("size-6", selected ? "text-signal" : "text-ink/35")} />
                        <p className="mt-6 font-display text-xl font-bold">{level.label}</p>
                      </label>
                    );
                  })}
                </fieldset>
                <div className="mt-8 flex justify-between"><button type="button" className="button-secondary" onClick={() => setStep(0)}><ArrowLeft className="size-4" /> Back</button><button type="button" className="button-primary" disabled={!urgency} onClick={() => setStep(2)}>Review <ArrowRight className="size-4" /></button></div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="font-display text-3xl font-bold tracking-[-0.04em]">Ready for dispatch.</h3>
                <p className="mt-2 text-sm text-ink/48">One last look before absolutely nothing leaves the cloud.</p>
                <div className="mt-8 rounded-2xl bg-paper p-6">
                  <p className="mono-label text-violet">Support requested</p>
                  <ul className="mt-4 space-y-2">{requirements.map((item) => <li key={item} className="flex items-center gap-2 text-sm font-semibold"><Check className="size-4 text-mint" />{item}</li>)}</ul>
                  <div className="my-6 h-px bg-ink/8" />
                  <p className="mono-label text-signal">Urgency</p><p className="mt-2 font-display text-2xl font-bold">{urgency}</p>
                </div>
                <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between"><button type="button" className="button-secondary" onClick={() => setStep(1)}><ArrowLeft className="size-4" /> Back</button><button type="button" className="button-primary bg-signal hover:bg-signal-dark" onClick={deploy}><Send className="size-4" /> Deploy Naeem</button></div>
              </div>
            )}

            {step === 3 && (
              <div className="flex min-h-[25rem] flex-col justify-center">
                <div className={cn("mx-auto mb-7 grid size-16 place-items-center rounded-2xl", complete ? "bg-mint/12 text-mint" : "bg-violet/10 text-violet")}>{complete ? <CheckCircle2 className="size-8" /> : <LoaderCircle className="size-8 animate-spin" />}</div>
                <h3 className="text-center font-display text-3xl font-bold tracking-[-0.04em]">{complete ? "Deployment complete." : "Finding Naeem."}</h3>
                <div className="mx-auto mt-7 w-full max-w-md space-y-2 font-mono text-xs">
                  {deploymentSteps.map((message, index) => deployIndex >= index && <p key={message} className={cn("flex items-center gap-2 rounded-lg px-3 py-2", index === deploymentSteps.length - 1 && complete ? "bg-mint/10 text-[#138b6b]" : "bg-paper text-ink/54")}><span className="text-violet">›</span>{message}</p>)}
                </div>
                {complete && <button type="button" onClick={reset} className="button-secondary mx-auto mt-8">Start another request</button>}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
