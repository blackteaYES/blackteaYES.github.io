---
title: theme-factory（主题工厂）
description: 10 套预设配色与字体主题，一键套到 Slides、Docs 与 HTML
hidden: true
sidebar: false
outline: [2, 3]
---

# theme-factory（主题工厂）

> 返回：[🎨 图像创作 · 主题工厂](/ai/prompt-skill/good-skills/image/#theme-factory-主题工厂)

给已经做出来的东西统一「皮肤」：幻灯片、文档、报告、HTML 落地页。10 套预设主题，也可以临时生成一套新的。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/theme-factory/preview.jpg" alt="主题工厂封面：10 套配色与字体主题" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面为本收藏自制示意图。

## 为什么收它

预设主题写在 `themes/*.md` 里，每套都固定了色板与字体角色，包括 `arctic-frost`、`botanical-garden`、`desert-rose`、`forest-canopy`、`golden-hour`、`midnight-galaxy`、`modern-minimalist`、`ocean-depths`、`sunset-boulevard`、`tech-innovation`。相比让模型「随便配个色」，套主题能保证同一份材料里标题、正文、强调色始终一致。

它处理的是**视觉 token**，不负责版式。版式仍由 pptx / docx / HTML 生成流程决定，所以两者可以叠加使用。

## 怎么用

- 把 `theme-factory/` 目录（含 `themes/`）放进技能目录；
- 调用时说明载体，例如「把这份 HTML 报告套成 midnight-galaxy」；
- 没有合适预设时可以让它现场生成主题，再落成一套可复用的色板与字体组合。

## 挑选建议

有现成品牌规范时用 brand-guidelines，别用 theme-factory 覆盖品牌色；纯配色需求也可直接让它输出 token 表。它的价值在「一致性」，不在「惊艳」，期望别放错。

## 出处

- 仓库：[anthropics/skills · theme-factory](https://github.com/anthropics/skills/tree/main/skills/theme-factory)
- 许可：见目录内 `LICENSE.txt`
- 标签：图像创作 / 配色 / 字体主题
