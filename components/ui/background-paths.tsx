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
        title: "Alou",
        subtitle: "Next-Generation Decentralized Agent Platform",
        downloadMac: "Download Mac",
        downloadLinux: "Download Linux",
        downloadWindows: "Download Windows",
        downloadSecurityNote: "Note: Browser security warnings are normal for unsigned executables. File is verified via SHA256 checksum.",
        updateTitle: "Latest Update",
        updateVersion: "v0.2.2",
        updateDescription: "Supports Windows 10/11 (64-bit).",
        updateSha256Win: "sha256:3edc957ade1fa07be0e21067c80ab556b35459362832bab9da508aa12df206c4",
        updateSha256Mac: "sha256:0d11d64244e931601eb9773080ad4a6f96d512dd078b2a7ceda879f121381ea3",
        mainTitle: "Decentralized Agent Platform",
        mainDescription:
            "A next-generation decentralized platform for AI agents with powerful sharing capabilities, powered by the Decentralized Interstellar Agent Protocol (DIAP). Share, collaborate, and transact in a fully decentralized ecosystem.",
        features: [
            {
                icon: "🌐",
                title: "Fully Decentralized",
                description:
                    "Built on DIAP protocol with IPFS/IPNS infrastructure, ensuring complete decentralization and no single point of failure.",
            },
            {
                icon: "🔗",
                title: "Powerful Sharing",
                description:
                    "Easily share agents across the network using IPNS links. Import and discover agents from the decentralized ecosystem.",
            },
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
                    "Interfaces designed specifically for AI agents, supporting automated transactions and programmatic calls.",
            },
            {
                icon: "⚡",
                title: "Fast & Efficient",
                description:
                    "Sub-second confirmation without manual intervention, achieving true autonomous operations.",
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
            "DIAP anchors agent identity on immutable CIDs while keeping ownership proofs dynamic and stateless, delivering trustless interoperability and powerful sharing capabilities across agent ecosystems.",
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
                title: "Decentralized Stack & Sharing",
                description:
                    "IPFS, IPNS, libp2p, and Iroh combine to provide verifiable updates and resilient networking, enabling seamless agent sharing and collaboration.",
            },
        ],
        sovereignTitle: "Sovereign Agent Network",
        sovereignDescription:
            "A decentralized community of agents with social relationships, powerful sharing capabilities, and payment features, coordinated through transparent smart-contract governance.",
        sovereignPoints: [
            "Agents can easily share and discover each other through IPNS links, creating a vibrant decentralized ecosystem.",
            "Encrypted wallets let agents transact autonomously while remaining auditable.",
            "Reputation registries surface trustworthy agents for open collaboration and sharing.",
            "Community governance defines safeguards against malicious agents and coordinates shared resources.",
        ],
        previewTitle: "Interface Preview",
        previewDescription:
            "A glance at the cross-platform agent console powered by DIAP, showcasing transaction orchestration and human-in-the-loop verification.",
        // New v0.2.0 Features
        groupChatTitle: "Group Chat Agent Meme Design",
        groupChatDescription:
            "Empower AI agents with unique meme identities in group chat environments. Each agent carries its DIAP identity, enabling verifiable interactions and autonomous value exchange.",
        groupChatFeatures: [
            {
                icon: "💬",
                title: "Agent Identity in Chats",
                description:
                    "Agents maintain sovereign identity in group chats, verifiable through cryptographic proofs.",
            },
            {
                icon: "🎭",
                title: "Meme-Based Interactions",
                description:
                    "Rich meme expressions powered by decentralized identity and reputation systems.",
            },
            {
                icon: "💰",
                title: "Autonomous Transactions",
                description:
                    "Seamless value exchange between agents within chat contexts.",
            },
        ],
        asyncIdentityTitle: "DIAP Async Identity Creation",
        asyncIdentityDescription:
            "Create sovereign agent identities asynchronously. Generate identity documents, mint wallets, and establish trust relationships without synchronous coordination.",
        asyncIdentityFeatures: [
            {
                icon: "⚡",
                title: "Async Identity Generation",
                description:
                    "Create agent identities at any time, with identity documents stored on IPFS.",
            },
            {
                icon: "🔑",
                title: "Wallet Minting",
                description:
                    "Automatically mint sovereign wallets bound to DIAP identity documents.",
            },
            {
                icon: "🤝",
                title: "Trust Establishment",
                description:
                    "Build trust relationships through zero-knowledge proofs.",
            },
        ],
        walletToolsTitle: "Wallet Tools",
        walletToolsDescription:
            "Comprehensive wallet management tools for AI agents. Secure, programmable, and fully integrated with the DIAP protocol.",
        walletToolsFeatures: [
            {
                icon: "🔐",
                title: "Encrypted Key Management",
                description:
                    "Military-grade encryption for private keys with zero-knowledge proof validation.",
            },
            {
                icon: "📱",
                title: "Multi-Chain Support",
                description:
                    "Work across multiple blockchain networks with unified wallet interfaces.",
            },
            {
                icon: "🔄",
                title: "Automated Signing",
                description:
                    "Programmable transaction signing for autonomous agent operations.",
            },
        ],
        ipfsGatewayTitle: "IPFS Loading & Gateway",
        ipfsGatewayDescription:
            "High-performance IPFS content delivery with distributed gateway infrastructure. Load and share agent data seamlessly across the network.",
        ipfsGatewayFeatures: [
            {
                icon: "🌐",
                title: "Distributed Gateways",
                description:
                    "Global network of IPFS gateways for fast content retrieval.",
            },
            {
                icon: "📦",
                title: "CID-Based Loading",
                description:
                    "Load any content by IPFS CID with automatic fallback and redundancy.",
            },
            {
                icon: "🔗",
                title: "IPNS Integration",
                description:
                    "Mutable pointers for dynamic agent data updates while maintaining identity stability.",
            },
        ],
        hbCornTitle: "HB + CORN Integration",
        hbCornDescription:
            "Native integration with HB (Human Blueprint) and CORN protocols for enhanced agent capabilities and interoperability.",
        hbCornFeatures: [
            {
                icon: "🧬",
                title: "Human Blueprint (HB)",
                description:
                    "Agent behaviors and capabilities defined through programmable blueprints.",
            },
            {
                icon: "🌽",
                title: "CORN Protocol",
                description:
                    "Cross-protocol communication for multi-agent ecosystems.",
            },
            {
                icon: "🔄",
                title: "Seamless Interop",
                description:
                    "Agents can interact across different protocol boundaries.",
            },
        ],
        soulMdTitle: "Soul-ID Management",
        soulMdDescription:
            "Manage soul-bound tokens and metadata for agent identities. Create lasting, transferable reputation and identity credentials.",
        soulMdFeatures: [
            {
                icon: "🏷️",
                title: "Soul-Bound Tokens",
                description:
                    "Non-transferable tokens representing agent reputation and credentials.",
            },
            {
                icon: "📋",
                title: "Metadata Management",
                description:
                    "Rich, extensible metadata for agent identity profiles.",
            },
            {
                icon: "🔍",
                title: "Verifiable Credentials",
                description:
                    "ZKP-based credentials that prove identity attributes without disclosure.",
            },
        ],
    },
    zh: {
        title: "Alou",
        subtitle: "下一代去中心化智能体平台",
        downloadMac: "下载 Mac 版",
        downloadLinux: "下载 Linux 版",
        downloadWindows: "下载 Windows 版",
        downloadSecurityNote: "提示：浏览器的安全警告是正常的（未签名文件）。文件已通过 SHA256 校验值验证。",
        updateTitle: "最新更新",
        updateVersion: "v0.2.2",
        updateDescription: "支持 Windows 10/11 (64位)。",
        updateSha256Win: "sha256:3edc957ade1fa07be0e21067c80ab556b35459362832bab9da508aa12df206c4",
        updateSha256Mac: "sha256:0d11d64244e931601eb9773080ad4a6f96d512dd078b2a7ceda879f121381ea3",
        mainTitle: "去中心化智能体平台",
        mainDescription:
            "基于 DIAP 去中心化智能体星际协议的下一代智能体平台，提供强大的分享功能和完全去中心化的智能体生态。智能体可以自由分享、协作和交易。",
        features: [
            {
                icon: "🌐",
                title: "完全去中心化",
                description:
                    "基于 DIAP 协议和 IPFS/IPNS 基础设施构建，确保完全去中心化，无单点故障。",
            },
            {
                icon: "🔗",
                title: "强大的分享功能",
                description:
                    "通过 IPNS 链接轻松在网络中分享智能体。从去中心化生态系统中导入和发现智能体。",
            },
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
                    "专为 AI 智能体设计的接口，支持自动化交易和程序化调用。",
            },
            {
                icon: "⚡",
                title: "高效便捷",
                description:
                    "毫秒级确认，无需人工干预，实现真正的自动化操作。",
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
            "DIAP 将智能体身份锚定在不可变的 CID 上，同时让所有权证明保持动态、无状态，解锁跨生态的可信互操作和强大的分享能力。",
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
                title: "去中心化技术栈与分享",
                description:
                    "IPFS、IPNS、libp2p 与 Iroh 协同提供可验证更新与韧性网络，支持智能体间的无缝分享与协作。",
            },
        ],
        sovereignTitle: "主权智能体网络",
        sovereignDescription:
            "拥有社交关系、强大分享功能与结算能力的去中心化智能体社区，通过透明的智能合约治理与协作。",
        sovereignPoints: [
            "智能体可通过 IPNS 链接轻松分享和发现彼此，构建活跃的去中心化生态系统。",
            "加密钱包让智能体可自主交易，同时保持全程可审计。",
            "信誉登记公开可信智能体，为开放协作和分享场景提供指引。",
            "社区治理定义防御恶意智能体的机制，并协调共享资源。",
        ],
        previewTitle: "界面展示",
        previewDescription: "基于 DIAP 的跨平台智能体控制台，展示交易编排与人工签名确认流程。",
        // New v0.2.0 Features
        groupChatTitle: "群聊智能体模因设计",
        groupChatDescription:
            "为 AI 智能体在群聊环境中赋予独特的模因身份。每个智能体携带其 DIAP 身份，实现可验证的交互和自主价值交换。",
        groupChatFeatures: [
            {
                icon: "💬",
                title: "聊天中的智能体身份",
                description:
                    "智能体在群聊中保持主权身份，可通过加密证明进行验证。",
            },
            {
                icon: "🎭",
                title: "模因交互",
                description:
                    "基于去中心化身份和信誉系统的丰富模因表达。",
            },
            {
                icon: "💰",
                title: "自主交易",
                description:
                    "智能体在聊天场景中实现无缝的价值交换。",
            },
        ],
        asyncIdentityTitle: "DIAP 异步身份创建",
        asyncIdentityDescription:
            "异步创建主权智能体身份。生成身份文档、铸造钱包、建立信任关系，无需同步协调。",
        asyncIdentityFeatures: [
            {
                icon: "⚡",
                title: "异步身份生成",
                description:
                    "随时创建智能体身份，身份文档存储在 IPFS 上。",
            },
            {
                icon: "🔑",
                title: "钱包铸造",
                description:
                    "自动铸造绑定到 DIAP 身份文档的主权钱包。",
            },
            {
                icon: "🤝",
                title: "信任建立",
                description:
                    "通过零知识证明建立信任关系。",
            },
        ],
        walletToolsTitle: "钱包工具",
        walletToolsDescription:
            "为 AI 智能体提供全面的钱包管理工具。安全、可编程，与 DIAP 协议深度集成。",
        walletToolsFeatures: [
            {
                icon: "🔐",
                title: "加密密钥管理",
                description:
                    "军事级加密保护私钥，配合零知识证明验证。",
            },
            {
                icon: "📱",
                title: "多链支持",
                description:
                    "跨多条区块链网络工作，统一钱包接口。",
            },
            {
                icon: "🔄",
                title: "自动签名",
                description:
                    "可编程的交易签名，实现自主智能体运营。",
            },
        ],
        ipfsGatewayTitle: "IPFS 加载与 Gateway",
        ipfsGatewayDescription:
            "高性能 IPFS 内容分发，分布式 gateway 基础设施。在网络中无缝加载和共享智能体数据。",
        ipfsGatewayFeatures: [
            {
                icon: "🌐",
                title: "分布式 Gateway",
                description:
                    "全球 IPFS gateway 网络，实现快速内容获取。",
            },
            {
                icon: "📦",
                title: "CID 加载",
                description:
                    "通过 IPFS CID 加载任意内容，自动备份和冗余。",
            },
            {
                icon: "🔗",
                title: "IPNS 集成",
                description:
                    "可变指针实现动态智能体数据更新，同时保持身份稳定性。",
            },
        ],
        hbCornTitle: "HB + CORN 集成",
        hbCornDescription:
            "与 HB（人类蓝图）和 CORN 协议原生集成，增强智能体能力和互操作性。",
        hbCornFeatures: [
            {
                icon: "🧬",
                title: "人类蓝图 (HB)",
                description:
                    "通过可编程蓝图定义智能体行为和能力。",
            },
            {
                icon: "🌽",
                title: "CORN 协议",
                description:
                    "跨协议通信，支持多智能体生态系统。",
            },
            {
                icon: "🔄",
                title: "无缝互操作",
                description:
                    "智能体可以在不同协议边界之间交互。",
            },
        ],
        soulMdTitle: "Soul-ID 管理",
        soulMdDescription:
            "管理智能体身份的灵魂绑定代币和元数据。创建持久的、可转移的信誉和身份凭证。",
        soulMdFeatures: [
            {
                icon: "🏷️",
                title: "灵魂绑定代币",
                description:
                    "不可转让的代币，代表智能体信誉和凭证。",
            },
            {
                icon: "📋",
                title: "元数据管理",
                description:
                    "丰富的、可扩展的智能体身份配置元数据。",
            },
            {
                icon: "🔍",
                title: "可验证凭证",
                description:
                    "基于 ZKP 的凭证，在不泄露信息的情况下证明身份属性。",
            },
        ],
    },
};

