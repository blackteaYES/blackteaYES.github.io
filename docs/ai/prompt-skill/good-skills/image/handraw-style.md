---
title: handraw-style（手绘画风）
description: 手绘风格编号库，按编号把“画风感觉”变成稳定提示词
hidden: true
sidebar: false
outline: [2, 3]
---

# handraw-style（手绘画风）

> 返回：[🎨 图像创作 · 手绘画风](/ai/prompt-skill/good-skills/image/#handraw-style-手绘画风)

把模糊的“温暖一点、像绘本”变成可查找、可复用的风格编号。选一个编号加主题，Skill 输出中英双语提示词；默认不直接生图。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/handraw-style/preview.jpg" alt="水彩手绘风格的伦敦街景与猫" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面取自原项目仓库或页面，版权归原作者。

## 为什么收它

- 把画风从形容词变成编号：文章实测 290 种（早期版本 261 种），分 A–G 七组，适合连续做系列配图。
- 默认只给提示词，不擅自加“高清、电影感”等泛化修饰；需要生图时按模型能力分三层路由：名称激活 → 特征补充 → 参考图兜底。
- 参考图不是固定附件，传图时会加隔离约束，避免把原图人物、姿态和构图一起带走。
- 适合公众号配图、短视频封面、系列内容；不适合只想一键出图、不想选风格的人。

## 怎么用

- 安装时必须选仓库根目录 `.`，不能只装 `handraw-style-prompter/` 子目录，因为画廊和编号参考图在根目录。
- 命令：`$skill-installer install --repo yang0/handraw-style --path . --name handdraw-style-prompter --ref master`
- 打开本地画廊 `handdraw-style-prompter/gallery/index.html`，记下编号，再提交“编号 + 主题”。
- 仓库还提供 `prompt_style.py`、`resolve_reference.py`、`validate_library.py`，分别用于生成提示词草稿、判断是否需要参考图、校验风格库一致性。

## 挑选建议

- 仓库还没有正式 Release，编号、能力表和目录结构可能变化；以当前风格索引和校验结果为准。
- README 与 Skill 已更新，但 `agents/openai.yaml`、`MANIFEST.md` 可能落后，别只看旧清单。
- MIT 只覆盖代码；画廊里的作者名、风格标签、素材在公开或商用前仍要单独核验。

## 出处

- 原文 1：[1个Skill，290+种风格插画](https://mp.weixin.qq.com/s/uPwF781qOT9WawcA3wgxgg)，公众号「埃弗里特鱼」，2026-10-05
- 原文 2：[261 种手绘风格应该足够你用了](https://mp.weixin.qq.com/s/dpXlCRHw7na4q8gurvMa4g)，公众号「架构师修行之路」，2026-09-21
- 仓库：[yang0/handraw-style](https://github.com/yang0/handraw-style)
- 标签：图像创作 / 手绘 / 风格索引 / Codex
