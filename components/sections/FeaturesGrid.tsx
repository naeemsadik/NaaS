"use client";

import { motion } from "framer-motion";
import { features } from "@/lib/constants";
import { Brain, Laugh, Soup, Wifi, Heart, LucideIcon, Sparkles } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Laugh,
  Soup,
  Wifi,
  Heart,
};

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = iconMap[feature.icon] || Sparkles;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-md card-hover transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-pink-primary/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-pink-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
