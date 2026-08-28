"use client";

import { motion } from "framer-motion";
import { Activity, Server, Database, Globe, Cpu, CheckCircle, AlertTriangle, XCircle, Loader } from "lucide-react";
import { statusServices } from "@/lib/constants";
import { cn } from "@/lib/utils";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, any> = {
  Server,
  Database,
  Globe,
  Cpu,
  Activity
};

const statusConfig = {
  operational: { text: "Operational", color: "bg-green-100 text-green-700 border-green-200", icon: CheckCircle },
  degraded: { text: "Degraded", color: "bg-yellow-100 text-yellow-700 border-yellow-200", icon: AlertTriangle },
  investigating: { text: "Investigating", color: "bg-yellow-100 text-yellow-700 border-yellow-200", icon: Loader },
  outage: { text: "Major Outage", color: "bg-red-100 text-red-700 border-red-200", icon: XCircle },
};

export default function StatusPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const hasIssues = statusServices.some((s: any) => s.status !== "operational");
  
  return (
    <section id="status" className="py-20 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="flex items-center justify-center gap-3">
          <Activity className="w-8 h-8 text-pink-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-center">System Status</h2>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div className="bg-dark-card text-white p-4 px-6 font-mono text-sm">
            status.naas.com
          </div>
          
          <div className="p-6 md:p-8 space-y-8">
            <div className={cn(
              "p-4 rounded-xl border flex items-center justify-between",
              hasIssues ? "bg-yellow-50 border-yellow-200" : "bg-green-50 border-green-200"
            )}>
              <span className={cn(
                "font-medium",
                hasIssues ? "text-yellow-800" : "text-green-800"
              )}>
                {hasIssues ? "Some Systems Degraded" : "All Systems Mostly Operational"}
              </span>
              <Activity className={cn("w-5 h-5", hasIssues ? "text-yellow-600" : "text-green-600")} />
            </div>
            
            <div className="space-y-4">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {statusServices.map((service: any, i: number) => {
                const Icon = iconMap[service.icon] || Activity;
                const config = statusConfig[service.status as keyof typeof statusConfig] || statusConfig.operational;
                const StatusIcon = config.icon;
                
                return (
                  <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-gray-500" />
                      <span className="font-medium text-gray-700">{service.name}</span>
                    </div>
                    
                    <div className={cn("flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium", config.color)}>
                      <StatusIcon className="w-3 h-3" />
                      {config.text}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 px-6 text-center text-sm text-gray-500 border-t border-gray-100">
            Last updated: just now (probably)
          </div>
        </div>
      </motion.div>
    </section>
  );
}
