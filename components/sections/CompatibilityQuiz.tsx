"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, RotateCcw } from "lucide-react";
import { quizQuestions } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function CompatibilityQuiz() {
  const [question, setQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [finished, setFinished] = useState(false);
  const selected = answers[question];

  function select(option: string) {
    setAnswers((current) => current.map((answer, index) => index === question ? option : answer).concat(current.length === question ? [option] : []));
  }

  function next() {
    if (question < quizQuestions.length - 1) setQuestion((value) => value + 1);
    else setFinished(true);
  }

  function reset() {
    setQuestion(0);
    setAnswers([]);
    setFinished(false);
  }

  return (
    <section id="quiz" className="section-space dot-field bg-[#ffd9e9]">
      <div className="site-container grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        <div><span className="eyebrow">Compatibility lab</span><h2 className="section-title">Should you request Naeem?</h2><p className="section-copy mt-6">Three scientifically unserious questions. One extremely confident result.</p></div>
        <div className="panel min-h-[30rem] overflow-hidden p-6 sm:p-9">
          {!finished ? (
            <>
              <div className="mb-8 flex items-center justify-between"><span className="mono-label text-violet">Question {question + 1} of {quizQuestions.length}</span><div className="flex gap-1">{quizQuestions.map((_, index) => <span key={index} className={cn("h-1.5 w-8 rounded-full", index <= question ? "bg-violet" : "bg-ink/8")} />)}</div></div>
              <h3 className="max-w-xl font-display text-3xl font-bold leading-tight tracking-[-0.045em]">{quizQuestions[question].question}</h3>
              <fieldset className="mt-8 grid gap-3 sm:grid-cols-2">
                <legend className="sr-only">Choose an answer</legend>
                {quizQuestions[question].options.map((option, index) => (
                  <label key={option} className={cn("flex min-h-20 cursor-pointer items-center gap-3 rounded-xl border p-4 text-sm font-semibold transition-colors", selected === option ? "border-violet bg-violet/7" : "border-ink/8 bg-paper hover:border-violet/30")}>
                    <input className="sr-only" type="radio" name={`question-${question}`} value={option} checked={selected === option} onChange={() => select(option)} />
                    <span className={cn("grid size-7 shrink-0 place-items-center rounded-lg font-mono text-xs", selected === option ? "bg-violet text-white" : "bg-white text-ink/38")}>{String.fromCharCode(65 + index)}</span>{option}
                  </label>
                ))}
              </fieldset>
              <div className="mt-8 flex justify-end"><button type="button" className="button-primary" disabled={!selected} onClick={next}>{question === quizQuestions.length - 1 ? "Show result" : "Next question"}<ArrowRight className="size-4" /></button></div>
            </>
          ) : (
            <div className="flex min-h-[25rem] flex-col items-center justify-center text-center">
              <CheckCircle2 className="size-12 text-mint" />
              <p className="mt-7 font-display text-[clamp(5rem,12vw,8rem)] font-bold leading-none tracking-[-0.08em] text-violet">97%</p>
              <h3 className="mt-5 max-w-md font-display text-2xl font-bold tracking-[-0.04em]">Statistically qualified to request Naeem.</h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-ink/48">The remaining three percent is reserved for snacks and reasonable doubt.</p>
              <button type="button" className="button-secondary mt-7" onClick={reset}><RotateCcw className="size-4" /> Retake quiz</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
