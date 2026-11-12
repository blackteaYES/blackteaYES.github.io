---
title: mg-styles-15（动效样板）
description: 15 支 10 秒 MG 样片，附完整提示词、源码与配乐脚本
hidden: true
sidebar: false
outline: [2, 3]
---

# mg-styles-15（动效样板）

> 返回：[🎬 视频与动效](/ai/prompt-skill/good-skills/video/)

15 种 MG（Motion Graphics）动态设计风格，每支 10 秒成片，全部由 Claude Opus 5.5 写代码做出来，并且把风格说明、完整提示词、源码和配乐脚本一起公开。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/mg-styles-15/preview.jpg" alt="MG Styles 15 样片：逐帧手绘风格的火柴实验室" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面取自仓库样片，版权归原作者。

## 为什么收它

它适合「研究一支片子到底怎么做的」。15 种风格覆盖逐帧手绘、等距 2.5D、扁平矢量、线稿、3D 渲染、形状变换、贴纸解说、赛博 HUD、拼贴、极光玻璃、包豪斯、80 年代合成波、像素、液态动效、综艺字幕。每支都附 `prompts/<style>.md` 完整提示词、`demos/<style>/` 全部源码、`audio.py` 配乐与 `cues.json` 时间表。

画面完全由代码生成：SVG、Canvas、WebGL、Three.js，3D 那支用 Blender；声音也是代码合成，15 条音轨共用了 103 个乐器采样。每支成片经过两轮 AI 评审，最终评分在 7.57–8.21 / 10 之间，说明单次生成通常达不到这个完成度。

## 怎么用

把某个 `prompts/` 文件里的整段提示词交给能写代码、能跑命令的 Agent（例如 Claude Code），然后：

1. 只替换 `Creative seed` 里的故事、品牌名、文案和颜色；
2. 保留 `Signature features`，那是风格可识别的关键；
3. 需要竖屏就改 `Output` 为 1080×1920 或改时长；
4. 成片后用 `rubric.md` 让第二个 AI 评审，再改一轮。

仓库自带渲染器 `harness/render.mjs` 和配乐库 `lib/audio`，可以直接复用。环境需要 Node 22.12+、Chrome、ffmpeg、Python 3.11+；3D 风格另需 Blender。字体不在仓库里，需要按 `assets/fonts/README.md` 自行准备，否则会回退到系统字体。

## 挑选建议

适合学习与二次创作：想复刻某一种 MG 风格、想拿到完整提示词和源码、想搭自己的渲染管线。它不是端到端的产品宣传片 Skill，不会替你抓页面、写分镜、做声音设计；要那条链路，看 [video-shotcraft](/ai/prompt-skill/good-skills/video/video-shotcraft) 或 [huashu-motion](/ai/prompt-skill/good-skills/video/huashu-motion)。

同一个提示词每次会生成不同的片子，原片都经过多轮迭代；不要期待单跑一次就达到样片完成度。

## 出处

- 原文：[9 个神级 GitHub 项目助你蹭上抖音、小红书 Vibe 知识大赏热点](https://mp.weixin.qq.com/s/7MLwtD9J2QnhCz45dBYCMw)（逛逛 GitHub，2026-11-04）
- 仓库：[Vincentwei1021/mg-styles-15](https://github.com/Vincentwei1021/mg-styles-15)（截至 2026-11 约 3.5k Star）
- 官网：[vincentwei1021.github.io/mg-styles-15](https://vincentwei1021.github.io/mg-styles-15/)
- 许可：MIT（第三方素材各自保留原许可）
