# billzi2016.github.io

我的个人学术网站源代码。

网站地址：[https://billzi2016.github.io/](https://billzi2016.github.io/)

英文文档：[README.md](README.md)

## 概述

这是一个基于 Astro 的静态学术作品集网站，覆盖研究兴趣、技术技能、项目、论文、经历、教育背景、个人兴趣和一个本地音乐页面。

## 技术演化

这个网站最开始是传统的原生静态站，主要由 HTML、CSS 和 JavaScript 组成。这个方案简单、稳定，也很适合早期个人主页；但随着页面、内容和样式不断增加，CSS 和重复页面结构逐渐变得难维护。

当前版本已经迁移到 Astro 和 Tailwind CSS。Astro 仍然输出静态 HTML，非常适合个人学术主页：页面加载快，可以干净地部署到 GitHub Pages，也不需要引入大型前端运行时。Tailwind CSS 则作为工程化样式层使用，让布局和局部样式更容易维护，同时尽量保留原有视觉效果。

这个项目没有把 Vue 或 React 作为主框架，是因为网站主体仍然是内容、导航、图片、论文列表和轻量交互，并不是复杂后台或重交互单页应用。直接使用 Vue / React 会带来更多客户端 JavaScript 和更多架构负担。Astro 可以提供组件化开发的好处，同时避免把个人主页变成过重的 SPA。如果未来某个区域真的需要复杂交互，Astro 也可以按需接入局部客户端组件。

| 维度 | 最早的 HTML / CSS / JS 静态站 | 当前 Astro + Tailwind CSS 方案 | Vue / React 单页应用式方案 |
| --- | --- | --- | --- |
| 页面速度 | 小页面阶段很快，但随着重复结构和 CSS 增长，长期清理成本变高。 | 输出仍然是静态 HTML，首屏快，同时源码具备组件化结构，运行时 JavaScript 保持克制。 | 经过优化也可以很快，但通常会带来比这个网站实际需要更多的客户端 JavaScript。 |
| JavaScript 负载 | 最开始很少，后来逐渐积累页面渲染脚本和运行时辅助逻辑。 | JavaScript 主要保留给语言切换、音乐连续播放、站内搜索、灯箱等明确交互。 | 默认需要更多前端运行时，如果整站做成 SPA，会增加额外负担。 |
| 可维护性 | 文件直观，但页面结构重复、CSS 增长后，改动风险越来越高。 | 组件、数据模块、Tailwind 工具类和拆分 CSS 让源码更容易阅读、维护和审查。 | 组件模型很强，但会引入对这个内容型网站来说不必要的应用结构和状态管理复杂度。 |
| SEO 与静态输出 | 静态 HTML 本身适合 SEO，但页面需要手动维护。 | 仍以静态 HTML 作为部署目标，由 Astro 从更干净的源码结构生成页面。 | 需要 SSR、SSG 或额外预渲染配置，才能优雅达到同样的静态站效果。 |
| GitHub Pages 部署 | 部署简单，但资源和页面结构主要靠人工组织。 | 部署简单：`pnpm build` 生成 `dist/`，GitHub Actions 发布静态输出。 | 也可以部署，但对于这个网站来说构建和运行模型偏重。 |
| 视觉保持 | 原始视觉就是在这个阶段形成的。 | 迁移时保留现有视觉效果，同时改善源码结构。 | 如果整体重写成 Vue 或 React，更容易产生不必要的视觉偏移。 |
| 适用场景 | 小型、稳定、改动少的静态页面。 | 以内容为主、有少量交互的个人学术主页。 | 大型交互应用、后台、编辑器、仪表盘或复杂客户端状态产品。 |

## 页面

- `index.html`：主页
- `experience.html`：经历与教育背景
- `projects.html`：项目作品集
- `publications.html`：论文
- `personal.html`：个人介绍
- `music.html`：音乐页面

## 结构

- `src/pages/`：Astro 页面入口。
- `src/layouts/`：公共 Astro 布局。
- `src/components/`：页头、内容区块、图片画廊、列表和其他可复用 UI 组件。
- `src/data/`：站点元数据、导航链接，以及 Astro 使用的生成数据模块。
- `src/scripts/site/`：通过 Astro/Vite 加载的浏览器运行时模块。
- `src/styles/tailwind.css`：Tailwind 入口文件。
- `src/styles/site/`：拆分后的站点 CSS，由 Astro 通过 `src/styles/site/main.css` 引入。
- `public/assets/`：本地图片、音频、MIDI、PDF 和资源说明文档。
- `public/vendor/`：需要浏览器直接加载的第三方资源。

## 本地开发

```bash
pnpm install
pnpm dev
```

然后打开本地 Astro 开发服务器，通常是 `http://localhost:4321/`。

如果需要指定 host 和端口：

```bash
pnpm dev --host 127.0.0.1 --port 4321
```

## 构建

```bash
pnpm build
```

Astro 会把生成后的静态站点写入 `dist/`。

本地预览生产构建：

```bash
pnpm preview
```

运行 Astro 检查：

```bash
pnpm exec astro check
```

## 部署

网站通过 GitHub Actions 构建，并将 Astro 生成的静态输出部署到 GitHub Pages。

## 数据组织

Astro 使用的内容数据位于：

- `src/data/generated/sharedContent.js`
- `src/data/generated/homeContent.js`
- `src/data/generated/experienceContent.js`
- `src/data/generated/projectsContent.js`
- `src/data/generated/publicationsData.js`
- `src/data/generated/musicLibrary.js`
- `src/data/generated/siteI18n.js`

Astro 会用这些模块渲染可见页面内容和中英文模板。布局层也会内联一个很小的运行时数据对象，用于语言切换、音乐播放连续性、站内搜索、图片灯箱和论文引用按钮。旧的浏览器端整页渲染脚本和重复 public 数据脚本已经移除。

## 演示图片

### 中文主页深色主题

![中文主页深色主题](demo/cn-dark.png)

### 中文主页浅色主题

![中文主页浅色主题](demo/cn-light.png)

### 英文主页深色主题

![英文主页深色主题](demo/en-dark.png)

### 英文主页浅色主题

![英文主页浅色主题](demo/en-light.png)

### 工业经历详情

![工业经历详情](demo/exp.png)

### 科研经历与监测平台

![科研经历与监测平台](demo/exp-2.png)

### 个人介绍与硬件项目

![个人介绍与硬件项目](demo/introd.png)

### 论文页面

![论文页面](demo/paper.png)

### 项目页面

![项目页面](demo/proj.png)
