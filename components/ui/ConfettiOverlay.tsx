"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  rotation: number;
}

const colors = ["#FF6B9D", "#C4B5FD", "#93C5FD", "#FBBF24"]; // pink, lavender, baby-blue, gold

export function useConfetti() {
  const [particles, setParticles] = useState<Particle[]>([]);

  const triggerConfetti = useCallback((clientX: number, clientY: number) => {
    const newParticles = Array.from({ length: 50 }).map((_, i) => ({
      id: Date.now() + i,
      x: clientX,
      y: clientY,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 8 + 4,
      rotation: Math.random() * 360,
    }));
    
    setParticles((prev) => [...prev, ...newParticles]);

    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.find((np) => np.id === p.id)));
    }, 2000);
  }, []);

  const ConfettiComponent = () => (
    <div className="pointer-events-none fixed inset-0 z-[110] overflow-hidden">
      <AnimatePresence>
        {particles.map((p) => {
          const angle = Math.random() * Math.PI * 2;
          const velocity = Math.random() * 150 + 50;
          const tx = Math.cos(angle) * velocity;
          const ty = Math.sin(angle) * velocity - 100; // gravity effect

          return (
            <motion.div
              key={p.id}
              initial={{ x: p.x, y: p.y, opacity: 1, scale: 0, rotate: p.rotation }}
              animate={{
                x: p.x + tx,
                y: p.y + ty + 200, // fall down
                opacity: 0,
                scale: 1,
                rotate: p.rotation + (Math.random() * 360 - 180),
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute rounded-sm"
              style={{
                backgroundColor: p.color,
                width: p.size,
                height: p.size,
              }}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );

  return { triggerConfetti, ConfettiComponent };
}
