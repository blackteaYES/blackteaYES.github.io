---
title: video-shotcraft（产品宣传片）
description: 抓真实界面，用 124 张镜头配方组一支可续改的产品宣传片
hidden: true
sidebar: false
outline: [2, 3]
---

# video-shotcraft（产品宣传片）

> 返回：[🎬 视频与动效](/ai/prompt-skill/good-skills/video/)

告诉 Claude Code 或 Codex「给我的产品做个宣传片」：它抓取你的真实页面，从镜头库里挑配方，写分镜，用 Remotion 做动画，卡节拍、加音效、逐帧检查，最后交给你一个还能继续改的 MP4 和工程。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/video-shotcraft/preview.jpg" alt="ShotCraft Workbench：镜头、字幕与音效的时间线编辑器" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面取自仓库工作台截图，版权归原作者。

## 为什么收它

它解决的是「产品宣传片」这个具体场景，而不是泛泛的「生成视频」。核心资产是 **124 张镜头配方卡 / 150 个镜头**，分 10 类：开场与品牌、镜头运动、转场、字体、UI 入场、交互、数据、光与强调、节奏、结尾。每个镜头都有 Remotion 实现，你可以按名字点菜，也可以让 Agent 根据产品自动选。

因为画面来自你自己的截图和文案，成片清晰、贴合品牌、每一帧都可改；交付物除了 MP4（1920×1080 / 30fps），还有完整 Remotion 工程、浏览器版 Motion Workbench 编辑器，以及可选的剪映草稿（分镜片段、字幕轨、音效/BGM 轨分开）。

## 怎么用

```sh
npx skills add Vincentwei1021/video-shotcraft
```

也可以克隆仓库后软链到 `~/.claude/skills/` 或 `~/.codex/skills/`。调用不需要命令，直接说「Use video-shotcraft to make a promo for my product」，或者指定镜头卡名。内置 Ink Press 模板可以最快出片。

环境：Node.js / npm、ffmpeg / ffprobe；BGM 节拍分析需要 uv；页面抓取需要 puppeteer（脚本按需安装）。Remotion 首次渲染会自己下载 Chrome。官方主要在 macOS 实测，Linux 有无头渲染的注意事项。交付后可以运行 `node workbench/scripts/open.mjs <project>` 打开工作台继续改。

## 挑选建议

适合有真实产品页面、App 界面或截图的项目：软件发布、功能展示、AI 工具介绍都很合适。它需要 Node / Remotion 环境，但换来的是可维护的 React 工程，而不是一次性视频。

和 [huashu-motion](/ai/prompt-skill/good-skills/video/huashu-motion) 的选择：你要「真实界面 + 镜头库 + Remotion 工程」，选 shotcraft；你要「从产品气质原创动效 + 作曲 + 指着画面改」，选 huashu-motion。两者都不做真人实拍。

## 出处

- 原文：[9 个神级 GitHub 项目助你蹭上抖音、小红书 Vibe 知识大赏热点](https://mp.weixin.qq.com/s/7MLwtD9J2QnhCz45dBYCMw)（逛逛 GitHub，2026-11-04）
- 仓库：[Vincentwei1021/video-shotcraft](https://github.com/Vincentwei1021/video-shotcraft)（截至 2026-11 约 18.8k Star）
- 官网：[vincentwei1021.github.io/video-shotcraft](https://vincentwei1021.github.io/video-shotcraft/)
- 许可：Apache-2.0
