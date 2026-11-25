---
date: 2026-11-25
title: 🎬 10 个用 Codex 做视频的 Skill：一张选型地图
description: 从素材处理、口播剪辑到代码成片，把 10 个视频 Skill 按环节拆开，附依赖、成本与选型顺序
categories:
  - bookmarks
tag:
  - AI
  - Skill
  - 视频
  - 好文摘录
---

# 🎬 10 个用 Codex 做视频的 Skill：一张选型地图

> 原文：[10 个用 Codex 做视频的 Skill](https://mp.weixin.qq.com/s/h9HoC7OzbaLHrE08UMEUAg)（微信公众号「乔巴」）
>
> 这些 Skill 不是必须全部安装，也不是装得越多越好，需要根据自己的实际需求去选择。

这篇不是教程，而是一张分工图：10 个 Skill 分别管素材处理、口播剪辑、画面生成、素材补全和全流程。下面按「先准备什么 → 各自管什么 → 怎么选」重新整理，保留关键命令、仓库和判断，原文的引流内容与过期数字没有收录。

## 01 安装前准备

做视频的 Skill 大多不是「装上就能用」，先确认电脑上有这几样：

- **Node.js**：绝大多数安装命令以 `npx` 开头
- **Git**：有几个工具需要克隆整个仓库
- **FFmpeg**：一半以上的 Skill 最后都要靠它出片
- **Python**：FFmpeg Skill、Video-Use、Manim、OpenMontage 都会用到
- **Agent 工具**：原文推荐 Codex，Claude Code、Cursor 也能用

## 02 10 个 Skill 的分工

| # | Skill | 管什么 | 入口 |
| --- | --- | --- | --- |
| 01 | [ffmpeg-skill](/ai/prompt-skill/good-skills/video/ffmpeg-skill) | 压缩、裁剪、转码、字幕、批量处理 | `npx ffmpeg-skill setup` |
| 02 | [videocut](/ai/prompt-skill/good-skills/video/videocut) | 中文口播转逐字稿，勾选口误和停顿 | 克隆后 `node bin/install.cjs install` |
| 03 | [video-use](/ai/prompt-skill/good-skills/video/video-use) | 原始素材盘点、粗剪、字幕、自检 | 把安装提示发给 Agent |
| 04 | [HyperFrames](https://github.com/heygen-com/hyperframes) | 用 HTML/CSS/JS 写每一帧，再渲染成视频 | 技术方案，不是 Skill |
| 05 | [Remotion](https://www.remotion.dev/) | 用 React 写视频，适合固定栏目批量出片 | 技术方案，不是 Skill |
| 06 | [video-shotcraft](/ai/prompt-skill/good-skills/video/video-shotcraft) | 产品宣传片的镜头库与 Remotion 工程 | `npx skills add Vincentwei1021/video-shotcraft` |
| 07 | [manim-skill](/ai/prompt-skill/good-skills/video/manim-skill) | 公式推导、算法与原理讲解动画 | `pip install manim` + `npx skills add adithya-s-k/manim_skill` |
| 08 | [Generative Media Skills](https://github.com/SamurAIGPT/Generative-Media-Skills) | 补图片、音频、视频素材 | 需要 muapi Key，按量付费 |
| 09 | [Seedance 2 提示词 Skill](https://github.com/dexhunter/seedance2-skill) | 写 Seedance 2.0 的镜头提示词 | `npx skills add dexhunter/seedance2-skill` |
| 10 | [OpenMontage](https://github.com/OpenMontageInc/OpenMontage) | 从选题、脚本、素材到剪辑包装的完整流水线 | clone 后 `make setup` |

按阶段看，它们其实是四组：

- **处理已有素材**：ffmpeg-skill 做底层杂活；videocut 把中文口播变成可勾选的逐字稿；video-use 面对一堆原始素材做粗剪和自检。三个的输入都是「已经拍好的东西」。
- **从零做画面**：HyperFrames 和 Remotion 是技术方案，分别用 HTML 和 React 写每一帧；video-shotcraft 在 Remotion 上再加一层产品宣传片镜头库；manim-skill 专攻数学和原理讲解。
- **补素材**：Generative Media Skills 用 muapi 生成图片、音频、视频；Seedance 2 提示词 Skill 只负责把中文想法写成模型能用的镜头提示词。
- **整条流水线**：OpenMontage 把选题、脚本、素材、剪辑、包装串起来，更像一个项目模板而不是单点工具。

## 03 怎么选

原文最后给了 5 条速记，基本可以直接当决策树：

1. 处理素材用 FFmpeg Skill，剪口播用 videocut 或 Video-Use，做画面用 HyperFrames、Remotion、video-shotcraft、Manim，补素材用 Generative Media 和 Seedance 2 提示词 Skill，全流程用 OpenMontage。
2. 新手从 FFmpeg Skill 开始，再加一个剪素材的，其余等用到再装。
3. 装之前先看依赖：Node.js、Git、FFmpeg、Python 是基础；Video-Use 和 Generative Media Skills 还需要付费 API Key。
4. 想稳定更新账号，选「用代码写视频」的路线，模板可以反复用，改起来便宜。
5. 有几个仓库更新很快或换过地址，照着旧教程的链接和数字装很可能对不上，装之前先看一眼仓库当前的说明。

我的补充：如果只是想先跑通一条链路，`ffmpeg-skill + video-use` 的组合覆盖面最广；中文口播占比高再换 videocut。画面类不必一次学四个，先确定是「真实产品界面」还是「纯讲解」，前者 shotcraft，后者 Manim 或 animate。

## 04 我的判断

**站内已收 4 个**：ffmpeg-skill、videocut、video-use、manim-skill 都建了详情页，写了安装方式、成本和你可能踩的坑。视频分类的定位也从「代码生成画面」放宽到了「素材处理、剪辑到代码成片」。

**原文有几处已经过期，照抄会踩坑**：

- OpenMontage 仓库已迁移到 `OpenMontageInc/OpenMontage`，现约 8.3 万 Star；原文写的 6.6 万和旧地址都不准了。
- video-shotcraft 文章里写「157 张镜头卡 / 214 条样片」，站内详情页记录的是「124 张 / 150 个镜头」；这类数字变化快，以仓库当前说明为准。
- HyperFrames、Remotion 不是 Skill，是技术方案；Generative Media Skills 只有 51 Star 且依赖付费 Key，优先级可以往后放。

**成本与依赖**：Video-Use 的 ElevenLabs 转写是付费服务；videocut 的 Runtime 版本要求比公开下载新，装之前先看 Release 回执；Manim 需要 Python + FFmpeg + LaTeX，是这几个里环境最重的之一。

## 出处

- 原文：[10 个用 Codex 做视频的 Skill](https://mp.weixin.qq.com/s/h9HoC7OzbaLHrE08UMEUAg)，微信公众号「乔巴」
- 站内详情：[ffmpeg-skill](/ai/prompt-skill/good-skills/video/ffmpeg-skill) · [videocut](/ai/prompt-skill/good-skills/video/videocut) · [video-use](/ai/prompt-skill/good-skills/video/video-use) · [manim-skill](/ai/prompt-skill/good-skills/video/manim-skill) · [video-shotcraft](/ai/prompt-skill/good-skills/video/video-shotcraft)
