"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-slate-950 dark:text-white"
                viewBox="0 0 696 316"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

const translations = {
    en: {
        title: "Alou Pay",
        subtitle: "Next-Generation AI Agent Payment Solution",
        learnMore: "Learn More",
        getStarted: "Get Started",  // 添加这行
        mainTitle: "AI Agent Payment Platform",
        mainDescription: "Secure and efficient payment solutions for AI agents based on encrypted wallet private key technology",
        features: [
            {
                icon: "🔐",
                title: "Secure & Reliable",
                description: "Encrypted wallet private key technology ensures the security and immutability of every transaction",
            },
            {
                icon: "🤖",
                title: "Agent-Friendly",
                description: "Payment interfaces designed specifically for AI agents, supporting automated transactions and programmatic calls",
            },
            {
                icon: "⚡",
                title: "Fast & Efficient",
                description: "Millisecond-level transaction confirmation without manual intervention, achieving true automated payments",
            },
        ],
        howItWorks: "How It Works",
        steps: [
            {
                step: "01",
                title: "Agent Registration",
                description: "AI agents generate dedicated encrypted wallets and private keys through the system",
            },
            {
                step: "02",
                title: "Secure Authorization",
                description: "Use private keys to sign transactions, ensuring transaction authenticity and security",
            },
            {
                step: "03",
                title: "Auto Execution",
                description: "Smart contracts automatically verify and execute payments without human intervention",
            },
            {
                step: "04",
                title: "Real-time Confirmation",
                description: "Transactions are instantly confirmed on-chain, fully transparent and traceable",
            },
        ],
    },
    zh: {
        title: "Alou Pay",
        subtitle: "下一代智能体支付解决方案",
        learnMore: "了解更多",
        getStarted: "开始使用",  // 添加这行
        mainTitle: "智能体支付平台",
        mainDescription: "基于加密钱包私钥技术，为 AI 智能体提供安全、高效的支付解决方案",
        features: [
            {
                icon: "🔐",
                title: "安全可靠",
                description: "采用加密钱包私钥技术，确保每笔交易的安全性和不可篡改性",
            },
            {
                icon: "🤖",
                title: "智能体友好",
                description: "专为 AI 智能体设计的支付接口，支持自动化交易和程序化调用",
            },
            {
                icon: "⚡",
                title: "高效便捷",
                description: "毫秒级交易确认，无需人工干预，实现真正的自动化支付",
            },
        ],
        howItWorks: "工作原理",
        steps: [
            {
                step: "01",
                title: "智能体注册",
                description: "AI 智能体通过系统生成专属的加密钱包和私钥",
            },
            {
                step: "02",
                title: "安全授权",
                description: "使用私钥对交易进行签名，确保交易的真实性和安全性",
            },
            {
                step: "03",
                title: "自动执行",
                description: "智能合约自动验证并执行支付，无需人工介入",
            },
            {
                step: "04",
                title: "实时确认",
                description: "交易即时上链确认，全程透明可追溯",
            },
        ],
    },
};
export function BackgroundPaths({
    title = "Alou Pay",
    language = 'en',
    onLanguageToggle,
}: {
    title?: string;
    language?: 'en' | 'zh';
    onLanguageToggle?: () => void;
}) {
   
    const t = translations[language];
    const words = t.title.split(" ");
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

    const scrollToContent = () => {
        const contentSection = document.getElementById("content-section");
        contentSection?.scrollIntoView({ behavior: "smooth" });
    };

    
    return (
        <div ref={containerRef} className="relative w-full bg-white dark:bg-neutral-950">
        
            {/* Hero Section */}
            <motion.div
                style={{ opacity, scale }}
                className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
            >
                <div className="absolute inset-0">
                    <FloatingPaths position={1} />
                    <FloatingPaths position={-1} />
                </div>

                <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter">
                            {words.map((word, wordIndex) => (
                                <span
                                    key={wordIndex}
                                    className="inline-block mr-4 last:mr-0"
                                >
                                    {word.split("").map((letter, letterIndex) => (
                                        <motion.span
                                            key={`${wordIndex}-${letterIndex}`}
                                            initial={{ y: 100, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{
                                                delay:
                                                    wordIndex * 0.1 +
                                                    letterIndex * 0.03,
                                                type: "spring",
                                                stiffness: 150,
                                                damping: 25,
                                            }}
                                            className="inline-block text-transparent bg-clip-text 
                                            bg-gradient-to-r from-neutral-900 to-neutral-700/80 
                                            dark:from-white dark:to-white/80"
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                </span>
                            ))}
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto"
                        >
                            {t.subtitle}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
                        >
                            {/* Learn More 按钮 */}
                            <div className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 
                            dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg 
                            overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <Button
                                    onClick={scrollToContent}
                                    variant="ghost"
                                    className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md 
                                    bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 
                                    text-black dark:text-white transition-all duration-300 
                                    group-hover:-translate-y-0.5 border border-black/10 dark:border-white/10
                                    hover:shadow-md dark:hover:shadow-neutral-800/50"
                                >
                                    <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                                        {t.learnMore}
                                    </span>
                                    <span
                                        className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                                        transition-all duration-300"
                                    >
                                        →
                                    </span>
                                </Button>
                            </div>

                            {/* Get Started 按钮 */}
                            <div className="inline-block group relative bg-gradient-to-b from-blue-500/20 to-purple-600/20 
                            dark:from-blue-500/30 dark:to-purple-600/30 p-px rounded-2xl backdrop-blur-lg 
                            overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <Button
                                    onClick={() => window.open('https://alou.onl', '_blank')}
                                    variant="ghost"
                                    className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md 
                                    bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700
                                    text-white transition-all duration-300 
                                    group-hover:-translate-y-0.5 border border-white/20
                                    hover:shadow-md hover:shadow-blue-500/50 dark:hover:shadow-purple-500/50"
                                >
                                    <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                                        {t.getStarted}
                                    </span>
                                    <span
                                        className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                                        transition-all duration-300"
                                    >
                                        →
                                    </span>
                                </Button>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Content Section */}
            <section
                id="content-section"
                className="relative min-h-screen w-full bg-white dark:bg-neutral-950 py-20 md:py-32"
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-5xl mx-auto">
                        {/* Main Introduction */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="text-center mb-20"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-white">
                                {t.mainTitle}
                            </h2>
                            <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl mx-auto">
                                {t.mainDescription}
                            </p>
                        </motion.div>

                        {/* Features Grid */}
                        <div className="grid md:grid-cols-3 gap-8 mb-20">
                            {t.features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
                                >
                                    <div className="text-4xl mb-4">{feature.icon}</div>
                                    <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* How It Works */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 p-10 md:p-16 rounded-3xl border border-neutral-200 dark:border-neutral-800"
                        >
                            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center text-neutral-900 dark:text-white">
                                {t.howItWorks}
                            </h3>
                            <div className="space-y-6 max-w-3xl mx-auto">
                                {t.steps.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex gap-6 items-start"
                                    >
                                        <div className="flex-shrink-0 w-16 h-16 bg-neutral-900 dark:bg-white rounded-xl flex items-center justify-center">
                                            <span className="text-xl font-bold text-white dark:text-neutral-900">
                                                {item.step}
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">
                                                {item.title}
                                            </h4>
                                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}

