---
title: video-use（素材粗剪）
description: 把原始素材丢进文件夹，和 Agent 聊一句就出片
hidden: true
sidebar: false
outline: [2, 3]
---

# video-use（素材粗剪）

> 返回：[🎬 视频与动效](/ai/prompt-skill/good-skills/video/)

把原始素材放进一个文件夹，在这个目录启动 Agent，说一句「剪成什么样」：它盘点素材、给出方案、等确认，再产出 `edit/final.mp4`。口播、访谈、教程、旅拍、现场记录都能用。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/video-use/preview.jpg" alt="video-use 在 Claude Code 中盘点素材并给出剪辑方案" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面基于仓库 README banner 制作，版权归原作者。

## 为什么收它

LLM 不「看」视频，而是「读」视频：ElevenLabs Scribe 给出词级时间戳、说话人分离和音频事件，所有 take 压成约 12KB 的 `takes_packed.md`；需要判断时再生成 filmstrip + 波形 + 词标签的 PNG。相比逐帧抽图（3 万帧约 4500 万 token），这是完全不同的量级。

流程是 Transcribe → Pack → LLM 推理 → EDL → 渲染 → 自检：每个剪辑点都会回看渲染结果，发现问题重剪，最多 3 次；会话记忆写进 `project.md`。它还能按需调用 HyperFrames、Remotion、Manim 或 PIL 生成动画叠加层。

MIT，browser-use 团队出品，截至 2026-11 约 31.5k Star。

## 怎么用

最省事的方式是把仓库的安装提示原样发给 Agent（Claude Code、Codex 等），它会克隆仓库、装依赖、注册 Skill，并在需要时找你要 ElevenLabs API Key。也可以手动安装：

```sh
git clone https://github.com/browser-use/video-use ~/Developer/video-use
ln -sfn ~/Developer/video-use ~/.claude/skills/video-use   # Codex 用 ~/.codex/skills/video-use
cd ~/Developer/video-use
uv sync
brew install ffmpeg
cp .env.example .env   # 填入 ELEVENLABS_API_KEY
```

然后在素材目录里启动 Agent，说「edit these into a launch video」，确认方案后等待 `edit/final.mp4`。

## 挑选建议

- 素材多、懒得逐条过，选它；纯中文口播、要逐字稿勾选，选 [videocut](/ai/prompt-skill/good-skills/video/videocut)。
- ElevenLabs 转写是付费服务，这是硬成本；默认字幕样式偏英文，中文口播建议换 videocut。
- 它做粗剪、整理、字幕和基础包装；拍摄、收音或内容主线有问题，它救不回来。
- 需要精确的数学/原理动画，可把 [manim-skill](/ai/prompt-skill/good-skills/video/manim-skill) 当它的动画层。

## 出处

- 原文：[10 个用 Codex 做视频的 Skill](https://mp.weixin.qq.com/s/h9HoC7OzbaLHrE08UMEUAg)（微信公众号「乔巴」）
- 站内摘录：[10 个用 Codex 做视频的 Skill](/digest/bookmarks/codex-video-skills)
- 仓库：[browser-use/video-use](https://github.com/browser-use/video-use)
- 官网：[video-use.com](https://video-use.com)
- 许可：MIT
