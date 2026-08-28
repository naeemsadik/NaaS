"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  label: string;
  value: number;
  color: string;
  redactedText?: string;
}

export default function ProgressBar({ label, value, color, redactedText = "REDACTED" }: ProgressBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  let displayValue = `${value}%`;
  if (value === -1) {
    displayValue = redactedText;
  } else if (value === -2) {
    displayValue = "Depends on mood";
  }

  const barWidth = value >= 0 ? value : (value === -1 ? 75 : 50);

  return (
    <div className="w-full mb-6" ref={ref}>
      <div className="flex justify-between items-end mb-2">
        <span className="font-semibold text-gray-800">{label}</span>
        <span
          className={cn(
            "text-sm font-medium",
            value === -1 && "blur-[2px] select-none text-red-500",
            value === -2 && "text-gray-500 italic"
          )}
        >
          {displayValue}
        </span>
      </div>
      <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className={cn("h-full rounded-full", color)}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${barWidth}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
