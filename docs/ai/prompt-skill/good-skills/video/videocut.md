---
title: videocut（口播剪辑）
description: 中文口播转逐字稿，勾选口误和停顿再交给剪辑
hidden: true
sidebar: false
outline: [2, 3]
---

# videocut（口播剪辑）

> 返回：[🎬 视频与动效](/ai/prompt-skill/good-skills/video/)

把中文口播先转成逐字稿，在浏览器审核页里对着文字勾掉口误、停顿和重复，再交给 Agent 真正剪辑。适合真人口播，不适合通用素材混剪。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/videocut/preview.jpg" alt="videocut 逐字稿勾选与预览界面示意" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面为本收藏自制示意图，仓库未提供可用截图。

## 为什么收它

大部分 AI 剪辑是在时间线上猜，videocut 把「判断」换成文字：逐字稿按词对齐，口误和静音被标出来，你在审核页里勾选要删的片段，确认后才执行。原本反复拖时间线找废片，变成在文字上删句子。

它是 Codex 插件形态，默认提供剪口播、字幕、画面、导出、上报 Bug、检查更新，以及新的工作台操作入口。Apache-2.0，截至 2026-11 安装入口仓库约 3.3k Star；Runtime / Studio 的源码在另一个仓库。

## 怎么用

前提：Node.js 18+、Git，以及已登录且支持 `codex plugin` 的 Codex CLI。把安装入口仓库克隆到本地，在仓库目录运行：

```sh
node bin/install.cjs install --dry-run
node bin/install.cjs install
node bin/install.cjs doctor
```

安装器只装 Plugin，不准备 Runtime；首次使用工作台时还要按包内 `references/runtime-and-product-contract.md` 准备固定版本的 Runtime。

## 挑选建议

- 中文口播、真人口播优先选它；英文素材或混剪素材用 [video-use](/ai/prompt-skill/good-skills/video/video-use) 更合适。
- 安装是这几个里最麻烦的，而且版本更新快：仓库说明新「工作台操作」Skill 要求 Runtime ≥ 0.5.9，而当前公开下载仍是 v0.4.11，不满足新命令；老的六个入口可以复用 0.4.10+ 的 Runtime。装之前先看对应的 Release 回执，不要跟随未锁定的 `main` / `stable`。
- 它解决粗剪、字幕和导出，不解决拍摄、收音和内容主线。

## 出处

- 原文：[10 个用 Codex 做视频的 Skill](https://mp.weixin.qq.com/s/h9HoC7OzbaLHrE08UMEUAg)（微信公众号「乔巴」）
- 插件仓库：[Agentchengfeng/chengfeng-videocut-skills](https://github.com/Agentchengfeng/chengfeng-videocut-skills)
- Runtime 主仓：[Agentchengfeng/chengfeng-videocut](https://github.com/Agentchengfeng/chengfeng-videocut)
- 许可：Apache-2.0
