# AI 维护指南

本文件给后续 AI / Agent 接手本仓库时使用。目标是让维护流程稳定、可审查、不会把项目重新改成难维护状态。

## 先读顺序

开始任何较大改动前，按顺序阅读：

1. `README.zh.md`：了解项目用途、运行方式、整体结构。
2. `specs/maintenance-plan.zh.md`：了解维护边界、目录归属、测试和部署要求。
3. `specs/module-map.zh.md`：了解每个模块具体做什么、改动应该放在哪里。
4. `specs/engineering-principles.zh.md`：了解 SOLID/DRY、CSS/JS 归属、AI 修改规则。
5. `specs/astro-migration-plan.zh.md`：了解从原生静态站迁移到 Astro/Tailwind 的背景和禁止回退项。
6. 需要英文上下文时，再读对应英文版本：
   - `README.md`
   - `specs/maintenance-plan.md`
   - `specs/module-map.md`
   - `specs/engineering-principles.md`
   - `specs/astro-migration-plan.md`

## 工作原则

- 修改前先说明准备改什么、为什么改、涉及哪些文件。
- 优先小 patch，不要无理由整文件重写。
- 不要改变视觉效果，除非用户明确要求。
- 不要把源码 CSS/JS 放进 `public/`。
- 不要新增必需 CDN 依赖。
- 不要移动图片、音频、soundfont 等资产后忘记更新引用。
- 不要回退到根目录 HTML/CSS/JS 的旧静态站模式。
- commit 信息使用中文。

## 目录归属

- 页面路由：`src/pages/`
- 共享文档结构：`src/layouts/SiteLayout.astro`
- 可复用 UI：`src/components/`
- 组件专属 CSS：放在组件目录旁边
- 全局基础 CSS：`src/styles/site/`
- Tailwind 入口：`src/styles/tailwind.css`
- 运行时代码：`src/scripts/site/`
- 内容数据：`src/data/`
- 公开静态资产：`public/assets/`、`public/vendor/`
- 维护工具脚本：`tools/`
- 维护规范：`specs/`

## 常用命令

```bash
pnpm install
pnpm dev
pnpm format:check
pnpm lint:css
pnpm exec astro check
pnpm build
pnpm test:e2e
pnpm validate
```

## 提交前检查

结构性改动提交前至少执行：

```bash
pnpm validate
```

纯文档改动可以只执行：

```bash
pnpm format:check
```

如果验证失败，优先修代码或配置，不要删除测试来绕过问题。

## 高风险区域

- `src/scripts/site/site-music.js`：页面切换时音乐不能断。
- `src/scripts/site/site-router.js`：局部导航影响所有页面。
- `src/layouts/SiteLayout.astro`：脚本加载顺序和运行时数据注入很关键。
- `src/styles/site/responsive.css`：跨组件响应式规则仍需谨慎。
- `public/assets/`：这里的文件会被公开发布，不要放工具脚本。

## 推荐维护方向

1. 保持当前视觉稳定。
2. 继续把组件专属样式留在组件目录。
3. 把重复逻辑沉到 `src/utils/` 或 `src/data/`。
4. 给容易坏的交互补 Playwright 测试。
5. 用 lint、format、CI 约束工程质量。
