"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import diapOverviewImage from "@/app/photo/diap.png";
import communityImage from "@/app/photo/社区建设.png";
import demoImage from "@/app/photo/image.png";
import { Button } from "@/components/ui/button";

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
        getStarted: "Get Started",
        downloadWindows: "Download Windows",
        downloadSecurityNote: "Note: Browser security warnings are normal for unsigned executables. File is verified via SHA256 checksum.",
        updateTitle: "Latest Update",
        updateVersion: "v0.1.0",
        updateDescription: "Desktop application release with Web3 AI Agent features and encrypted wallet management. Supports Windows 10/11 (64-bit).",
        updateSha256: "SHA256: f6b0c38fce4c258d1f581feacdca517a21246c1ef52827f245af85b1a39caead",
        mainTitle: "AI Agent Payment Platform",
        mainDescription:
            "Secure and efficient payment solutions for AI agents powered by the Decentralized Interstellar Agent Protocol (DIAP).",
        features: [
            {
                icon: "🔐",
                title: "Secure & Reliable",
                description:
                    "Encrypted wallet private key technology ensures the security and immutability of every transaction.",
            },
            {
                icon: "🤖",
                title: "Agent-Friendly",
                description:
                    "Payment interfaces designed specifically for AI agents, supporting automated transactions and programmatic calls.",
            },
            {
                icon: "⚡",
                title: "Fast & Efficient",
                description:
                    "Sub-second confirmation without manual intervention, achieving true autonomous payments.",
            },
        ],
        howItWorks: "How It Works",
        howItWorksDescription:
            "An agent-centric settlement pipeline anchored on sovereign wallets and the DIAP contract stack.",
        steps: [
            {
                step: "01",
                title: "Agent Registration",
                description:
                    "Register agent identity and mint a sovereign wallet bound to its DIAP identity document.",
            },
            {
                step: "02",
                title: "Secure Authorization",
                description:
                    "Use the latest DIAP contract primitives to produce verifiable, zero-trust transaction authorization.",
            },
            {
                step: "03",
                title: "Auto Execution",
                description:
                    "Programmable contracts orchestrate autonomous payments and lifecycle management.",
            },
            {
                step: "04",
                title: "Real-time Confirmation",
                description:
                    "On-chain verification and reputation signals confirm agent intent in near real time.",
            },
        ],
        diapTitle: "DIAP Protocol Advantages",
        diapDescription:
            "DIAP anchors agent identity on immutable CIDs while keeping ownership proofs dynamic and stateless, delivering trustless interoperability across agent ecosystems.",
        diapHighlights: [
            {
                title: "Self-Sovereign Identity",
                description:
                    "Agents manage their own registries instead of relying on centralized forms or certificate authorities.",
            },
            {
                title: "ZKP-Based Trust",
                description:
                    "Zero-knowledge proofs verify control of identity documents without exposing private keys.",
            },
            {
                title: "Decentralized Stack",
                description:
                    "IPFS, IPNS, libp2p, and Iroh combine to provide verifiable updates and resilient networking.",
            },
        ],
        sovereignTitle: "Sovereign Agent Network",
        sovereignDescription:
            "A community of agents with social relationships and payment capabilities, coordinated through transparent smart-contract governance.",
        sovereignPoints: [
            "Encrypted wallets let agents transact autonomously while remaining auditable.",
            "Reputation registries surface trustworthy agents for open collaboration.",
            "Community governance defines safeguards against malicious agents and coordinates shared resources.",
        ],
        previewTitle: "Interface Preview",
        previewDescription:
            "A glance at the cross-platform agent console powered by DIAP, showcasing transaction orchestration and human-in-the-loop verification.",
    },
    zh: {
        title: "Alou Pay",
        subtitle: "下一代智能体支付解决方案",
        learnMore: "了解更多",
        getStarted: "开始使用",
        downloadWindows: "下载 Windows 版",
        downloadSecurityNote: "提示：浏览器的安全警告是正常的（未签名文件）。文件已通过 SHA256 校验值验证。",
        updateTitle: "最新更新",
        updateVersion: "v0.1.0",
        updateDescription: "桌面版应用发布，支持 Windows 10/11 (64位)，包含 Web3 AI Agent 功能和加密钱包管理。",
        updateSha256: "SHA256: f6b0c38fce4c258d1f581feacdca517a21246c1ef52827f245af85b1a39caead",
        mainTitle: "智能体支付平台",
        mainDescription:
            "基于 DIAP 去中心化星际协议的加密钱包，为 AI 智能体提供安全、高效的支付解决方案。",
        features: [
            {
                icon: "🔐",
                title: "安全可靠",
                description:
                    "采用加密钱包私钥技术，确保每笔交易的安全性和不可篡改性。",
            },
            {
                icon: "🤖",
                title: "智能体友好",
                description:
                    "专为 AI 智能体设计的支付接口，支持自动化交易和程序化调用。",
            },
            {
                icon: "⚡",
                title: "高效便捷",
                description:
                    "毫秒级交易确认，无需人工干预，实现真正的自动化支付。",
            },
        ],
        howItWorks: "工作原理",
        howItWorksDescription: "围绕主权钱包与 DIAP 合约栈构建的智能体结算流程。",
        steps: [
            {
                step: "01",
                title: "智能体注册",
                description:
                    "注册智能体身份，并为其绑定基于 DIAP 文档的主权钱包。",
            },
            {
                step: "02",
                title: "安全授权",
                description:
                    "使用最新 DIAP 合约原语生成零信任、可验证的交易授权。",
            },
            {
                step: "03",
                title: "自动执行",
                description:
                    "智能合约编排自动支付与生命周期管理，全程自主运行。",
            },
            {
                step: "04",
                title: "实时确认",
                description:
                    "链上验证结合信誉信号，实现近实时的交易确认与追踪。",
            },
        ],
        diapTitle: "DIAP 协议优势",
        diapDescription:
            "DIAP 将智能体身份锚定在不可变的 CID 上，同时让所有权证明保持动态、无状态，解锁跨生态的可信互操作。",
        diapHighlights: [
            {
                title: "主权身份管理",
                description:
                    "智能体自行维护身份登记，不再依赖中心化表格或国家级证书。",
            },
            {
                title: "零知识信任",
                description:
                    "借助零知识证明验证身份控制权，无需暴露私钥即可建立信任。",
            },
            {
                title: "去中心化技术栈",
                description:
                    "IPFS、IPNS、libp2p 与 Iroh 协同提供可验证更新与韧性网络。",
            },
        ],
        sovereignTitle: "主权智能体网络",
        sovereignDescription:
            "拥有社交关系与结算能力的智能体社区，通过透明的智能合约治理与协作。",
        sovereignPoints: [
            "加密钱包让智能体可自主交易，同时保持全程可审计。",
            "信誉登记公开可信智能体，为开放协作场景提供指引。",
            "社区治理定义防御恶意智能体的机制，并协调共享资源。",
        ],
        previewTitle: "界面展示",
        previewDescription: "基于 DIAP 的跨平台智能体控制台，展示交易编排与人工签名确认流程。",
    },
};

