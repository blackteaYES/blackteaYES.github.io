---
title: Minicharts（手绘图表）
description: 54 种手绘风格图表，按内容自动选型并生成可交互动画
hidden: true
sidebar: false
outline: [2, 3]
---

# Minicharts（手绘图表）

> 返回：[📊 数据处理 · 手绘图表](/ai/prompt-skill/good-skills/data/#minicharts-手绘图表)

把数据画成主题物件：花掉的预算是一盘硬币，一周卖出的巧克力是一排条形图。54 种风格，按内容自动选型，按真实比例绘制。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/minicharts/preview.jpg" alt="Minicharts 手绘图表封面：54 种风格" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面为本收藏自制示意图。

## 为什么收它

- 54 种风格，从极简商务到创意动画，不是常见的柱状图 / 折线图模板。
- 会自动理解内容逻辑，替用户判断适合什么图表；也可以直接指定建筑学、流程图等风格。
- 图表可交互、带动画，适合文档配图、汇报和社交媒体，比默认图表更有记忆点。
- 免费 Skill，安装一分钟；对模型能力要求不高，原文用 DeepSeek V4.1 Flash 实测也能出效果。
- 不适合严格 BI / 统计口径场景：它是展示型图表，不是计算工具。

## 怎么用

安装：

```bash
mkdir -p ~/.claude/skills && curl -fsSL https://april-zhu.com/minicharts/minicharts.tar.gz | tar -xz -C ~/.claude/skills
```

- 把要可视化的数据或内容直接丢给 Agent，它会自动分析逻辑并选型。
- 不想让它自动选，就直接指定风格，例如「建筑学风格」「流程图」。
- 官网有 54 种图表的 gallery 和用法说明：<https://april-zhu.com/minicharts>

## 挑选建议

- 做「能发出去」的图表选它；做「能算对」的表格选 [xlsx](/ai/prompt-skill/good-skills/data/#xlsx-表格工具)。
- 自动选型可能和你的预期不同，正式发布前先看图表类型、比例和数据标签是否合理。
- 风格很多，系列内容先固定一种，避免每张图风格跳。
- 数据准确性要自己复核；它负责画得好看，不负责口径。

## 出处

- 原文：[我发现了一个神仙 Skill，做出来的东西简直有点离谱](https://mp.weixin.qq.com/s/zmiq0Tq4fb0fIrBjWW0iiw)，微信公众号，2026-11-12
- 官网：[april-zhu.com/minicharts](https://april-zhu.com/minicharts)
- 标签：图表 / 数据可视化 / 手绘 / 可交互 / 动画
