"use client";

import { useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  children: React.ReactNode;
  language?: string;
  showCopy?: boolean;
}

export default function CodeBlock({ children, language = "bash", showCopy = true }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const contentRef = useRef<HTMLElement>(null);

  async function handleCopy() {
    await navigator.clipboard.writeText(contentRef.current?.textContent ?? "");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#11101d] shadow-2xl shadow-black/16">
      <div className="flex items-center justify-between border-b border-white/8 px-4 py-3">
        <span className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white/38">{language}</span>
        {showCopy && (
          <button type="button" onClick={handleCopy} className="grid size-8 place-items-center rounded-lg text-white/46 transition-colors hover:bg-white/8 hover:text-white" aria-label="Copy code">
            {copied ? <Check className="size-4 text-mint" /> : <Copy className="size-4" />}
          </button>
        )}
      </div>
      <pre className="overflow-x-auto p-5 text-[0.78rem] leading-7 text-white/78 sm:p-6 sm:text-sm">
        <code ref={contentRef} className={`language-${language}`}>{children}</code>
      </pre>
    </div>
  );
}
