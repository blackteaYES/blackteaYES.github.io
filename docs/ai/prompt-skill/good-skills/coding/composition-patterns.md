---
title: composition-patterns（组合模式）
description: 用组合代替布尔 prop，把 React 组件 API 设计得可扩展
hidden: true
sidebar: false
outline: [2, 3]
---

# composition-patterns（组合模式）

> 返回：[🧑‍💻 编码开发](/ai/prompt-skill/good-skills/coding/)

组件一旦靠堆布尔 prop 定制行为，就会走向不可维护。这份 Skill 用 10 条组合规则替代：复合组件、状态上提、显式变体，让人和 Agent 都改得动。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/composition-patterns/preview.jpg" alt="组合模式封面：复合组件、状态上提、显式变体" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面为本收藏自制示意图。

## 为什么收它

规则按优先级分四类：组件架构（HIGH）、状态管理、实现模式、React 19 API（均 MEDIUM）。核心几条：

- 不用布尔 prop 定制行为，用组合；复杂组件用共享 context 的复合组件结构；
- Provider 是唯一知道状态如何管理的地方，context 接口定义 state / actions / meta 做依赖注入；
- 用显式变体组件代替布尔模式，用 children 代替 `renderX` prop；
- React 19+ 不再用 `forwardRef`，用 `use()` 代替 `useContext()`（React 18 及以下跳过这一节）。

每条规则单独成文件，含「为什么重要 + 错误示例 + 正确示例」，另有编译好的完整版 `AGENTS.md` 可直接喂给 Agent。

## 怎么用

- `npx skills add vercel-labs/agent-skills` 安装（会装下仓库全部 9 个 Skill）；
- 重构布尔 prop 泛滥的组件、设计组件库 API 时让它参考；
- 需要细节时读 `rules/` 下对应规则文件，或直接给完整版 `AGENTS.md`。

## 挑选建议

它管「架构与可维护性」，不管性能——性能交给 react-best-practices。组件还没几个时不必上；等到一个组件挂五六个布尔开关、调用方开始猜 prop 含义时再收。

## 出处

- 仓库：[vercel-labs/agent-skills · composition-patterns](https://github.com/vercel-labs/agent-skills/tree/main/skills/composition-patterns)
- 许可：MIT（SKILL.md 声明）
- 标签：编码开发 / React / 组件架构