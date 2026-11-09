---
title: react-best-practices（性能规则）
description: Vercel 工程团队的 70 条 React/Next.js 性能规则，按影响排优先级
hidden: true
sidebar: false
outline: [2, 3]
---

# react-best-practices（性能规则）

> 返回：[🧑‍💻 编码开发](/ai/prompt-skill/good-skills/coding/)

写、审、重构 React/Next.js 代码时的性能 checklist：70 条规则、8 个类别，从 CRITICAL 到 LOW 排好优先级，Agent 按影响大小顺序改，而不是随手优化。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/react-best-practices/preview.jpg" alt="性能规则封面：70 条规则、8 类优先级" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面为本收藏自制示意图。

## 为什么收它

优先级顺序就是优化顺序：

1. 消除瀑布流（CRITICAL）：独立操作用 `Promise.all`、await 推迟到真正用的分支、Suspense 流式渲染；
2. 包体积（CRITICAL）：避开 barrel 文件直接导入、重组件 `next/dynamic`、分析/日志脚本水合后再加载；
3. 服务端性能（HIGH）：`React.cache()` 请求内去重、静态 I/O 提升到模块级、RSC 不共享模块级可变状态；
4. 客户端取数、重渲染、渲染性能、JS 微优化、高级模式依次递减。

每条规则一个文件，错误/正确代码对照；整份编译版在 `AGENTS.md`。规则带前缀（`async-`、`bundle-`、`rerender-`…），审查报告里能直接引用规则 ID。

## 怎么用

- `npx skills add vercel-labs/agent-skills` 安装；
- 写新组件、做 data fetching、审性能问题时自动触发；
- 重构时让它按优先级表逐类过，先 CRITICAL 后 LOW。

## 挑选建议

它管「代码怎么写才快」；部署后的账单与慢路由交给 vercel-optimize（指标驱动），组件 API 设计交给 composition-patterns。三者互补，不重复。

## 出处

- 仓库：[vercel-labs/agent-skills · react-best-practices](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices)
- 许可：MIT（SKILL.md 声明）
- 标签：编码开发 / React / Next.js / 性能