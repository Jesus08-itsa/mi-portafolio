"use client";

import { FadeIn } from "./fade-in";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

type CategoryKey = "framework" | "language" | "markup" | "styling" | "versionControl";

const skills: { name: string; categoryKey: CategoryKey }[] = [
  { name: "React", categoryKey: "framework" },
  { name: "TypeScript", categoryKey: "language" },
  { name: "JavaScript", categoryKey: "language" },
  { name: "HTML", categoryKey: "markup" },
  { name: "CSS", categoryKey: "styling" },
  { name: "Tailwind CSS", categoryKey: "styling" },
  { name: "Git", categoryKey: "versionControl" },
];

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-32 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A8FF] to-[#7C3AED] text-sm tracking-widest uppercase mb-4 font-medium">
            {t.skills.label}
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-12">
            {t.skills.title}
          </h2>
        </FadeIn>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <FadeIn key={skill.name} delay={0.1 + index * 0.05}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group p-6 rounded-xl bg-background border border-border hover:border-[#7C3AED]/30 transition-all glow-accent-hover"
              >
                <p className="text-foreground font-medium mb-1 group-hover:text-[#7C3AED] transition-colors">
                  {skill.name}
                </p>
                <p className="text-muted-foreground text-sm">
                  {t.skills.categories[skill.categoryKey]}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
