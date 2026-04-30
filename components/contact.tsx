"use client";

import { FadeIn } from "./fade-in";
import { motion } from "framer-motion";
import { Mail, Linkedin, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function Contact() {
  const { t } = useLanguage();

  const contactLinks = [
    {
      label: t.contact.email,
      value: "jesustrocha84@gmail.com",
      href: "mailto:jesustrocha84@gmail.com",
      icon: Mail,
    },
    {
      label: "LinkedIn",
      value: "Jesus Trocha",
      href: "https://www.linkedin.com/in/jesus-trocha-389b16206/",
      icon: Linkedin,
    },
    {
      label: "Computrabajo",
      value: t.contact.viewProfile,
      href: "#",
      icon: ExternalLink,
    },
  ];

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A8FF] to-[#7C3AED] text-sm tracking-widest uppercase mb-4 font-medium">
            {t.contact.label}
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-4">
            {t.contact.title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            {t.contact.subtitle}
          </p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {contactLinks.map((link, index) => (
            <FadeIn key={link.label} delay={0.2 + index * 0.1}>
              <motion.a
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  link.href.startsWith("mailto")
                    ? undefined
                    : "noopener noreferrer"
                }
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group flex items-center gap-4 p-6 rounded-xl bg-card border border-border hover:border-[#7C3AED]/30 transition-all glow-accent-hover"
              >
                <div className="p-3 rounded-full bg-secondary group-hover:bg-gradient-to-r group-hover:from-[#00A8FF] group-hover:to-[#7C3AED] group-hover:text-white transition-colors">
                  <link.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{link.label}</p>
                  <p className="text-foreground font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00A8FF] group-hover:to-[#7C3AED] transition-colors">
                    {link.value}
                  </p>
                </div>
              </motion.a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
