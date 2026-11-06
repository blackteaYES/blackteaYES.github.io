---
title: academy-guide（学习指南）
description: 回答「怎么用 Claude」时，补上对应的 Academy 课程
hidden: true
sidebar: false
outline: [2, 3]
---

# academy-guide（学习指南）

> 返回：[🔬 研究检索 · 学习指南](/ai/prompt-skill/good-skills/research/#academy-guide-学习指南)

一个「学习路径补全器」：当你问 Claude 某项功能怎么用，它在正常回答之外，找一条真正匹配的 Claude Academy 课程、教程或用例。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/academy-guide/preview.jpg" alt="学习指南封面：Claude Academy 课程推荐" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面为本收藏自制示意图。

## 为什么收它

回答「怎么用」通常止于文档，但真正要上手还需要结构化学习。它把 Academy 的三类内容（Courses 多课带证书、Tutorials 单功能短指南、Use cases 带提示词的实战案例）建了目录，只在**强匹配**时推荐，并明确要求「绝不编造 Academy 内容」。

边界写得很清楚：适合「我想学这个功能」「怎么给团队做培训」，不适合「正在做事，只想把任务做完」。它还能与文档类 Skill 组合：先用文档回答功能细节，再补一条课程链接。

## 怎么用

- 把 `academy-guide/` 目录放进技能目录；
- 正常提问即可触发，例如「artifacts 怎么用」「怎么给班级做 Claude 入门培训」；
- 回答末尾会附课程/教程链接；没有强匹配就不推，避免硬凑；
- 需要联网访问 academy.claude.com 获取最新目录。

## 挑选建议

做团队 onboarding、培训材料时很有用；日常干活嫌它多一句话就别装。推荐质量取决于目录是否更新，遇到链接失效要回仓库看最新版。

## 出处

- 仓库：[anthropics/skills · academy-guide](https://github.com/anthropics/skills/tree/main/skills/academy-guide)
- 许可：见目录内 `LICENSE.txt`
- 标签：研究检索 / 学习路径 / Claude Academy
