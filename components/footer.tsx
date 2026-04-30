"use client";

import { FadeIn } from "./fade-in";
import { useLanguage } from "@/lib/language-context";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Jesus Trocha. {t.footer.rights}
            </p>
            <p className="text-sm text-muted-foreground">{t.footer.madeWith}</p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
