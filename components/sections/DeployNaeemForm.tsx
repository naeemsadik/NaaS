"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { deployRequirements, urgencyLevels, deploymentSteps } from "@/lib/constants";
import { Rocket, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DeployNaeemForm() {
  const [step, setStep] = useState(0);
  const [selectedReqs, setSelectedReqs] = useState<string[]>([]);
  const [selectedUrgency, setSelectedUrgency] = useState<string | null>(null);
  const [isDeploying, setIsDeploying] = useState(false);
  const [deployStep, setDeployStep] = useState(-1);

  const handleReqToggle = (req: string) => {
    setSelectedReqs((prev) =>
      prev.includes(req) ? prev.filter((r) => r !== req) : [...prev, req]
    );
  };

  const handleDeploy = async () => {
    setIsDeploying(true);
    for (let i = 0; i < deploymentSteps.length; i++) {
      setDeployStep(i);
      await new Promise((resolve) => setTimeout(resolve, 800));
    }
    setDeployStep(deploymentSteps.length);
  };

  return (
    <section id="deploy" className="py-20 px-4 bg-cream">
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 flex items-center justify-center gap-3">
          Deploy Naeem <Rocket className="text-pink-primary" size={36} />
        </h2>

        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl min-h-[400px] relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!isDeploying && step === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold mb-4">What do you require?</h3>
                <div className="space-y-3">
                  {deployRequirements.map((req) => {
                    const isSelected = selectedReqs.includes(req);
                    return (
                      <div
                        key={req}
                        onClick={() => handleReqToggle(req)}
                        className={cn(
                          "cursor-pointer p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-3",
                          isSelected
                            ? "bg-pink-primary/10 border-pink-primary"
                            : "bg-gray-50 border-gray-100 hover:border-pink-primary/30"
                        )}
                      >
                        <div
                          className={cn(
                            "w-6 h-6 rounded-md flex items-center justify-center border-2",
                            isSelected ? "bg-pink-primary border-pink-primary text-white" : "border-gray-300 bg-white"
                          )}
                        >
                          {isSelected && <Check size={16} />}
                        </div>
                        <span className="font-medium">{req}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-end pt-4">
                  <button
                    disabled={selectedReqs.length === 0}
                    onClick={() => setStep(1)}
                    className="flex items-center gap-2 px-6 py-3 bg-pink-primary text-white rounded-full font-semibold hover:bg-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Next <ChevronRight size={20} />
                  </button>
                </div>
              </motion.div>
            )}

            {!isDeploying && step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold mb-4">Urgency Level</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {urgencyLevels.map((level) => {
                    const isSelected = selectedUrgency === level.label;
                    return (
                      <div
                        key={level.label}
                        onClick={() => setSelectedUrgency(level.label)}
                        className={cn(
                          "cursor-pointer p-4 rounded-xl border-2 transition-all duration-200 text-center flex flex-col items-center justify-center gap-2",
                          isSelected
                            ? "bg-pink-primary/10 ring-2 ring-pink-primary border-transparent scale-105"
                            : "bg-gray-50 border-gray-100 hover:border-pink-primary/30"
                        )}
                      >
                        <span className="text-4xl">{level.emoji}</span>
                        <span className="font-medium">{level.label}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-between pt-8">
                  <button
                    onClick={() => setStep(0)}
                    className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:bg-gray-100 rounded-full font-semibold transition-colors"
                  >
                    <ChevronLeft size={20} /> Back
                  </button>
                  <button
                    disabled={!selectedUrgency}
                    onClick={() => setStep(2)}
                    className="flex items-center gap-2 px-6 py-3 bg-pink-primary text-white rounded-full font-semibold hover:bg-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Next <ChevronRight size={20} />
                  </button>
                </div>
              </motion.div>
            )}

            {!isDeploying && step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full py-12 space-y-8"
              >
                <h3 className="text-3xl font-bold text-center">Ready to launch!</h3>
                <button
                  onClick={handleDeploy}
                  className="px-10 py-6 bg-pink-primary text-white text-2xl font-bold rounded-full shadow-xl hover:bg-pink-600 transition-all duration-300 hover:scale-105 active:scale-95 animate-pulse"
                >
                  🚀 DEPLOY NAEEM
                </button>
                <button
                  onClick={() => setStep(1)}
                  className="text-gray-500 hover:text-gray-800 underline"
                >
                  Wait, go back
                </button>
              </motion.div>
            )}

            {isDeploying && (
              <motion.div
                key="deploying"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-8 font-mono text-sm sm:text-base space-y-4 h-full"
              >
                {deploymentSteps.map((msg, index) => (
                  <AnimatePresence key={index}>
                    {deployStep >= index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={cn(
                          "flex items-center gap-2",
                          index === deploymentSteps.length - 1 && deployStep === deploymentSteps.length
                            ? "text-green-500 font-bold text-lg mt-8"
                            : "text-gray-700"
                        )}
                      >
                        <span className="text-pink-primary">{">"}</span> {msg}
                      </motion.div>
                    )}
                  </AnimatePresence>
                ))}

                {deployStep === deploymentSteps.length && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", delay: 0.5 }}
                    className="mt-8 text-center"
                  >
                    <div className="text-6xl mb-4">🎉✨💖🚀</div>
                    <p className="text-xl font-bold text-gradient-pink">Deployment Successful!</p>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
