"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GirlsOnlyGate() {
  const [showGate, setShowGate] = useState(false);
  const [shake, setShake] = useState(false);
  const [refusedMessage, setRefusedMessage] = useState(false);

  useEffect(() => {
    const passed = localStorage.getItem("naas-gate-passed");
    if (!passed) {
      setShowGate(true);
    }
  }, []);

  const handleYes = () => {
    localStorage.setItem("naas-gate-passed", "true");
    setShowGate(false);
  };

  const handleRefuse = () => {
    setRefusedMessage(true);
    setShake(true);
    setTimeout(() => setShake(false), 500);
    setTimeout(() => {
      setShowGate(false);
    }, 3000);
  };

  return (
    <AnimatePresence>
      {showGate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              x: shake ? [-10, 10, -10, 10, 0] : 0
            }}
            transition={{ duration: 0.3 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl text-center"
          >
            {refusedMessage ? (
              <div className="py-8">
                <p className="text-xl font-bold text-gray-800">
                  Interesting. NaaS security has detected suspicious behavior. Please try again. 😭
                </p>
              </div>
            ) : (
              <>
                <div className="text-4xl mb-4">🔐</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  NaaS is currently in Girls Only™ mode.
                </h2>
                <p className="text-gray-600 mb-8 font-medium">Are you a girl?</p>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={handleYes}
                    className="w-full py-3 px-6 bg-pink-primary hover:bg-pink-primary/90 text-white font-bold rounded-xl transition-colors shadow-md"
                  >
                    🩷 Yes
                  </button>
                  <button
                    onClick={handleRefuse}
                    className="w-full py-3 px-6 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition-colors"
                  >
                    🥸 I refuse to answer
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
