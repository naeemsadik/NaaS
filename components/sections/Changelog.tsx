"use client";

import { motion } from "framer-motion";
import { changelog } from "@/lib/constants";

export default function Changelog() {
  return (
    <section id="changelog" className="py-20 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center">Changelog</h2>
        
        <div className="bg-dark-card text-white rounded-2xl p-6 md:p-8 font-mono shadow-2xl overflow-hidden relative">
          <div className="flex items-center gap-2 mb-6 border-b border-gray-700 pb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 text-gray-400 text-sm">naas@server:~/changelog$</span>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-green-400 text-xl">NaaS v2.7.4 — Release Notes</h3>
            
            <div className="space-y-4">
              {changelog.added && (
                <div>
                  <h4 className="text-gray-400 mb-2">Added</h4>
                  <ul className="space-y-1">
                    {changelog.added.map((item: string, i: number) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-green-500">+</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {changelog.fixed && (
                <div>
                  <h4 className="text-gray-400 mb-2">Fixed</h4>
                  <ul className="space-y-1">
                    {changelog.fixed.map((item: string, i: number) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-blue-400">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {changelog.knownIssues && (
                <div>
                  <h4 className="text-gray-400 mb-2">Known Issues</h4>
                  <ul className="space-y-1">
                    {changelog.knownIssues.map((item: string, i: number) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-yellow-400">⚠</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
