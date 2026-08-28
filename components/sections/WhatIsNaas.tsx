"use client";

import { motion } from "framer-motion";
import { traditionalSaas, naasFeatures } from "@/lib/constants";
import { X, Check } from "lucide-react";

export default function WhatIsNaas() {
  return (
    <section id="what-is-naas" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">NaaS is infrastructure.</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Traditional services require apps, subscriptions, passwords, APIs and complicated onboarding. NaaS requires only one thing: a girl who needs Naeem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-100 rounded-3xl p-8 shadow-sm border border-gray-200 opacity-80"
          >
            <h3 className="text-2xl font-bold text-gray-500 mb-6 flex items-center gap-2">
              <span className="text-3xl">🏢</span> Traditional SaaS
            </h3>
            <ul className="space-y-4">
              {traditionalSaas.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-500">
                  <X className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                  <span className="line-through">{item.emoji} {item.label}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-pink-primary/10 to-lavender/20 rounded-3xl p-8 shadow-lg ring-2 ring-pink-primary/50 shadow-pink-primary/20 glow-pink"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2 text-gradient-pink">
              <span className="text-3xl">✨</span> NaaS
            </h3>
            <ul className="space-y-4">
              {naasFeatures.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-800 font-medium">
                  <Check className="w-6 h-6 text-pink-primary shrink-0 mt-0.5" />
                  <span>{item.emoji} {item.label}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
