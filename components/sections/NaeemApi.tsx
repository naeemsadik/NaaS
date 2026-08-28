"use client";

import { motion } from "framer-motion";
import CodeBlock from "@/components/ui/CodeBlock";

export default function NaeemApi() {
  return (
    <section id="api" className="py-24 px-4 bg-slate-900 text-slate-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-4xl font-bold">Naeem API™</h2>
            <span className="bg-pink-primary/20 text-pink-300 px-3 py-1 rounded-full text-sm font-mono border border-pink-primary/30">v2.7</span>
          </div>
          <p className="text-slate-400">Programmatic access to your personal Naeem.</p>
        </div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-2 text-sm font-mono text-slate-400">GET Endpoint</div>
            <CodeBlock language="json">
              <span className="text-gray-500">{"// Get Naeem's current status"}</span>{"\n"}
              <span className="text-pink-500 font-bold">GET</span> /naeem{"\n\n"}
              {"{"}{"\n"}
              {"  "}<span className="text-blue-400">{'"name"'}</span>: <span className="text-green-400">{'"Naeem"'}</span>,{"\n"}
              {"  "}<span className="text-blue-400">{'"mood"'}</span>: <span className="text-green-400">{'"hungry"'}</span>,{"\n"}
              {"  "}<span className="text-blue-400">{'"availability"'}</span>: <span className="text-green-400">{'"ask nicely"'}</span>,{"\n"}
              {"  "}<span className="text-blue-400">{'"reply_time"'}</span>: <span className="text-green-400">{'"depends"'}</span>,{"\n"}
              {"  "}<span className="text-blue-400">{'"will_listen_to_your_rant"'}</span>: <span className="text-yellow-300">true</span>{"\n"}
              {"}"}
            </CodeBlock>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-2 text-sm font-mono text-slate-400">POST Endpoint</div>
            <CodeBlock language="json">
              <span className="text-gray-500">{"// Request comfort from Naeem"}</span>{"\n"}
              <span className="text-pink-500 font-bold">POST</span> /request-comfort{"\n\n"}
              {"{"}{"\n"}
              {"  "}<span className="text-blue-400">{'"success"'}</span>: <span className="text-yellow-300">true</span>,{"\n"}
              {"  "}<span className="text-blue-400">{'"message"'}</span>: <span className="text-green-400">{'"Naeem has been emotionally deployed."'}</span>{"\n"}
              {"}"}
            </CodeBlock>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="mb-2 text-sm font-mono text-slate-400">Error Handling</div>
            <CodeBlock language="json">
              <span className="text-red-500 font-bold">ERROR</span>{" "}
              <span className="text-red-400">418</span> — <span className="text-red-300">{`"I'm a teapot"`}</span>{"\n\n"}
              {"{"}{"\n"}
              {"  "}<span className="text-blue-400">{'"error"'}</span>: <span className="text-red-400">418</span>,{"\n"}
              {"  "}<span className="text-blue-400">{'"message"'}</span>: <span className="text-green-400">{'"Naeem is currently being stupid. Please try again later."'}</span>{"\n"}
              {"}"}
            </CodeBlock>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
