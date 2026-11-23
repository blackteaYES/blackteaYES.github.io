---
title: Pixel2Motion（标志动效）
description: 把位图 Logo 重建成可编辑 SVG，再生成一段可交付的 Logo 片头动画
hidden: true
sidebar: false
outline: [2, 3]
---

# Pixel2Motion（标志动效）

> 返回：[🎬 视频与动效 · 标志动效](/ai/prompt-skill/good-skills/video/#pixel2motion-标志动效)

一张 PNG、JPG 或截图 Logo，先重建成可编辑 SVG，再编排成约 1.5 秒的 Logo 片头；输出 SVG、CSS、HTML 和动效说明。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/pixel2motion/preview.jpg" alt="Pixel2Motion 标志动效封面" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面为本收藏自制示意图。

## 为什么收它

- 把「描摹 → 叠图检查 → 动画编排 → 关键帧验收」串成一条可审查的流程，不是直接把图扔给视频模型。
- 输出 `logo.svg`、`motion.css`、`logo_motion.html`、`motion_spec.md`，还能导出 GIF 或透明视频预览。
- 适合文章开场、产品演示、品牌片头；有原始 SVG 或字体文件时，还原度最好。
- 不适合复杂插画型 Logo 或完整品牌系统；自动描摹可能把简单图形切成大量碎片。

## 怎么用

安装：

```bash
npx skills add nolangz/pixel2motion --skill pixel2motion
```

- 依赖 Python 3.10+、Pillow、numpy、Chrome / Chromium 和 Playwright。
- 在放 Logo 的文件夹里新建任务，提示词至少说清这几件事：
  - 先重建可编辑 SVG，把图标、文字和其他元素分开；
  - 与原图叠图检查轮廓、颜色和文字位置；
  - 做一段约 1.5 秒、动作克制、不循环的片头；
  - 输出 `logo.svg`、`motion.css`、`logo_motion.html`、`motion_spec.md`；
  - 截关键帧检查裁切和错位，末帧要与静态 SVG 一致。
- 生成后用浏览器打开 `logo_motion.html` 预览；想改就具体说哪一段太快、哪段停留太久、哪一行字和原图对不上。

## 挑选建议

- 有原始字体或 SVG 就一起给，文字还原会好很多；只有截图也能先做一版动作。
- 简单几何图形不要用自动描摹，直接让 Agent 用基本图形重画，SVG 更干净、也更好改。
- 匹配分高不等于观感对，重点看轮廓、字距、基线和末帧。
- 和 `Bang Motion`、`animate` 的区别：后者做整支片或多镜头，Pixel2Motion 专做 Logo 从静态到动态的这一小段。
- 商用前核对仓库许可证与素材授权。

## 出处

- 原文：[发现一个神级 Skill：丢一张图给 AI，它直接做成动画](https://mp.weixin.qq.com/s/2Lsm9BSUiILny545IahOLg)，公众号「雷一言」，2026-10-31
- 仓库：[nolangz/pixel2motion](https://github.com/nolangz/pixel2motion)
- 演示：[nolangz.github.io/pixel2motion](https://nolangz.github.io/pixel2motion/)
- 标签：Logo 动效 / SVG / 品牌片头 / Codex
