# Background Paths Demo

一个使用 Next.js + Framer Motion + Tailwind CSS 构建的动态背景路径动画项目。

## 特性

- ✨ 流畅的动画效果
- 🎨 支持深色/浅色主题
- 📱 响应式设计
- ⚡ 性能优化
- 🚀 支持静态导出

## 快速开始

### 1. 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 2. 运行开发服务器

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看效果。

### 3. 构建生产版本

```bash
npm run build
# 或
yarn build
# 或
pnpm build
```

构建完成后，静态文件将生成在 `out` 目录中。

## 部署到 GitHub Pages

### 方法 1：自动部署（推荐）

1. 在项目根目录创建 `.github/workflows/deploy.yml` 文件（已包含在项目中）

2. 推送代码到 GitHub：

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的用户名/你的仓库名.git
git push -u origin main
```

3. 在 GitHub 仓库设置中：
   - 进入 Settings > Pages
   - Source 选择 "GitHub Actions"
   - 等待部署完成

4. 访问 `https://你的用户名.github.io/你的仓库名/`

### 方法 2：手动部署

1. 构建项目：

```bash
npm run build
```

2. 部署 `out` 目录到 GitHub Pages 或任何静态网站托管服务。

## 使用自定义域名

1. 在项目根目录创建 `public/CNAME` 文件，写入你的域名：

```
yourdomain.com
```

2. 在你的域名 DNS 设置中添加 CNAME 记录：
   - 指向：`你的用户名.github.io`

3. 在 GitHub 仓库设置的 Pages 部分，填入自定义域名。

## 自定义

### 修改标题

在 `app/page.tsx` 中修改 `title` 属性：

```tsx
<BackgroundPaths title="Your Custom Title" />
```

### 修改按钮文本

在 `components/ui/background-paths.tsx` 中修改按钮内容。

### 调整动画

在 `components/ui/background-paths.tsx` 中调整 Framer Motion 的动画参数。

## 技术栈

- **Next.js 14** - React 框架
- **Framer Motion** - 动画库
- **Tailwind CSS** - 样式框架
- **TypeScript** - 类型安全
- **Radix UI** - UI 组件基础

## 项目结构

```
.
├── app/
│   ├── layout.tsx          # 根布局
│   ├── page.tsx            # 主页
│   └── globals.css         # 全局样式
├── components/
│   └── ui/
│       ├── background-paths.tsx  # 背景动画组件
│       └── button.tsx            # 按钮组件
├── lib/
│   └── utils.ts            # 工具函数
├── public/                 # 静态资源
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions 部署配置
├── next.config.js          # Next.js 配置
├── tailwind.config.ts      # Tailwind 配置
└── package.json            # 项目依赖

```

## 许可证

MIT

## 贡献

欢迎提交 Issue 和 Pull Request！

