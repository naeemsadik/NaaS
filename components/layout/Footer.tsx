import Link from "next/link";
import { ArrowUp, Orbit } from "lucide-react";

const footerLinks = [
  { label: "Product", href: "#product" },
  { label: "API", href: "#api" },
  { label: "Pricing", href: "#pricing" },
  { label: "Changelog", href: "#changelog" },
  { label: "Status", href: "#status" },
];

export default function Footer() {
  return (
    <footer className="relative bg-ink text-white">
      <div className="grid h-2 grid-cols-4" aria-hidden="true"><span className="bg-signal" /><span className="bg-violet" /><span className="bg-cyan" /><span className="bg-amber" /></div>
      <div className="site-container py-14 sm:py-18">
        <div className="grid gap-12 border-b border-white/12 pb-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl border-2 border-white bg-signal text-white shadow-[0.22rem_0.22rem_0_#45d7eb]"><Orbit className="size-5" /></span>
              <span className="font-display text-2xl font-bold tracking-[-0.05em]">NaaS</span>
            </div>
            <p className="max-w-md text-base leading-7 text-white/58">Built for conversations that need a person, not another dashboard.</p>
          </div>
          <nav className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm font-semibold sm:grid-cols-3 md:justify-self-end" aria-label="Footer navigation">
            {footerLinks.map((link) => <Link key={link.label} href={link.href} className="text-white/62 transition-colors hover:text-white">{link.label}</Link>)}
          </nav>
        </div>
        <div className="flex flex-col gap-5 pt-7 text-xs text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 NaaS. No actual cloud infrastructure involved.</p>
          <Link href="#hero" className="inline-flex items-center gap-2 font-semibold text-white/70 hover:text-white">Back to top <ArrowUp className="size-3.5" /></Link>
        </div>
      </div>
    </footer>
  );
}
