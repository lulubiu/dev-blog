# Dev Blog

一个使用 Next.js 构建的现代化个人技术博客平台。

## 项目简介

这是一个基于 Next.js 14 和 React 18 开发的个人开发博客，旨在分享技术文章、日常思考和专业见解。项目采用了现代化的前端技术栈，支持MDX内容管理，并具有响应式设计和暗黑模式。

## 功能特点

- 💻 支持多种内容类型：技术博客、日常记录、思考随笔
- 📱 响应式设计，适配各种设备
- 🗓️ 时间线展示文章历史
- 📊 集成 Google Analytics 进行访问分析

## 技术栈

- **框架**: Next.js 15, React 18
- **样式**: TailwindCSS
- **内容**: MDX, gray-matter, remark/rehype
- **部署**: Cloudflare

## 安装与运行

### 前提条件

- Node.js 18+ 
- pnpm (推荐)

### 安装步骤

1. 克隆仓库
```bash
git clone <仓库地址>
cd dev-blog
```

2. 安装依赖
```bash
pnpm install
```

3. 本地开发
```bash
pnpm dev
```

4. 构建项目
```bash
pnpm build
```

5. 启动生产服务
```bash
pnpm start
```

## 项目结构

```
dev-blog/
├── app/                # Next.js App Router 目录
│   ├── blog/           # 博客页面
│   ├── daily/          # 日常页面
│   ├── think/          # 思考页面
│   └── page.tsx        # 主页
├── components/         # 可复用组件
├── content/            # 博客内容 (MDX)
├── lib/                # 工具函数
├── public/             # 静态资源
└── styles/             # 全局样式
```

## 其他

欢迎访问 👉 [https://lulubiu.com](https://lulubiu.com)

## 许可证

请查看 [LICENSE](LICENSE) 文件。

## Thanks：

该网站基于 [Weekly Boilerplate](https://github.com/weijunext/weekly-boilerplate) 修改

----

update： 2025-07-18 17:26:04

升级了 nextjs 版本，从 14.x 升级到 15.x

如果是部署在 cloudflare 平台，则需要添加一个环境变量 `NODE_VERSION = 18.18.0`

愿，部署顺利～