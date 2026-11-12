---
title: Bang Motion（动态图形）
description: 开场、宣传片与动态文字，最终交付一个能播放的网页
hidden: true
sidebar: false
outline: [2, 3]
---

# Bang Motion（动态图形）

> 返回：[🎬 视频与动效](/ai/prompt-skill/good-skills/video/)

把 Coding Agent 变成动态设计师：开场、宣传片、产品演示、动态文字、解说片，交付物是一个 `index.html`，双击就能像视频一样播放，而不是一页页幻灯片。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/bang-motion/preview.jpg" alt="Bang Motion 样片：Grainy Gradient 开场" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面取自仓库样片，版权归原作者。

## 为什么收它

它专门治「AI 做的视频像 PPT」：要求一个连续的世界、真正运动的镜头、持续存在的对象、长在场景里的文字，并把这些变成 Agent 能在代码里检查的规则。风格也不从模板继承，而是先从你的品牌推导：10 种风格方向 × 19 种开场结构 × 9 类渲染家族，先给三个概念候选和一个推荐，选了才写代码。

能力覆盖 15–40 秒开场/宣传片、20–60 秒产品与 SaaS 演示、10–30 秒动态文字、3–10 秒 bumper/台标、30–120 秒解说片，也可以把已有视频素材嵌进设备、画框或遮罩里。交付的 HTML 自带自动播放与循环，`?debug=1` 可以拖动时间轴；需要 MP4 时再用脚本逐帧导出。

## 怎么用

Claude Code 插件：

```text
/plugin marketplace add bangtutorial/bang-motion
/plugin install bang-motion@bang-motion
```

其他 Agent 可以克隆仓库，把 `SKILL.md` 和 `references/` 放进项目，或按自己的规则文件引用。它遵循 Agent Skills 布局，Gemini CLI、Cursor 等也能用。

观看成品只需要浏览器和网络（GSAP 与字体走 CDN），不需要 `npm install`。要自动截帧验证、导出 MP4 或做口播对齐，再装 Node、puppeteer、ffmpeg。写需求时先说「要哪个风格」，不要列参考片的分镜；后者容易变成复制。

## 挑选建议

适合网页原生、可交互的动效交付：产品官网开场、发布会 bumper、动态海报、社媒短片、需要嵌进网页的动画。它的优势是迭代快、交付轻，改一个 HTML 就能改片。

它依赖 CDN 和浏览器，不是离线视频生成器；要完全本地的成片，选 [video-shotcraft](/ai/prompt-skill/good-skills/video/video-shotcraft) 或 [huashu-motion](/ai/prompt-skill/good-skills/video/huashu-motion)。如果你的素材是真实产品界面，Bang Motion 也能做，但镜头库与工程化程度不如 shotcraft。

## 出处

- 原文：[9 个神级 GitHub 项目助你蹭上抖音、小红书 Vibe 知识大赏热点](https://mp.weixin.qq.com/s/7MLwtD9J2QnhCz45dBYCMw)（逛逛 GitHub，2026-11-04）
- 仓库：[bangtutorial/bang-motion](https://github.com/bangtutorial/bang-motion)（截至 2026-11 约 2.1k Star）
- 许可：MIT
