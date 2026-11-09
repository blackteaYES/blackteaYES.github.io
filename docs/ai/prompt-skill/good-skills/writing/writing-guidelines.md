---
title: writing-guidelines（文风审查）
description: 按 Vercel 写作手册审查文档文风与语气，file:line 格式输出问题
hidden: true
sidebar: false
outline: [2, 3]
---

# writing-guidelines（文风审查）

> 返回：[✍️ 文档写作](/ai/prompt-skill/good-skills/writing/)

对文档/散文做 Writing Guidelines 合规审查：文风、语气、voice and tone。与 web-design-guidelines 同一套路——Skill 本体极薄，规则每次审查前从上游现拉。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/writing-guidelines/preview.jpg" alt="文风审查封面：现拉最新写作手册、文风语气审查" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面为本收藏自制示意图。

## 为什么收它

审查前 WebFetch `vercel-labs/writing-guidelines` 的 `command.md`，按最新手册逐条对照，输出精简 `file:line` 问题清单。规则不内置意味着手册更新即时生效，也意味着离线环境用不了。它把「文风」从玄学变成可逐条核对的清单，和界面审查是对称的一对。

## 怎么用

- `npx skills add vercel-labs/agent-skills` 安装；
- 说「review my docs」「check writing style」，带上文件或 glob；
- 没给文件时它会先问审哪份。

## 挑选建议

和 doc-coauthoring 分工明确：doc-coauthoring 管「从零共创一份文档」的流程，这个管「写完之后的合规审查」。先共创后审查，正好串成一条文档流水线。中文文档要注意：上游手册面向英文写作，部分条款（冠词、时态）不适用，取其对简洁与读者导向的约束即可。

## 出处

- 仓库：[vercel-labs/agent-skills · writing-guidelines](https://github.com/vercel-labs/agent-skills/tree/main/skills/writing-guidelines)
- 规则上游：[vercel-labs/writing-guidelines](https://github.com/vercel-labs/writing-guidelines)
- 许可：SKILL.md 未声明，以仓库为准
- 标签：文档写作 / 文风 / 审查