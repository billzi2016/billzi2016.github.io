# Astro 迁移方案

## 状态

已完成。

本文记录这个站点当时如何从传统静态 HTML/CSS/JavaScript 个人主页迁移到 Astro + Tailwind 静态站。它既是项目历史，也是后续维护者和 AI 接手时的参考。

## 背景

原来的站点是手工维护的静态主页：

- HTML 文件直接放在仓库根目录
- 全局 CSS 文件
- 全局浏览器 JavaScript
- 资源从 `public/` 或根路径直接服务
- 本地预览依赖一个小型 Python server

这个方案在小站点阶段可以工作，但随着主页变复杂，CSS 和 JavaScript 的边界越来越难维护。重复内容、中英文渲染、页面专属行为、主题切换、搜索、图片 gallery、音乐播放都开始共享过多全局状态。

## 目标

迁移有四个目标：

1. 保持当前视觉效果完全一致。
2. 把站点迁移到现代静态构建系统。
3. 让 CSS 和 JavaScript 的归属更清楚。
4. 保持最终部署结果仍然是快速的静态站。

非目标：

- 不用 React/Vue 重写
- 不做视觉 redesign
- 不给必需资产引入 CDN 依赖
- 不删除音乐或媒体资产
- 不改成客户端 SPA

## 为什么用 Astro

选择 Astro，是因为这个站点以内容为主，绝大多数页面是静态的。Astro 提供：

- 文件路由
- 可复用 `.astro` 组件
- 共享 layout
- Vite 打包
- 普通内容页不需要客户端运行时
- 适合 GitHub Pages 的静态 HTML 输出

React 和 Vue 没有作为主框架使用。它们很适合应用型界面，但这个个人主页不需要大型客户端运行时，也不需要 app-wide state。Astro 提供足够的工程结构，同时不会把主页变成笨重前端应用。

## 为什么引入 Tailwind

Tailwind 的作用是减少普通布局 CSS：

- 间距
- grid/flex 布局
- 对齐
- 尺寸
- 简单响应式规则
- 简单排版工具类

Tailwind 不是为了替代所有手写样式。复杂视觉系统如果用本地 CSS 更清楚，就继续保留：

- 动画主题切换按钮
- Matrix/canvas 背景
- 持久音乐播放器
- 搜索浮层
- 项目 gallery 和 lightbox
- 复杂 transition

长期规则是：无聊布局用 Tailwind，复杂组件用有归属的本地 CSS。

## 迁移策略

迁移按可控步骤完成：

1. 给 legacy 静态版本打 tag。
2. 引入 Astro、Vite、pnpm 和项目 scripts。
3. 把页面内容迁移到 `src/pages/` 和 `src/components/`。
4. 创建 `SiteLayout.astro` 管理共享 HTML 结构。
5. 把共享数据迁移到 `src/data/`。
6. 把运行时代码迁移到 `src/scripts/site/`。
7. 把源码 CSS 迁移到 `src/styles/`。
8. 引入 Tailwind 作为工具类层。
9. 保留 `public/assets/` 存放音频、图片、soundfonts 和本地 vendor 文件。
10. 用 `pnpm dev` 替代旧的本地 Python server。
11. 把 GitHub Pages 部署切换到 Astro build workflow。
12. 添加 Playwright 冒烟测试覆盖关键行为。

## 工程原则

迁移过程中按前端场景务实遵守 SOLID 和 DRY：

- Astro 页面变成只负责路由的薄文件，职责单一。
- 共享文档结构进入 `SiteLayout.astro`。
- 重复页面 section 迁移成组件。
- 共享内容和翻译数据进入 `src/data/`。
- 共享规范化 helper 进入 `src/utils/content.ts`。
- 运行时行为按系统拆到 `src/scripts/site/`。
- 组件专属 CSS 开始移动到组件旁边。

DRY 用在重复内容、重复渲染 pattern 和共享 helper 逻辑上。不要为了抽象而把无关视觉系统强行合并。

长期规则统一维护在 [工程原则](engineering-principles.zh.md)。

## 迁移后的结构

```text
src/
  components/
  data/
  layouts/
  pages/
  scripts/
  styles/
public/
  assets/
  vendor/
specs/
.github/workflows/
```

关键边界：

- `src/pages/` 负责路由。
- `src/layouts/SiteLayout.astro` 负责文档结构和脚本顺序。
- `src/components/` 负责可复用 markup。
- `src/data/` 负责结构化内容和 metadata。
- `src/scripts/site/` 负责运行时行为。
- `src/styles/` 负责源码 CSS 和 Tailwind 入口。
- `public/` 只负责被直接服务的静态资产。

## 已完成工作

- 创建 Astro 项目结构。
- 添加 pnpm scripts：开发、构建、预览、检查和 e2e 测试。
- 把静态页面迁移成 Astro routes。
- 保持原有视觉效果。
- 本地化必需前端资源。
- 保留音乐和 soundfont 资产到 `public/assets/`。
- 把源码 JavaScript 从 public/static 路径迁移到 `src/scripts/site/`。
- 把源码 CSS 迁移到 `src/styles/` 和组件自有 CSS 目录。
- 添加 Tailwind 构建支持。
- 删除旧 Python server 入口。
- 添加 GitHub Actions 部署 GitHub Pages。
- 添加 Playwright 冒烟测试。
- 添加项目维护 specs。

## 验证方式

预期验证命令：

```bash
pnpm build
pnpm exec astro check
pnpm test:e2e
```

冒烟测试应该确认：

- 首页能渲染
- 中英文切换正常
- 明暗主题切换正常
- 核心路由标题正常
- 音乐页能绑定持久播放器
- 关键页面没有浏览器 console error

## Git Tags

迁移过程中用 tag 保留关键历史状态：

- `legacy-static-html-2026-07-06`：迁移 Astro 之前的原始静态 HTML/CSS/JS 站点
- `astro-migration-2026-07-06`：Astro 迁移里程碑
- `pre-css-refactor-2026-07-06`：深入清理 CSS 之前的检查点

这些 tag 不应该删除。它们记录了架构演进过程。

## 部署模型

部署应使用 GitHub Actions：

1. 用 pnpm 安装依赖
2. 用 Astro build 构建站点
3. 上传 `dist/`
4. 部署到 GitHub Pages

站点不应该再依赖 GitHub Pages 的 Jekyll 处理。

## 后续规则

未来开发应继续沿用 Astro 结构，而不是回到旧的静态 HTML 模式。

不要重新引入：

- 根目录 HTML 作为主要编辑入口
- `public/` 里的源码 CSS 或 JavaScript
- 必需运行资源的 CDN 依赖
- 大型无归属全局 CSS 文件
- Python server 作为常规开发方式

扩展站点时，按 `specs/maintenance-plan.zh.md` 里的归属规则执行。
