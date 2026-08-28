"use client";

import { useState } from "react";
import { Check, Clock3, Copy, Heart, Laugh, Send } from "lucide-react";
import { naeemResponses, type NaeemResponseMode } from "@/lib/constants";
import { cn } from "@/lib/utils";

const modes = {
  flirt: {
    label: "Flirt",
    description: "Confident lines without the awkward typing pause.",
    endpoint: "/naeem/flirt",
    action: "Give me a line",
    icon: Heart,
    activeClass: "bg-signal text-white",
  },
  joke: {
    label: "Joke",
    description: "Fresh material with absolutely no quality guarantee.",
    endpoint: "/naeem/joke",
    action: "Make me laugh",
    icon: Laugh,
    activeClass: "bg-violet text-white",
  },
  busy: {
    label: "I’m busy",
    description: "A considerate reply when your calendar says no.",
    endpoint: "/naeem/busy",
    action: "Write my reply",
    icon: Clock3,
    activeClass: "bg-cyan text-ink",
  },
} as const;

const initialPositions: Record<NaeemResponseMode, number> = { flirt: 0, joke: 0, busy: 0 };

export default function NaeemPlayground() {
  const [mode, setMode] = useState<NaeemResponseMode>("flirt");
  const [positions, setPositions] = useState(initialPositions);
  const [response, setResponse] = useState<string | null>(null);
  const [requestCount, setRequestCount] = useState(0);
  const [copied, setCopied] = useState(false);
  const selectedMode = modes[mode];
  const SelectedIcon = selectedMode.icon;

  function changeMode(nextMode: NaeemResponseMode) {
    setMode(nextMode);
    setResponse(null);
    setCopied(false);
  }

  function makeRequest() {
    const messages = naeemResponses[mode];
    const position = positions[mode];

    setResponse(messages[position]);
    setPositions((current) => ({ ...current, [mode]: (position + 1) % messages.length }));
    setRequestCount((count) => count + 1);
    setCopied(false);
  }

  async function copyResponse() {
    if (!response) return;

    try {
      await navigator.clipboard.writeText(response);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="playground" className="section-space dot-field bg-violet-soft">
      <div className="site-container">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <span className="eyebrow">Naeem on demand</span>
          <h2 className="mx-auto section-title">Need the right words? Pick a channel.</h2>
          <p className="section-copy mx-auto mt-6">Flirt, recover the conversation with a joke, or say you are busy without sounding careless. Naeem has a response ready.</p>
        </div>

        <div className="ticket-shadow mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-white text-ink">
          <div className="flex flex-col gap-3 border-b-2 border-ink bg-amber px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <div className="flex items-center gap-3">
              <span className="flex gap-1.5" aria-hidden="true"><span className="size-2.5 rounded-full bg-signal" /><span className="size-2.5 rounded-full bg-violet" /><span className="size-2.5 rounded-full bg-mint" /></span>
              <span className="mono-label text-ink/58">naas.response.switchboard</span>
            </div>
            <span className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.12em] text-ink/52">35 responses loaded</span>
          </div>

          <div className="p-5 sm:p-7 lg:p-9">
            <div className="grid gap-3 sm:grid-cols-3" role="tablist" aria-label="Response channel">
              {(Object.keys(modes) as NaeemResponseMode[]).map((modeId) => {
                const item = modes[modeId];
                const Icon = item.icon;
                const selected = mode === modeId;

                return (
                  <button
                    key={modeId}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls="response-console"
                    onClick={() => changeMode(modeId)}
                    className={cn(
                      "flex min-h-24 items-start gap-3 rounded-2xl border-2 border-ink p-4 text-left shadow-[0.25rem_0.25rem_0_#140f2d] transition-transform hover:-translate-y-0.5",
                      selected ? item.activeClass : "bg-paper text-ink",
                    )}
                  >
                    <span className={cn("grid size-9 shrink-0 place-items-center rounded-xl border-2", selected ? "border-current bg-white/14" : "border-ink bg-white")}><Icon className="size-4" /></span>
                    <span><span className="block font-display text-xl font-extrabold">{item.label}</span><span className={cn("mt-1 block text-xs leading-5", selected ? "opacity-70" : "text-ink/48")}>{naeemResponses[modeId].length} replies</span></span>
                  </button>
                );
              })}
            </div>

            <div id="response-console" role="tabpanel" className="mt-7 grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
              <div className="flex flex-col rounded-2xl border-2 border-ink bg-paper p-5 sm:p-6">
                <span className={cn("grid size-12 place-items-center rounded-2xl border-2 border-ink shadow-[0.2rem_0.2rem_0_#140f2d]", selectedMode.activeClass)}><SelectedIcon className="size-5" /></span>
                <p className="mt-7 mono-label text-ink/38">Selected channel</p>
                <h3 className="mt-2 font-display text-3xl font-extrabold tracking-[-0.05em]">{selectedMode.label}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/52">{selectedMode.description}</p>
                <div className="mt-auto pt-8">
                  <p className="mono-label text-ink/32">Library position</p>
                  <p className="mt-2 font-display text-2xl font-bold">{positions[mode] + 1} / {naeemResponses[mode].length}</p>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border-2 border-ink bg-ink text-white shadow-[0.45rem_0.45rem_0_#ff4f9a]">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <p className="font-mono text-xs"><span className="font-bold text-cyan">GET</span> <span className="text-mint">{selectedMode.endpoint}</span></p>
                  <span className="font-mono text-[0.62rem] uppercase tracking-wider text-white/32">Local session</span>
                </div>
                <div className="p-5 sm:p-6">
                  <button type="button" onClick={makeRequest} className={cn("flex min-h-13 w-full items-center justify-center gap-2 rounded-xl border-2 border-white px-5 font-bold shadow-[0.3rem_0.3rem_0_#45d7eb] transition-transform hover:-translate-y-0.5", selectedMode.activeClass)}>
                    <Send className="size-4" /> {selectedMode.action}
                  </button>

                  <div className="mt-6 min-h-44 rounded-xl border border-white/14 bg-[#0d0b1d] p-5" aria-live="polite">
                    <div className="flex items-center justify-between gap-4">
                      <p className="mono-label text-white/34">Response</p>
                      {response && <button type="button" onClick={copyResponse} className="inline-flex items-center gap-2 rounded-lg border border-white/12 px-3 py-2 text-xs font-semibold text-white/52 hover:bg-white/8 hover:text-white" aria-label="Copy response">{copied ? <Check className="size-3.5 text-mint" /> : <Copy className="size-3.5" />}{copied ? "Copied" : "Copy"}</button>}
                    </div>
                    {response ? (
                      <blockquote key={response} className="hero-enter mt-5 font-display text-2xl font-bold leading-tight tracking-[-0.035em]">“{response}”</blockquote>
                    ) : (
                      <p className="mt-5 max-w-md text-sm leading-6 text-white/38">Choose this channel’s request button to get the first response.</p>
                    )}
                    <p className="mt-6 font-mono text-[0.64rem] uppercase tracking-[0.1em] text-white/28">Status: 200 OK, confidence: suspiciously high</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-3">
          <div className="ticket-shadow rounded-2xl bg-white p-5 text-center"><p className="font-display text-4xl font-extrabold text-signal">{requestCount}</p><p className="mt-1 text-sm font-semibold text-ink/48">Session requests</p></div>
          <div className="ticket-shadow rounded-2xl bg-cyan p-5 text-center"><p className="font-display text-4xl font-extrabold">35</p><p className="mt-1 text-sm font-semibold text-ink/48">Available responses</p></div>
          <div className="ticket-shadow rounded-2xl bg-amber p-5 text-center"><p className="font-display text-4xl font-extrabold">3</p><p className="mt-1 text-sm font-semibold text-ink/48">Conversation channels</p></div>
        </div>
      </div>
    </section>
  );
}
