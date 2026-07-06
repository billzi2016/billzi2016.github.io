# 工程原则

## 范围

本文定义这个 Astro 个人主页的工程原则。它强调务实落地：目标是源码干净、可读、可维护，而不是抽象洁癖。

核心原则：

- 用 SOLID 管理归属和模块边界
- 用 DRY 管理重复内容和重复逻辑
- 组件归属清晰
- 尽量减少全局状态
- 重构时保持视觉稳定

## 这个 Astro 站点里的 SOLID

### Single Responsibility

每个文件应该只有一个清晰的修改理由。

例子：

- `src/pages/*.astro` 负责路由，不负责复杂 markup。
- `SiteLayout.astro` 负责文档结构、metadata、脚本顺序和全局 import。
- `ThemeToggle/` 负责主题切换按钮的 markup 和 CSS。
- `site-music.js` 负责持久音乐行为。
- `site-search.js` 负责搜索行为。

如果一个文件开始收集无关职责，就按归属拆开。

### Open/Closed

扩展站点时，优先通过 data、组件或小模块扩展，而不是修改无关全局代码。

例子：

- 项目内容通过 data module 增加，不要硬编码重复块
- 可复用 UI pattern 做成组件
- 组件专属 CSS 放在组件旁边

不要因为方便，就继续往全局 CSS 里塞新规则。

### Liskov Substitution

可复用组件在 props 改变时应该表现可预测，不应该依赖隐藏页面上下文。

例子：

- gallery 组件只要收到有效图片数据，就应该能在不同页面工作
- list 组件不应该假设自己只会用于某一个页面
- 组件不要依赖全局 DOM，除非这是明确文档化的运行时契约

### Interface Segregation

组件只接收自己需要的 props。

如果组件只需要标题、列表、语言或图片数组，就不要传一大坨混合数据对象。

更小的 props 会让人类和后续 AI 更容易安全复用组件。

### Dependency Inversion

页面组件应该依赖稳定 helper 和 data module，而不是临时 DOM 状态。

例子：

- 语言 fallback 和规范化使用 `src/utils/content.ts`
- 结构化内容使用 `src/data/`
- 只有无法静态渲染的浏览器行为才放进 runtime scripts

## 这个站点里的 DRY

DRY 用在会造成维护风险的重复上。

适合 DRY 的内容：

- 中英文内容
- 重复项目、论文、音乐数据
- 语言 fallback 逻辑
- 论文排序和分组
- 重复 markup pattern
- 共享验证和规范化 helper

不要过度 DRY。

这些情况应该先保持分开：

- 两个组件只是长得像，但行为不同
- 合并后需要很多不清晰的 flag 或分支
- 共享抽象会让未来修改更难
- 某个视觉系统本来就是独立设计

好的 DRY 会减少真实维护成本。坏的 DRY 会把无关概念藏进一个复杂抽象里。

## CSS 归属

全局 CSS 应该小而基础。

全局 CSS 用于：

- 基础排版
- root variables
- 文档级行为
- 共享页面结构
- 需要协调多个组件的响应式规则

组件 CSS 用于：

- 组件专属视觉
- 复杂动画
- 特殊控件
- gallery/lightbox 视觉
- 音乐播放器视觉

不要创建 `misc.css`、`common.css` 这种垃圾桶文件。

## JavaScript 归属

运行时 JavaScript 按系统拆分：

- `site.js`：启动和页面级绑定
- `site-router.js`：页面切换和局部导航
- `site-music.js`：持久音乐播放
- `site-search.js`：搜索 UI 和索引
- `site-lightbox.js`：gallery lightbox
- `site-citation.js`：论文引用复制
- `backgrounds.js`：动态背景

不要把某个脚本扩成无关工具集合。

## AI 维护规则

给后续 AI：

- 小范围 patch 能解决的问题，不要整文件重写
- 修改前说明准备改哪些文件
- 用户没明确要求改设计，就保持当前视觉
- 不要移动资产后忘记更新引用
- 不要添加必需 CDN 依赖
- 结构性改动后要运行验证
- commit 信息使用中文

## 验证

重要改动执行：

```bash
pnpm build
pnpm exec astro check
pnpm test:e2e
```

只有非常明确的纯文档修改，才可以只做较小范围验证。

