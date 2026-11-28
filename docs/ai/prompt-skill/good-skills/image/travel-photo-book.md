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
  <img src="/assets/img/skills/travel-photo-book/preview.jpg" alt="赛里木湖日出：上半幅金色湖面，下半幅打开的书页" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面与下方示例均为仓库 `examples/` 的实测输出。这张是赛里木湖 6 幕中的「日出金湖」，中文版。版权归项目作者。

## 为什么收它

- 大多数「照片书」提示词靠形容词堆效果，出图后书被裁切、书脊偏移、左右页宽度不一。travel-photo-book 把版式拆成可验收的几何约束：3:4 竖版、上下严格 50/50、书完整水平、书脊居中、左右页等宽、书宽约 86%、唯一一枚竖直邮票。
- 场景卡把每幕的时间、主色、必须保留的元素、邮票元素、中英文案全部前置定死，基础提示词不动，差异只写在【案例补充】里，失败时能定位是场景问题还是版式问题。
- 中文标题限 4—6 字、诗句每行不超过 12 字；英文标题 3—5 词、每行不超过 8 词。字数不是审美，是降低模型丢字、造字的硬手段。
- 每张图配一份 prompt md，记录模型、技能版本、请求与实际尺寸、端点、耗时、尝试次数和逐项质检。
- v0.3.1 把三套实测全部入仓：多幕与单页、中英双语与中文单语都覆盖，还保留了一组带偏差的样本，不把可接受偏差说成全部通过。
- 方向与 photo-story 相反：photo-story 换材质、保留构图；travel-photo-book 换版式、保留照片。两者可以串起来用。

## 三套实测

| 系列 | 类型 | 规模 | 语言 | 书页 | 结论 |
| --- | --- | --- | --- | --- | --- |
| 赛里木湖的一天 | 多幕故事 | 6 幕 18 张 | 中英双语 | 12 | 全部通过 |
| 单张精选 | 独立单页 | 5 例 15 张 | 中英双语 | 10 | 全部通过 |
| 岳阳楼的一天 | 多幕故事 | 6 幕 12 张 | 仅中文 | 6 | 版式 6/6，内容 3 处偏差 |

三套共 17 组、45 张图（原图 + 书页）。仓库与 Release 只保留 28 张 720×960 压缩书页，原图不随仓库分发。

### 赛里木湖的一天 · 6 幕中英双语

同一个湖，从 06:10 的雾到 21:30 的银河。六幕主色依次是雾蓝灰、金橙、草绿、灰绿、紫金、深蓝；同一片湖、同一侧山脊贯穿全组，毡房只在 02、06 出现。下图交替展示中文版与英文版：版式不变，只有右页文字换语言。

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:14px;margin:18px 0;">
  <figure style="margin:0;">
    <img src="/assets/img/skills/travel-photo-book/sailimu/01-cn.jpg" alt="01 破晓湖雾：雾蓝灰主色，标题雾醒之前" style="width:100%;height:auto;border-radius:6px;border:1px solid var(--vp-c-divider);">
    <figcaption style="margin-top:6px;color:var(--vp-c-text-2);font-size:12px;">01 06:10 破晓湖雾 · 中文</figcaption>
  </figure>
  <figure style="margin:0;">
    <img src="/assets/img/skills/travel-photo-book/sailimu/02-en.jpg" alt="02 日出金湖：金橙主色，英文标题 GOLDEN LAKE AT DAWN" style="width:100%;height:auto;border-radius:6px;border:1px solid var(--vp-c-divider);">
    <figcaption style="margin-top:6px;color:var(--vp-c-text-2);font-size:12px;">02 07:40 日出金湖 · 英文</figcaption>
  </figure>
  <figure style="margin:0;">
    <img src="/assets/img/skills/travel-photo-book/sailimu/03-cn.jpg" alt="03 环湖野花：草绿主色，标题湖岸花路" style="width:100%;height:auto;border-radius:6px;border:1px solid var(--vp-c-divider);">
    <figcaption style="margin-top:6px;color:var(--vp-c-text-2);font-size:12px;">03 10:30 环湖野花 · 中文</figcaption>
  </figure>
  <figure style="margin:0;">
    <img src="/assets/img/skills/travel-photo-book/sailimu/04-en.jpg" alt="04 果子沟弯桥：灰绿主色，英文标题 THE BRIDGE THROUGH VALLEY" style="width:100%;height:auto;border-radius:6px;border:1px solid var(--vp-c-divider);">
    <figcaption style="margin-top:6px;color:var(--vp-c-text-2);font-size:12px;">04 14:00 果子沟弯桥 · 英文</figcaption>
  </figure>
  <figure style="margin:0;">
    <img src="/assets/img/skills/travel-photo-book/sailimu/05-cn.jpg" alt="05 黄昏雪山：紫金主色，标题雪峰余晖" style="width:100%;height:auto;border-radius:6px;border:1px solid var(--vp-c-divider);">
    <figcaption style="margin-top:6px;color:var(--vp-c-text-2);font-size:12px;">05 18:50 黄昏雪山 · 中文</figcaption>
  </figure>
  <figure style="margin:0;">
    <img src="/assets/img/skills/travel-photo-book/sailimu/06-en.jpg" alt="06 星夜毡房：深蓝主色，英文标题 STARS OVER THE YURT" style="width:100%;height:auto;border-radius:6px;border:1px solid var(--vp-c-divider);">
    <figcaption style="margin-top:6px;color:var(--vp-c-text-2);font-size:12px;">06 21:30 星夜毡房 · 英文</figcaption>
  </figure>
