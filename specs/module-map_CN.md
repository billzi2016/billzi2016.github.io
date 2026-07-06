# 模块地图

本文说明每个主要模块负责什么，以及后续改动应该放在哪里。

## 顶层区域

| 区域          | 位置                               | 职责                                                                       | 不要放这里                                  |
| ------------- | ---------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------- |
| 路由          | `src/pages/`                       | Astro 路由入口和页面级 metadata 选择。                                     | 复杂 markup、浏览器逻辑、大段 CSS。         |
| Layout        | `src/layouts/SiteLayout.astro`     | HTML 文档外壳、共享 metadata、全局 CSS import、运行时数据注入、脚本顺序。  | 页面专属内容或一次性 UI 行为。              |
| 组件          | `src/components/`                  | 可复用 UI markup 和组件自有 CSS。                                          | 属于 `src/scripts/site/` 的全局运行时状态。 |
| 数据          | `src/data/`                        | 站点 metadata、导航链接、生成的中英文内容模块。                            | 浏览器 DOM 代码或展示 CSS。                 |
| 运行时脚本    | `src/scripts/site/`                | 无法静态渲染的浏览器行为。                                                 | 静态内容、组件 markup、源码数据。           |
| 共享样式      | `src/styles/site/`                 | 基础变量、文档样式、header 外壳、共享 section/list primitive、响应式协调。 | 组件专属视觉系统。                          |
| Tailwind 入口 | `src/styles/tailwind.css`          | Tailwind layers 和 utility 入口。                                          | 手写组件样式。                              |
| 公开资产      | `public/assets/`、`public/vendor/` | 网站直接对外服务的文件。                                                   | 源码工具、构建脚本、私有说明。              |
| 工具          | `tools/`                           | 仓库维护脚本。                                                             | 要直接提供给访客的文件。                    |
| Specs         | `specs/`                           | 架构、维护、迁移和工程原则文档。                                           | 运行时源码。                                |

## 组件模块

| 模块                 | 位置                                                                                | 负责                                      | 说明                                    |
| -------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------- | --------------------------------------- |
| Header               | `src/components/Header.astro`                                                       | 共享站点页头组合。                        | 不放页面专属行为。                      |
| Header controls      | `src/components/HeaderControls.astro`                                               | 语言和主题控件组合。                      | 单个控件视觉放在子目录。                |
| Primary navigation   | `src/components/PrimaryNav.astro`                                                   | 共享导航链接和 active-state hook。        | active 状态运行时绑定在 `site.js`。     |
| Theme toggle         | `src/components/ThemeToggle/`                                                       | 动画主题切换按钮 markup 和 CSS。          | 动画 CSS 保持组件内聚。                 |
| Language switch      | `src/components/LanguageSwitch/`                                                    | 语言切换按钮 markup 和 CSS。              | 语言状态绑定在 `site.js`。              |
| Project gallery      | `src/components/ProjectGallery/`                                                    | 项目图片 markup、网格 CSS、lightbox CSS。 | lightbox 行为在 `site-lightbox.js`。    |
| Publications         | `src/components/Publications/` 和 `src/components/PublicationsInitialContent.astro` | 论文列表展示。                            | 引用复制行为在 `site-citation.js`。     |
| Music player         | `src/components/MusicInitialContent.astro`、`src/components/MusicPlayer/`           | 音乐页 markup 和播放器 CSS。              | 持久播放行为在 `site-music.js`。        |
| Search widget        | `src/components/SearchWidget/`                                                      | 搜索浮层 CSS。                            | DOM 创建和搜索行为在 `site-search.js`。 |
| Interest pills       | `src/components/InterestPills/`                                                     | 研究兴趣标签渲染和 CSS。                  | 数据来自 `src/data/generated/`。        |
| Skill blocks         | `src/components/SkillBlocks/`                                                       | 技能组渲染和 CSS。                        | 规范化逻辑留在 `src/utils/content.ts`。 |
| Entry lists          | `src/components/EntryList.astro`                                                    | 经历/教育列表复用渲染。                   | 项目图片渲染交给 `ProjectGallery`。     |
| Page initial content | `src/components/*InitialContent.astro`                                              | 从数据生成的静态页面 section markup。     | 保持 route 文件很薄。                   |

## 运行时脚本模块

| 脚本               | 职责                                             | 高风险规则                              |
| ------------------ | ------------------------------------------------ | --------------------------------------- |
| `site.js`          | 启动、中英文切换、主题切换、页面绑定、导航状态。 | 不要扩成无关工具桶。                    |
| `site-router.js`   | 局部导航和页面切换。                             | 必须保持脚本重新绑定和音乐状态。        |
| `site-music.js`    | 持久音乐状态、audio 元素归属、播放列表控制。     | 页面切换不能意外停止播放。              |
| `site-search.js`   | 客户端搜索文档构建、搜索 UI 创建、结果渲染。     | 搜索保持本地、浏览器侧运行。            |
| `site-lightbox.js` | 项目图库 lightbox 打开、关闭、切换。             | selector 要和 `ProjectGallery` 对齐。   |
| `site-citation.js` | BibTeX 复制按钮行为。                            | copied 状态 UI 限定在引用按钮。         |
| `backgrounds.js`   | 浅色粒子背景和深色 Matrix 背景。                 | 调参用具名常量，不要散落 magic number。 |

## 放置规则

- 新页面：在 `src/pages/` 增加 route，再把主要 markup 移进组件。
- 新重复 UI：在 `src/components/` 创建或扩展组件。
- 新组件视觉：CSS 放在拥有该视觉的组件旁边。
- 新共享基础样式：只有真正影响多个模块时，才放进 `src/styles/site/`。
- 新运行时行为：放进对应 `src/scripts/site/` 模块，或创建职责明确的小脚本。
- 新内容：优先放进 `src/data/`，不要在组件里重复硬编码字符串。
- 新公开文件：只有网站必须直接服务该文件时，才放进 `public/assets/`。
- 新维护脚本：放进 `tools/`，不要放进 `public/`。
