"use client";

import { FadeIn } from "./fade-in";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const projectUrls = [
  "https://abblo.com.co/",
  "https://prizma.site/",
  "https://consultoriojuridico.americana.edu.co/",
];

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-32 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A8FF] to-[#7C3AED] text-sm tracking-widest uppercase mb-4 font-medium">
            {t.projects.label}
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-4">
            {t.projects.title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            {t.projects.subtitle}
          </p>
        </FadeIn>
        <div className="grid gap-6">
          {t.projects.items.map((project, index) => (
            <FadeIn key={project.title} delay={0.2 + index * 0.1}>
              <motion.a
                href={projectUrls[index]}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group block p-8 rounded-2xl bg-background border border-border hover:border-[#7C3AED]/30 transition-all glow-accent-hover"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-xl md:text-2xl font-medium text-foreground group-hover:text-[#7C3AED] transition-colors">
                    {project.title}
                  </h3>
                  <motion.div
                    whileHover={{ x: 5, y: -5 }}
                    className="p-2 rounded-full bg-secondary group-hover:bg-gradient-to-r group-hover:from-[#00A8FF] group-hover:to-[#7C3AED] group-hover:text-white transition-colors"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-6 flex items-center gap-2">
                  <span className="text-sm text-muted-foreground group-hover:text-[#7C3AED] transition-colors">
                    {t.projects.visitSite}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-[#7C3AED] transition-colors" />
                </div>
              </motion.a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
