"use client";

import { motion } from "framer-motion";
import { techStack } from "@/lib/constants";

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center">Tech Stack</h2>
        
        <div className="bg-dark-card text-white rounded-2xl p-6 md:p-8 font-mono shadow-2xl overflow-hidden relative">
          <div className="flex items-center gap-2 mb-6 border-b border-gray-700 pb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 text-gray-400 text-sm">naas@server:~/stack$</span>
          </div>
          
          <div className="space-y-2">
            {techStack.map((item, i) => (
              <div key={i} className="flex">
                <span className="text-baby-blue w-32 sm:w-48 shrink-0">{item.key}:</span>
                <span className="text-green-400 whitespace-pre-wrap">{item.value}</span>
              </div>
            ))}
            <div className="mt-4 flex">
              <span className="text-gray-400">naas@server:~/stack$</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="ml-2 w-2 bg-white inline-block h-5"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
