---
title: internal-comms（内部沟通）
description: 按固定格式写 3P 更新、领导简报、通讯、FAQ 与事故报告
hidden: true
sidebar: false
outline: [2, 3]
---

# internal-comms（内部沟通）

> 返回：[🗂️ 办公协作 · 内部沟通](/ai/prompt-skill/good-skills/office/#internal-comms-内部沟通)

内部沟通的难处不在文采，而在格式统一：3P 更新、领导简报、公司通讯、FAQ、事故报告、项目进展，各有各的骨架。它把这些骨架都准备好了。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/internal-comms/preview.jpg" alt="内部沟通封面：3P 更新、简报与事故报告" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面为本收藏自制示意图。

## 为什么收它

`examples/` 里有四份可直接照抄结构的范本：`3p-updates.md`（Progress / Plans / Problems）、`company-newsletter.md`、`faq-answers.md`、`general-comms.md`；SKILL.md 还把领导更新、事故报告、项目更新纳入触发范围。做法是「先认文体，再套结构」，比让模型自由发挥更容易通过评审。

它强调用公司喜欢的格式，而不是通用模板——这意味着你得先把范本换成自己组织的写法，效果才会稳定。

## 怎么用

- 把 `internal-comms/` 目录（含 `examples/`）放进技能目录；
- 说明文体与读者，例如「写给全公司的季度进展，按 3P 格式」「这次线上事故的内部复盘」；
- 先把自家范本替换进 `examples/`，或在提示里附上格式要求；
- 敏感信息（人名、客户、金额）交付前人工脱敏。

## 挑选建议

写给内部人看的固定文体选它；对外营销文案、品牌稿不适合。3P 是最通用的周报骨架，先把 Problems 写具体，比堆 Progress 更有用。

## 出处

- 仓库：[anthropics/skills · internal-comms](https://github.com/anthropics/skills/tree/main/skills/internal-comms)
- 许可：见目录内 `LICENSE.txt`
- 标签：办公协作 / 内部沟通 / 3P
