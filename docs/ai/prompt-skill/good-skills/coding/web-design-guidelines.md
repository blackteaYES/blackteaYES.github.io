---
title: web-design-guidelines（界面审查）
description: 每次审查现拉最新 Web 界面规则，按 file:line 输出无障碍与 UX 问题
hidden: true
sidebar: false
outline: [2, 3]
---

# web-design-guidelines（界面审查）

> 返回：[🧑‍💻 编码开发](/ai/prompt-skill/good-skills/coding/)

对 UI 代码做 Web Interface Guidelines 合规审查。Skill 本体只有 40 行：规则不内置，每次审查前从源仓库现拉最新版，再逐条对照指定文件。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/web-design-guidelines/preview.jpg" alt="界面审查封面：现拉最新规则、file:line 精简输出" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面为本收藏自制示意图。

## 为什么收它

「规则活在上游」是个聪明的设计：审查时 WebFetch `vercel-labs/web-interface-guidelines` 的 `command.md`，拿到的永远是最新规则（无障碍、焦点态、表单、语义 HTML 等 100+ 条），不会像内置规则那样过期。输出是精简的 `file:line` 格式，直接能改。没给文件时会先问你要审哪些。

## 怎么用

- `npx skills add vercel-labs/agent-skills` 安装；
- 说「review my UI」「check accessibility」，带上文件或 glob（argument-hint：`<file-or-pattern>`）；
- 需要能访问 raw.githubusercontent.com 的网络环境。

## 挑选建议

和已收的 ui-craft 对照：ui-craft 是 52 项确定性检测、可打分接 CI 阻断构建；这个是 Agent 按活规则做审查，覆盖面更广但依赖网络与模型判断。要门禁用 ui-craft，要全面体检用这个。

## 出处

- 仓库：[vercel-labs/agent-skills · web-design-guidelines](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines)
- 规则上游：[vercel-labs/web-interface-guidelines](https://github.com/vercel-labs/web-interface-guidelines)
- 许可：SKILL.md 未声明，以仓库为准
- 标签：编码开发 / UI 审查 / 无障碍