</div>

**看点**：主色是否跟着时间走，中英双语是否只换右页文字。六幕十二页一次通过；05 幕左页实际取到紫色，与脚本写的「紫金」有冷暖差，按「提取一种主导色」判合格。

### 单张精选 · 5 例中英双语

不串故事，一景一页：001 布达拉宫（暖红）、002 维多利亚港（深青）、003 冈仁波齐（暖棕）、004 草原月升（深蓝）、005 秋林河流（赭金）。用来验证同一份版式提示词换场景后是否还站得住。

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:14px;margin:18px 0;">
  <figure style="margin:0;">
    <img src="/assets/img/skills/travel-photo-book/singles/001-cn.jpg" alt="001 布达拉宫：暖红主色，标题宫墙与晨光" style="width:100%;height:auto;border-radius:6px;border:1px solid var(--vp-c-divider);">
    <figcaption style="margin-top:6px;color:var(--vp-c-text-2);font-size:12px;">001 布达拉宫 · 中文</figcaption>
  </figure>
  <figure style="margin:0;">
    <img src="/assets/img/skills/travel-photo-book/singles/002-en.jpg" alt="002 维多利亚港：深青主色，英文标题 HARBOUR LIGHTS BEGIN" style="width:100%;height:auto;border-radius:6px;border:1px solid var(--vp-c-divider);">
    <figcaption style="margin-top:6px;color:var(--vp-c-text-2);font-size:12px;">002 维多利亚港 · 英文</figcaption>
  </figure>
  <figure style="margin:0;">
    <img src="/assets/img/skills/travel-photo-book/singles/003-cn.jpg" alt="003 冈仁波齐：暖棕主色，标题风里的神山" style="width:100%;height:auto;border-radius:6px;border:1px solid var(--vp-c-divider);">
    <figcaption style="margin-top:6px;color:var(--vp-c-text-2);font-size:12px;">003 冈仁波齐 · 中文</figcaption>
  </figure>
  <figure style="margin:0;">
    <img src="/assets/img/skills/travel-photo-book/singles/004-en.jpg" alt="004 草原月升：深蓝主色，英文标题 MOON OVER GRASSLAND" style="width:100%;height:auto;border-radius:6px;border:1px solid var(--vp-c-divider);">
    <figcaption style="margin-top:6px;color:var(--vp-c-text-2);font-size:12px;">004 草原月升 · 英文</figcaption>
  </figure>
  <figure style="margin:0;">
    <img src="/assets/img/skills/travel-photo-book/singles/005-cn.jpg" alt="005 秋林河流：赭金主色，标题金色河湾" style="width:100%;height:auto;border-radius:6px;border:1px solid var(--vp-c-divider);">
    <figcaption style="margin-top:6px;color:var(--vp-c-text-2);font-size:12px;">005 秋林河流 · 中文</figcaption>
  </figure>
</div>

**看点**：建筑不变形、夜景主色不跑、暗部不糊、高纹理纸感还在。五例中英各一版共十页，一次通过；相对最容易出偏差的是 001 布达拉宫，宫堡细节被适度概括，但层叠关系与金顶位置保住了。

