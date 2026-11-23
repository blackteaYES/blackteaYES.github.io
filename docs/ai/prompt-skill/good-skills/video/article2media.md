---
title: article2media（一文多发）
description: 一篇文章或一条视频，产出长图、小红书卡片、公众号排版与竖屏口播视频
hidden: true
sidebar: false
outline: [2, 3]
---

# article2media（一文多发）

> 返回：[🎬 视频与动效 · 一文多发](/ai/prompt-skill/good-skills/video/#article2media-一文多发)

把一篇文章或一条视频，做成能直接发布的中文视觉内容：长图、小红书 3:4 卡片、公众号排版、1080×1920 竖屏口播视频，外加全文翻译、白板论证图和黑白漫画。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/article2media/preview.jpg" alt="article2media 内容分发流水线封面" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面为本收藏自制示意图。

## 为什么收它

- 10 个能力 + 1 个总入口：抓取、视频转文字、改写、翻译、长图、小红书卡片、公众号排版、口播视频、白板论证、漫画，能单独装一个，也能一条命令串起来。
- 分工清楚：模型只负责理解和写作，脚本负责抓取、排版、截图、配音、对齐、混音和验收；换模型不会把版面搞乱。
- 公众号路径默认「原文一字不改」，只做排版；说「总结 / 提炼」才会进入改写。
- MIT，零 npm 依赖，Node 22 内置 WebSocket 与 fetch，用本机 Chrome 截图，输出 2 倍分辨率。
- 适合已有文章或视频、要分发到多个平台的场景；不适合想找「万能按钮」、不想装 Node 和 Chrome 的人。

## 怎么用

安装（Claude Code 插件）：

```bash
claude plugin marketplace add threerocks/article2media
claude plugin install article2media@article2media
```

安装（Codex / 手动）：

```bash
npx skills add threerocks/article2media -g -a claude-code -a codex -y
```

调用：

```bash
/article2media https://x.com/.../status/...
/article2media ./my-essay.md 公众号
/article2media https://www.bilibili.com/video/BV... 小红书
```

- 产出在 `article2media-out/<slug>/`；公众号原文排版会生成 `article.html`，点「复制到公众号」即可。
- 手动安装时不要只装一个能力目录，否则会提示找不到共享引擎；至少装 `article2media` + `wechat-layout`，或设置 `ARTICLE2MEDIA_ENGINE`。
- 依赖 Node 22+、Chrome / Chromium，以及一个能调用 Skill 的 AI 宿主。

## 挑选建议

- 只排公众号：装 `article2media` + `wechat-layout` 两个目录就够，不用全装 11 个。
- 要保留原文就说「公众号 / 原文 / 排版」；要改写再说「总结 / 提炼」，两条路径不要混。
- 中文字体先跑 `fonts.mjs` 检查，否则截图里的字可能不对；重要内容用更强的模型，并按 `tests/model-eval.md` 跑回归。
- 和 `video-shotcraft`、`huashu-motion` 的区别：后者从镜头和风格出发做片，article2media 从已有文章或视频出发做多平台分发。
- 代码是 MIT，但商用前仍要核对仓库 LICENSE 和素材授权。

## 出处

- 原文：[开源项目 article2media 丢一个链接就能出图文和竖屏视频](https://mp.weixin.qq.com/s/pvqrbJoZyKGcDcD52LKNMQ)，微信公众号，2026-11-19
- 仓库：[threerocks/article2media](https://github.com/threerocks/article2media)，MIT，v2.3.1
- 标签：内容分发 / 长图 / 小红书卡片 / 公众号排版 / 口播视频 / Codex
