"use client";

import { FadeIn } from "./fade-in";
import { useLanguage } from "@/lib/language-context";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A8FF] to-[#7C3AED] text-sm tracking-widest uppercase mb-4 font-medium">
            {t.about.label}
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-8">
            {t.about.title}
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-8">
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {t.about.p1}
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {t.about.p2}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
