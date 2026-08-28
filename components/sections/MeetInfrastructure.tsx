"use client";

import { motion } from "framer-motion";
import { User, MapPin, Briefcase, Clock, Activity, ArrowRight } from "lucide-react";
import { naeemProfile } from "@/lib/constants";

export default function MeetInfrastructure() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const icons: Record<string, any> = {
    department: Briefcase,
    location: MapPin,
    experience: Clock,
    availability: Clock,
    status: Activity
  };

  return (
    <section id="team" className="py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Meet the Infrastructure</h2>
        
        <motion.div
          whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-white rounded-3xl p-8 shadow-xl max-w-md mx-auto border border-gray-100"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-pink-primary to-lavender flex items-center justify-center shadow-inner">
              <User className="w-16 h-16 text-white" />
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold">Naeem</h3>
              <p className="text-pink-primary font-medium">Chief Naeem Officer</p>
            </div>
            
            <div className="w-full space-y-4">
              {Object.entries(naeemProfile).map(([key, value]) => {
                const Icon = icons[key] || Activity;
                return (
                  <div key={key} className="flex items-center gap-4 bg-gray-50 p-3 rounded-xl">
                    <Icon className="w-5 h-5 text-gray-400" />
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 capitalize">{key}</p>
                      <p className="text-sm font-medium">{value as string}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <a 
              href="#deploy"
              className="mt-4 w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full border-2 border-pink-primary text-pink-primary font-bold hover:bg-pink-primary hover:text-white transition-colors"
            >
              View Naeem's Résumé <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
