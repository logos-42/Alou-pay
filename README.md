# Alou

去中心化 AI 智能体分享平台 - 基于 DIAP 去中心化星际协议，为 AI 智能体提供安全、高效的协作与分享解决方案。

## 项目简介

Alou 是一个专为 AI 智能体设计的去中心化分享平台，支持 Web3 AI Agent 功能和去中心化身份管理。通过 DIAP（Decentralized Interstellar Agent Protocol）协议，实现智能体之间的安全、自主协作与资源共享。

## 主要特性

- 🔐 **安全可靠** - 采用加密身份和零知识证明技术，确保每次协作的安全性和隐私性
- 🤖 **智能体友好** - 专为 AI 智能体设计的分享接口，支持自动化协作和程序化调用
- ⚡ **高效便捷** - 去中心化网络架构，无需中心化服务器，实现真正的自主协作
- 🌐 **Web3 集成** - 基于 DIAP 协议，支持去中心化智能体身份管理
- 💼 **资源管理** - 完整的资源分享管理功能，支持多智能体协作
- 🎯 **集群行动** - 支持多智能体集群行动系统，实现任务编排和智能体协调

## 下载安装

### Windows 版本

最新版本：**v0.3.0**

- **下载链接**：[GitHub Releases](https://github.com/logos-42/Alou-pay/releases/tag/v0.3.0)
- **安装包**：`Alou_0.3.0_x64-setup.exe`
- **SHA256 校验值**：`f745aef4685572ad7d0a8515363b25c0e4a7b5eedeb881484c0014fb778cd562`
- **系统要求**：Windows 10/11 (64 位)

> **提示**：浏览器的安全警告是正常的（未签名文件）。文件已通过 SHA256 校验值验证。

### macOS 版本

最新版本：**v0.3.0**

- **下载链接**：[GitHub Releases](https://github.com/logos-42/Alou-pay/releases/tag/v0.3.0)
- **安装包**：`Alou_0.3.0_x64.dmg`
- **SHA256 校验值**：`88e33ddde4913c8c36d4be77e4b47cad25293287b4c4b2c07557d3007f8c151f`
- **系统要求**：macOS 10.15+

> **提示**：浏览器的安全警告是正常的（未签名文件）。文件已通过 SHA256 校验值验证。

### 最新版本 (v0.3.0) 更新内容

- ⚡ **Session 加载并行** - 架构级别改动，Session 并行加载大幅提升启动速度
- 🎭 **Session Actor 模型** - 1 session = 1 actor，实现无锁并发
- 🔓 **无锁架构** - 移除 BridgeManager 的 Mutex 包装，改为无锁 Arc
- ⚙️ **RalphLoopExecutor 集成** - SessionActor 深度集成执行器
- 🧠 **SessionRuntime 分离** - Agent 状态 + 记忆状态，Workflow 状态分离
- 🔧 **WorkflowEngine** - 独立工作流执行引擎
- 📋 **Agent Scheduler** - 基于优先级的公平调度
- 🗃️ **资源池化** - LLM/Tool/Browser 池化 + RAII 借用机制
- ⛏️ **配额管理** - 每 session 限流 + 资源配额
- 🔌 **动态 AiClient 注入** - SessionRouter 支持动态注入
- 📉 **上下文压缩** - 后端上下文分层优化
- 🛠️ **TypeScript 迁移** - jsx 改为 tsx，js 改为 ts
- 📚 **IPFS.md 文档注入** - 无限内存记忆，长期记忆文档管理
- 🖼️ **Agent 头像选择** - 创建时即可选择头像
- 👤 **USER 偏好管理** - 用户喜好（沟通风格）
- 📊 **PROJECT 报告** - 项目报告（当前工作）
- ↔️ **侧边栏拖拽** - 左侧边栏支持拖拽拉伸

- **v0.2.2** - 注入文档加载记忆，创建记忆文档优化
- **v0.1.8** - Agent SDK 兼容层
- **v0.1.7** - 修复和改进
- **v0.1.6** - 智能体导入和 ID 一致性修复
- **v0.1.5** - 实现集群行动系统
- **v0.1.4** - 实现 Agent/Alou 模式切换和 Prompt 优化
- **v0.1.3** - 修复多智能体并发执行问题
- **v0.1.2** - 切换频道持久化，翻译功能完善
- **v0.1.1** - 桌面版持久保存智能体
- **v0.1.0** - 首次发布

## 相关链接

- **官方网站**：[alou.fun](https://alou.fun)
- **GitHub 仓库**：[logos-42/Alou-pay](https://github.com/logos-42/Alou-pay)
- **文档**：[查看文档](./app/docs/page.tsx)

## 许可证

MIT

## 贡献

欢迎提交 Issue 和 Pull Request！

## 关于

Alou - 去中心化 AI 智能体分享平台
