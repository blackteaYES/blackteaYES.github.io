---
title: pdf（PDF 工具）
description: 合并拆分、水印加密、表单填写与扫描件 OCR
hidden: true
sidebar: false
outline: [2, 3]
---

# pdf（PDF 工具）

> 返回：[🗂️ 办公协作 · PDF 工具](/ai/prompt-skill/good-skills/office/#pdf-pdf-工具)

PDF 的杂活集合：抽文本与表格、合并拆分、旋转、加水印、创建、填表单、加解密、提取图片、扫描件 OCR。提一句 `.pdf` 就会触发。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/pdf/preview.jpg" alt="PDF 工具封面：合并、拆分、表单与 OCR" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面为本收藏自制示意图。

## 为什么收它

它的强项是把「填 PDF 表单」这种麻烦事流程化：先用 `check_fillable_fields.py` 判断是标准可填表单还是需要坐标标注，再 `extract_form_field_info.py` 取字段，配合 `create_validation_image.py` 画出校验图，最后 `fill_fillable_fields.py` 或 `fill_pdf_form_with_annotations.py` 写入，并用 `check_bounding_boxes.py` 复核位置。`forms.md` 与 `reference.md` 提供完整说明。

其余能力各有脚本支撑：`convert_pdf_to_images.py` 渲染页图，`extract_form_structure.py` 解析结构。

## 怎么用

- 把 `pdf/` 目录（含 `scripts/`）放进技能目录；
- 说明目标文件与动作，例如「把这三份合同合并，加页码水印」「填这份可填表单」；
- 表单类任务按它的校验流程走，不要跳过定位图；
- OCR 依赖环境里的识别组件，扫描件质量差时先提高分辨率。

## 挑选建议

处理既有 PDF 选它；从零排版新文档，用 docx / pptx 再导出 PDF 更稳。加密与签名场景先确认合规要求。该 Skill 为 Anthropic 专有许可，商用前读 `LICENSE.txt`。

## 出处

- 仓库：[anthropics/skills · pdf](https://github.com/anthropics/skills/tree/main/skills/pdf)
- 许可：Proprietary（见目录内 `LICENSE.txt`）
- 标签：办公协作 / PDF / 表单
