---
title: animate（程序化动画）
description: 7 种内置风格，先确认故事板与风格帧，再逐帧渲染成片
hidden: true
sidebar: false
outline: [2, 3]
---

# animate（程序化动画）

> 返回：[🎬 视频与动效](/ai/prompt-skill/good-skills/video/)

一个 Claude Code Skill，用一块 `<canvas>` 做短片：故事、分镜、画面、声音全部程序化生成，逐帧确定性渲染，最后用无头浏览器和 ffmpeg 导出 MP4。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/animate/preview.jpg" alt="animate 的 7 种内置风格与自定义风格槽位" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面取自仓库风格总览图，版权归原作者。

## 为什么收它

它把「先确认、再制作」写进了流程：先问题材、画幅、声音、风格，再依次让你确认故事节拍表、2–4 张全尺寸风格帧、逐格故事板，全部点头后才开始动画。对知识解说、历史回顾、小故事这类内容，这个节奏能避免 Agent 一上来就埋头生成一堆废片。

内置 7 种风格：剪纸、交叉排线、Riso 印刷、速写本、数学动画（manim 风）、像素、等距线稿；也可以给参考图/视频/网页，让它测量配色、线宽、纹理、运动与剪辑节奏，生成一套「你的风格」并保存复用。它还内置 8 种短视频叙事语法、镜头、形状变换转场、合成器与响度处理，支持 9:16 / 1:1 / 4:5 / 16:9 四种画幅，能接 ElevenLabs 或自己的录音做口播，并对成片做节拍、响度、文字裁切等测量检查。

## 怎么用

作为 Claude Code 插件：

```text
/plugin marketplace add cth9191/animate
/plugin install animate@animate
```

也可以把 `plugins/animate/skills/animate/` 复制到 `~/.claude/skills/animate/`。

环境：Claude Code、Node 18+、Playwright Chromium、ffmpeg。第一次先装浏览器：

```sh
npm i -g playwright && npx playwright install chromium
```

口播需要 Python + `faster-whisper`（词级时间戳），可选 ElevenLabs connector。用法示例：`/animate a 45-second history of the bicycle, cut paper`；成品在项目的 `pieces/<name>/` 下生成。

## 挑选建议

适合知识解说、历史、产品原理、小故事这类「信息优先」的短片，尤其是你希望在每个阶段都能叫停和改方向的项目。7 种风格偏插画/印刷/数学，不是商业发布片风格；要产品宣传片，看 [video-shotcraft](/ai/prompt-skill/good-skills/video/video-shotcraft) 或 [huashu-motion](/ai/prompt-skill/good-skills/video/huashu-motion)。

它需要 Claude Code + Playwright 环境，纯聊天环境跑不了。自定义风格的质量取决于参考素材；给视频比给单张图更容易量准节奏。

## 出处

- 原文：[9 个神级 GitHub 项目助你蹭上抖音、小红书 Vibe 知识大赏热点](https://mp.weixin.qq.com/s/7MLwtD9J2QnhCz45dBYCMw)（逛逛 GitHub，2026-11-04）
- 仓库：[cth9191/animate](https://github.com/cth9191/animate)（截至 2026-11 约 1.8k Star）
- 许可：MIT
