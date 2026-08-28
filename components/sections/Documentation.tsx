"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Book } from "lucide-react";
import CodeBlock from "@/components/ui/CodeBlock";

export default function Documentation() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? "" : prev + ".");
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="docs" className="py-20 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="flex items-center justify-center gap-3">
          <Book className="w-8 h-8 text-pink-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-center">Documentation</h2>
        </div>

        <div className="space-y-6">
          <CodeBlock language="bash">
            <span className="text-green-400">npm install naeem</span>
          </CodeBlock>

          <CodeBlock language="javascript">
            <span className="text-pink-400">{"import"}</span>{" { "}
            <span className="text-yellow-300">Naeem</span>
            {" } "}
            <span className="text-pink-400">from</span>{" "}
            <span className="text-green-400">{`'naas'`}</span>;{"\n\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">naeem</span>{" = "}
            <span className="text-pink-400">new</span>{" "}
            <span className="text-yellow-300">Naeem</span>{"();\n"}
            <span className="text-blue-300">naeem</span>.
            <span className="text-green-300">talk</span>{"();\n"}
            <span className="text-blue-300">naeem</span>.
            <span className="text-green-300">listen</span>{"();\n"}
            <span className="text-blue-300">naeem</span>.
            <span className="text-green-300">help</span>{"();"}
          </CodeBlock>

          <div className="font-mono p-4 bg-dark-card text-white rounded-xl text-sm">
            <span className="text-gray-400">{">"} </span>
            <span>Naeem is thinking{dots}</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
