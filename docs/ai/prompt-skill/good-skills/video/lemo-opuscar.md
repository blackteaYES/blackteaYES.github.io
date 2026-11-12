---
title: lemo-opuscar（电影风格库）
description: 99 种影片风格，选一种让 Agent 用代码导出一支完整短片
hidden: true
sidebar: false
outline: [2, 3]
---

# lemo-opuscar（电影风格库）

> 返回：[🎬 视频与动效](/ai/prompt-skill/good-skills/video/)

把「拍什么」交给风格库，把「怎么拍」交给 Claude：选一种风格、讲一个故事，Agent 用代码逐帧渲染出一支完整短片。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/lemo-opuscar/preview.jpg" alt="Lemo-Opuscar 官网头图：夜晚工作台上的木质活字" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面基于仓库头图制作，版权归原作者。

## 为什么收它

它把「电影风格」做成了可检索的库：目前 **99 种风格、15 个类别**，按画面外观分组——剪辑与纪实、绘画与插画、素描与白板、传统工艺、印刷、图形与字体、线性图解、卡通、游戏、胶片、界面、光与线、3D 与微缩、仪器与证据、数据与地图。每种风格都有一支代码生成的样片、静帧页，以及 Agent 要遵循的 `STYLE.md`。

它明确不是视频生成模型：画面是 Canvas / WebGL 页面逐帧渲染，配乐来自免费采样库，旁白用 TTS，没有实拍素材，也没有图生视频。好处是可控——某个镜头不满意，改对应代码即可；风格还能改造成自己的版本，存进 `~/lemo-my-styles/`，库升级或重装都不会覆盖。

配套的方法文档分工清楚：`DIRECTOR.md` 管故事、声音、节奏、镜头与自检，`TECHNIQUE.md` 管逐帧渲染、配音、配乐与混音。

## 怎么用

Claude Code 插件方式：

```sh
claude plugin marketplace add lemomo-ai/lemo-opuscar
claude plugin install lemo-opuscar@lemolab
```

装好后一句话调用，例如「用 watercolor 风格做一支 45 秒的短片，讲我家的咖啡农场，温暖女声旁白」。其他 Agent 可以把 `plugin/skills/lemo-opuscar/` 复制到自己的 skills 目录；也可以直接克隆仓库使用。

环境要求：Node 20+、ffmpeg 7+、Python 3.11+（或 uv）。官方特别提醒 Ubuntu 24.04 自带 ffmpeg 6.1 太旧，需要静态新版。一支片子约 30–60 分钟，token 消耗不小；默认输出 1920×1080 / 24fps。另有三款风格需要你自备生图能力，风格列表里用 ✦ 标出。

## 挑选建议

适合「想要一支完整短片、且愿意等」的场景：广告片、科普短片、品牌故事、音乐视觉都可以，Claude 模型效果最好，记得把 effort 调到 high。不适合赶时间、预算紧，或需要真人实拍的项目。

和 [huashu-art-motion](/ai/prompt-skill/good-skills/video/huashu-art-motion) 的区别：lemo 是「从风格库挑一种，拍完整片」；huashu-art-motion 更偏艺术风格配方与解说语法，适合口播片、长卷穿越和复刻参考动画。

商用前注意许可拆分：代码 MIT，文档 CC BY-NC 4.0（不可商用），样片 CC BY 4.0，第三方素材与 Clawd 角色不在授权范围内。

## 出处

- 原文：[9 个神级 GitHub 项目助你蹭上抖音、小红书 Vibe 知识大赏热点](https://mp.weixin.qq.com/s/7MLwtD9J2QnhCz45dBYCMw)（逛逛 GitHub，2026-11-04）
- 仓库：[lemomo-ai/lemo-opuscar](https://github.com/lemomo-ai/lemo-opuscar)（截至 2026-11 约 15k Star）
- 画廊：[lemomo-ai.github.io/lemo-opuscar](https://lemomo-ai.github.io/lemo-opuscar/)
- 许可：代码 MIT · 文档 CC BY-NC 4.0 · 样片 CC BY 4.0，详见仓库 `LICENSE` 与 `REUSE.toml`
