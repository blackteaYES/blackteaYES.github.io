---
title: weixin-sticker（微信表情包）
description: 按微信表情开放平台规格批量产出表情、横幅、封面与 ZIP
hidden: true
sidebar: false
outline: [2, 3]
---

# weixin-sticker（微信表情包）

> 返回：[🎨 图像创作 · 微信表情包](/ai/prompt-skill/good-skills/image/#weixin-sticker-微信表情包)

做微信表情包最麻烦的往往不是画，而是按平台规格凑齐一整套素材：8–24 张 240×240 表情、750×400 详情页横幅、240×240 封面、50×50 聊天图标，可选赞赏图，最后还要校验体积、打包上传。weixin-sticker 把这套流程工程化成一个 Agent Skill：给角色参考图和场景清单，产出可直接投稿的 ZIP。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/weixin-sticker/preview.jpg" alt="16 张日常场景微信表情包示例：你好、收到、无语、下班等" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面为原文示例表情包，版权归原作者。

## 为什么收它

- **规格是硬约束**：微信表情开放平台对静态表情、横幅、封面、聊天图标的尺寸和体积都有精确要求，这个 Skill 直接把它们写进脚本与校验，不用每次翻上传页对数值。
- **流程完整**：`build_sticker.py` 负责从绿幕源图到成品表情，`compose_reward.py` 负责赞赏图，其余脚本处理辅助素材、合规检查与 ZIP 打包。
- **中文排版与绿幕抠图**：基于 `zxd-666/weixin-sticker`（MIT）扩展，新增绿幕抠图和中文排版，避开让模型直接写字容易出错的问题。
- **角色一致性**：文章示例用一张参考图生成 16 张同角色、同画风、同服装的表情，覆盖「你好、收到、无语、下班」等日常场景。

## 怎么用

- 下载并解压 `weixin-sticker-1.1.0.zip`；
- 放进 Agent 技能目录：Codex 放 `~/.codex/skills/weixin-sticker`；WorkBuddy 在「设置 → 技能 → 添加技能」导入 ZIP；其他支持 Skills 的 Agent 放各自技能目录；
- 新开对话（技能列表在会话开始时加载），用一句话点单：`使用 weixin-sticker 帮我做一套 16 张微信静态表情包。角色「xxxxx」，画风「xxxxxx」，场景包括［你好、收到、无语、下班……］`；
- 安装后自检：`validate_pack.py --help` 能正常输出，`import PIL` 不报错；
- 产出 ZIP 后到微信表情开放平台按字段上传。机器校验只能保证规格，角色神态与文案仍要人工过一遍。

## 挑选建议

- **适合**：已有角色设定或参考图，需要批量做一套风格统一的表情包；想一次性凑齐平台素材，不想手动对尺寸和体积。
- **不适合**：只想做一两张表情图；没有角色参考图、完全靠文字描述；需要动态表情（这个包主要面向静态表情专辑）。
- **注意**：扩展包通过文章内的网盘链接分发，链接可能失效；基础项目在 GitHub，MIT 协议，升级或二次开发以仓库为准。

## 出处

- 原文：[「微信表情包制作」一个 AI Skill 全部搞定](https://mp.weixin.qq.com/s/HVq1G9RicGT3YgMQ7D8eng)，2026-10-21
- 基础项目：[zxd-666/weixin-sticker](https://github.com/zxd-666/weixin-sticker)（MIT）
- 标签：图像创作 / 微信表情 / 表情包 / 批量产出 / Codex
