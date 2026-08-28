"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, Orbit, X } from "lucide-react";
import { navLinks } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/92 text-white backdrop-blur-xl">
      <div className="site-container flex h-[4.5rem] items-center justify-between">
        <Link href="#hero" className="group flex items-center gap-2.5" aria-label="NaaS home">
          <span className="grid size-9 place-items-center rounded-xl border-2 border-white bg-signal text-white shadow-[0.22rem_0.22rem_0_#45d7eb] transition-transform group-hover:-rotate-6">
            <Orbit className="size-5" aria-hidden="true" />
          </span>
          <span className="font-display text-xl font-bold tracking-[-0.05em]">NaaS</span>
          <span className="hidden font-mono text-[0.62rem] font-semibold uppercase tracking-[0.13em] text-white/42 sm:inline">Human infrastructure</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm font-semibold text-white/58 transition-colors hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="#deploy" className="button-primary hidden min-h-10 border-white bg-amber px-4 text-sm text-ink shadow-[0.25rem_0.25rem_0_#ff4f9a] hover:bg-white hover:text-ink sm:inline-flex">
            Deploy Naeem
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-xl border border-white/20 bg-white/8 text-white lg:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav id="mobile-menu" className="border-t border-white/10 bg-ink px-4 py-4 lg:hidden" aria-label="Mobile navigation">
          <div className="site-container grid gap-1">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="rounded-xl px-3 py-3 font-semibold text-white/72 hover:bg-white/8 hover:text-white" onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="#deploy" className="button-primary mt-2 border-white bg-signal sm:hidden" onClick={() => setIsOpen(false)}>
              Deploy Naeem
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
