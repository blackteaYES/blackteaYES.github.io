---
title: huashu-motion（发布片工厂）
description: 一句话直出商业级产品发布片，会作曲，能指着画面改
hidden: true
sidebar: false
outline: [2, 3]
---

# huashu-motion（发布片工厂）

> 返回：[🎬 视频与动效](/ai/prompt-skill/good-skills/video/)

跟 Claude Code、Codex 说一句「给我的产品做一支 30 秒发布片」：它先读产品，给三个方向，写节奏单，做片、作曲配乐，然后在浏览器里打开编辑器等你；哪里不满意，在画面上点一下、写下要改什么，它就只改那一处。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/huashu-motion/preview.jpg" alt="huashu-motion 发布片：整面墙的作品画面" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面取自仓库样片，版权归原作者。

## 为什么收它

它把「产品发布片」拆成了九步：读历史偏好与经验 → 读产品（官网、App Store、README、logo、品牌色）→ 出三个方向的关键帧 → 写 `treatment.md` 节奏单 → 先做最难的镜头 → 自检关键帧 → 写谱配乐并给每个落地帧配音效 → 浏览器编辑器里指着画面改 → 导出并把这次的意见收成经验。

导演规则不是拍脑袋：作者用 FFmpeg 量了 21 支真实发布片（Apple、Nothing、GoPro、Google、Vercel、Linear、Anthropic 等）的切点、节拍、响度、能量曲线和颜色，又拆了 142 支高互动发布/动效片，整理成 20 种运动语言、12 个起步模板、23 种音效和 3 份示范谱。画面是 `index.html` 里的 GSAP / Canvas / Three.js / SVG，不调用视频生成模型，导出支持 MP4、透明 MOV、WebM、GIF 和分享页。

## 怎么用

```sh
npx skills add alchaincyf/huashu-motion
```

支持 Claude Code、Codex、WorkBuddy、Grok Bot、Muse、Dots 等遵循 Agent Skills 协议的产品。环境要求：Node 22+、Chrome/Chromium/Edge、FFmpeg；真乐器音色可选，跑一次 `om samples build` 下载约 55MB 免费采样，不跑就用合成音色；口播可选系统音色、Kokoro 或自己的录音。缺什么跑 `om doctor` 就知道。目前主要在 macOS 实测。

常用命令包括 `om grab`（收产品素材）、`om new` / `om templates`、`om studio`（编辑器）、`om inbox --wait`（接评论）、`om check` / `om qa`、`om render` / `om share`。

## 挑选建议

适合产品发布、功能宣传、AI 工具介绍这类「要商业级完成度」的片子，尤其是你愿意让 Agent 走完整流程、并接受它先问几个问题时。它不会凭空生成真人和实拍，需要真人就用你自己的素材；它也听不见，配乐只能靠谱面、能量曲线和频谱图检查，最后一耳朵还得你来。

和 [video-shotcraft](/ai/prompt-skill/good-skills/video/video-shotcraft) 的取舍：shotcraft 从真实界面和镜头库出发，交付 Remotion 工程；huashu-motion 从品牌气质出发原创动效，带作曲和浏览器编辑器。两者覆盖同一场景，选你更愿意维护的那套工程。

## 出处

- 原文：[Huashu-motion正式发布！让你一键直出商业级产品宣传片！](https://mp.weixin.qq.com/s/Gx5aVT464_OYN794iuEQ0w)（花叔，2026-10-18）
- 仓库：[alchaincyf/huashu-motion](https://github.com/alchaincyf/huashu-motion)（截至 2026-11 约 2.7k Star）
- 许可：MIT
