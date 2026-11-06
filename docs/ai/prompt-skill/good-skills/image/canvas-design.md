---
title: canvas-design（画布设计）
description: 用设计哲学产出 PNG / PDF 静态海报，强调原创而非模仿
hidden: true
sidebar: false
outline: [2, 3]
---

# canvas-design（画布设计）

> 返回：[🎨 图像创作 · 画布设计](/ai/prompt-skill/good-skills/image/#canvas-design-画布设计)

面向「单张静态视觉」：海报、艺术图、封面。先确立设计哲学与视觉语言，再输出 `.png` / `.pdf`，而不是套模板。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/canvas-design/preview.jpg" alt="画布设计封面：静态海报与设计哲学" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面为本收藏自制示意图。

## 为什么收它

它的重点是「原创视觉设计」：明确要求不复制在世艺术家的作品，先形成设计哲学（构图、留白、色板、字体性格），再落到画布。对只有一句话需求、又不想得到模板感的场景，这层前置思考比直接出图有价值。

产出是静态文件（PNG / PDF），适合做文章头图、活动海报、系列封面；不适合多页排版或需要排版的文档。

## 怎么用

- 把 `canvas-design/` 目录放进技能目录（Claude Code `~/.claude/skills/`，通用约定 `~/.agents/skills/`）；
- 调用后给主题、尺寸、用途，例如「A2 竖版展览海报，主题是城市夜雨，冷灰 + 一点暖黄」；
- 需要改稿时改设计哲学里的约束（留白比例、字体性格），比反复说「再高级一点」有效。

## 挑选建议

单张作品选它；整套物料统一配色字体选 theme-factory；要生成艺术或可交互画面选 algorithmic-art。三者常配合：canvas-design 定视觉，theme-factory 提供色板，algorithmic-art 做动态版本。

## 出处

- 仓库：[anthropics/skills · canvas-design](https://github.com/anthropics/skills/tree/main/skills/canvas-design)
- 许可：见目录内 `LICENSE.txt`
- 标签：图像创作 / 静态视觉 / 海报
