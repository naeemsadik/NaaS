import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-dark-card text-white/70 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <span className="font-bold text-2xl text-gradient-pink mb-2 block">NaaS</span>
            <p className="text-sm">Built with 💗 and questionable decisions</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#features" className="hover:text-pink-primary transition-colors">Features</Link></li>
              <li><Link href="#pricing" className="hover:text-pink-primary transition-colors">Pricing</Link></li>
              <li><Link href="#api" className="hover:text-pink-primary transition-colors">API</Link></li>
              <li><Link href="#status" className="hover:text-pink-primary transition-colors">Status</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/terms" className="hover:text-pink-primary transition-colors">Terms</Link></li>
              <li><Link href="/privacy" className="hover:text-pink-primary transition-colors">Privacy</Link></li>
              <li><Link href="/changelog" className="hover:text-pink-primary transition-colors">Changelog</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0">
          <p>NaaS © 2025. All rights reserved. (Not really.)</p>
          <p>No actual cloud infrastructure was harmed in the making of this service.</p>
        </div>
      </div>
    </footer>
  );
}
