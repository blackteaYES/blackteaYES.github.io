---
title: photo-revival（废片焕新）
description: 把生活照重绘成白纸大留白的手绘插画，主体只占 10–16%
hidden: true
sidebar: false
outline: [2, 3]
---

# photo-revival（废片焕新）

> 返回：[🎨 图像创作 · 废片焕新](/ai/prompt-skill/good-skills/image/#photo-revival-废片焕新)

把生活照重绘成白纸大留白的手绘插画。主体只占整页 10–16%，其余留给纸面和笔触。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/photo-revival/preview.jpg" alt="圆门取景：白纸留白的手绘插画效果" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面取自 photo-revival 仓库的 `examples/` 目录，版权归原作者。

## 为什么收它

多数「插画风」做法只是套滤镜，主体和纸感留白都保不住。它把规则写死：3:4 竖构图、主体 10–16%（上限 18%）、80–88% 留白、铅笔/水彩/干刷笔触，要求重新绘制而不是修图。适合旅行碎片、随手拍、小物与建筑；不适合写真精修、商业海报和满版拼贴。在「这9个Skill」的横评里，它被归为必须给原图、重绘随机性较强的一类，原文给三星，适合老街、咖啡、猫这类生活碎片。

## 怎么用

- 把含 `SKILL.md` 的 `photo-revival/` 文件夹放进 `~/.agents/skills/`（Windows 为 `%USERPROFILE%\.agents\skills\`），项目级放 `.agents/skills/`；
- 在支持技能调用的会话里用 `$photo-revival`，再描述要保留的主体和氛围；
- 它只负责设计判断与提示词，出图依赖宿主环境已有的图像生成能力，不附带额度。

## 效果示例

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/photo-revival/06_cat_bed_paper.jpg" alt="猫咪照片重绘：白纸留白的手绘插画效果" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 示例来自 photo-revival 仓库的 `examples/` 目录，版权归原作者。

## 挑选建议

同类照片转绘 Skill，先看有没有明确的比例与留白约束。只写「转成插画风」的，结果很容易退回滤镜效果。

## 出处

- 原文：[今日 skill｜照片转插画](https://mp.weixin.qq.com/s/aipOwmPV-66LH5QxfXVBcw)，公众号「今天的ai日记」，2026-10-30
- 另见：[这9个Skill，把我的图像审美拉到了一个新高度](https://mp.weixin.qq.com/s/a232jGEfi7VwEeOZYvPF9A)，公众号「超级硬核的Daniel」，2026-08-23
- 仓库：[dacnay816y62-hub/photo-revival](https://github.com/dacnay816y62-hub/photo-revival)
- 标签：图像创作 / 照片重绘 / Codex
