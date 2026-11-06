---
title: skill-creator（技能工厂）
description: 把重复流程做成 Skill，并用评测反复改到稳定触发
hidden: true
sidebar: false
outline: [2, 3]
---

# skill-creator（技能工厂）

> 返回：[🧑‍💻 编码开发 · 技能工厂](/ai/prompt-skill/good-skills/coding/#skill-creator-技能工厂)

「把刚才这套流程做成 Skill」——它负责接下来的全部：访谈补全需求、写 `SKILL.md`、设计测试用例、跑评测、看报告、改描述，直到触发稳定。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/skill-creator/preview.jpg" alt="技能工厂封面：Skill 创建、评测与触发优化" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面为本收藏自制示意图。

## 为什么收它

它把「写提示词」升级成「做产品」：先明确技能要做什么、何时触发、输出格式、是否需要测试；再写 `name` / `description` / `compatibility` 与正文。它特别强调 `description` 是主要触发机制，要写得「有点强势」，因为模型倾向于少触发。

配套脚本覆盖完整闭环：`run_eval.py` 跑评测、`run_loop.py` 迭代、`aggregate_benchmark.py` 汇总、`generate_report.py` 出报告、`improve_description.py` 优化描述、`package_skill.py` 打包、`quick_validate.py` 校验，另有 `eval-viewer/` 可视化。客观可验证的技能（文件转换、数据抽取、固定流程）适合量化评测；文风、艺术类则以内眼判断为主。

## 怎么用

- 把 `skill-creator/` 目录（含 `agents/`、`scripts/`、`references/`）放进技能目录；
- 调用后描述想法，或直接说「把这次对话里的流程做成 Skill」；
- 按它的提问补上下文 → 看草稿 → 跑测试 → 根据报告改；
- 效果最好的是支持子代理与脚本执行的运行环境。

## 挑选建议

一次性任务不需要 Skill，重复三次以上再考虑。先把「触发场景」写清楚，再写步骤；否则技能会又长又不触发。评测集从真实请求里挑，别自己造简单样例。

## 出处

- 仓库：[anthropics/skills · skill-creator](https://github.com/anthropics/skills/tree/main/skills/skill-creator)
- 许可：Apache 2.0（以目录内 `LICENSE.txt` 为准）
- 标签：编码开发 / Skill 开发 / 评测
