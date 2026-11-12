---
title: anatomy（交互图解）
description: 生成可交互的机械/系统等距图解与代码动画
hidden: true
sidebar: false
outline: [2, 3]
---

# anatomy（交互图解）

> 返回：[🧑‍💻 编码开发 · 交互图解](/ai/prompt-skill/good-skills/coding/#anatomy-交互图解)

开源 Agent Skill，专门做真实机械和复杂系统的交互式等距插图，输出可以直接在浏览器打开、可点击、可暂停的代码动画。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/anatomy/preview.jpg" alt="自行车构造交互图解：部件标注与分组" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面取自原项目仓库或页面，版权归原作者。

## 为什么收它

- 成品不只是动画：支持点击部件高亮、拆解、暂停/慢放、调整曲轴角度、单缸观察。
- 文章用它做了自行车、四缸发动机和工厂裂解产线，说明它能把“原理讲解”变成可操作图解。
- 提供绘图工具、运动/特效参考资料和检查方法，不是只给一段提示词。
- 支持 Codex，也能配合 Kimi K3 做出可操作的机械图解。

## 怎么用

- 把安装提示词发给 AI 编程工具：`请帮我安装 Anatomy Skill，项目地址：https://github.com/wheresryan22/anatomy`，让它按当前工具和环境安装完整技能与配套工具。
- 安装后描述“要让人看懂什么、哪些地方要操作”；有设备图纸、照片、说明书一起给它，并标明哪些结构必须按资料、哪些待确认。
- 官方示例提示：`使用 Anatomy，制作一个中文的直列四缸四冲程汽油发动机交互图解...`

## 挑选建议

- 适合设备介绍、机械原理教学、员工培训；效果上限取决于你给的结构资料和讲解目标。
- 它擅长“怎么画、怎么动”，不替你决定“讲什么”；简化或不确定的地方要求它标注，正式交付前找领域的人核对。

## 出处

- 原文：[Opus 5.5 那种代码动画，国产模型加个 Skill 也能做？](https://mp.weixin.qq.com/s/0Q4BbiG3ULGcPxAFm1dpQA)，公众号「王不二丶bOol」，2026-10-16
- 仓库：[wheresryan22/anatomy](https://github.com/wheresryan22/anatomy)
- 官网：[skills.wheresryan.sh/anatomy](https://skills.wheresryan.sh/anatomy)
- 标签：编码开发 / 代码动画 / 交互图解 / 机械原理
