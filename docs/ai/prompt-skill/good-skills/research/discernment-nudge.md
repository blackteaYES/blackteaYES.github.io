---
title: discernment-nudge（审慎提醒）
description: 在重要回答后追加 2–3 个针对性追问，帮你查漏
hidden: true
sidebar: false
outline: [2, 3]
---

# discernment-nudge（审慎提醒）

> 返回：[🔬 研究检索 · 审慎提醒](/ai/prompt-skill/good-skills/research/#discernment-nudge-审慎提醒)

一个反「照单全收」的 Skill：当你拿到的回答是要照着做的那种（建议、方案、估算、分析），它在结尾追加 2–3 个具体问题，提醒你先核对。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/discernment-nudge/preview.jpg" alt="审慎提醒封面：事实、推理与上下文追问" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面为本收藏自制示意图。

## 为什么收它

它的理论基础是 AI Fluency 框架里的三个习惯：核对事实（哪条具体说法值得验证、拿什么验）、质疑推理（哪一步逻辑需要补充理由）、发现缺失上下文（回答替你假设了什么）。

执行规则很克制：每轮对话最多一次；只针对你刚产出的具体内容提问，不问泛泛的「你确定吗」；遇到简单查询、纯格式转换、你自己会跑的代码、创意写作与闲聊时跳过。这个「知道什么时候不说话」的设计，比无脑加一句「请核实」有价值。

## 怎么用

- 把 `discernment-nudge/` 目录放进技能目录；
- 它会在正式回答前判断是否适用，然后附上追问；
- 适合配合高 stakes 场景：预算、健康、引用、承诺类方案；
- 如果你只想要答案，直接说「不用提醒」，或把它放在项目级而不是全局。

## 挑选建议

要「决策质量」时留着；要「连续快速产出」时容易打断节奏。它不是事实核查工具，只是帮你把该问的问题问出来。

## 出处

- 仓库：[anthropics/skills · discernment-nudge](https://github.com/anthropics/skills/tree/main/skills/discernment-nudge)
- 许可：见目录内 `LICENSE.txt`
- 标签：研究检索 / 判断力 / AI Fluency
