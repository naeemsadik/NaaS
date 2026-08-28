import { BadgeCheck, MessageCircle, Star } from "lucide-react";
import { testimonials } from "@/lib/constants";

const cardStyles = ["-rotate-1 bg-white", "rotate-1 bg-cyan", "rotate-1 bg-amber", "-rotate-1 bg-white"];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-space dot-field bg-violet-soft">
      <div className="site-container">
        <div className="mb-12 max-w-3xl"><span className="eyebrow">Field reports</span><h2 className="section-title">Reviews from production.</h2></div>
        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <article key={testimonial.author + testimonial.quote} className={`panel flex min-h-72 flex-col p-7 sm:p-8 ${cardStyles[index]} ${index === 0 ? "md:translate-y-8" : ""}`}>
              <div className="flex gap-1" aria-label={`${testimonial.stars} out of 5 stars`}>
                {Array.from({ length: 5 }, (_, star) => <Star key={star} className={`size-4 ${star < testimonial.stars ? "fill-amber text-amber" : "text-ink/12"}`} />)}
              </div>
              <blockquote className="mt-8 flex-1 font-display text-2xl font-semibold leading-tight tracking-[-0.035em]">“{testimonial.quote}”</blockquote>
              <div className="mt-8 flex items-center justify-between gap-4 border-t border-ink/8 pt-5">
                <div><p className="font-semibold">{testimonial.author}</p>{testimonial.badge && <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-violet"><BadgeCheck className="size-3.5" />{testimonial.badge}</p>}</div>
                {testimonial.response && <div className="flex items-center gap-2 rounded-lg bg-signal/8 px-3 py-2 text-xs font-semibold text-signal"><MessageCircle className="size-3.5" />{testimonial.response}</div>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
