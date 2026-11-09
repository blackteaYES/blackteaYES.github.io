---
title: react-view-transitions（视图过渡）
description: 用 React 原生 ViewTransition 做共享元素与路由动画，不引第三方库
hidden: true
sidebar: false
outline: [2, 3]
---

# react-view-transitions（视图过渡）

> 返回：[🧑‍💻 编码开发](/ai/prompt-skill/good-skills/coding/)

声明「动画什么」用 `<ViewTransition>`，触发「何时」用 `startTransition` / Suspense，控制「怎么动」用 CSS。基于浏览器原生 `startViewTransition`，不支持的浏览器优雅跳过。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/react-view-transitions/preview.jpg" alt="视图过渡封面：共享元素、路由方向动画、优雅降级" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面为本收藏自制示意图。

## 为什么收它

把动画当信息设计：每个过渡必须说清一种空间关系，说不清就别加。五种模式按实现顺序排：共享元素（同一个东西，往深处走）→ Suspense 揭示（数据到了）→ 列表身份（同样的项，新排列）→ 状态变化 → 路由变化。方向滑动只留给层级导航（列表→详情），平级 tab 切换不该暗示深度。

坑都写明了：`<ViewTransition>` 必须出现在任何 DOM 节点之前才触发 enter/exit；`default="none"` 要刻意使用；`router.back()` 不带 transition type；同名共享元素同一时刻只能挂载一个。版本要求也清楚：React 19.3+ 稳定版，Next.js App Router 内置 canary 不用另装。

## 怎么用

- 安装后说「给路由加过渡动画」「做共享元素动画」触发；
- 按 `references/implementation.md` 先审计再动手，CSS 配方在 `references/css-recipes.md`；
- 全局样式里加 reduced-motion 降级，无障碍不丢。

## 挑选建议

要原生感、不想引 framer-motion 时选它；需要编排复杂时间线或兼容老浏览器时，第三方动画库仍更稳。浏览器门槛：Chromium 125+ / Firefox 144+ / Safari 18.2+。

## 出处

- 仓库：[vercel-labs/agent-skills · react-view-transitions](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-view-transitions)
- 许可：MIT（SKILL.md 声明）
- 标签：编码开发 / React / 动画