---
title: slack-gif-creator（Slack 动图）
description: 按 Slack 的尺寸与体积限制生成 GIF，自带校验
hidden: true
sidebar: false
outline: [2, 3]
---

# slack-gif-creator（Slack 动图）

> 返回：[🎨 图像创作 · Slack 动图](/ai/prompt-skill/good-skills/image/#slack-gif-creator-slack-动图)

专门做 Slack 里能用的动图：先知道平台限制（尺寸、帧数、体积），再组合帧、加缓动、导出校验。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/slack-gif-creator/preview.jpg" alt="Slack 动图封面：GIF 生成与体积校验" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面为本收藏自制示意图。

## 为什么收它

「让 AI 做个 GIF」最常见的失败不是创意，而是文件超标传不上去。这个 Skill 把限制写成约束，并提供 `core/gif_builder.py`、`core/frame_composer.py`、`core/easing.py`、`core/validators.py`：帧合成、缓动曲线、导出后校验一条链路走完，尺寸或体积不达标会直接报出来。

适合表情动图、简短演示、节日彩蛋；不适合长视频剪辑或需要音轨的场景。

## 怎么用

- 把 `slack-gif-creator/` 目录（含 `core/`）放进技能目录；
- 调用后描述画面与时长，例如「一只像素猫在键盘上打瞌睡，2 秒循环」；
- 生成后先看校验结果，再上传 Slack；要改节奏就调缓动与帧数，而不是重画。

## 挑选建议

只做 Slack 场景的短动图时选它；要通用视频或高帧率动画，用专业工具。注意 GIF 没有透明半调，边缘容易毛刺，主体别贴边。

## 出处

- 仓库：[anthropics/skills · slack-gif-creator](https://github.com/anthropics/skills/tree/main/skills/slack-gif-creator)
- 许可：见目录内 `LICENSE.txt`
- 标签：图像创作 / GIF / Slack
