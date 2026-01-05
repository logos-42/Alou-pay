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

最新版本：**v0.1.8**

- **下载链接**：[GitHub Releases](https://github.com/logos-42/Alou-pay/releases/tag/0.1.8)
- **安装包**：`Alou_0.1.8_x64-setup.exe`
- **SHA256 校验值**：`77b3fadc9b02e310dfb89974c0533aec6ffd0c8e5c655f650700169d7196c992`
- **系统要求**：Windows 10/11 (64位)

> **提示**：浏览器的安全警告是正常的（未签名文件）。文件已通过 SHA256 校验值验证。

### 最新版本 (v0.1.8) 更新内容

- ✅ 实现Claude Agent SDK兼容层和do模式
- ✅ 新增claude_sdk模块处理Claude Agent SDK格式
- ✅ 修复claude.rs路由，实现真实AI调用
- ✅ 添加/api/claude-agent/query端点
- ✅ 支持多模型路由：deepseek、openai、claude、qwen、kimi
- ✅ 实现格式转换和错误处理
- ✅ 验证英文请求工作正常，中文显示待优化
- ✅ 修复useAgentMessages.js中的require错误
- ✅ 更新工具配置导入方式
- ✅ 确保Alou模式和Agent模式的工具调用正常工作

### 历史版本

- **v0.1.7** - 修复和改进
- **v0.1.6** - 智能体导入和ID一致性修复
  - ✅ 添加 handleImportAgent 函数处理已解析智能体的导入
  - ✅ 在 AgentChat.jsx 中连接 onImportAgent 回调
  - ✅ 增强 resolveExistingAgentTarget 和 buildChannelFromAgent 的日志输出
  - ✅ 确保解析后的智能体能正确添加到频道列表并保存到本地存储
  - ✅ 修复 public_gateways 生命周期问题、pubsub_topics 类型不匹配和未使用的导入
  - ✅ 修复智能体加载时ID不一致导致的丢失问题
  - ✅ 统一ID生成逻辑，确保保存和加载时使用相同的ID
  - ✅ 修复DIAP身份面板IPNS字段丢失的问题
  - ✅ 优化智能体去重逻辑
  - ✅ 清理多余的调试日志
  - ✅ 修复临时ID过滤逻辑
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
