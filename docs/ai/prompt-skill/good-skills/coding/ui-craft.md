---
title: ui-craft（UI 质检）
description: 52 项确定性 UI 检测规则，把审美变成可打分的 CI 质检
hidden: true
sidebar: false
outline: [2, 3]
---

# ui-craft（UI 质检）

> 返回：[🧑‍💻 编码开发 · UI 质检](/ai/prompt-skill/good-skills/coding/#ui-craft-ui-质检)

把“AI 看不出页面丑”这件事变成可量化的问题：用 52 项确定性规则检查界面，给设计打分，并可以在 CI 里卡住不合格的构建。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/ui-craft/preview.jpg" alt="Taste Skill 品牌标识" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面取自原项目仓库或页面，版权归原作者。

## 为什么收它

- AI 生成页面时，Agent 自己能写代码，却很难判断间距、层级、对比度和一致性。
- UI Craft 把审美判断拆成 52 项确定性检测，产出设计分，适合接入流水线做门禁。
- 分数低于阈值可以直接阻断构建，强制 AI 输出达到基本线；MIT 免费。
- 适合已经有设计基线、想把 UI 质量稳定下来的团队。

## 怎么用

- 按仓库 README 作为 Agent Skill 接入；在 CI 中设置分数阈值和报告路径。
- 先跑现有页面拿基线，再逐步提高阈值，避免一上来把历史页面全部卡死。
- 把检测报告当作 review 清单，不要只看总分。

## 挑选建议

- 它是“体检 + 门禁”，不是设计灵感工具；阈值需要按项目校准。
- 最终仍需人看真实页面，规则只能覆盖可确定的部分。

## 出处

- 原文：[2026 最火的 4 个开源前端界面 UI Skills，彻底解放双手！](https://mp.weixin.qq.com/s/n07KztYTicuQ9IHS0IFgqA)，公众号「前端之神」，2026-10-29
- 仓库：[educlopez/ui-craft](https://github.com/educlopez/ui-craft)
- 官网：[skills.smoothui.dev](https://skills.smoothui.dev/)
- 标签：编码开发 / 前端 / UI 质检 / CI
