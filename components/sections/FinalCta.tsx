"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FinalCta() {
  const [clicked, setClicked] = useState(false);

  return (
    <section id="cta" className="py-32 px-4 relative overflow-hidden hero-gradient">
      {/* Floating Emojis */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ y: [0, -20, 0] }} 
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute top-20 left-[20%] text-4xl"
        >
          🩷
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0] }} 
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute bottom-20 left-[15%] text-3xl"
        >
          ✨
        </motion.div>
        <motion.div 
          animate={{ y: [0, -30, 0] }} 
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          className="absolute top-32 right-[20%] text-4xl"
        >
          🚀
        </motion.div>
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10 space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold">
          Ready to experience Naeem?
        </h2>
        <p className="text-lg text-gray-600">
          No downloads. No installation. No credit card. No API key. Just Naeem.
        </p>
        
        <div className="pt-8 h-24 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {!clicked ? (
              <motion.button
                key="btn"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setClicked(true)}
                className="bg-pink-primary text-white font-bold text-xl px-12 py-5 rounded-full glow-pink shadow-xl shadow-pink-primary/30"
              >
                🚀 GET NAEEM
              </motion.button>
            ) : (
              <motion.div
                key="msg"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-6 rounded-2xl shadow-xl text-pink-primary font-medium text-lg border-2 border-pink-100"
              >
                Congratulations. You have successfully done absolutely nothing. Because Naeem was already here. 😂
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
