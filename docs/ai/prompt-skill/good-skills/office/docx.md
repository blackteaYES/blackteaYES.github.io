---
title: docx（Word 文档）
description: 创建、编辑、读取 .docx，含目录、修订、批注与渲染校验
hidden: true
sidebar: false
outline: [2, 3]
---

# docx（Word 文档）

> 返回：[🗂️ 办公协作 · Word 文档](/ai/prompt-skill/good-skills/office/#docx-word-文档)

要交付真正的 `.docx`（不是 Markdown 改后缀），它给出完整路径：新建走 docx-js 脚本，改旧文件走解压 XML 再打包，读内容用 pandoc，最后转 PDF 看一眼再交付。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/docx/preview.jpg" alt="Word 文档封面：目录、页码、修订与批注" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面为本收藏自制示意图。

## 为什么收它

`.docx` 本质是 XML 的压缩包，用错方法很容易生成「能打开但样式全乱」的文件。这个 Skill 把常见坑写成清单：A4 默认页、横向排版参数、表格必须双宽度、阴影像素用 `CLEAR` 而非 `SOLID`、目录依赖内置 HeadingLevel、圆点用 `PositionalTab` 而不是空格填充。

编辑能力也覆盖了实际需求：`scripts/accept_changes.py` 处理修订、`scripts/comment.py` 加批注、`scripts/merge_runs.py` 合并同名格式片段；`scripts/office/validate.py` 校验结构，`soffice.py` 转 PDF 供人眼复核。

## 怎么用

- 把 `docx/` 目录（含 `scripts/`）放进技能目录；
- 让 Agent 产出具体文档，例如「按模板写一份带目录、页码与页眉的项目周报」；
- 生成后要求转 PDF 并截图检查分页与目录；
- 依赖 Node 的 `docx` 包、Python、LibreOffice（用于渲染校验）。

## 挑选建议

交付 Word 时用它；只要纯文本或 Markdown 就别绕路。既有文档要保留原格式时，先确认修订与批注是否需要保留。该 Skill 为 Anthropic 专有许可，商用前读 `LICENSE.txt`。

## 出处

- 仓库：[anthropics/skills · docx](https://github.com/anthropics/skills/tree/main/skills/docx)
- 许可：Proprietary（见目录内 `LICENSE.txt`）
- 标签：办公协作 / Word / 文档生成
