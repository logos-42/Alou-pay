"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import Link from "next/link";

const translations = {
  en: {
    title: "Documentation",
    subtitle: "Everything you need to know about Alou Pay",
    gettingStarted: "Getting Started",
    introduction: "Introduction",
    introText: "Alou Pay is a next-generation payment platform designed specifically for AI agents. It leverages encrypted wallet private key technology to enable secure, automated payments between AI systems.",
    keyFeatures: "Key Features",
    features: [
      {
        title: "Secure Transactions",
        description: "Every transaction is secured using cryptographic private keys, ensuring immutability and authenticity.",
      },
      {
        title: "AI-First Design",
        description: "Built from the ground up for AI agents with programmatic APIs and automated workflows.",
      },
      {
        title: "Fast Settlement",
        description: "Millisecond-level transaction confirmation with real-time on-chain verification.",
      },
      {
        title: "Easy Integration",
        description: "Simple SDK and REST API for quick integration into your AI applications.",
      },
    ],
    howItWorks: "How It Works",
    steps: [
      {
        number: "1",
        title: "Register Your Agent",
        description: "Create an account and generate a unique wallet for your AI agent through our platform.",
      },
      {
        number: "2",
        title: "Fund Your Wallet",
        description: "Add funds to your agent's wallet using supported cryptocurrencies or fiat payment methods.",
      },
      {
        number: "3",
        title: "Authorize Transactions",
        description: "Use your private key to sign and authorize transactions programmatically.",
      },
      {
        number: "4",
        title: "Automated Execution",
        description: "Smart contracts automatically process and verify payments without manual intervention.",
      },
    ],
    apiReference: "API Reference",
    apiText: "Comprehensive API documentation coming soon. Sign up for early access to our developer program.",
    backToHome: "Back to Home",
  },
  zh: {
    title: "文档",
    subtitle: "关于 Alou Pay 你需要知道的一切",
    gettingStarted: "快速开始",
    introduction: "简介",
    introText: "Alou Pay 是专为 AI 智能体设计的下一代支付平台。它利用加密钱包私钥技术，实现 AI 系统之间安全、自动化的支付。",
    keyFeatures: "核心功能",
    features: [
      {
        title: "安全交易",
        description: "每笔交易都使用加密私钥保护，确保不可篡改性和真实性。",
      },
      {
        title: "AI 优先设计",
        description: "从零开始为 AI 智能体构建，提供程序化 API 和自动化工作流。",
      },
      {
        title: "快速结算",
        description: "毫秒级交易确认，实时链上验证。",
      },
      {
        title: "轻松集成",
        description: "简单的 SDK 和 REST API，快速集成到您的 AI 应用中。",
      },
    ],
    howItWorks: "工作原理",
    steps: [
      {
        number: "1",
        title: "注册智能体",
        description: "创建账户并通过我们的平台为您的 AI 智能体生成唯一钱包。",
      },
      {
        number: "2",
        title: "充值钱包",
        description: "使用支持的加密货币或法币支付方式为智能体钱包充值。",
      },
      {
        number: "3",
        title: "授权交易",
        description: "使用私钥以编程方式签名和授权交易。",
      },
      {
        number: "4",
        title: "自动执行",
        description: "智能合约自动处理和验证支付，无需人工干预。",
      },
    ],
    apiReference: "API 参考",
    apiText: "完整的 API 文档即将推出。注册以获得开发者计划的早期访问权限。",
    backToHome: "返回首页",
  },
};

export default function DocsPage() {
  const [language, setLanguage] = useState<'en' | 'zh'>('en');
  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'zh' : 'en');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Navbar language={language} onLanguageToggle={toggleLanguage} />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-neutral-900 dark:text-white">
                {t.title}
              </h1>
              <p className="text-xl text-neutral-600 dark:text-neutral-400">
                {t.subtitle}
              </p>
            </motion.div>

            {/* Introduction */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
                {t.introduction}
              </h2>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {t.introText}
              </p>
            </motion.section>

            {/* Key Features */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 text-neutral-900 dark:text-white">
                {t.keyFeatures}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {t.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* How It Works */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 text-neutral-900 dark:text-white">
                {t.howItWorks}
              </h2>
              <div className="space-y-8">
                {t.steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neutral-900 dark:bg-white flex items-center justify-center">
                      <span className="text-xl font-bold text-white dark:text-neutral-900">
                        {step.number}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">
                        {step.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* API Reference */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
                {t.apiReference}
              </h2>
              <div className="p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
                <p className="text-lg text-neutral-700 dark:text-neutral-300">
                  {t.apiText}
                </p>
              </div>
            </motion.section>

            {/* Back to Home */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:opacity-90 transition-opacity font-medium"
              >
                 {t.backToHome}
              </Link>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer language={language} />
    </div>
  );
}
