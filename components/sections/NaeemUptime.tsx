"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, motion } from "framer-motion";
import { downtimeCauses } from "@/lib/constants";

export default function NaeemUptime() {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const duration = 2500;
      const target = 99.87;

      const animate = (time: number) => {
        if (!startTime) startTime = time;
        const progress = Math.min((time - startTime) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Number((easeOutQuart * target).toFixed(2)));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView]);

  return (
    <section id="uptime" className="py-24 px-4 bg-dark-card text-white rounded-[3rem] mx-4 sm:mx-8 my-12">
      <div className="max-w-xl mx-auto text-center" ref={ref}>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-300">Naeem Uptime</h2>
        <div className="text-7xl sm:text-9xl font-bold text-gradient-pink mb-12 drop-shadow-lg">
          {count.toFixed(2)}%
        </div>

        <div className="bg-dark-card-lighter p-8 rounded-3xl text-left border border-white/10">
          <h3 className="text-xl font-semibold mb-6 text-gray-200">Downtime caused by:</h3>
          <ul className="space-y-4">
            {downtimeCauses.map((cause: any, index: number) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-4 text-gray-300 text-lg"
              >
                <span className="text-2xl">{cause.icon}</span>
                <span>{cause.text}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
