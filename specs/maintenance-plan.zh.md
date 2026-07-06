# 维护方案

## 目标

这个仓库是个人主页，也是公开的工程样本。代码要保持干净、可预测、速度快，并且方便其他工程师阅读和审查。

当前方向是：

- Astro 负责静态页面生成和组件结构
- Tailwind CSS 负责常规布局和工具类样式
- 复杂视觉组件保留小范围本地 CSS
- pnpm 管理依赖
- Playwright 做关键行为冒烟测试
- GitHub Actions 部署到 GitHub Pages

视觉效果默认保持稳定。除非明确要求改设计，否则重构不能改变当前观感。

## 架构说明

Astro 是这个站点的外壳。它提供文件路由、共享 layout、可复用 `.astro` 组件、静态输出和 Vite 打包，但不强制引入 React/Vue 运行时。

这个站点本质上是静态内容，加少量交互：

- 中英文切换
- 明暗主题切换
- 动态背景
- 客户端搜索
- 项目图片 lightbox
- 页面切换时不断掉的持久音乐播放

所以 Astro 比 React 或 Vue 更适合这里。React/Vue 会引入更大的运行时和应用状态模型，而这个个人主页不需要。Astro 可以让源码组件化，同时最终输出轻量静态站。

## 源码结构

```text
src/
  components/
    Header.astro
    HeaderControls.astro
    PrimaryNav.astro
    ThemeToggle/
      ThemeToggle.astro
      theme-toggle.css
    LanguageSwitch/
      LanguageSwitch.astro
      language-switch.css
    ProjectGallery/
      ProjectImageGrid.astro
      ProjectImageFigure.astro
      media-gallery.css
      lightbox.css
    MusicPlayer/
      music-player.css
    SearchWidget/
      search-widget.css
    Publications/
      publications.css
    InterestPills/
      InterestPills.astro
      interest-pills.css
    SkillBlocks/
      SkillBlocks.astro
      skill-blocks.css
    *InitialContent.astro
  data/
    generated/
    pageMeta.ts
    siteLinks.ts
  layouts/
    SiteLayout.astro
  pages/
    index.astro
    experience.astro
    projects.astro
    publications.astro
    personal.astro
    music.astro
  scripts/
    site/
      site.js
      site-router.js
      site-music.js
      site-search.js
      site-lightbox.js
      site-citation.js
      backgrounds.js
  styles/
    tailwind.css
    site/
      main.css
      base.css
      header.css
      sections.css
      content-components.css
      responsive.css
```

`public/` 只放必须原样对外提供的静态文件：

- 图片
- 音频
- soundfonts
- 本地 vendor 文件
- `.nojekyll`

不要再把新的源码级 CSS 或 JavaScript 放进 `public/`。

## Astro 规则

`src/pages/` 里的页面应该保持很薄。页面只负责选择 metadata、声明 route 级 layout，并渲染对应内容组件。

`SiteLayout.astro` 负责文档级结构：

- `<html>`、`<head>` 和共享 metadata
- 全局 CSS import
- 运行时数据注入
- 脚本加载顺序
- 共享 header 和导航

内容组件负责页面 section 和静态 markup。它们接收 `lang`，并从 `src/data/` 渲染确定性的 HTML。

当一个 UI 元素变成独立维护对象，就移动到目录化组件：

```text
ComponentName/
  ComponentName.astro
  component-name.css
```

组件自己 import 自己的 CSS。这样可以防止全局 CSS 继续变成垃圾桶。

## 数据规则

生成内容放在 `src/data/generated/`。人工维护的共享 metadata 放在 `src/data/`。

内容渲染优先使用 `src/utils/content.ts` 里的 helper，不要在组件里重复写语言 fallback、排序、规范化逻辑。

不要在组件里重复硬编码中英文内容。如果内容可复用或需要翻译，它应该进入 data。

## CSS 规则

全局 CSS 只允许放共享基础能力：