export function BackgroundPaths({
    title = "Alou Pay",
    language = "en",
    onLanguageToggle,
}: {
    title?: string;
    language?: "en" | "zh";
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
        <div 
            ref={containerRef} 
            className="relative w-full bg-white dark:bg-neutral-950"
        >
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
                                <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                                    {word.split("").map((letter, letterIndex) => (
                                        <motion.span
                                            key={`${wordIndex}-${letterIndex}`}
                                            initial={{ y: 100, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{
                                                delay: wordIndex * 0.1 + letterIndex * 0.03,
                                                type: "spring",
                                                stiffness: 150,
                                                damping: 25,
                                            }}
                                            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80"
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
                            className="flex flex-col items-center justify-center"
                        >
                            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-3">
                                {/* Learn More 按钮 */}
                                <div className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <Button
                                        onClick={scrollToContent}
                                        variant="ghost"
                                        className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md bg-white/95 hover:bg-white dark:bg-black/95 dark:hover:bg-black text-black dark:text-white transition-all duration-300 group-hover:-translate-y-0.5 border border-black/10 dark:border-white/10 hover:shadow-md dark:hover:shadow-neutral-800/50"
                                    >
                                        <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                                            {t.learnMore}
                                        </span>
                                    </Button>
                                </div>

                                {/* Download Windows 按钮 */}
                                <div className="inline-block group relative bg-gradient-to-b from-green-500/20 to-emerald-600/20 dark:from-green-500/30 dark:to-emerald-600/30 p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <a
                                        href="https://github.com/logos-42/Alou-pay/releases/download/0.1.0/Alou_0.1.0_x64-setup.exe"
                                        download="Alou_0.1.0_x64-setup.exe"
                                        className="inline-block rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white transition-all duration-300 group-hover:-translate-y-0.5 border border-white/20 hover:shadow-md hover:shadow-green-500/50 dark:hover:shadow-emerald-500/50"
                                    >
                                        <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                                            {t.downloadWindows}
                                        </span>
                                    </a>
                                </div>

                                {/* Get Started 按钮 */}
                                <div className="inline-block group relative bg-gradient-to-b from-blue-500/20 to-purple-600/20 dark:from-blue-500/30 dark:to-purple-600/30 p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <Button
                                        onClick={() => window.open("https://alou.onl", "_blank")}
                                        variant="ghost"
                                        className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transition-all duration-300 group-hover:-translate-y-0.5 border border-white/20 hover:shadow-md hover:shadow-blue-500/50 dark:hover:shadow-purple-500/50"
                                    >
                                        <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                                            {t.getStarted}
                                        </span>
                                    </Button>
                                </div>
                            </div>
                            
                            {/* 安全提示 */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2, duration: 0.8 }}
                                className="text-xs text-neutral-500 dark:text-neutral-400 text-center max-w-2xl mx-auto px-4"
                            >
                                <span className="inline-flex items-center gap-1">
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                    {t.downloadSecurityNote}
                                </span>
                            </motion.p>
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
                            className="bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 p-10 md:p-16 rounded-3xl border border-neutral-200 dark:border-neutral-800 mb-20"
                        >
                            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center text-neutral-900 dark:text-white">
                                {t.howItWorks}
                            </h3>
                            <p className="text-center text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto mb-8 leading-relaxed">
                                {t.howItWorksDescription}
                            </p>
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

                        {/* DIAP Advantages */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="flex flex-col gap-10 bg-neutral-50 dark:bg-neutral-900 p-10 md:p-16 rounded-3xl border border-neutral-200 dark:border-neutral-800 mb-20"
                        >
                            <div className="max-w-3xl mx-auto text-center">
                                <h3 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
                                    {t.diapTitle}
                                </h3>
                                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                                    {t.diapDescription}
                                </p>
                                <div className="grid md:grid-cols-3 gap-4 text-left">
                                    {t.diapHighlights.map((highlight, index) => (
                                        <div
                                            key={index}
                                            className="p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-950/60 backdrop-blur"
                                        >
                                            <h4 className="text-xl font-semibold mb-1 text-neutral-900 dark:text-white">
                                                {highlight.title}
                                            </h4>
                                            <p className="text-neutral-600 dark:text-neutral-400">
                                                {highlight.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative w-full max-w-5xl mx-auto aspect-[5/2] rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-950/60 p-4">
                                <Image
                                    src={diapOverviewImage}
                                    alt="DIAP protocol overview illustration"
                                    fill
                                    className="object-contain"
                                    sizes="(min-width: 1024px) 60vw, 90vw"
                                    unoptimized
                                />
                            </div>
                        </motion.div>

                        {/* Sovereign Agent Network */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="flex flex-col gap-10"
                        >
                            <div className="relative w-full max-w-5xl mx-auto aspect-[5/2] rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-950/60 p-4">
                                <Image
                                    src={communityImage}
                                    alt="Sovereign agent community illustration"
                                    fill
                                    className="object-contain"
                                    sizes="(min-width: 1024px) 60vw, 90vw"
                                    unoptimized
                                />
                            </div>
                            <div className="bg-neutral-50 dark:bg-neutral-900 p-10 rounded-3xl border border-neutral-200 dark:border-neutral-800 max-w-4xl mx-auto">
                                <h3 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white text-center">
                                    {t.sovereignTitle}
                                </h3>
                                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 text-center">
                                    {t.sovereignDescription}
                                </p>
                                <ul className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    {t.sovereignPoints.map((point, index) => (
                                        <li key={index} className="flex gap-3 items-start">
                                            <span className="mt-1 text-lg text-neutral-500 dark:text-neutral-400">
                                                •
                                            </span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                        {/* Preview Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true, margin: "-80px" }}
                            className="mt-20"
                        >
                            <div className="max-w-4xl mx-auto text-center mb-8">
                                <h3 className="text-3xl font-bold mb-3 text-neutral-900 dark:text-white">
                                    {t.previewTitle}
                                </h3>
                                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    {t.previewDescription}
                                </p>
                            </div>
                            <div className="max-w-5xl mx-auto rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40 p-6">
                                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-900/90">
                                    <Image
                                        src={demoImage}
                                        alt="Agent coordination interface preview"
                                        fill
                                        className="object-contain"
                                        sizes="(min-width: 1024px) 60vw, 90vw"
                                        unoptimized
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
