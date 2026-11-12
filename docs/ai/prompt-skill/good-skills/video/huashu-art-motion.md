---
title: huashu-art-motion（艺术动画）
description: 36 种艺术风格 + 9 种解说语法，做艺术动画与口播讲解片
hidden: true
sidebar: false
outline: [2, 3]
---

# huashu-art-motion（艺术动画）

> 返回：[🎬 视频与动效](/ai/prompt-skill/good-skills/video/)

让 Coding Agent 把艺术风格写成会动的画：36 种艺术风格、9 种解说语法、8 段参数化片段，还带一条口播整片的参考代码。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/huashu-art-motion/preview.jpg" alt="huashu-art-motion 样片：Clawd 跳进梵高画作" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面取自仓库样片，版权归原作者。

## 为什么收它

它不是「套模板做视频」，而是一套拆解方法：先量参考动画的转场、节拍网格和运动热图，再用代码复刻机制；风格配方卡记录每种画风的参数、母题动作、签名转场和当前短板。仓库里有 53 张风格配方卡、53 个对应场景代码、9 份解说语法卡和 12 篇核心方法文档。

能做的事很具体：复刻/拆解一段动画、做梵高/莫奈/包豪斯风格动画、用口播驱动艺术动画、做「人穿过一幅幅名画」的长卷穿越片、给解说视频做动画段、配乐卡节奏。交付前还有流程：`qa.py` 量稳定、效率、动感与流畅度，`film_gate.py` 检查「翻页式 PPT 感」，`deliver.py` 一条命令交付，并要求一位没参与制作的 Agent 冷审成片。

## 怎么用

```sh
npx skills add alchaincyf/huashu-art-motion
```

依赖 uv、ffmpeg、Playwright Chromium。第一次跑渲染前装浏览器：

```sh
uv run --with playwright playwright install chromium
```

调用方式就是描述任务，例如「做个梵高那种的动画」「用我的口播做一段艺术动画」「做一个人穿过一幅幅名画的片子」。它会先判断任务类型，再按 `SKILL.md` 的表格读取对应文档与配方卡。

## 挑选建议

适合「艺术表达优先」的项目：艺术史短片、风格实验、口播讲解、长卷叙事、解说视频的动画段。它需要 Python / uv / Playwright 环境，产出是代码工程，不是一键出片。

和 [huashu-motion](/ai/prompt-skill/good-skills/video/huashu-motion) 同作者但定位不同：这支偏艺术风格与解说语法，huashu-motion 偏商业产品发布片。要做产品宣传片，优先看后者；要做「画风本身是主角」的片子，选这支。

## 出处

- 原文：[9 个神级 GitHub 项目助你蹭上抖音、小红书 Vibe 知识大赏热点](https://mp.weixin.qq.com/s/7MLwtD9J2QnhCz45dBYCMw)（逛逛 GitHub，2026-11-04）
- 仓库：[alchaincyf/huashu-art-motion](https://github.com/alchaincyf/huashu-art-motion)（截至 2026-11 约 6.8k Star）
- 许可：MIT
