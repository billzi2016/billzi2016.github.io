# billzi2016.github.io

毕梓仟个人学术网站的源代码。

网站地址：[https://billzi2016.github.io/](https://billzi2016.github.io/)

英文文档：[README.md](README.md)

## 概述

这是一个静态学术作品集网站，覆盖研究兴趣、技术技能、项目、论文、经历、教育背景和一个小型音乐页面。

## 页面

- `index.html`：主页
- `experience.html`：经历与教育背景
- `projects.html`：项目作品集
- `publications.html`：论文
- `personal.html`：个人介绍
- `music.html`：音乐页面

## 结构

- `partials/header.html`：由 JavaScript 加载的公共站点页眉。
- `templates/head.html`：页面生成脚本使用的公共 `<head>` 模板。
- `styles/`：拆分后的 CSS 文件，由 `styles/main.css` 统一引入。
- `scripts/data/`：按领域拆分的内容数据文件。
- `scripts/content-data.js`：轻量聚合入口，暴露 `window.siteContent`。
- `scripts/site-*.js`：页面渲染与运行时行为。
- `tools/`：用于生成静态片段和更新缓存版本号的维护脚本。

## 本地预览

```bash
python3 server.py
```

然后打开 `http://localhost:8000/`。

## 维护工具

修改 `templates/head.html` 或 `tools/generate_pages.py` 中的页面元数据后，重新生成各页面重复的 `<head>` 区块：

```bash
python3 tools/generate_pages.py
```

批量更新所有静态页面中的 CSS 缓存版本号：

```bash
python3 tools/bump_css_version.py 20260624-1
```

## 开发流程

普通内容修改时，优先更新 `scripts/data/` 下对应的数据文件，`scripts/content-data.js` 只保留轻量聚合入口。

修改页面元数据或公共 `<head>` 内容时，编辑 `templates/head.html` 或 `tools/generate_pages.py` 中的页面配置，然后运行：

```bash
python3 tools/generate_pages.py
```

修改 `styles/main.css` 的引入关系，或需要刷新浏览器缓存版本号时，运行：

```bash
python3 tools/bump_css_version.py 20260624-1
```

提交结构性修改前，可以先做轻量语法检查：

```bash
node --check scripts/content-data.js
```

## 数据组织

主要内容数据拆分为：

- `scripts/data/shared-data.js`
- `scripts/data/home-data.js`
- `scripts/data/experience-data.js`
- `scripts/data/projects-data.js`

静态 HTML 页面会先加载这些数据文件，再加载 `scripts/content-data.js`，由它组装出渲染器使用的统一运行时对象。
