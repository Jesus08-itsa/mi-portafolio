"use client";

import { FadeIn } from "./fade-in";
import { useLanguage } from "@/lib/language-context";

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A8FF] to-[#7C3AED] text-sm tracking-widest uppercase mb-4 font-medium">
            {t.experience.label}
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-12">
            {t.experience.title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="relative border-l border-[#7C3AED]/30 pl-8 ml-4">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-[#00A8FF] to-[#7C3AED] glow-accent" />
            <div className="mb-2">
              <span className="text-sm text-muted-foreground font-mono">
                {t.experience.period}
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-medium text-foreground mb-1">
              {t.experience.role}
            </h3>
            <p className="text-foreground/80 mb-4">
              {t.experience.company}{" "}
              <span className="text-muted-foreground">
                {t.experience.rebrand}
              </span>
            </p>
            <p className="text-muted-foreground mb-6">
              {t.experience.description}
            </p>
            <ul className="space-y-3">
              {t.experience.responsibilities.map((item, index) => (
                <FadeIn key={index} delay={0.3 + index * 0.05}>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#00A8FF] to-[#7C3AED] mt-2 shrink-0" />
                    {item}
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
