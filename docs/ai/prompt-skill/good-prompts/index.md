---
title: 精选提示词
description: 自研实测的 GPT Image 2 提示词，每条附风格变体与可拖动效果对比
hidden: true
sidebar: false
outline: [2, 3]
---

# 🎯 精选提示词

我自己实测、可复现的 GPT Image 2 生图提示词，按用途分成 5 类，共 25 条。每条都给**原提示词 + 一个风格变体**，详情页可拖动滑块直接对比两种效果，提示词全文一键复制。

## 分类

::: card
- title: 人像写真（8）
  icon: 📷
  desc: 抓拍、棚拍与电影感人像，含视角、布光与胶片质感
  link: /ai/prompt-skill/good-prompts/portrait/
----
- title: 编辑海报（8）
  icon: 📰
  desc: 时尚编辑、品牌广告与文学海报，大字排版与概念视觉
  link: /ai/prompt-skill/good-prompts/poster/
----
- title: 插画手绘（4）
  icon: 🎨
  desc: 旅行手账、分镜脚本与动漫风生活肖像
  link: /ai/prompt-skill/good-prompts/illustration/
----
- title: 角色与动态（3）
  icon: 🎬
  desc: 角色定妆、舞蹈动态与参考图混合创作
  link: /ai/prompt-skill/good-prompts/character/
----
- title: 设计与请柬（2）
  icon: 🏠
  desc: 室内设计提案与婚礼请柬，专业排版框架
  link: /ai/prompt-skill/good-prompts/design/
:::

## 🎨 按变体风格浏览

每条提示词都实测过一个风格变体。想直接找某种画风，从这里进：

<div class="style-cloud">
  <a href="/ai/prompt-skill/good-prompts/portrait/p001">水彩画<span>P001</span></a>
  <a href="/ai/prompt-skill/good-prompts/illustration/p002">泛黄信纸<span>P002</span></a>
  <a href="/ai/prompt-skill/good-prompts/portrait/p003">吉卜力风格<span>P003</span></a>
  <a href="/ai/prompt-skill/good-prompts/poster/p004">复古波普<span>P004</span></a>
  <a href="/ai/prompt-skill/good-prompts/illustration/p005">木刻版画<span>P005</span></a>
  <a href="/ai/prompt-skill/good-prompts/portrait/p006">潘通相框海报<span>P006</span></a>
  <a href="/ai/prompt-skill/good-prompts/portrait/p007">金箔压纸<span>P007</span></a>
  <a href="/ai/prompt-skill/good-prompts/poster/p008">杂志插画<span>P008</span></a>
  <a href="/ai/prompt-skill/good-prompts/design/p009">水墨插画<span>P009</span></a>
  <a href="/ai/prompt-skill/good-prompts/character/p010">水墨写意<span>P010</span></a>
  <a href="/ai/prompt-skill/good-prompts/poster/p011">丝网印刷<span>P011</span></a>
  <a href="/ai/prompt-skill/good-prompts/poster/p012">浮雕叙事<span>P012</span></a>
  <a href="/ai/prompt-skill/good-prompts/poster/p013">折纸<span>P013</span></a>
  <a href="/ai/prompt-skill/good-prompts/poster/p014">儿童绘本<span>P014</span></a>
  <a href="/ai/prompt-skill/good-prompts/illustration/p015">童真插画<span>P015</span></a>
  <a href="/ai/prompt-skill/good-prompts/character/p016">京都动画<span>P016</span></a>
  <a href="/ai/prompt-skill/good-prompts/portrait/p017">炭笔画<span>P017</span></a>
  <a href="/ai/prompt-skill/good-prompts/portrait/p018">MBE插画<span>P018</span></a>
  <a href="/ai/prompt-skill/good-prompts/portrait/p019">新海诚<span>P019</span></a>
  <a href="/ai/prompt-skill/good-prompts/portrait/p020">像素艺术<span>P020</span></a>
  <a href="/ai/prompt-skill/good-prompts/poster/p021">没骨画<span>P021</span></a>
  <a href="/ai/prompt-skill/good-prompts/design/p022">东方故事<span>P022</span></a>
  <a href="/ai/prompt-skill/good-prompts/poster/p023">几何骨架<span>P023</span></a>
  <a href="/ai/prompt-skill/good-prompts/character/p024">毛线编织<span>P024</span></a>
  <a href="/ai/prompt-skill/good-prompts/illustration/p025">稚拙插画<span>P025</span></a>
</div>

## 怎么用这个库

1. 按用途进分类，或直接按变体风格挑一条；
2. 详情页复制「原提示词」整段，粘贴进 GPT Image 2，画幅按规格标签选；
3. 把「可替换变量」表里的槽位换成你的内容，**「避免…」段落尽量保留**——它决定质感下限；
4. 想要另一种画风，复制「变体提示词」，或照着变体手法自己改风格段。

## 收录标准

三条都过才记：

1. 自研实测、可复现，不是网上搬来的「一句话魔法」；
2. 有明确的可替换槽位，换个主体就能复用；
3. 风格变体也经过实测，对比图就是真实出图。

## 规格说明

- **模型**：全部为 GPT Image 2 实测；规格标签里的画幅是提示词要求或实际出图比例。
- **图片**：本站存两级 WebP（列表缩略图 + 详情全图），不依赖外部图床；原始 PNG 未入库。
- **视频提示词**：P016 原提示词面向视频生成（一镜到底编舞），详情页展示的是单帧效果，已单独标注。
- **参考图**：P024 支持上传角色参考图锁身份，无参考图时以文字设定替代，详情页附执行说明。

## 新增条目

新增一条提示词：先在对应分类页加一条 `###` 条目，再在该分类目录下新建 `<id>.md` 详情页。格式与图片规范见 [录入模板](/ai/prompt-skill/good-prompts/template)。
