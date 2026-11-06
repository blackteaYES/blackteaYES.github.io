---
title: web-artifacts-builder（Web 工件）
description: React + Tailwind + shadcn/ui 脚手架，打包成单文件 HTML
hidden: true
sidebar: false
outline: [2, 3]
---

# web-artifacts-builder（Web 工件）

> 返回：[🧑‍💻 编码开发 · Web 工件](/ai/prompt-skill/good-skills/coding/#web-artifacts-builder-web-工件)

要做带状态、带路由、带组件库的复杂 HTML 工件，手写单文件会很快失控。它提供一套初始化与打包脚本，把 React 工程压成一个可直接分享的 `bundle.html`。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/web-artifacts-builder/preview.jpg" alt="Web 工件封面：React、Tailwind 与 shadcn" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面为本收藏自制示意图。

## 为什么收它

它把工程化和交付形态连起来：`scripts/init-artifact.sh` 生成 React 18 + TypeScript + Vite 项目，预装 Tailwind 3.4、shadcn/ui 主题系统、40+ 组件与 Radix 依赖，并配好 `@/` 路径别名；开发完用 `scripts/bundle-artifact.sh` 把所有 JS/CSS 内联成单文件。

设计约束也写明了：避免过度居中、紫色渐变、统一圆角和 Inter 字体——这些是「AI slop」的典型特征。适合仪表盘、带交互的原型、需要多组件的演示页；不适合一个静态落地页。

## 怎么用

- 把 `web-artifacts-builder/` 目录放进技能目录；
- `bash scripts/init-artifact.sh my-artifact` 初始化，再在生成的项目里写页面；
- `bash scripts/bundle-artifact.sh` 产出 `bundle.html`，可直接在对话中作为工件展示；
- 依赖 Node 18+，首次运行需要装依赖。

## 挑选建议

交互复杂、组件多时用它；单页静态内容用普通 HTML 更快。打包后文件会变大，嵌入对话前先确认体积。它管工程与打包，审美方向仍建议先过一遍 frontend-design。

## 出处

- 仓库：[anthropics/skills · web-artifacts-builder](https://github.com/anthropics/skills/tree/main/skills/web-artifacts-builder)
- 许可：见目录内 `LICENSE.txt`
- 标签：编码开发 / React / 单文件工件
