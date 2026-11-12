---
title: anidoodle（代码手绘）
description: 32 种手绘风格，一笔一画用代码画出插画、动画与交互网页
hidden: true
sidebar: false
outline: [2, 3]
---

# anidoodle（代码手绘）

> 返回：[🎬 视频与动效](/ai/prompt-skill/good-skills/video/)

手绘的质感，代码的确定性：32 种画风，每一笔都是一个函数，同一份源码在任何机器、任何尺寸上都会重绘出同一张画。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/anidoodle/preview.jpg" alt="anidoodle 的 32 种手绘风格总览" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面取自仓库风格总览图，版权归原作者。

## 为什么收它

它把「手绘插画」拆成了可编程的笔触：铅笔的收锋、水彩的晕染、粉笔在石板上的干擦、剪纸的毛边、丝网印刷的套色偏移，每种风格都有自己的画法，而不是滤镜。32 种风格覆盖钢笔画、彩色铅笔、蜡笔、木刻/浮世绘、水墨、像素、拼贴、刺绣、蓝图等。

除了静态插画，它还能生成「这张画正在被画出来」的过程视频、解说图、角色动画、可交互网页插画，以及产品发布片。配乐也是代码写的：21 种音乐语汇，可选下载 373MB 的真实乐器采样包，另有 14 组逐帧对齐的音效。角色可以跨镜头、跨风格保持一致；也可以给一张照片，用 32 种画风之一重画。

## 怎么用

Claude Code：

```sh
/plugin marketplace add alexgreensh/anidoodle
/plugin install anidoodle@alexgreensh-anidoodle
```

Codex 用 `codex plugin marketplace add alexgreensh/anidoodle`，Grok Build 也有对应命令；其他 Agent 直接把 `skills/anidoodle/` 复制进技能目录。

直接用自然语言点单，例如「给我们食谱页画一个铅笔水彩的梨」。要自己驱动引擎，可以 `node tools/still.mjs` 出静帧、`node tools/render.mjs` 出 GIF/MP4/带透明通道的 WebM、`node tools/emit.mjs` 导出单文件离线 HTML；`node tools/gate.mjs` 检查确定性与空镜。

环境：Node 20+、Playwright Chromium；任何会动的输出还需要 ffmpeg。可选音色包较大，装之前会先问你。

## 挑选建议

适合「视觉资产是主角」的项目：品牌插画、网站 hero、功能图解、教学图、社交贴纸、交互式网页插画、角色短片。它的强项是画风工艺与一致性，不是产品 UI 宣传片；要真实界面宣传片，看 [video-shotcraft](/ai/prompt-skill/good-skills/video/video-shotcraft)。

它的引擎比单文件 Skill 重，第一次跑要装 Playwright 和浏览器；如果你只想要几张图，成本可能偏高，但一旦跑通，整条视觉管线都能复用。

## 出处

- 原文：[9 个神级 GitHub 项目助你蹭上抖音、小红书 Vibe 知识大赏热点](https://mp.weixin.qq.com/s/7MLwtD9J2QnhCz45dBYCMw)（逛逛 GitHub，2026-11-04）
- 仓库：[alexgreensh/anidoodle](https://github.com/alexgreensh/anidoodle)（截至 2026-11 约 1.6k Star）
- 作者主页：[alexgreenshpun.com](https://alexgreenshpun.com)
- 许可：Apache-2.0
