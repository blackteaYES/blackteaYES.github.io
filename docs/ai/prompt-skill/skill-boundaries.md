---
date: 2026-11-08
title: 📐 Skill / Rules / Command 的边界
categories:
  - prompt-skill
tag:
  - AI
  - Skill
  - Rules
---

# 📐 Skill / Rules / Command 的边界

三个容器，触发方式完全不同。放错容器，是「该触发时不触发、不该触发时乱触发」的多数根源。

## Rules：永远在场的约束

每次会话都加载。放禁止事项和约定：路径规矩、代码风格、验收命令。本仓库的 AGENTS.md 就是这类。

别把流程塞进 Rules：它每次都占上下文，越长越稀释，模型反而记不住重点。

## Skill：按需触发的流程

由模型根据 description 自己判断要不要用。所以 **description 是主要触发机制**——[skill-creator 收藏页](/ai/prompt-skill/good-skills/coding/#skill-creator-技能工厂)里也强调：要写得「有点强势」，因为模型倾向于少触发。

Skill 里放步骤、脚本、参考资料。触发场景写不清楚的 Skill，又长又不触发。

## Command：人来按的按钮

用户显式调用，意图明确的固定流程：部署、出周报、跑回归。不靠模型猜，人决定什么时候按。

## 一张决策表

| 情况 | 容器 |
|---|---|
| 每次都要遵守的约束 | Rules |
| 重复流程，时机让模型判断 | Skill |
| 固定流程，时机让人判断 | Command |

## 容器可变，内容不变

三者都是文件。收进 [Quiver](/vibe-coding/quiver) 统一对账、多端分发（见 [我的 AI 工具链](/ai/workflow/my-ai-toolchain)）。换工具时换的是容器格式，不是内容本身。

边界清楚了，「怎么不触发」这类问题就先查容器，再查 description，最后才怀疑模型。
