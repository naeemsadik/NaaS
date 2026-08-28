"use client";

import { useState, useRef } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  children: React.ReactNode;
  language?: string;
  showCopy?: boolean;
}

export default function CodeBlock({ children, language = "bash", showCopy = true }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleCopy = () => {
    if (contentRef.current) {
      navigator.clipboard.writeText(contentRef.current.textContent || "");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-dark-card rounded-2xl overflow-hidden shadow-lg border border-white/10 my-6">
      <div className="flex items-center justify-between px-4 py-3 bg-dark-card-lighter/50 border-b border-white/5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        {showCopy && (
          <button
            onClick={handleCopy}
            className="text-white/50 hover:text-white transition-colors"
            aria-label="Copy code"
          >
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
          </button>
        )}
      </div>
      <div className="p-6 overflow-x-auto">
        <pre className="font-mono text-sm text-gray-300">
          <code ref={contentRef} className={`language-${language}`}>
            {children}
          </code>
        </pre>
      </div>
    </div>
  );
}
