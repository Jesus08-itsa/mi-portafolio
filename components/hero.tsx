"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A8FF] to-[#7C3AED] text-sm md:text-base tracking-widest uppercase mb-6 font-medium"
        >
          {t.hero.role}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground mb-6 text-balance"
        >
          Jesus Trocha
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty"
        >
          {t.hero.tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="#projects"
            className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-[#00A8FF] to-[#7C3AED] text-primary-foreground font-medium transition-all hover:scale-105 glow-accent-hover overflow-hidden"
          >
            <span className="relative z-10">{t.hero.viewWork}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] to-[#00A8FF] opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 rounded-full border border-border text-foreground font-medium hover:border-[#7C3AED]/50 hover:text-[#7C3AED] transition-all hover:scale-105"
          >
            {t.hero.contact}
          </Link>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-6 h-6 text-[#7C3AED]/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
