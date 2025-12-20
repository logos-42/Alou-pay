# Alou Pay

下一代 AI 智能体支付解决方案 - 基于 DIAP 去中心化星际协议的加密钱包，为 AI 智能体提供安全、高效的支付解决方案。

## 项目简介

Alou Pay 是一个专为 AI 智能体设计的支付平台，支持 Web3 AI Agent 功能和加密钱包管理。通过 DIAP（Decentralized Interstellar Agent Protocol）协议，实现智能体之间的安全、自主支付。

## 主要特性

- 🔐 **安全可靠** - 采用加密钱包私钥技术，确保每笔交易的安全性和不可篡改性
- 🤖 **智能体友好** - 专为 AI 智能体设计的支付接口，支持自动化交易和程序化调用
- ⚡ **高效便捷** - 毫秒级交易确认，无需人工干预，实现真正的自动化支付
- 🌐 **Web3 集成** - 基于 DIAP 协议，支持去中心化智能体身份管理
- 💼 **钱包管理** - 完整的加密钱包管理功能，支持多智能体协作
- 🎯 **集群行动** - 支持多智能体集群行动系统，实现任务编排和智能体协调

## 下载安装

### Windows 版本

最新版本：**v0.1.6**

- **下载链接**：[GitHub Releases](https://github.com/logos-42/Alou-pay/releases/tag/0.1.6)
- **安装包**：`Alou_0.1.6_x64-setup.exe` (36.5 MB)
- **SHA256 校验值**：`f660f34717761f5c3dda75174b2275b4053a85fffb61905c3c50d3f34c50c78a`
- **系统要求**：Windows 10/11 (64位)

> **提示**：浏览器的安全警告是正常的（未签名文件）。文件已通过 SHA256 校验值验证。

## 快速开始

### 开发环境

1. **克隆仓库**

```bash
git clone https://github.com/logos-42/Alou-pay.git
cd qianduan
```

1. **安装依赖**

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

1. **运行开发服务器**

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看效果。

1. **构建生产版本**

```bash
npm run build
# 或
yarn build
# 或
pnpm build
```

构建完成后，静态文件将生成在 `out` 目录中。

## 部署

### GitHub Pages 部署

项目已配置 GitHub Actions 自动部署：

1. 推送代码到 GitHub 主分支
2. 在 GitHub 仓库设置中：
   - 进入 Settings > Pages
   - Source 选择 "GitHub Actions"
   - 等待部署完成

3. 访问 `https://logos-42.github.io/Alou-pay/` 或自定义域名 `alou.fun`

### 自定义域名

1. 在项目根目录的 `public/CNAME` 文件中配置域名
2. 在域名 DNS 设置中添加 CNAME 记录指向 GitHub Pages
3. 在 GitHub 仓库设置的 Pages 部分填入自定义域名

## 技术栈

- **Next.js 14** - React 框架，支持静态导出
- **Framer Motion** - 流畅的动画效果
- **Tailwind CSS** - 现代化样式框架
- **TypeScript** - 类型安全
- **Radix UI** - 无障碍 UI 组件基础

## 项目结构

```text
.
├── app/
│   ├── layout.tsx          # 根布局
│   ├── page.tsx            # 主页
│   ├── docs/
│   │   └── page.tsx        # 文档页面
│   ├── globals.css         # 全局样式
│   ├── icons/              # 应用图标
│   └── photo/              # 图片资源
├── components/
│   └── ui/
│       ├── background-paths.tsx  # 背景动画组件
│       ├── navbar.tsx            # 导航栏组件
│       ├── footer.tsx            # 页脚组件
│       └── button.tsx            # 按钮组件
├── lib/
│   └── utils.ts            # 工具函数
├── public/                 # 静态资源
│   └── icons/              # 公共图标
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions 部署配置
├── next.config.js          # Next.js 配置
├── tailwind.config.ts      # Tailwind 配置
└── package.json            # 项目依赖
```

## 功能特性

### 最新版本 (v0.1.6) 更新内容

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

### 历史版本

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

Alou Pay - 下一代 AI 智能体支付解决方案
