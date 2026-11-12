---
title: nuwa-skill（思维蒸馏）
description: 输入一个名字，自动调研、提炼、验证出一份「思维方式」Skill
hidden: true
sidebar: false
outline: [2, 3]
---

# nuwa-skill（思维蒸馏）

> 返回：[🔬 研究检索 · 思维蒸馏](/ai/prompt-skill/good-skills/research/#nuwa-skill-思维蒸馏)

「你想蒸馏的下一个员工，何必是同事」——输入乔布斯、马斯克、芒格、费曼，女娲自动完成调研、提炼、验证，产出一个能对话的视角 Skill。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/nuwa-skill/preview.jpg" alt="女娲 Skill 宣传图：把多种信息蒸馏成思维方式" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面为作者仓库 `cover-distill-minds.png` 的裁切，版权归原作者。

## 为什么收它

它把「模仿某个人说话」推进到「提取思维框架」：先收集公开材料（访谈、文章、演讲），再提炼判断原则、决策启发式与表达方式，最后用一组问题验证产出像不像。仓库自带十几个现成示例，包括卡帕西、马斯克、芒格、费曼、乔布斯、Naval、Paul Graham、塔勒布、Ilya、MrBeast、张一鸣、张雪峰、孙宇晨、Trump，以及一个 X 写作导师视角，拿来就能用。

基于开放的 Agent Skills 协议，README 声明兼容 Claude Code、Codex、Cursor、OpenClaw、Hermes、DeepSeek Harness 等 50+ runtime。

## 怎么用

- 用现成视角：直接取 `examples/<name>-perspective/` 里的 `SKILL.md` 与 `references/` 放进技能目录；
- 蒸馏新人物：调用女娲 Skill，给出名字与想解决的场景，例如「蒸馏芒格，用于投资决策复盘」；
- 它会先列材料清单再提炼；产出后用几个真实问题试问，检查是否只会背金句；
- 依赖联网检索能力，材料越全，视角越稳。

## 挑选建议

适合「借一个人的判断框架来想问题」，不适合查这个人的生平事实。蒸馏结果是模型对公开材料的归纳，不等于本人观点，重要决策别把它当权威。人物跨度越大（例如同时蒸馏乔布斯与芒格），越要说明用哪个视角回答。

## 出处

- 仓库：[alchaincyf/nuwa-skill](https://github.com/alchaincyf/nuwa-skill)
- 许可：MIT
- 标签：研究检索 / 思维蒸馏 / 人物视角