### 岳阳楼的一天 · 6 幕仅中文

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:14px;margin:18px 0;">
  <figure style="margin:0;">
    <img src="/assets/img/skills/travel-photo-book/yueyanglou/01.jpg" alt="01 湖雾楼影：雾蓝灰主色，标题雾里名楼" style="width:100%;height:auto;border-radius:6px;border:1px solid var(--vp-c-divider);">
    <figcaption style="margin-top:6px;color:var(--vp-c-text-2);font-size:12px;">01 06:05 湖雾楼影 · 雾里名楼</figcaption>
  </figure>
  <figure style="margin:0;">
    <img src="/assets/img/skills/travel-photo-book/yueyanglou/02.jpg" alt="02 琉璃晨光：琉璃金主色，标题瓦上晨光" style="width:100%;height:auto;border-radius:6px;border:1px solid var(--vp-c-divider);">
    <figcaption style="margin-top:6px;color:var(--vp-c-text-2);font-size:12px;">02 07:25 琉璃晨光 · 瓦上晨光</figcaption>
  </figure>
  <figure style="margin:0;">
    <img src="/assets/img/skills/travel-photo-book/yueyanglou/03.jpg" alt="03 登楼望湖：洞庭青主色，标题楼上望湖" style="width:100%;height:auto;border-radius:6px;border:1px solid var(--vp-c-divider);">
    <figcaption style="margin-top:6px;color:var(--vp-c-text-2);font-size:12px;">03 09:40 登楼望湖 · 楼上望湖</figcaption>
  </figure>
  <figure style="margin:0;">
    <img src="/assets/img/skills/travel-photo-book/yueyanglou/04.jpg" alt="04 檐下正午：朱红主色，标题檐下正午" style="width:100%;height:auto;border-radius:6px;border:1px solid var(--vp-c-divider);">
    <figcaption style="margin-top:6px;color:var(--vp-c-text-2);font-size:12px;">04 12:20 檐下正午 · 檐下正午</figcaption>
  </figure>
  <figure style="margin:0;">
    <img src="/assets/img/skills/travel-photo-book/yueyanglou/05.jpg" alt="05 湖上风来：芦苇黄主色，标题湖上风来" style="width:100%;height:auto;border-radius:6px;border:1px solid var(--vp-c-divider);">
    <figcaption style="margin-top:6px;color:var(--vp-c-text-2);font-size:12px;">05 16:35 湖上风来 · 湖上风来</figcaption>
  </figure>
  <figure style="margin:0;">
    <img src="/assets/img/skills/travel-photo-book/yueyanglou/06.jpg" alt="06 灯起巴陵：暮紫主色，标题灯起巴陵" style="width:100%;height:auto;border-radius:6px;border:1px solid var(--vp-c-divider);">
    <figcaption style="margin-top:6px;color:var(--vp-c-text-2);font-size:12px;">06 18:45 灯起巴陵 · 灯起巴陵</figcaption>
  </figure>
</div>

这组版式 6/6 通过，但不是「全部一次通过」，偏差见下一节。

## 实测环境

| 项 | 值 |
| --- | --- |
| 版本 | 实测在 v0.3.0 上完成，示例于 v0.3.1（2026-11-28）入仓 |
| 实测日期 | 2026-11-23 |
| 生图 skill | `gpt-image-2`（宿主已安装的 `gpt-image-2-1.1.2`） |
| 模型 | `gpt-image-2.6-sunburst` |
| 尺寸 | 赛里木湖、单张精选 `1152x1536`；岳阳楼实际 `1086x1448`，比例仍为 3:4 |
| 端点 | 原图 `/images/generations`；书页 `/images/edits`，参考图均被接受 |
| 规模 | 17 组 45 张，其中 28 张压缩书页入仓 |

耗时方面，单张原图约 32—51 秒，单张书页约 42—60 秒；赛里木湖 02 的英文书页出现过一次 144 秒的慢调用，单次成功，没有重试。三套 45 张在 2026-11-23 当天跑完，没有出现方图或 2:3 回退。

## 已知偏差

岳阳楼这组不是「全部一次通过」，实测暴露了三条边界：

1. **跨幕地标不一致。** 02 是三重檐、檐下大匾额；06 更瘦高、顶部塔尖、城墙基座、红灯笼；01 又是逆光剪影。场景卡写了「同一座楼：三层、盔顶、黄色琉璃瓦」，画面没有落实。提示词锁不住地标身份。
2. **原图真实性会失守。** 02 饱和度高、HDR 与图库感明显，檐下还出现「岳阳楼」匾额文字，不满足原图阶段「无文字、手机随手拍」的要求。对应的质检项已改为未通过，而不是勾上。
3. **时间与光可能对不上。** 05 写的是 16:35，出图太阳偏低，接近日落。

另有一处全组性偏差：示例书宽约 89—91%，提示词写的是约 86%，书底留白偏小，属于可接受偏差，正式使用时按质检门复核。

保留这组作为案例的价值就在这里：**版式可以靠提示词锁死，真实感与跨幕一致性必须人工把关。** skill 在「不做什么」里已经写明不保证跨幕一致，README 和质检记录也必须如实写，不能把可接受偏差说成全部通过。

重跑时的处理：要么用同一张原图裁不同区域，保证是同一座楼；要么明确接受它是「印象」而不是「纪实」。

## 怎么用

### 安装

前置条件先说清楚：宿主需要一个**支持参考图（图生图）**的生图 skill，并能输出 3:4 或至少 2:3。纯文生图跑不通——书页照片会变成虚构场景，直接判失败；方图也判废。

手动安装就是把仓库目录放进技能目录，保持名字 `travel-photo-book`：

