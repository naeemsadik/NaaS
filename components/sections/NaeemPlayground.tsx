"use client";

import { useState } from "react";
import { Check, CircleHelp, Copy, Send } from "lucide-react";
import { naeemResponses } from "@/lib/constants";

const responsePool = Object.values(naeemResponses).flat();

export default function NaeemPlayground() {
  const [response, setResponse] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  function makeRequest() {
    setResponse(responsePool[Math.floor(Math.random() * responsePool.length)]);
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
          <h2 className="mx-auto section-title">No filters. Just ask.</h2>
          <p className="section-copy mx-auto mt-6">
            Press the button and Naeem decides what you get. No previews, no categories, no take-backs.
          </p>
        </div>

        <div className="ticket-shadow mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-white text-ink">
          <div className="flex flex-col gap-3 border-b-2 border-ink bg-amber px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <div className="flex items-center gap-3">
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="size-2.5 rounded-full bg-signal" />
                <span className="size-2.5 rounded-full bg-violet" />
                <span className="size-2.5 rounded-full bg-mint" />
              </span>
              <span className="mono-label text-ink/58">naas.response.unknown</span>
            </div>
            <span className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.12em] text-ink/52">
              Outcome concealed
            </span>
          </div>

          <div className="p-5 sm:p-8 lg:p-10">
            <div className="overflow-hidden rounded-2xl border-2 border-ink bg-ink text-white shadow-[0.5rem_0.5rem_0_#ff4f9a]">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
                <p className="font-mono text-xs">
                  <span className="font-bold text-cyan">GET</span> <span className="text-mint">/naeem/respond</span>
                </p>
                <CircleHelp className="size-4 text-white/30" aria-hidden="true" />
              </div>

              <div className="p-5 sm:p-7">
                <button
                  type="button"
                  onClick={makeRequest}
                  className="flex min-h-14 w-full items-center justify-center gap-2 rounded-xl border-2 border-white bg-signal px-5 font-bold text-white shadow-[0.35rem_0.35rem_0_#45d7eb] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
                >
                  <Send className="size-4" /> Ask Naeem
                </button>

                <div className="mt-7 min-h-52 rounded-xl border border-white/14 bg-[#0d0b1d] p-5 sm:p-6" aria-live="polite">
                  <div className="flex items-center justify-between gap-4">
                    <p className="mono-label text-white/34">Response</p>
                    {response && (
                      <button
                        type="button"
                        onClick={copyResponse}
                        className="inline-flex items-center gap-2 rounded-lg border border-white/12 px-3 py-2 text-xs font-semibold text-white/52 hover:bg-white/8 hover:text-white"
                        aria-label="Copy response"
                      >
                        {copied ? <Check className="size-3.5 text-mint" /> : <Copy className="size-3.5" />}
                        {copied ? "Copied" : "Copy"}
                      </button>
                    )}
                  </div>

                  {response ? (
                    <blockquote key={response} className="hero-enter mt-7 max-w-2xl font-display text-2xl font-bold leading-tight tracking-[-0.035em] sm:text-3xl">
                      “{response}”
                    </blockquote>
                  ) : (
                    <p className="mt-7 max-w-md text-sm leading-6 text-white/38">
                      Your response stays hidden until you make the request.
                    </p>
                  )}

                  <p className="mt-8 font-mono text-[0.64rem] uppercase tracking-[0.1em] text-white/28">
                    Status: {response ? "response delivered" : "waiting for a brave click"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
