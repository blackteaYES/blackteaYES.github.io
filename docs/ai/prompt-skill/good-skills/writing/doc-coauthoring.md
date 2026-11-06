---
title: doc-coauthoring（文档共创）
description: 上下文收集、逐节打磨、读者测试三段式文档工作流
hidden: true
sidebar: false
outline: [2, 3]
---

# doc-coauthoring（文档共创）

> 返回：[✍️ 文档写作 · 文档共创](/ai/prompt-skill/good-skills/writing/#doc-coauthoring-文档共创)

写 PRD、技术规格、决策文档最怕「自己看得懂、别人看不懂」。它把写作拆成三段：先把上下文倒干净，再一节一节磨，最后找一个完全没有背景的「读者」试读。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/doc-coauthoring/preview.jpg" alt="文档共创封面：上下文、结构、读者测试" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面为本收藏自制示意图。

## 为什么收它

大多数写作类提示词只到「帮我写个 PRD」，结果模型靠猜。doc-coauthoring 第一阶段先问五个元问题（文档类型、主要读者、期望影响、是否有模板、其它约束），再鼓励你把背景、历史讨论、被否掉的方案、组织上下文一次倒出来；有 Slack、Drive 等集成时还可直接拉取。

第三阶段的「读者测试」是它最特别的地方：让一个没有上下文的新会话读文档，看能否复述目标、指出含糊处。这一步能提前暴露团队评审时才会发现的问题。

## 怎么用

- 把 `doc-coauthoring/` 目录放进技能目录；
- 说「写一份 XX 的技术方案」或「帮我起草决策文档」，它会先征询是否按三段式走；
- 第一阶段别省略：贴聊天记录、旧文档、约束条件都行，越乱越好；
- 第二阶段按节确认，不要一次让模型写全文；
- 第三阶段做读者测试，按反馈补背景与定义。

## 挑选建议

给外部读者看的正式文档值得走全流程；给自己看的速记、短 README 用普通写作就够。它不负责排版，最终落到 Markdown、Word 或飞书文档还需另一层工具。

## 出处

- 仓库：[anthropics/skills · doc-coauthoring](https://github.com/anthropics/skills/tree/main/skills/doc-coauthoring)
- 许可：见目录内 `LICENSE.txt`
- 标签：文档写作 / 文档共创 / PRD
