"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { serverStats } from "@/lib/constants";
import ProgressBar from "@/components/ui/ProgressBar";

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen hero-gradient flex flex-col items-center justify-center pt-20 pb-16 px-4">
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-3xl mb-8"
        >
          <Image
            src="/img/Hero.png"
            alt="Naeem Hero"
            width={800}
            height={600}
            className="w-full h-auto rounded-3xl shadow-2xl"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-2">
            Need a Naeem?
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold text-pink-primary">
            We've got one.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-gray-600 text-center mb-8 max-w-2xl"
        >
          Naeem is now available through a convenient, cloud-based service model.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <Link
            href="#deploy"
            className="bg-pink-primary text-white rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all text-center"
          >
            🩷 Deploy Naeem
          </Link>
          <Link
            href="#what-is-naas"
            className="border-2 border-pink-primary text-pink-primary rounded-full px-8 py-4 text-lg font-semibold hover:bg-pink-primary/10 transition-all text-center"
          >
            🤨 What is a Naeem?
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center gap-2 mb-12 bg-white/80 px-4 py-2 rounded-full shadow-sm"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-gray-700">Naeem is online</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-full max-w-md bg-white/60 backdrop-blur rounded-2xl p-6 shadow-lg"
        >
          <h3 className="text-lg font-bold mb-4">Server Status</h3>
          <div className="space-y-4">
            {serverStats.map((stat, idx) => (
              <ProgressBar key={idx} label={stat.label} value={stat.value} color={stat.color} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