- Claude Code：`~/.claude/skills/travel-photo-book/`
- 通用 Agent Skills：`~/.agents/skills/travel-photo-book/`（Windows 为 `C:\Users\<你>\.agents\skills\`）
- Trae CN：`~/.trae-cn/skills/travel-photo-book/`
- 项目级：项目下的 `.claude/skills/`、`.agents/skills/` 或 `.trae-cn/skills/`

保留 `SKILL.md`、`references/`、`templates/` 即可，`examples/` 可以不装；Release 里的 zip 已带一层 `travel-photo-book/` 顶层目录，解压后不用改名。

不想手动解压，可以让 Agent 自己装。v0.3.1 的 README 新增了「方式二：让 AI 自己装」，一句话就能触发：

> 请阅读 https://github.com/blackteaYES/travel-photo-book/blob/main/README.md 的「安装 → 方式二」，按里面的步骤把 travel-photo-book 安装为 Agent Skill，并在安装后校验。

它只做四件事：检测 skills 目录、拉取 `v0.3.1`、复制技能文件、校验 `SKILL.md`；不执行仓库里的脚本、不改全局配置、不提权。装完检查 `<skills>/travel-photo-book/` 下是否有 `SKILL.md`、`references/`、`templates/`，再用一句话触发测试。

### 三种入口

都不需要写 YAML：

```
# 一、直接生成一页
用 travel-photo-book 直接生成一页：黄昏的雪山，暮紫色，中文，标题《雪峰余晖》，
诗句「光落在雪上，雪留在夜里」。

# 二、一张照片做一页
（附图）把这张照片做成旅行照片书，中文。

# 三、多幕故事
用 travel-photo-book 把赛里木湖做成 6 幕照片书，中文。
```

多幕模式下 Agent 最多问 3 个问题，然后给一张六幕表格让你改，确认后才写 `_drafts/scenes.yaml` 并开始出图。默认中文、6 幕、原图生成、语气温柔克制。

### 产物结构

```
001-赛里木湖的一天/
└── 01-破晓湖雾/
    ├── 01-original.png
    ├── 01-original.prompt.md
    ├── 02-travelbook.png          # 英文，可选
    ├── 02-travelbook.prompt.md
    ├── 03-travelbook-cn.png       # 中文，默认
    ├── 03-travelbook-cn.prompt.md
    └── _drafts/
```

编号是文件槽位，不是执行顺序：02 固定英文，03 固定中文；只做中文时没有 02 属正常。

### 质检

每张图出完检查九项：50/50 分割、书脊居中、左右页等宽、书完整、单枚竖直邮票、左页单色、文字可读、无第二套排版、画幅正确。

任一不过就判废：分割不是 50/50、书被裁切或倾斜、出现两枚及以上邮票、文字不可读、出现第二套排版、方图。修复时一次只改一个约束，最多重试 2 次——同时改三处，成功了也不知道是哪一处起的作用。

## 挑选建议

- 想要「一页可收藏的旅行书页」而不是换画风，选它。它保留照片本身，只改排版。
- 想给照片换材质（青绿山水、水彩、木刻），选 photo-story；想极简留白，选 photo-revival；想做抽象符号系列，选 travel-photo-abstraction。
- 适合一个景点一天的时间线、展览式输出、旅行手账。不适合要求每幕严格还原同一地标形制的纪实项目——这类需求应该用真实原图，而不是生成原图。

## 相关

- 站内摘录：[《我用了一条提示词，把相册里吃灰的旅行照片做成了一本书》](/digest/bookmarks/#《我用了一条提示词-把相册里吃灰的旅行照片做成了一本书》)——原始版式提示词与当时的摘录笔记
- 实测项目：仓库 `examples/` 下三套，[赛里木湖的一天](https://github.com/blackteaYES/travel-photo-book/tree/main/examples/sailimu)、[单张精选](https://github.com/blackteaYES/travel-photo-book/tree/main/examples/singles)、[岳阳楼的一天](https://github.com/blackteaYES/travel-photo-book/tree/main/examples/yueyanglou)

## 出处

- 仓库：[blackteaYES/travel-photo-book](https://github.com/blackteaYES/travel-photo-book)
- 版本：v0.3.1，2026-11-28，[Release](https://github.com/blackteaYES/travel-photo-book/releases/tag/v0.3.1)
- 版式提示词原文：[我用了一条提示词，把相册里吃灰的旅行照片做成了一本书](https://mp.weixin.qq.com/s/XGVNMfvjCVg6u6d8874yag)，2026-10-09
- 实测依据：赛里木湖 6 幕中英双语 18 张、单张精选 5 例中英双语 15 张、岳阳楼 6 幕中文单语 12 张，共 17 组 45 张
- 标签：图像创作 / 照片版式 / 多幕系列 / 可追溯
- 提示词原文版权归原作者，仓库仅作版式研究与复用记录；商用前请自行确认授权
