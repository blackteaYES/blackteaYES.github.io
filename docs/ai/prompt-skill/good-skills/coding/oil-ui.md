---
title: oil-ui（UI 选型）
description: 先生成多个 UI 方向，横向对比后基于真实截图持续迭代
hidden: true
sidebar: false
outline: [2, 3]
---

# oil-ui（UI 选型）

> 返回：[🧑‍💻 编码开发 · UI 选型](/ai/prompt-skill/good-skills/coding/#oil-ui-ui-选型)

不直接给一套静态模板，而是让 Agent 先生成多个不同方向的 UI 方案，横向对比选型，再基于真实截图一轮轮迭代细节。

## 为什么收它

- 适合设计方向不明确的时候：先看多个方案，再决定走哪条路。
- 模型无关，任意大模型都可以接入；MIT 开源。
- 迭代基于真实页面截图，不是只在对话里改描述。
- 适合需要 AI 自主做多方案探索的产品早期。

## 怎么用

- 按仓库 README 安装；给产品目标、约束和参考截图。
- 让它先出 2–3 个方向，选定后再进入截图迭代循环。
- 每次迭代只改一个维度（布局、配色、间距），否则很难判断哪一步变好了。

## 挑选建议

- 适合“先选方向再打磨”；如果你已经只有一个明确设计稿，直接用 Impeccable 或 UI UX Pro Max 更快。
- 截图迭代需要真实页面可跑，纯静态需求效果会打折。

## 出处

- 原文：[2026 最火的 4 个开源前端界面 UI Skills，彻底解放双手！](https://mp.weixin.qq.com/s/n07KztYTicuQ9IHS0IFgqA)，公众号「前端之神」，2026-10-29
- 仓库：[oil-oil/oil-ui](https://github.com/oil-oil/oil-ui)
- 官网：[ui.oiloil.org](https://ui.oiloil.org/)
- 标签：编码开发 / 前端 / UI 探索 / 多方案
