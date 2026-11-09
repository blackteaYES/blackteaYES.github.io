---
title: vercel-optimize（成本审计）
description: 观测先行的 Vercel 成本审计：先收指标再查代码，建议带版本化引用
hidden: true
sidebar: false
outline: [2, 3]
---

# vercel-optimize（成本审计）

> 返回：[🧑‍💻 编码开发](/ai/prompt-skill/good-skills/coding/)

对已部署的 Vercel 项目做成本与性能审计（v1.2.0）。核心教条：**`signals.json` 存在且确定性门控指向某路由/文件之前，不看源码**——建议从生产指标出发，而不是全仓 grep 猜。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/vercel-optimize/preview.jpg" alt="成本审计封面：指标先行、确定性门控、版本化引用" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面为本收藏自制示意图。

## 为什么收它

流水线全是确定性脚本，模型只负责被圈定的调查：collect-signals（Vercel 指标/用量/合同）→ scan-codebase → merge → gate（默认 6 个候选，带多样性护栏）→ deep-dive 与 reconcile（被指标证伪的候选转成观察）→ 每个候选一份 brief，3 份以上 fan-out 子代理 → verify-and-regen（校验文件、引用、版本匹配，不合格的重跑）→ 渲染报告。

引用只允许来自内置 docs-library，版本不匹配的引用直接剥离；不给客户报「省 $N」，只说成本量级。框架支持：Next.js（App/Pages）、SvelteKit、Nuxt 完整，Astro 有限，其余默认停下询问。缺 Observability Plus 时不静默降级，把「开通重跑 / 接受有限审计」两条路摆给用户选。

## 怎么用

- 前置：Vercel CLI v53+、已登录、目录已 link、Node 20+；路由级建议需要 Observability Plus；
- 说「降低 Vercel 账单」「查慢路由」「缓存机会」触发；
- 每次审计用全新临时运行目录，不复用上次的 brief 与报告。

## 挑选建议

它和 react-best-practices 的分工：后者是写代码时的规则，前者是部署后拿指标说话。项目没流量（14 天窗口）时它会明说指标稀疏，只给流量无关的发现——别指望空项目审出花来。

## 出处

- 仓库：[vercel-labs/agent-skills · vercel-optimize](https://github.com/vercel-labs/agent-skills/tree/main/skills/vercel-optimize)
- 许可：SKILL.md 未声明，以仓库为准
- 标签：编码开发 / Vercel / 成本 / 可观测性