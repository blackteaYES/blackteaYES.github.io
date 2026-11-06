---
title: webapp-testing（应用测试）
description: 用 Playwright 驱动本地 Web 应用，截图、查 DOM、看日志
hidden: true
sidebar: false
outline: [2, 3]
---

# webapp-testing（应用测试）

> 返回：[🧑‍💻 编码开发 · 应用测试](/ai/prompt-skill/good-skills/coding/#webapp-testing-应用测试)

改完前端不敢确认效果？它让 Agent 自己起服务、开浏览器、点页面、截图、读控制台，把「看一眼」变成可重复的脚本。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/webapp-testing/preview.jpg" alt="应用测试封面：Playwright 本地 Web 测试" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面为本收藏自制示意图。

## 为什么收它

它给了一张决策树：静态 HTML 直接读文件找选择器；动态应用先看服务是否已启动，没启动就用 `scripts/with_server.py` 管理生命周期（支持前后端多服务）。核心方法是「侦察后再行动」：导航 → 等 networkidle → 截图或看 DOM → 从渲染结果里取选择器 → 再执行操作。

还特别提醒：脚本先跑 `--help`，不要一上来读源码——这些脚本很大，直接读会污染上下文。这个细节很实用。

## 怎么用

- 把 `webapp-testing/` 目录放进技能目录；
- 让 Agent 验证某个改动，例如「启动本地 dev server，打开 /settings，确认保存按钮可用并截图」；
- 单服务示例：`python scripts/with_server.py --server "npm run dev" --port 5173 -- python your_automation.py`；
- 依赖 Python、Playwright 及对应浏览器。

## 挑选建议

本地 Web UI 验证选它；纯接口测试、单元测试不必用它。注意它面向「本地应用」，线上环境要先确认权限与数据安全。截图适合留证据，不适合当视觉回归基线。

## 出处

- 仓库：[anthropics/skills · webapp-testing](https://github.com/anthropics/skills/tree/main/skills/webapp-testing)
- 许可：见目录内 `LICENSE.txt`
- 标签：编码开发 / Playwright / UI 调试
