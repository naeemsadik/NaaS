"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

export default function Testimonials() {
  const renderStars = (count: number) => {
    return Array(count).fill("⭐").join("");
  };

  return (
    <section id="testimonials" className="py-24 px-4 bg-lavender-light/20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">What People Are Saying</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 flex flex-col h-full hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 text-sm">{renderStars(t.stars)}</div>
              <p className="italic text-gray-700 text-lg mb-6 flex-grow">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-200 to-lavender rounded-full flex items-center justify-center font-bold text-gray-700 shrink-0">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold flex items-center gap-2 text-gray-900 flex-wrap">
                    {t.author}
                    {t.badge && (
                      <span className="px-2 py-0.5 bg-pink-primary/10 text-pink-primary text-xs rounded-full font-medium whitespace-nowrap">
                        {t.badge}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {t.response && (
                <div className="mt-6 p-4 bg-pink-primary/5 rounded-xl border border-pink-primary/10 relative">
                  <div className="absolute -top-3 left-6 text-pink-primary/40 bg-white p-0.5 rounded-full">
                    <MessageCircle size={20} fill="currentColor" />
                  </div>
                  <p className="italic text-sm text-gray-800">
                    <span className="font-semibold text-pink-primary not-italic mr-2">Naeem:</span>
                    {t.response}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
