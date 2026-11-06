---
title: brand-guidelines（品牌规范）
description: 把 Anthropic 官方品牌色与字体套到任何物料上
hidden: true
sidebar: false
outline: [2, 3]
---

# brand-guidelines（品牌规范）

> 返回：[🎨 图像创作 · 品牌规范](/ai/prompt-skill/good-skills/image/#brand-guidelines-品牌规范)

一份可直接执行的品牌规范：官方色板、字体、使用场景。调用后，产出的文档、幻灯片、页面会带上统一的 Anthropic 观感。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/brand-guidelines/preview.jpg" alt="品牌规范封面：品牌色与字体一致性" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面为本收藏自制示意图。

## 为什么收它

「品牌规范」最容易停在 PDF 里，落地时仍靠人记。这个 Skill 把色彩、字体、排版约束写成模型能读的规则，生成物料时自动应用，减少「每次做出来的蓝色都不一样」。

它的适用范围是 Anthropic 自己的品牌体系。如果你要维护自己公司的品牌，可以把它当作模板：替换色板与字体，保留「先读规范再产出」的流程。

## 怎么用

- 把 `brand-guidelines/` 目录放进技能目录；
- 在做文档、PPT、HTML 页面时调用，说明「按 Anthropic 品牌规范做」；
- 产出前检查关键项：主色、强调色、标题字体、正文行高。

## 挑选建议

做 Anthropic 相关物料时直接用它；做第三方品牌时不要硬套，先把自家色板与字体补进规则。它解决「一致性」，不解决「设计方向」。

## 出处

- 仓库：[anthropics/skills · brand-guidelines](https://github.com/anthropics/skills/tree/main/skills/brand-guidelines)
- 许可：见目录内 `LICENSE.txt`
- 标签：图像创作 / 品牌规范 / 配色