- 基础排版
- root variables
- 文档级行为
- 共享页面布局
- header 外壳布局
- section 基础样式
- 需要协调多个组件的响应式规则

组件自己的 CSS 放在组件旁边。

避免这些模式：

- `misc.css`、`common.css` 或其他垃圾桶文件
- 没有明确归属地往大型全局文件里继续加选择器
- 用一个页面的选择器去影响另一个页面
- 依赖 `public/styles` 里的源码文件
- 核心运行样式依赖远程 CDN

## Tailwind 规则

Tailwind 用来处理普通样式：

- 间距
- 对齐
- grid 和 flex 布局
- 尺寸
- 边框
- 简单排版
- 简单响应式

这些复杂视觉系统继续保留手写 CSS：

- 动画主题切换按钮
- 持久音乐播放器
- 搜索浮层
- 项目图片 gallery 和 lightbox
- Matrix/canvas 背景
- 复杂 transition 和 animation

Tailwind 的目的，是减少无聊的布局 CSS。不要为了追求工具类，把复杂视觉组件写成难读的一长串 class。

## 工程原则

SOLID 和 DRY 规则统一放在 [工程原则](engineering-principles.zh.md)。组件归属、CSS 归属、JavaScript 归属、抽象边界和 AI 维护规则都按该文件执行。

## 模块地图

每个模块的职责、放置位置和禁止放置内容，统一维护在 [模块地图](module-map.zh.md)。

## JavaScript 规则

运行时代码放在 `src/scripts/site/`，由 Astro/Vite 打包。

职责划分：

- `site.js`：启动、共享 helper、页面级绑定
- `site-router.js`：局部导航和页面切换
- `site-music.js`：持久音乐状态、播放列表控制、audio 元素归属
- `site-search.js`：客户端搜索索引和搜索 UI
- `site-lightbox.js`：项目图片 lightbox
- `site-citation.js`：论文引用复制按钮
- `backgrounds.js`：动态视觉背景

规则：

- 每个脚本只负责一个系统
- 除非是明确运行时契约，否则不要新增全局变量
- 必需资源保持本地化
- 页面切换时音乐播放不能断
- 除非站点真的变成应用，否则不要引入 React/Vue 式 app state

## 构建和工具

