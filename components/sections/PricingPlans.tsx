"use client";

import { motion } from "framer-motion";
import { pricingPlans, girlPlanPerks } from "@/lib/constants";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PricingPlans() {
  return (
    <section id="pricing" className="py-24 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Choose Your Plan</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={cn(
                "bg-white rounded-2xl p-6 shadow-md hover:-translate-y-1 transition-transform relative flex flex-col",
                plan.highlighted && "ring-2 ring-pink-primary shadow-pink-primary/20 glow-pink"
              )}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pink-primary text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                  MOST POPULAR
                </div>
              )}
              <div className="text-4xl mb-4">{plan.emoji}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">{plan.price}</div>
              <p className="text-sm text-gray-500 mb-6 flex-grow">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feat: string, fIdx: number) => (
                  <li key={fIdx} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              
              <button className={cn(
                "w-full py-3 rounded-xl font-bold transition-colors",
                plan.highlighted 
                  ? "bg-pink-primary text-white hover:bg-pink-dark" 
                  : "bg-gray-100 text-gray-900 hover:bg-gray-200"
              )}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full bg-gradient-to-r from-pink-primary/10 to-lavender/10 rounded-3xl p-8 border border-pink-primary/20 shadow-lg relative mt-20"
        >
          <div className="absolute -top-12 -right-4 md:right-12 bg-white px-5 py-4 rounded-3xl rounded-br-none shadow-xl border border-gray-100 transform rotate-2 z-10">
            <p className="text-sm font-bold text-pink-primary">Wait. Why is everything free?</p>
            <div className="absolute -bottom-3 right-0 w-6 h-6 bg-white border-b border-r border-gray-100 transform rotate-45"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span>👸</span> Girl Plan
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {girlPlanPerks.map((perk, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700 font-medium">
                    <span className="text-pink-primary text-xl">♥</span> {perk}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-auto mt-6 md:mt-0">
              <button className="w-full md:w-auto bg-pink-primary text-white rounded-full px-10 py-4 text-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all whitespace-nowrap">
                💗 Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        <p className="text-center text-xs text-gray-400 mt-8 italic">
          * Subject to Naeem's battery, sleep schedule, food availability, and general nonsense.
        </p>
      </div>
    </section>
  );
}