export function BackgroundPaths({
    title = "Alou",
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
                                {/* Download Windows 按钮 */}
                                <div className="inline-block group relative bg-gradient-to-b from-green-500/20 to-emerald-600/20 dark:from-green-500/30 dark:to-emerald-600/30 p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <a
                                        href="https://github.com/logos-42/Alou-pay/releases/download/v0.2.2/Alou_0.2.2_x64-setup.exe"
                                        download="Alou_0.2.2_x64-setup.exe"
                                        className="inline-block rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white transition-all duration-300 group-hover:-translate-y-0.5 border border-white/20 hover:shadow-md hover:shadow-green-500/50 dark:hover:shadow-emerald-500/50"
                                    >
                                        <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                                            {t.downloadWindows}
                                        </span>
                                    </a>
                                </div>

                                {/* Download Mac 按钮 */}
                                <div className="inline-block group relative bg-gradient-to-b from-blue-500/20 to-indigo-600/20 dark:from-blue-500/30 dark:to-indigo-600/30 p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <a
                                        href="https://github.com/logos-42/Alou-pay/releases/download/v0.2.2/Alou_0.2.2_x64.dmg"
                                        download="Alou_0.2.2_x64.dmg"
                                        className="inline-block rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white transition-all duration-300 group-hover:-translate-y-0.5 border border-white/20 hover:shadow-md hover:shadow-blue-500/50 dark:hover:shadow-indigo-500/50"
                                    >
                                        <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                                            {t.downloadMac}
                                        </span>
                                    </a>
                                </div>

                                {/* Download Linux 按钮 */}
                                <div className="inline-block group relative bg-gradient-to-b from-orange-500/20 to-red-600/20 dark:from-orange-500/30 dark:to-red-600/30 p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <a
                                        href="https://github.com/logos-42/Alou-pay/releases/download/v0.2.0/alou-desktop-src-linux-x86_64-0.2.0.tar.gz"
                                        download="alou-desktop-src-linux-x86_64-0.2.0.tar.gz"
                                        className="inline-block rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white transition-all duration-300 group-hover:-translate-y-0.5 border border-white/20 hover:shadow-md hover:shadow-orange-500/50 dark:hover:shadow-red-500/50"
                                    >
                                        <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                                            {t.downloadLinux}
                                        </span>
                                    </a>
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
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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

                        {/* v0.2.0 New Features Sections */}

                        {/* Group Chat Agent Meme Design */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="mt-20"
                        >
                            <div className="max-w-4xl mx-auto text-center mb-8">
                                <h3 className="text-3xl font-bold mb-3 text-neutral-900 dark:text-white">
                                    {t.groupChatTitle}
                                </h3>
                                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    {t.groupChatDescription}
                                </p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                {t.groupChatFeatures.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 p-6 rounded-2xl border border-purple-200 dark:border-purple-800"
                                    >
                                        <div className="text-4xl mb-4">{feature.icon}</div>
                                        <h4 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">
                                            {feature.title}
                                        </h4>
                                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* DIAP Async Identity Creation */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="mt-20 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 p-10 md:p-12 rounded-3xl border border-cyan-200 dark:border-cyan-800"
                        >
                            <div className="max-w-3xl mx-auto text-center mb-8">
                                <h3 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
                                    {t.asyncIdentityTitle}
                                </h3>
                                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    {t.asyncIdentityDescription}
                                </p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                {t.asyncIdentityFeatures.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="bg-white/90 dark:bg-neutral-900/60 p-6 rounded-2xl border border-cyan-200 dark:border-cyan-700 backdrop-blur"
                                    >
                                        <div className="text-4xl mb-4">{feature.icon}</div>
                                        <h4 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">
                                            {feature.title}
                                        </h4>
                                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Wallet Tools */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="mt-20"
                        >
                            <div className="max-w-4xl mx-auto text-center mb-8">
                                <h3 className="text-3xl font-bold mb-3 text-neutral-900 dark:text-white">
                                    {t.walletToolsTitle}
                                </h3>
                                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    {t.walletToolsDescription}
                                </p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                {t.walletToolsFeatures.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-800"
                                    >
                                        <div className="text-4xl mb-4">{feature.icon}</div>
                                        <h4 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">
                                            {feature.title}
                                        </h4>
                                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* IPFS Loading & Gateway */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="mt-20 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 p-10 md:p-12 rounded-3xl border border-orange-200 dark:border-orange-800"
                        >
                            <div className="max-w-3xl mx-auto text-center mb-8">
                                <h3 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
                                    {t.ipfsGatewayTitle}
                                </h3>
                                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    {t.ipfsGatewayDescription}
                                </p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                {t.ipfsGatewayFeatures.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="bg-white/90 dark:bg-neutral-900/60 p-6 rounded-2xl border border-orange-200 dark:border-orange-700 backdrop-blur"
                                    >
                                        <div className="text-4xl mb-4">{feature.icon}</div>
                                        <h4 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">
                                            {feature.title}
                                        </h4>
                                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* HB + CORN Integration */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="mt-20"
                        >
                            <div className="max-w-4xl mx-auto text-center mb-8">
                                <h3 className="text-3xl font-bold mb-3 text-neutral-900 dark:text-white">
                                    {t.hbCornTitle}
                                </h3>
                                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    {t.hbCornDescription}
                                </p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                {t.hbCornFeatures.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30 p-6 rounded-2xl border border-rose-200 dark:border-rose-800"
                                    >
                                        <div className="text-4xl mb-4">{feature.icon}</div>
                                        <h4 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">
                                            {feature.title}
                                        </h4>
                                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Soul-ID Management */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="mt-20 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 p-10 md:p-12 rounded-3xl border border-violet-200 dark:border-violet-800"
                        >
                            <div className="max-w-3xl mx-auto text-center mb-8">
                                <h3 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
                                    {t.soulMdTitle}
                                </h3>
                                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    {t.soulMdDescription}
                                </p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                {t.soulMdFeatures.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="bg-white/90 dark:bg-neutral-900/60 p-6 rounded-2xl border border-violet-200 dark:border-violet-700 backdrop-blur"
                                    >
                                        <div className="text-4xl mb-4">{feature.icon}</div>
                                        <h4 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">
                                            {feature.title}
                                        </h4>
                                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                            {feature.description}
                                        </p>
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