使用 pnpm：

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
pnpm exec astro check
pnpm test:e2e
```

本地工作流：

1. `pnpm dev` 本地开发。
2. `pnpm build` 发版前构建。
3. `pnpm exec astro check` 检查 Astro/template 诊断。
4. `pnpm test:e2e` 跑冒烟测试。

## 测试规则

Playwright 冒烟测试应覆盖重构中容易坏的行为：

- 首页渲染
- 中英文切换
- 明暗主题切换
- 核心页面标题
- 音乐页播放器绑定
- 播放列表控制
- 关键页面没有 console error

如果 bug 涉及页面切换、持久音乐、主题状态、语言状态或生成的静态路由，就应该补测试。

## 部署

GitHub Pages 应通过 `.github/workflows/deploy.yml` 里的 Astro build workflow 部署。

部署路径：

1. 用 pnpm 安装依赖
2. 执行 Astro build
3. 上传 `dist/`
4. 通过 GitHub Pages 发布

不要再依赖 Jekyll。`.nojekyll` 用来让 GitHub Pages 直接服务生成后的静态文件。

## 变更检查清单

重要改动推送前检查：

- 除非明确改设计，否则视觉结果保持一致
- 没有引入必需 CDN 依赖
- 页面切换时音乐不断
- 中英文切换和主题切换正常
- 源码 CSS/JS 留在 `src/`
- `public/` 只放被服务的资产
- build 通过
- Astro check 通过
- Playwright 冒烟测试通过
- commit 信息使用中文且说明清楚

## 迁移优先级

1. 保持现有视觉设计稳定。
2. 保持 Astro 页面很薄，把可复用 UI 移到组件。
3. 把组件专属 CSS 移到组件旁边。
4. 把简单布局 CSS 转成 Tailwind 工具类。
5. 把全局 CSS 收缩到基础、布局和跨组件规则。
6. 复杂交互系统保持隔离，并用测试兜住。
7. 新路径验证通过后，再删除过时 legacy 文件。

## 后续维护者接手指南

改代码前先做这些：

1. 先读本文件和 `specs/maintenance-plan.md`。
2. 阅读 `AGENTS.md`，确认 AI 接手顺序和本仓库操作规则。
3. 执行 `git status --short`，不要覆盖无关本地修改。
4. 判断任务属于内容、布局、组件行为、数据、资产还是部署。
5. 只改最小归属文件或组件目录。
6. commit 前执行对应验证命令。

文件归属表：

| 任务              | 主要位置                                                                                                               | 说明                                                   |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 页面路由          | `src/pages/*.astro`                                                                                                    | 页面保持很薄，把 markup 交给组件。                     |
| 共享 HTML 外壳    | `src/layouts/SiteLayout.astro`                                                                                         | 负责 metadata、脚本顺序、全局 import、运行时数据注入。 |
| Header/nav        | `src/components/Header*.astro`、`src/components/PrimaryNav.astro`                                                      | 不要把页面专属行为藏在这里。                           |
| 主题切换          | `src/components/ThemeToggle/`                                                                                          | CSS 跟着组件走。                                       |
| 语言切换          | `src/components/LanguageSwitch/`                                                                                       | CSS 跟着组件走。                                       |
| 项目图片/lightbox | `src/components/ProjectGallery/`、`src/scripts/site/site-lightbox.js`                                                  | markup/CSS 在组件，lightbox 运行时在脚本。             |
| 音乐页/播放器     | `src/components/MusicInitialContent.astro`、`src/components/MusicPlayer/`、`src/scripts/site/site-music.js`            | 必须保持页面切换时音乐不断。                           |
| 搜索              | `src/components/SearchWidget/`、`src/scripts/site/site-search.js`                                                      | 搜索索引保持本地、浏览器侧运行。                       |
| Publications      | `src/components/PublicationsInitialContent.astro`、`src/components/Publications/`、`src/scripts/site/site-citation.js` | 引用复制按钮依赖 `.pub-copy-btn`。                     |
| 静态资产          | `public/assets/`                                                                                                       | 必需资产必须本地化。                                   |
| 生成内容          | `src/data/generated/`                                                                                                  | 不要把生成内容重复写进组件。                           |
| 部署              | `.github/workflows/deploy.yml`                                                                                         | GitHub Pages 部署 Astro build 生成的 `dist/`。         |

决策规则：

- 如果只改静态文字或结构化内容，优先改 `src/data/`。
- 如果改重复 markup，创建或更新 Astro 组件。
- 如果只改某个组件的视觉，CSS 放在该组件旁边。
- 如果改页面基础能力或多个无关组件共享规则，才放进 `src/styles/site/`。
- 如果改运行时行为，更新 `src/scripts/site/` 里对应职责文件。
- 如果新增必需图片、音频、字体或 vendor 文件，放进 `public/assets/` 或 `public/vendor/`。

给后续 AI 的规则：

- 小 patch 能解决的问题，不要整文件重写。
- 不要随便重命名或移动资产；移动后必须更新引用并测试。
- 不要盲目删除 `dist/` 相关内容；源码事实来源是 `public/` 加 Astro build 输出。
- 用户没明确要求改设计时，不要改变视觉效果。
- 修改前必须说明准备改哪些文件、为什么改。

## 防退化规则

不要把代码库弄得像框架 demo。它是个人主页，代码应该克制、可读、专业。

不要把静态文字过度拆成一堆没有意义的小组件。组件化的价值是产生归属、复用或可测试边界。

不要为了“零手写 CSS”牺牲清晰度。目标是可维护 CSS，不是表演式工具类纯度。
