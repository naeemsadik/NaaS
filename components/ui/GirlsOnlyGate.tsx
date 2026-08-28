"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { ShieldCheck, UserCheck, VenetianMask } from "lucide-react";

export default function GirlsOnlyGate() {
  const passed = useSyncExternalStore(
    () => () => undefined,
    () => Boolean(window.localStorage.getItem("naas-gate-passed")),
    () => true,
  );
  const [dismissed, setDismissed] = useState(false);
  const [refused, setRefused] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const showGate = !passed && !dismissed;

  useEffect(() => {
    if (!showGate) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDismissed(true);
    };

    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [showGate]);

  function allowEntry() {
    window.localStorage.setItem("naas-gate-passed", "true");
    setDismissed(true);
  }

  function decline() {
    setRefused(true);
    window.setTimeout(() => setDismissed(true), 2200);
  }

  if (!showGate) return null;

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-ink/72 p-4 backdrop-blur-md" role="presentation">
      <div ref={dialogRef} tabIndex={-1} className="panel w-full max-w-md overflow-hidden bg-white" role="dialog" aria-modal="true" aria-labelledby="gate-title">
        <div className="h-1.5 bg-[linear-gradient(90deg,#f34883_0_34%,#6d63e8_34%_68%,#27c79a_68%)]" />
        <div className="p-7 sm:p-9">
          {refused ? (
            <div className="py-6 text-center" aria-live="polite">
              <span className="mx-auto mb-5 grid size-14 place-items-center rounded-2xl bg-amber/18 text-amber"><VenetianMask className="size-7" /></span>
              <h2 id="gate-title" className="font-display text-2xl font-bold tracking-[-0.04em]">Suspiciously mysterious.</h2>
              <p className="mt-3 text-sm leading-6 text-ink/58">NaaS security has noted your refusal and is pretending this was a serious check.</p>
            </div>
          ) : (
            <>
              <span className="mb-6 grid size-14 place-items-center rounded-2xl bg-violet/10 text-violet"><ShieldCheck className="size-7" /></span>
              <p className="mono-label mb-3 text-violet">Access protocol</p>
              <h2 id="gate-title" className="font-display text-3xl font-bold tracking-[-0.05em]">Girls Only mode is active.</h2>
              <p className="mt-3 leading-7 text-ink/58">One highly advanced security question stands between you and human infrastructure.</p>
              <p className="mt-7 font-semibold">Are you a girl?</p>
              <div className="mt-4 grid gap-3">
                <button type="button" onClick={allowEntry} className="button-primary w-full"><UserCheck className="size-4" /> Yes, continue</button>
                <button type="button" onClick={decline} className="button-secondary w-full"><VenetianMask className="size-4" /> I refuse to answer</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
