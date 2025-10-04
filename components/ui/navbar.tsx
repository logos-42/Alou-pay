"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface NavbarProps {
  language: 'en' | 'zh';
  onLanguageToggle: () => void;
}

const translations = {
  en: {
    docs: "Documentation",
    home: "Home",
  },
  zh: {
    docs: "文档",
    home: "首页",
  },
};

export function Navbar({ language, onLanguageToggle }: NavbarProps) {
  const t = translations[language];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800"
    >
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-neutral-900 dark:text-white hover:opacity-80 transition-opacity">
          Alou Pay
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/docs"
            className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors font-medium"
          >
            {t.docs}
          </Link>

          <button
            onClick={onLanguageToggle}
            className="px-4 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white transition-all duration-300 font-medium"
          >
            {language === 'en' ? '中文' : 'EN'}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}