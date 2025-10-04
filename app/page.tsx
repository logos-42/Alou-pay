"use client";

import { useState } from "react";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'zh'>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'zh' : 'en');
  };

  return (
    <>
      <Navbar language={language} onLanguageToggle={toggleLanguage} />
      <BackgroundPaths title="Alou Pay" language={language} onLanguageToggle={toggleLanguage} />
      <Footer language={language} />
    </>
  );
}