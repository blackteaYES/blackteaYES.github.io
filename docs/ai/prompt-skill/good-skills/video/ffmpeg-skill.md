---
title: ffmpeg-skill（本地剪辑）
description: 42 个本地 FFmpeg 工具，让 Agent 自己剪片、加字幕、转码
hidden: true
sidebar: false
outline: [2, 3]
---

# ffmpeg-skill（本地剪辑）

> 返回：[🎬 视频与动效](/ai/prompt-skill/good-skills/video/)

给 Coding Agent 一套本地 FFmpeg 工具：先探测素材，再按类型化参数剪辑，最后回读成片自检。42 个工具覆盖裁剪、拼接、转码、字幕、重构图、响度、批量处理，全部在本地跑，不需要云端和 API Key。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/ffmpeg-skill/preview.jpg" alt="ffmpeg-skill review 页面：源素材、校验步骤与竖版成片" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面取自仓库 review 页面，版权归原作者。

## 为什么收它

视频工作流里最脏最重复的一段是素材处理：压缩、改分辨率、横竖屏、抽音频、烧字幕、去静音。ffmpeg-skill 把这些做成 42 个有参数契约的工具，Agent 不用猜命令，也不会拼出一长串 filter graph。

它的关键设计是 **probe → edit → verify**：每个任务先 probe 真实时长、帧率、分辨率、色彩和音轨，再决定无损拷贝还是重编码，最后 probe 输出、检查时长/尺寸/音频。README 还提供 review 页面，把源素材、每一步校验、竖版成片和字幕放在一个本地 HTML 里，改哪句直接写指令回给 Agent。

本地优先：只要 `ffmpeg` 和 `python3` 在 PATH 上就能跑，素材不上传。MIT 许可，截至 2026-11 约 10.8k Star。

## 怎么用

```sh
npx ffmpeg-skill setup      # 安装 Skill + 缺 FFmpeg 时尝试安装 + doctor
# 或者分步
npx ffmpeg-skill            # 装给 Claude Code；Codex 加 --codex，Cursor 加 --cursor
npx ffmpeg-skill doctor     # 检查 ffmpeg / ffprobe 与所需组件
```

环境：Node 16+、Python 3.10+、FFmpeg（6.1 / 7.1 / 8 / 9 测试过）。装好后直接用中文提需求，例如：

> 把 raw 文件夹里所有横屏录屏裁成 9:16 竖版，主体保持在画面中间，统一导出 mp4 到 vertical 文件夹

作为 MCP 使用时，默认只暴露 12 个核心工具以控制上下文；需要全部 42 个时设置 `FFMPEG_SKILL_MCP_FULL=1`。语音转字幕要另装本地引擎（如 `pip install faster-whisper`），不装也能用其它工具。

## 挑选建议

它解决「已有素材怎么处理」，不负责「画面从哪来」。要产品宣传片，配 [video-shotcraft](/ai/prompt-skill/good-skills/video/video-shotcraft)；要纯代码生成的动效，配 [huashu-motion](/ai/prompt-skill/good-skills/video/huashu-motion) 或 Remotion 这类；要中文口播删口误，用 [videocut](/ai/prompt-skill/good-skills/video/videocut)。

注意 `doctor` 的 `ok` 是「所有工具所需组件都齐全」的严格信号，单个工具是否可用要看 `doctor --json` 的 `tools` 字段；Homebrew 的普通 `ffmpeg` 常缺 `subtitles`、`zscale` 等组件。

## 出处

- 原文：[10 个用 Codex 做视频的 Skill](https://mp.weixin.qq.com/s/h9HoC7OzbaLHrE08UMEUAg)（微信公众号「乔巴」）
- 仓库：[kajisho5/ffmpeg-skill](https://github.com/kajisho5/ffmpeg-skill)
- 文档站：[kajisho5.github.io/ffmpeg-skill](https://kajisho5.github.io/ffmpeg-skill/)
- npm：[ffmpeg-skill](https://www.npmjs.com/package/ffmpeg-skill)
- 许可：MIT
