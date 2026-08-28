"use client";

import { motion } from "framer-motion";
import { personalityBars } from "@/lib/constants";
import ProgressBar from "@/components/ui/ProgressBar";

export default function PersonalityDashboard() {
  return (
    <section id="dashboard" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gradient-pink">Naeem Personality Dashboard</h2>
        <p className="text-center text-gray-600 mb-10">Real-time monitoring of critical Naeem metrics.</p>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="space-y-6">
            {personalityBars.map((bar, index) => (
              <motion.div
                key={bar.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-800">{bar.label}</span>
                  <span className="text-gray-500">{bar.value}%</span>
                </div>
                <ProgressBar label={bar.label} value={bar.value} color={bar.color || "bg-pink-primary"} />
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-center text-gray-400 mt-8 italic">
            * Data updated every time Naeem has a snack.
          </p>
        </div>
      </div>
    </section>
  );
}
