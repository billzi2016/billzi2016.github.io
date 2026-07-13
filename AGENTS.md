# AI 维护指南

本文件给后续 AI / Agent 接手本仓库时使用。目标是让维护流程稳定、可审查、可追溯，并且不会因为 agent 图快、走捷径、mock 验证或重复造逻辑而破坏项目。

## 最高优先级

1. 用户明确指令优先。
2. 本仓库的 spec、README 维护契约和本文件优先。
3. 现有模块归属和已有实现优先。
4. 不能为了快而替换用户要求的流程、验证方式或架构边界。

如果 spec、README、AGENTS 或用户指令与某个方便的实现捷径冲突，必须以 spec 和用户指令为准。不要 mock、不要伪验证、不要创建平行逻辑、不要用临时方案冒充完成。

## 必读顺序

开始任何非平凡改动前，按顺序阅读：

1. `README.zh.md`
   - 先读“Trunk-Based 维护契约”。
   - 再读项目概述、架构图、工作流和技术演化。
2. `AGENTS.md`
   - 也就是当前文件，确认 agent 接手规则和禁止事项。
3. `specs/maintenance-plan.zh.md`
   - 了解维护边界、目录归属、测试和部署要求。
4. `specs/module-map.zh.md`
   - 确认每个模块具体负责什么，改动应该放在哪里。
5. `specs/engineering-principles.zh.md`
   - 确认 SOLID/DRY、CSS/JS 归属、AI 修改规则。
6. `specs/astro-migration-plan.zh.md`
   - 了解从原生静态站迁移到 Astro/Tailwind 的背景和禁止回退项。
7. 和文档站相关的改动还必须读：
   - `docs-site/docs/specs/mkdocs_prd.zh.md`
   - `docs-site/docs/specs/github_action_prd.zh.md`
   - `docs-site/docs/en/AGENTS.md`
8. 需要英文上下文或同步英文文档时，再读对应英文版本：
   - `README.md`
   - `specs/maintenance-plan.md`
   - `specs/module-map.md`
   - `specs/engineering-principles.md`
   - `specs/astro-migration-plan.md`
   - `docs-site/docs/specs/mkdocs_prd.md`
   - `docs-site/docs/specs/github_action_prd.md`

只读完文件不等于可以随便改。改动前还要定位对应模块、理解已有实现、确认是否已有同类逻辑。

## 工作原则

- 修改前先说明准备改什么、为什么改、涉及哪些文件、预计效果。
- 优先小 patch，不要无理由整文件重写。
- 不要改变视觉效果，除非用户明确要求。
- 不要把源码 CSS/JS 放进 `public/`。
- 不要新增必需 CDN 依赖。
- 不要移动图片、音频、soundfont、PDF 等资产后忘记更新引用。
- 不要回退到根目录 HTML/CSS/JS 的旧静态站模式。
- 不要为了快速通过而删测试、降级验证、mock 外部行为或绕过真实构建。
- 不要新增一套和现有模块竞争的逻辑；应扩展拥有该职责的模块。
- commit 和 merge 信息必须使用清楚的中文，说明意图和范围，不要简写、占位词或一个词带过。

## Trunk-Based 分支流程

非平凡改动必须使用短生命周期 feature 分支。分支名可以长，但必须准确描述真实主题和影响范围，不要用 `fix`、`update`、`temp` 或随手缩写。

小型 hotfix、单 commit 文档修正、README/AGENTS/spec 小补充、文案或样式微调，如果范围清楚、风险低、不会形成多轮提交，可以直接在 `main` 上完成。即使直接在 `main` 上修，也必须先确认工作区干净、说明修改范围、使用中文 commit 信息，并按改动类型执行必要验证。

如果预计会产生多个 commit，或涉及结构性改动、构建/部署逻辑、跨模块行为、复杂样式、运行时脚本、数据迁移、高风险区域，必须使用短生命周期 feature 分支，并按下面流程合回 `main`。

标准命令流程：

```bash
git switch main
git pull --ff-only origin main
git switch -c feature/<descriptive-topic-and-scope>
pnpm validate
git add <changed-files>
git commit -m "<说明意图和范围的中文提交信息>"
git push origin feature/<descriptive-topic-and-scope>
git switch main
git merge --no-ff feature/<descriptive-topic-and-scope> -m "<说明集成功能的中文合并提交信息>"
git push origin main
```

要求：

- feature 分支必须推送到远端。
- 合回 `main` 必须使用 `--no-ff`，保留可见分支线和合并提交。
- 不要用 fast-forward merge 替代可见合并历史。
- 不要把未验证的 feature 合进 `main`。
- 合并前工作区必须干净。
- `git reset --hard` 是高风险操作，尽可能不要使用；只有在用户明确要求、已说明影响、且没有更安全方案时才允许。

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
- 文档站源码：`docs-site/`

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

结构性改动提交前必须执行：

```bash
pnpm validate
```

纯文档改动至少执行：

```bash
pnpm format:check
```

如果验证失败，优先修代码、配置或文档格式，不要删除测试来绕过问题。

## 高风险区域

- `src/scripts/site/site-music.js`：页面切换时音乐不能断。
- `src/scripts/site/site-router.js`：局部导航影响所有页面。
- `src/layouts/SiteLayout.astro`：脚本加载顺序和运行时数据注入很关键。
- `src/components/ProjectsInitialContent.astro`：项目页展示结构，改数据展示时要保持 DRY。
- `src/data/generated/projectsContent.js`：项目内容数据，改名、链接、图片、更新时间都要保持一致。
- `src/styles/site/projects.css`：项目页视觉规则，注意移动端换行和 bubble 不重叠。
- `src/styles/site/responsive.css`：跨组件响应式规则仍需谨慎。
- `public/assets/`：这里的文件会被公开发布，不要放工具脚本或临时文件。

## 推荐维护方向

1. 保持当前视觉稳定。
2. 继续把组件专属样式留在组件目录。
3. 把重复逻辑沉到 `src/utils/` 或 `src/data/`。
4. 给容易坏的交互补 Playwright 测试。
5. 用 lint、format、CI 和真实本地验证约束工程质量。
