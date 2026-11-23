---
title: travel-photo-book（旅行照片书）
description: 把旅行照排成一页打开的书：3:4 竖版、上下 50/50、左页主色与邮票、右页标题与两行诗
hidden: true
sidebar: false
outline: [2, 3]
---

# travel-photo-book（旅行照片书）

> 返回：[🎨 图像创作 · 旅行照片书](/ai/prompt-skill/good-skills/image/#travel-photo-book-旅行照片书)

把一张旅行照排成一页「照片书」：上半幅是宽幅摄影，下半幅是一本完全打开的精装书。左页是单一主色加一张居中水平小照片，右页是标题、一枚竖直邮票和两行诗。一个景点可以排成 6 幕，从清晨到夜里。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/travel-photo-book/preview.jpg" alt="岳阳楼清晨：上半幅湖雾摄影，下半幅打开的书页" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面与下方示例均为实测输出：岳阳楼的一天，六幕、仅中文。版权归本项目所有。

## 为什么收它

- 大多数「照片书」提示词靠形容词堆效果，出图后书被裁切、书脊偏移、左右页宽度不一。travel-photo-book 把版式拆成可验收的几何约束：3:4 竖版、上下严格 50/50、书完整水平、书脊居中、左右页等宽、书宽约 86%、唯一一枚竖直邮票。
- 场景卡把每幕的时间、主色、必须保留的元素、邮票元素、中英文案全部前置定死，基础提示词不动，差异只写在【案例补充】里，失败时能定位是场景问题还是版式问题。
- 中文标题限 4—6 字、诗句每行不超过 12 字；英文标题 3—5 词、每行不超过 8 词。字数不是审美，是降低模型丢字、造字的硬手段。
- 每张图配一份 prompt md，记录模型、技能版本、请求与实际尺寸、端点、耗时、尝试次数和逐项质检。
- 方向与 photo-story 相反：photo-story 换材质、保留构图；travel-photo-book 换版式、保留照片。两者可以串起来用。

## 六幕示例

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:14px;margin:18px 0;">
  <figure style="margin:0;">
    <img src="/assets/img/skills/travel-photo-book/01.jpg" alt="01 湖雾楼影：雾蓝灰主色，标题雾里名楼" style="width:100%;height:auto;border-radius:6px;border:1px solid var(--vp-c-divider);">
    <figcaption style="margin-top:6px;color:var(--vp-c-text-2);font-size:12px;">01 06:05 湖雾楼影 · 雾里名楼</figcaption>
  </figure>
  <figure style="margin:0;">
    <img src="/assets/img/skills/travel-photo-book/02.jpg" alt="02 琉璃晨光：琉璃金主色，标题瓦上晨光" style="width:100%;height:auto;border-radius:6px;border:1px solid var(--vp-c-divider);">
    <figcaption style="margin-top:6px;color:var(--vp-c-text-2);font-size:12px;">02 07:25 琉璃晨光 · 瓦上晨光</figcaption>
  </figure>
  <figure style="margin:0;">
    <img src="/assets/img/skills/travel-photo-book/03.jpg" alt="03 登楼望湖：洞庭青主色，标题楼上望湖" style="width:100%;height:auto;border-radius:6px;border:1px solid var(--vp-c-divider);">
    <figcaption style="margin-top:6px;color:var(--vp-c-text-2);font-size:12px;">03 09:40 登楼望湖 · 楼上望湖</figcaption>
  </figure>
  <figure style="margin:0;">
    <img src="/assets/img/skills/travel-photo-book/04.jpg" alt="04 檐下正午：朱红主色，标题檐下正午" style="width:100%;height:auto;border-radius:6px;border:1px solid var(--vp-c-divider);">
    <figcaption style="margin-top:6px;color:var(--vp-c-text-2);font-size:12px;">04 12:20 檐下正午 · 檐下正午</figcaption>
  </figure>
  <figure style="margin:0;">
    <img src="/assets/img/skills/travel-photo-book/05.jpg" alt="05 湖上风来：芦苇黄主色，标题湖上风来" style="width:100%;height:auto;border-radius:6px;border:1px solid var(--vp-c-divider);">
    <figcaption style="margin-top:6px;color:var(--vp-c-text-2);font-size:12px;">05 16:35 湖上风来 · 湖上风来</figcaption>
  </figure>
  <figure style="margin:0;">
    <img src="/assets/img/skills/travel-photo-book/06.jpg" alt="06 灯起巴陵：暮紫主色，标题灯起巴陵" style="width:100%;height:auto;border-radius:6px;border:1px solid var(--vp-c-divider);">
    <figcaption style="margin-top:6px;color:var(--vp-c-text-2);font-size:12px;">06 18:45 灯起巴陵 · 灯起巴陵</figcaption>
  </figure>
</div>

## 一次真实实测

| 项 | 值 |
| --- | --- |
| 景点 | 湖南岳阳楼，一天六幕 |
| 生图 skill | `gpt-image-2`（宿主已有能力） |
| 模型 | `gpt-image-2.6-sunburst` |
| 尺寸 | 请求 `1152x1536` → 实际 `1086x1448`，比例仍为 3:4 |
| 端点 | 原图 `/images/generations`；书页 `/images/edits`，参考图均被接受 |
| 语言 | 仅中文，所以只有 `03-travelbook-cn` 槽位，没有 02 英文 |
| 结果 | 版式 6/6 通过；内容存在 3 处偏差 |

耗时方面，单张原图约 37—49 秒，单张书页约 50—55 秒。整组 12 张在同一天内跑完，没有出现方图或 2:3 回退。

## 已知偏差

这组不是「全部一次通过」，实测暴露了三条边界：

1. **跨幕地标不一致。** 02 是三重檐、檐下大匾额；06 更瘦高、顶部塔尖、城墙基座、红灯笼；01 又是逆光剪影。场景卡写了「同一座楼：三层、盔顶、黄色琉璃瓦」，画面没有落实。提示词锁不住地标身份。
2. **原图真实性会失守。** 02 饱和度高、HDR 与图库感明显，檐下还出现「岳阳楼」匾额文字，不满足原图阶段「无文字、手机随手拍」的要求。对应的质检项已改为未通过，而不是勾上。
3. **时间与光可能对不上。** 05 写的是 16:35，出图太阳偏低，接近日落。

保留这组作为案例的价值就在这里：**版式可以靠提示词锁死，真实感与跨幕一致性必须人工把关。** skill 在「不做什么」里已经写明不保证跨幕一致，README 和质检记录也必须如实写，不能把可接受偏差说成全部通过。

重跑时的处理：要么用同一张原图裁不同区域，保证是同一座楼；要么明确接受它是「印象」而不是「纪实」。

## 怎么用

安装时把仓库目录放进技能目录，保持名字 `travel-photo-book`：

- Claude Code：`~/.claude/skills/travel-photo-book/`
- 通用 Agent Skills：`~/.agents/skills/travel-photo-book/`
- Trae CN：`~/.trae-cn/skills/travel-photo-book/`
- 项目级：项目下的 `.claude/skills/`、`.agents/skills/` 或 `.trae-cn/skills/`

保留 `SKILL.md`、`references/`、`templates/` 即可，`examples/` 可以不装。

三种入口，都不需要写 YAML：

```
# 一、直接生成一页
用 travel-photo-book 直接生成一页：黄昏的雪山，暮紫色，中文。

# 二、一张照片做一页
（附图）把这张照片做成旅行照片书，中文。

# 三、多幕故事
用 travel-photo-book 把赛里木湖做成 6 幕照片书，中文。
```

多幕模式下 Agent 最多问 3 个问题，然后给一张六幕表格让你改，确认后才写 `_drafts/scenes.yaml` 并开始出图。默认中文、6 幕、原图生成、语气温柔克制。

产物结构（单语模式）：

```
003-岳阳楼的一天/
└── 01-湖雾楼影/
    ├── 01-original.png
    ├── 01-original.prompt.md
    ├── 03-travelbook-cn.png
    ├── 03-travelbook-cn.prompt.md
    └── _drafts/
```

编号是文件槽位，不是执行顺序。02 固定英文，03 固定中文。

## 挑选建议

- 想要「一页可收藏的旅行书页」而不是换画风，选它。它保留照片本身，只改排版。
- 想给照片换材质（青绿山水、水彩、木刻），选 photo-story；想极简留白，选 photo-revival；想做抽象符号系列，选 travel-photo-abstraction。
- 适合一个景点一天的时间线、展览式输出、旅行手账。不适合要求每幕严格还原同一地标形制的纪实项目——这类需求应该用真实原图，而不是生成原图。

## 相关

- 站内摘录：[《我用了一条提示词，把相册里吃灰的旅行照片做成了一本书》](/digest/bookmarks/#《我用了一条提示词-把相册里吃灰的旅行照片做成了一本书》)——原始版式提示词与当时的摘录笔记
- 实测项目：岳阳楼六幕，见仓库 [examples/yueyanglou](https://github.com/blackteaYES/travel-photo-book/tree/main/examples/yueyanglou)

## 出处

- 仓库：[blackteaYES/travel-photo-book](https://github.com/blackteaYES/travel-photo-book)
- 版式提示词原文：[我用了一条提示词，把相册里吃灰的旅行照片做成了一本书](https://mp.weixin.qq.com/s/XGVNMfvjCVg6u6d8874yag)，2026-10-09
- 实测依据：赛里木湖 11 组 33 张双语成品；岳阳楼 6 幕中文单语
- 标签：图像创作 / 照片版式 / 多幕系列 / 可追溯
- 提示词原文版权归原作者，仓库仅作版式研究与复用记录；商用前请自行确认授权
