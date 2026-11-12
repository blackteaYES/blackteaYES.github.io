---
title: photo-story（照片故事）
description: 按原图结构重绘成 16 种风格，保留构图只换材质
hidden: true
sidebar: false
outline: [2, 3]
---

# photo-story（照片故事）

> 返回：[🎨 图像创作 · 照片故事](/ai/prompt-skill/good-skills/image/#photo-story-照片故事)

同一张照片，换一种「时间与情绪」的材质：东方故事、青绿山水、水彩、木刻版画、毛线编织、金箔压纸……保留原图的主体位置与构图，只改变呈现方式。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/photo-story/preview.jpg" alt="上海照片转成青绿山水风格" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面为作者仓库 `examples/` 中的示例效果，版权归原作者。

## 为什么收它

大多数「照片转画风」只给一句风格词，出图后主体位置、比例、层次全变。photo-story 把规则拆成两张清单：结构保留（主体位置、大小比例、构图框架、空间层次、轮廓可识别）和风格转换（色彩、质感、细节）。工作流也是固定的：提取结构层 → 分析内容元素 → 选目标风格 → 生成风格化提示词 → **必须把原图作为参考图**传给文生图工具。

仓库自带 16 种风格的示例，覆盖东方故事、只此青绿、中国写意、白描、水彩、木刻版画、金箔压纸、鎏金徽章、毛线编织、稚拙插画、艺术海报、符号记忆等，适合旅行照、老建筑、街头小景。

## 怎么用

- 把 `photo-story/` 整个目录（含 `SKILL.md`）放进技能目录：Claude Code 用 `~/.claude/skills/`，通用 Agent Skills 约定用 `~/.agents/skills/`；项目级放对应目录下的 `.claude/skills/` 或 `.agents/skills/`；
- 调用 `$photo-story`，给原图并指定风格，例如「把这张上海外滩照片转成青绿山水」；
- 它只负责结构分析与提示词，出图仍依赖宿主环境已有的文生图能力，不附带额度。

## 挑选建议

和 photo-revival 的差别在于约束方向：photo-revival 强制「白纸大留白、主体只占 10–16%」，photo-story 强制「结构不变、只换材质」。要保留完整场景选 photo-story，要极简留白选 photo-revival。风格名越具体越稳，只说「艺术化一点」很容易变成滤镜。

## 出处

- 仓库：[iotate/photo-story](https://github.com/iotate/photo-story)
- 许可：MIT
- 标签：图像创作 / 照片转绘 / 结构保留
