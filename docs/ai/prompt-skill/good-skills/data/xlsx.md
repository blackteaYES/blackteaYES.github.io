---
title: xlsx（表格工具）
description: 创建编辑表格、强制公式重算与校验，覆盖 xlsx / xlsm / csv
hidden: true
sidebar: false
outline: [2, 3]
---

# xlsx（表格工具）

> 返回：[📊 数据处理 · 表格工具](/ai/prompt-skill/good-skills/data/#xlsx-表格工具)

处理表格的完整工作流：读、写、改公式、统一格式、清洗脏数据。重点不在「能生成 xlsx」，而在「生成后能被人直接打开使用」。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/xlsx/preview.jpg" alt="表格工具封面：公式、格式、图表与清洗" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面为本收藏自制示意图。

## 为什么收它

它把几个真实痛点写成了硬规则：用 `openpyxl` 写公式后必须跑 `scripts/recalc.py`（调用 LibreOffice）重算，否则所有公式单元格读回来都是 `None`；输出前必须零公式错误；能用公式就不要写死计算结果；口径与假设必须写在单元格注释或表尾，并注明来源。

格式细节也覆盖到了：专业字体、输入区标识、示例行只加在「给别人填」的新表里、编辑既有文件时严格沿用其既有约定。读取路径分三种：`markitdown` 快速看、`openpyxl` 双遍读公式与值、`pandas` 批量进出。

## 怎么用

- 把 `xlsx/` 目录（含 `scripts/`）放进技能目录；
- 让 Agent 处理具体文件，例如「把这张表的月份列拆开，按区域汇总并加公式」；
- 要求它跑 `recalc.py` 并贴出校验结果；确认没有 `errors_found` 再交付；
- 依赖 Python 的 openpyxl / pandas / markitdown 与 LibreOffice。

## 挑选建议

交付物必须是表格时选它；要 Word 报告或 HTML 看板另找对应 Skill。真实业务数据先用小样本验证口径，再批量跑。该 Skill 为 Anthropic 专有许可，商用前读 `LICENSE.txt`。

## 出处

- 仓库：[anthropics/skills · xlsx](https://github.com/anthropics/skills/tree/main/skills/xlsx)
- 许可：Proprietary（见目录内 `LICENSE.txt`）
- 标签：数据处理 / xlsx / 公式校验
