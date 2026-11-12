---
title: sweety-handdraw-video（手绘口播）
description: 从主题或文章出发，做一条边画边讲的中文手绘视频
hidden: true
sidebar: false
outline: [2, 3]
---

# sweety-handdraw-video（手绘口播）

> 返回：[🎬 视频与动效](/ai/prompt-skill/good-skills/video/)

给一个主题、一篇文章或一个完整故事，做成「边画边讲」的有声视频：Agent 负责理解内容、写口播、设计分镜、生成插画，本地工具负责逐笔描线、填色、手写文字、配音对齐与导出。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/sweety-handdraw-video/preview.jpg" alt="手绘口播样片《那条死于愤怒的蛇》封面" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面取自仓库样片，版权归原作者。

## 为什么收它

它把「手绘讲解视频」拆成了一条可检查的生产线：声音先行，口播按语义段落生成，每段过嗡声/底噪/削波门禁；再按时间戳安排画面和字幕；画面按「一幅画能画几秒、最多几笔」算预算，而不是硬压时间。线条只描真实墨线，复杂画面按对象逐个画完，汉字按标准笔顺书写，马克笔就近上色。

这个细节让它比「AI 生成几张图再轮播」更像真正的手绘视频。内置 21 个画风入口，也可以让模型独立设计或给自定义方向；成片不使用外部图生视频模型，主渲染是 Python / Pillow / SciPy / FFmpeg。题材上，知识讲解、故事寓言、观点表达、产品原理和教学内容都合适。

## 怎么用

安装（macOS / Linux，Codex 与 Claude Code）：

```sh
npx skills add threerocks/sweety-handdraw-video --skill sweety-handdraw-video --agent claude-code codex --global --copy --yes
```

然后跑环境检查与安装：

```sh
bash ~/.claude/skills/sweety-handdraw-video/scripts/setup.sh
python ~/.claude/skills/sweety-handdraw-video/scripts/handdraw_video.py doctor JOB
```

环境要求比较实在：Python 3.9+、FFmpeg/ffprobe、中文字体；还需要可用的图像生成能力（Codex 内置生图，Claude Code 需接生图工具/MCP 或自备插画），以及一条配音路径（本地 VoxCPM2、VoiceStudio 服务，或已核对时间戳的整篇旁白）。Windows 暂不承诺。官方建议先用几十秒的短主题验证环境与画风，再处理长稿。

## 挑选建议

适合中文手绘口播、知识科普、人物故事、寓言与方法讲解。它的优势是「画得有条理、声画对得上」，不是快：需要生图、配音和本地渲染环境，链路比纯提示词长。

如果只是想要动态图解，[animate](/ai/prompt-skill/good-skills/video/animate) 的环境更轻；如果要做商业产品宣传片，选 [huashu-motion](/ai/prompt-skill/good-skills/video/huashu-motion) 或 [video-shotcraft](/ai/prompt-skill/good-skills/video/video-shotcraft)。这支更适合「内容本身需要被一笔一笔画出来」的题材。

## 出处

- 原文：[9 个神级 GitHub 项目助你蹭上抖音、小红书 Vibe 知识大赏热点](https://mp.weixin.qq.com/s/7MLwtD9J2QnhCz45dBYCMw)（逛逛 GitHub，2026-11-04）
- 仓库：[threerocks/sweety-handdraw-video](https://github.com/threerocks/sweety-handdraw-video)（截至 2026-11 约 1.2k Star）
- 许可：MIT
