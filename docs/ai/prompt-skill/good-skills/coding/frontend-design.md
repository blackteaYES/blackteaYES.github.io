---
title: frontend-design（前端设计）
description: 像设计总监一样定视觉方向，避开模板化与「AI 味」
hidden: true
sidebar: false
outline: [2, 3]
---

# frontend-design（前端设计）

> 返回：[🧑‍💻 编码开发 · 前端设计](/ai/prompt-skill/good-skills/coding/#frontend-design-前端设计)

不是 UI 组件库，而是「审美方向」：先把设计简报拆成色板、字体、版式与原则，再动手写页面。重点在避开一眼就能看出是 AI 生成的默认样式。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/frontend-design/preview.jpg" alt="前端设计封面：视觉方向与排版" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面为本收藏自制示意图。

## 为什么收它

它直接点名了当下 AI 设计的几类「套路」：奶油底 + 高对比衬线 + 陶土色、近黑底 + 荧光绿、报纸式细线分栏、统一圆角卡片 + 灰色阴影、每个标题上加全大写小标签、用中点分隔的元信息串。这些并非不能用，而是不分题材都会出现，所以成了「默认值」。

方法上强制两遍：第一遍产出 token 计划（4–6 个命名色值、字体角色、版式概念与对齐方式、设计原则）；第二遍拿回简报逐条复查，凡是「换成别的项目也成立」的部分就改掉，再写代码。还给了字体排印的具体约束，比如行长控制在 80 字符内、衬线正文行高更宽。

## 怎么用

- 把 `frontend-design/` 目录放进技能目录；
- 调用时给真实简报：产品是什么、给谁看、页面要完成什么任务；
- 要求它先给设计计划再写代码；不满意就改计划，别在 CSS 里反复微调；
- 可与 ui-ux-pro-max（素材库）、oil-ui（多方向对比）配合。

## 挑选建议

想要「有辨识度」的界面时选它；赶工期、套现成设计系统时不合适，它会主动偏离默认。它不提供组件实现，落地仍靠你的框架。判断标准很简单：把设计稿的文案换掉，如果看起来像任何产品都行，说明方向没定住。

## 出处

- 仓库：[anthropics/skills · frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design)
- 许可：见目录内 `LICENSE.txt`
- 标签：编码开发 / 前端 / 视觉设计
