"use client";

import { motion } from "framer-motion";

interface FooterProps {
  language: 'en' | 'zh';
}

const translations = {
  en: {
    community: "Community",
    followUs: "Follow us on social media",
    allRightsReserved: "All rights reserved",
    builtWith: "Built with",
  },
  zh: {
    community: "社区",
    followUs: "在社交媒体上关注我们",
    allRightsReserved: "保留所有权利",
    builtWith: "构建于",
  },
};

const socialLinks = [
  {
    name: "X (Twitter)",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    url: "https://x.com/canopylist",
    color: "hover:text-black dark:hover:text-white",
  },
  {
    name: "Discord",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
      </svg>
    ),
    url: "https://discord.gg/ndwEfqxG",
    color: "hover:text-[#5865F2]",
  },
  {
    name: "Paragraph",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M5 4h9a5 5 0 0 1 0 10H9v6H5V4Zm4 6h4a2 2 0 1 0 0-4H9v4Z" />
      </svg>
    ),
    url: "https://paragraph.com/@publication-1762419300670",
    color: "hover:text-neutral-900 dark:hover:text-white",
  },
  {
    name: "Telegram",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21.8 3.1a1.2 1.2 0 0 0-1.2-.08L2.6 10.8a1.2 1.2 0 0 0 .09 2.26l4.63 1.35 1.78 5.3a1.2 1.2 0 0 0 2.05.37l2.5-3 4.42 3.18a1.2 1.2 0 0 0 1.88-.67l3.05-15.1a1.2 1.2 0 0 0-.19-.99Zm-4.26 2.76-7.9 7.17a.6.6 0 0 0-.17.28l-.74 2.36-.97-2.9 8.74-6.48-10.55 5.2-2.53-.74 14.12-5.89Z" />
      </svg>
    ),
    url: "https://t.me/alouweb42",
    color: "hover:text-[#26A5E4]",
  },
  {
    name: "Firefly",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2c1.45 2.87 3.5 5.32 5.86 7.34a4.5 4.5 0 0 1-6.36 6.36A4.5 4.5 0 0 1 5.14 9.34C7.5 7.32 9.55 4.87 11 2Zm0 13.5a3 3 0 0 0 2.83-4.02a24 24 0 0 1-2.83-3.52a24 24 0 0 1-2.83 3.52A3 3 0 0 0 12 15.5Zm-4.5 1.73a5 5 0 0 0 9 0l2.21 2.2a1.5 1.5 0 1 1-2.12 2.12L15 20.62a6.5 6.5 0 0 1-6 0l-1.6 1.63a1.5 1.5 0 0 1-2.13-2.12Z" />
      </svg>
    ),
    url: "https://firefly.social/profile/lens/logos42",
    color: "hover:text-orange-400",
  },
  {
    name: "Bluesky",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.5c2.1 3.3 4.6 5.1 7.1 5.2 2.3.1 3.9 1.6 3.9 3.6 0 2.5-1.9 4-4.1 4-1.9 0-3.6-1.1-5.4-3.1.3 3.7 1.6 6.2 3.1 7.9.7.8-.2 2-1.1 1.5-1.9-1-3.5-2.6-4.3-3.9-.8 1.3-2.4 2.9-4.3 3.9-.9.5-1.8-.7-1.1-1.5 1.5-1.7 2.8-4.2 3.1-7.9-1.8 2-3.5 3.1-5.4 3.1-2.2 0-4.1-1.5-4.1-4 0-2 1.6-3.5 3.9-3.6 2.5-.1 5-1.9 7.1-5.2Zm-4.8 7c-.8 0-1.4.7-1.4 1.5 0 .8.6 1.5 1.4 1.5 1.4 0 2.6-1.1 3.6-2.6-1.2-.3-2.4-.4-3.6-.4Zm9.6 0c-1.2 0-2.4.1-3.6.4 1 1.5 2.2 2.6 3.6 2.6.8 0 1.4-.7 1.4-1.5 0-.8-.6-1.5-1.4-1.5Z" />
      </svg>
    ),
    url: "https://bsky.app/profile/yuanjieliu.bsky.social",
    color: "hover:text-sky-500",
  },
  {
    name: "GitHub",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.24c-3.34.73-4.04-1.61-4.04-1.61a3.18 3.18 0 0 0-1.34-1.76c-1.1-.75.08-.74.08-.74a2.52 2.52 0 0 1 1.84 1.24 2.55 2.55 0 0 0 3.48 1 2.55 2.55 0 0 1 .76-1.6c-2.67-.3-5.47-1.33-5.47-5.93a4.64 4.64 0 0 1 1.24-3.22 4.3 4.3 0 0 1 .12-3.18s1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.28-1.55 3.28-1.23 3.28-1.23a4.3 4.3 0 0 1 .12 3.18 4.64 4.64 0 0 1 1.24 3.22c0 4.62-2.81 5.62-5.49 5.92a2.86 2.86 0 0 1 .82 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 12 0Z" />
      </svg>
    ),
    url: "https://github.com/logos-42/Alou-pay",
    color: "hover:text-neutral-900 dark:hover:text-white",
  },
];

export function Footer({ language }: FooterProps) {
  const t = translations[language];

  return (
    <footer className="relative w-full bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Community Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-white">
              {t.community}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              {t.followUs}
            </p>

            {/* Social Links */}
            <div className="flex justify-center items-center gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center justify-center w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 ${social.color} transition-all duration-300 hover:shadow-lg`}
                  title={social.name}
                >
                  {typeof social.icon === 'string' ? (
                    <span className="text-2xl">{social.icon}</span>
                  ) : (
                    social.icon
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
               {new Date().getFullYear()} Alou. {t.allRightsReserved}.
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-2">
              {t.builtWith} Next.js, Framer Motion & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
