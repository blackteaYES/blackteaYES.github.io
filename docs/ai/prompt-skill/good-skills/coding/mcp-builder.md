---
title: mcp-builder（MCP 构建）
description: 四阶段构建高质量 MCP Server，附最佳实践与评测脚本
hidden: true
sidebar: false
outline: [2, 3]
---

# mcp-builder（MCP 构建）

> 返回：[🧑‍💻 编码开发 · MCP 构建](/ai/prompt-skill/good-skills/coding/#mcp-builder-mcp-构建)

做 MCP Server 最容易陷入「能跑就行」：工具命名混乱、返回内容撑爆上下文、报错没法自救。这个 Skill 把流程和验收标准都写死了。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/mcp-builder/preview.jpg" alt="MCP 构建封面：工具设计与协议规范" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面为本收藏自制示意图。

## 为什么收它

它分四个阶段：调研规划 → 实现 → 审查测试 → 评测。规划阶段要求先读 MCP 规范与框架文档，再决定工具粒度（完整 API 覆盖 vs 工作流工具）、命名前缀、分页与错误信息；实现阶段给出 TypeScript（推荐）与 Python FastMCP 两套参考；最后用 `scripts/evaluation.py` 与 `reference/evaluation.md` 做能力评测。

推荐栈也很明确：TypeScript + Streamable HTTP（远程）/ stdio（本地），理由是 SDK 质量与模型生成代码的稳定性。

## 怎么用

- 把 `mcp-builder/` 目录（含 `reference/`、`scripts/`）放进技能目录；
- 调用时说明要接的服务与核心任务，例如「给内部工单系统做一个 MCP Server，支持查询、创建、流转」；
- 它会先输出工具设计与命名，再写代码；完成后用评测脚本跑一轮真实任务。

## 挑选建议

要「造」MCP Server 时选它，不要拿它当 MCP 客户端文档。工具数量不是越多越好：先保证常用任务能一次完成，再补全 API 覆盖。做完记得实测上下文占用，返回结果别整页塞。

## 出处

- 仓库：[anthropics/skills · mcp-builder](https://github.com/anthropics/skills/tree/main/skills/mcp-builder)
- 许可：见目录内 `LICENSE.txt`
- 标签：编码开发 / MCP / FastMCP
