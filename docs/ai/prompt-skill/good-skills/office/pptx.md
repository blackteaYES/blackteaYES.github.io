---
title: pptx（PPT 工具）
description: 按模板生成、读取、改版式，并用缩略图与校验保证结构
hidden: true
sidebar: false
outline: [2, 3]
---

# pptx（PPT 工具）

> 返回：[🗂️ 办公协作 · PPT 工具](/ai/prompt-skill/good-skills/office/#pptx-ppt-工具)

做演示文稿不只是「生成几页文字」：模板版式、母版占位符、备注与批注都要对上。它把创建、读取、修改三条路径都铺好了。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/pptx/preview.jpg" alt="PPT 工具封面：模板、版式、备注与批注" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面为本收藏自制示意图。

## 为什么收它

新建走 `pptxgenjs`，并把高频错误列成清单：先设 `pres.layout` 再添加页、十六进制颜色不能带 `#`、透明度与阴影参数各管各的、`letterSpacing` 实际叫 `charSpacing`、阴影偏移不能为负、一个实例只产出一个文件。

改既有模板走「解压 → 改 `ppt/slides/slideN.xml` → 压缩」，配套 `add_slide.py`（复制页并处理包内关系）、`clean.py`（清理未引用资源）、`validate.py`（结构校验）、`thumbnail.py`（整份缩略图网格，用于挑版式）、`soffice.py`（转 PDF 复核）。

## 怎么用

- 把 `pptx/` 目录（含 `scripts/`）放进技能目录；
- 要新做：说明页数、受众与模板；要改旧稿：给 `.pptx` 与目标页；
- 先跑 `thumbnail.py` 看版式，再决定复用哪一页；
- 交付前转 PDF 逐页检查溢出与错位。

## 挑选建议

交付 `.pptx` 时选它；只想要内容大纲，用普通写作或 doc-coauthoring。模板越复杂，越要保留原文件并先做缩略图，别直接重写 XML。该 Skill 为 Anthropic 专有许可，商用前读 `LICENSE.txt`。

## 出处

- 仓库：[anthropics/skills · pptx](https://github.com/anthropics/skills/tree/main/skills/pptx)
- 许可：Proprietary（见目录内 `LICENSE.txt`）
- 标签：办公协作 / PPT / 模板
