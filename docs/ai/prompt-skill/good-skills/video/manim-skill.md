---
title: manim-skill（讲解动画）
description: 用代码画公式推导、算法与原理讲解动画
hidden: true
sidebar: false
outline: [2, 3]
---

# manim-skill（讲解动画）

> 返回：[🎬 视频与动效](/ai/prompt-skill/good-skills/video/)

把 Manim 的最佳实践、可运行示例和常见坑整理成 Agent Skill：公式一步步推导、图形平滑变形那类 3Blue1Brown 风格动画，用 Python 代码画出来。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/manim-skill/preview.jpg" alt="Manim 风格的坐标系、几何图形与公式示意" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面为本收藏自制示意图，仓库未提供截图。

## 为什么收它

Manim 本身能力强但 API 面大，Agent 容易写出跑不起来的场景。这个仓库给两个互不兼容的版本各准备了一套规则：Manim Community Edition 和 3Blue1Brown 的 ManimGL，覆盖 scenes、animations、mobjects、text/LaTeX、3D、camera、interactive 等主题，示例都经过测试。

截至 2026-11 约 1.4k Star，MIT。它明确不是剪辑工具，也不负责配音、字幕和成片节奏——那些交给 [video-use](/ai/prompt-skill/good-skills/video/video-use) 或后期。

## 怎么用

先装底层：

```sh
pip install manim        # 社区版；或 uv pip install manim
```

还需要 Python 3.7+、FFmpeg、LaTeX（TeX Live / MiKTeX / MacTeX）。然后装 Skill：

```sh
npx skills add adithya-s-k/manim_skill
# 只装社区版：npx skills add adithya-s-k/manim_skill/skills/manimce-best-practices
```

调用时直接描述要讲的原理，例如「用 Manim 做 40 秒动画讲二分查找，每次高亮中间元素，排除的一半变灰，中文说明」。

## 挑选建议

- 数学公式、算法过程、物理/AI 原理、流程演示选它；真人剪辑和口播用不上。
- 两个版本不兼容：社区版更稳定、文档全，一般够用；要 OpenGL、3D 和交互式开发再上 ManimGL。
- 环境是这几个里最重的之一（Python + FFmpeg + LaTeX），装之前先确认 `manim --version` 能跑。
- 和 [animate](/ai/prompt-skill/good-skills/video/animate) 的区别：animate 是「分镜 + 风格 + 逐帧渲染」的通用解说片；Manim 追求数学上精确的图形变换。

## 出处

- 原文：[10 个用 Codex 做视频的 Skill](https://mp.weixin.qq.com/s/h9HoC7OzbaLHrE08UMEUAg)（微信公众号「乔巴」）
- 仓库：[adithya-s-k/manim_skill](https://github.com/adithya-s-k/manim_skill)
- skills.sh：[adithya-s-k/manim_skill](https://skills.sh/adithya-s-k/manim_skill)
- 许可：MIT
