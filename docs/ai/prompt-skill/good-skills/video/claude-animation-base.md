---
title: Claude Animation Base（手绘卡通）
description: p5.js 手绘卡通角色套件，含 31 种表情与完整动画指南
hidden: true
sidebar: false
outline: [2, 3]
---

# Claude Animation Base（手绘卡通）

> 返回：[🎬 视频与动效](/ai/prompt-skill/good-skills/video/)

一个手绘卡通动画的起始套件：p5.js + p5.brush，加上 Claude 的角色设定、动画规则、渲染脚本和一套可复用的 Clawd 角色资产。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/claude-animation-base/preview.jpg" alt="Clawd 角色的 31 种表情设定图" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面取自仓库角色设定图，版权归原作者。

## 为什么收它

严格说它不是一个打包好的 Skill，而是一个「给 Coding Agent 的动画项目模板」——但正因如此，它把角色动画里最难标准化的部分写清楚了：`ANIMATION_GUIDE.md` 规定手工感、有生命、一个整体、无文字、每场都有事发生、转场始终存在，以及笔触、平面 2D、沸腾线条的材质规则；`src/clawd.js` 提供 Clawd 的多视角、31 种表情、眼睛、嘴、帽子、emote 和舞蹈；`src/core.js` 管绘画、时间、运动、相机、光线与纸张。

工作流是：先让模型出故事板，再逐镜头写动画，渲染接触表自检，最后写出 `out/video.mp4`。作者建议用 Opus 5.5、xhigh reasoning 在 Claude Code 里跑，并鼓励换角色、加情绪、给参考图。

## 怎么用

```sh
git clone https://github.com/JohnHeibel/ClaudeAnimationBase.git
cd ClaudeAnimationBase
npm install
```

用 Claude Code 或任意 Coding Agent 打开目录，直接说：

> Read ANIMATION_GUIDE.md, then make a 15-second video of Clawd trying to catch a butterfly.

渲染：

```sh
node render.mjs --clip --out=out/video.mp4
```

环境需要 Node.js、Google Chrome、ffmpeg。没有独显时，p5.brush 的水彩填充会很慢（按秒/帧计），官方建议集显用户让模型避开这类填充；`studio.html` 可以在 Chrome 里拖动预览。

## 挑选建议

适合想研究/制作「手绘卡通角色短片」的开发者：你有编程基础，愿意改场景文件、调角色和镜头，而不是等一个一键成品。Clawd 资产可以换成自己的角色，但需要自己准备设定和绘制代码。

它的产出风格偏手工、水彩、卡通，不适合产品 UI 宣传片；要那条链路，看 [video-shotcraft](/ai/prompt-skill/good-skills/video/video-shotcraft)。如果你只想要完整打包的 Skill，优先看 [anidoodle](/ai/prompt-skill/good-skills/video/anidoodle) 或 [animate](/ai/prompt-skill/good-skills/video/animate)。

## 出处

- 原文：[9 个神级 GitHub 项目助你蹭上抖音、小红书 Vibe 知识大赏热点](https://mp.weixin.qq.com/s/7MLwtD9J2QnhCz45dBYCMw)（逛逛 GitHub，2026-11-04）
- 仓库：[JohnHeibel/ClaudeAnimationBase](https://github.com/JohnHeibel/ClaudeAnimationBase)（截至 2026-11 约 2.9k Star）
- 许可：MIT
