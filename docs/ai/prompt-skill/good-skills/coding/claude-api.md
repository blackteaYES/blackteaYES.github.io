---
title: claude-api（API 手册）
description: Claude API 与各家 SDK 的离线参考，含模型迁移与提示词审计
hidden: true
sidebar: false
outline: [2, 3]
---

# claude-api（API 手册）

> 返回：[🧑‍💻 编码开发 · API 手册](/ai/prompt-skill/good-skills/coding/#claude-api-api-手册)

写 Claude 集成时最怕两件事：模型 ID 记错、参数写法过时。这个 Skill 把官方 API 整理成按语言拆分的离线手册，并在触发时提醒「先查再写」。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/claude-api/preview.jpg" alt="API 手册封面：模型参数、流式与工具调用" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面为本收藏自制示意图。

## 为什么收它

内容体量在 Skill 里少见：`python/`、`typescript/`、`java/`、`go/`、`ruby/`、`php/`、`csharp/`、`curl/` 各有 README、流式、工具调用、批处理、Files API 文档；`shared/` 覆盖模型清单、定价、缓存、token 计数、错误码、Managed Agents 系列，以及 `model-migration.md`、`prompt-audit.md` 两套迁移流程。

它明确了「不要凭记忆写 SDK」：函数名、参数、导入路径必须来自文档；还列了一张 API 漂移表（adaptive thinking、web search 工具版本、PHP 命名、Files/Skills 出 beta 等），这些正是训练记忆最容易过时的地方。

## 怎么用

- 把 `claude-api/` 整个目录放进技能目录，保留各语言子目录；
- 只要项目里出现 Claude/Anthropic，或你在问 LLM 的价格、选型、缓存，就会触发；它会先读对应语言目录再写代码；
- 支持子命令：`migrate`（把旧代码迁到新模型）与 `prompt-audit`（审过期提示词与规则文件）。

## 挑选建议

只做 Claude/Anthropic 集成时用它，比翻官方文档快，也避免版本错位。项目里用的是 OpenAI/Gemini 等其它供应商时，它会主动停下——这时别硬套。它是参考资料型 Skill，不会替你做架构决策。

## 出处

- 仓库：[anthropics/skills · claude-api](https://github.com/anthropics/skills/tree/main/skills/claude-api)
- 许可：见目录内 `LICENSE.txt`
- 标签：编码开发 / Claude API / SDK
