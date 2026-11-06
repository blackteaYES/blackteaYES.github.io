---
title: algorithmic-art（算法艺术）
description: 先立生成艺术「宣言」，再用 p5.js 写出可调参数的交互画布
hidden: true
sidebar: false
outline: [2, 3]
---

# algorithmic-art（算法艺术）

> 返回：[🎨 图像创作 · 算法艺术](/ai/prompt-skill/good-skills/image/#algorithmic-art-算法艺术)

不是让模型直接画一张图，而是先写一份「算法美学宣言」，再把这份宣言翻译成 p5.js 代码：种子随机、噪声场、粒子与流场，参数可调、结果可复现。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/algorithmic-art/preview.jpg" alt="算法艺术封面：生成艺术与种子随机" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面为本收藏自制示意图。

## 为什么收它

它把「生成艺术」拆成两个阶段：第一阶段产出 `.md` 风格的算法哲学（命名运动、阐述计算过程、涌现行为与参数变化），第二阶段产出 `.html` 交互查看器 + `.js` 生成算法。模板 `templates/generator_template.js` 已经搭好 p5.js 骨架，重点是「90% 算法生成 + 10% 关键参数」，而不是拼贴素材。

适合流场、粒子系统、噪声纹理、参数化海报这类需求；同一 seed 可复现，改参数就能得到同一风格下的不同结果，比反复抽卡稳定。

## 怎么用

- 把 `algorithmic-art/` 目录放进技能目录（Claude Code `~/.claude/skills/`，通用约定 `~/.agents/skills/`）；
- 调用后描述方向即可，例如「做一个像潮汐涨落的粒子流场，冷色、慢速」；
- 产出是本地 HTML + JS，用浏览器打开就能交互调参；要静态图时再截图或导出。

## 挑选建议

适合「想要一套能持续生成同风格作品的算法」，不适合「今晚就要一张指定构图的海报」。如果只缺一张静态视觉，直接用 canvas-design 更快；如果要做品牌视觉系统里的动态图形，这个更合适。

## 出处

- 仓库：[anthropics/skills · algorithmic-art](https://github.com/anthropics/skills/tree/main/skills/algorithmic-art)
- 许可：Apache 2.0（以目录内 `LICENSE.txt` 为准）
- 标签：图像创作 / 生成艺术 / p5.js
