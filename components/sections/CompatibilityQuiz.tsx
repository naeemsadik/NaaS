"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { quizQuestions } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ChevronRight, RotateCcw } from "lucide-react";

export default function CompatibilityQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleSelect = (option: string) => {
    setAnswers({ ...answers, [currentQuestion]: option });
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);

      const end = 97;
      const duration = 2000;
      let startTime: number | null = null;

      const updateCounter = (time: number) => {
        if (!startTime) startTime = time;
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCounter(Math.floor(easeOutQuart * end));

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };

      requestAnimationFrame(updateCounter);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setCounter(0);
  };

  return (
    <section id="quiz" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">NaaS Compatibility Quiz</h2>
          <p className="text-gray-600 text-lg">Are you qualified to deploy Naeem? Let&apos;s find out.</p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl min-h-[400px] flex flex-col justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="w-full"
              >
                <div className="mb-8">
                  <span className="text-pink-primary font-semibold text-sm uppercase tracking-wider">
                    Question {currentQuestion + 1} of {quizQuestions.length}
                  </span>
                  <h3 className="text-2xl font-bold mt-2">{quizQuestions[currentQuestion].question}</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {quizQuestions[currentQuestion].options.map((option) => {
                    const isSelected = answers[currentQuestion] === option;
                    return (
                      <button
                        key={option}
                        onClick={() => handleSelect(option)}
                        className={cn(
                          "p-4 rounded-xl text-left border-2 transition-all duration-200",
                          isSelected
                            ? "bg-pink-primary/10 border-pink-primary ring-1 ring-pink-primary"
                            : "bg-gray-50 border-gray-100 hover:border-pink-primary/40 hover:bg-pink-50/50"
                        )}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>

                <div className="flex justify-end">
                  <button
                    disabled={!answers[currentQuestion]}
                    onClick={handleNext}
                    className="flex items-center gap-2 px-8 py-3 bg-dark-card text-white rounded-full font-semibold hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {currentQuestion === quizQuestions.length - 1 ? "Get Results" : "Next"} <ChevronRight size={20} />
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="text-7xl sm:text-9xl font-bold text-gradient-pink mb-6">
                  {counter}%
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Congratulations. You are statistically qualified to request Naeem.
                </h3>
                <div className="text-4xl mb-8 animate-bounce">🎉🩷✨</div>

                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 text-gray-500 hover:text-pink-primary font-medium transition-colors"
                >
                  <RotateCcw size={18} /> Retake Quiz
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
