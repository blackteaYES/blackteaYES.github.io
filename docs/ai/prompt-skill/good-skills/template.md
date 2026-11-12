---
title: Skill 录入模板
description: 精选 Skill 收藏的目录条目与详情页模板
hidden: true
sidebar: false
outline: [2, 3]
---

# Skill 录入模板

> 返回：[精选 Skill 收藏](/ai/prompt-skill/good-skills/)

## 目录结构

```text
docs/ai/prompt-skill/good-skills/
├── index.md                 # 分类导航
├── template.md              # 本页
├── coding/
│   ├── index.md             # 编码开发目录
│   └── <skill-id>.md        # Skill 详情
├── writing/index.md         # 文档写作目录
├── data/index.md            # 数据处理目录
├── research/index.md        # 研究检索目录
├── office/index.md          # 办公协作目录
└── image/
    ├── index.md             # 图像创作目录
    └── <skill-id>.md        # Skill 详情
```

## 分类页条目

在对应分类的 `index.md` 里追加：

```md
### [英文名（中文简称）](/ai/prompt-skill/good-skills/<category>/<skill-id>)

<div style="display:flex;gap:14px;align-items:flex-start;margin:8px 0 24px;">
  <img src="/assets/img/skills/<skill-id>/preview.jpg" alt="效果预览" style="width:132px;height:auto;border-radius:6px;border:1px solid var(--vp-c-divider);flex:none;">
  <div>
    <p style="margin:0 0 8px;">一句话说清它解决什么问题（40 字内）。</p>
    <p style="margin:0;color:var(--vp-c-text-2);font-size:13px;">使用场景 · 形态 · 来源工具<br><a href="原始分享地址">原文</a> · <a href="仓库地址">GitHub</a> · <a href="/ai/prompt-skill/good-skills/<category>/<skill-id>">详情</a></p>
  </div>
</div>
```

标题统一写成「英文名（中文简称）」：中文简称 3–5 字，点明效果或用途。每条必须配 `preview.jpg`；同一个 Skill 有多篇分享时，详情页出处全部列出，分类页写成 `原文 1` / `原文 2`。

## 详情页

在分类目录下新建 `<skill-id>.md`：

```md
---
title: 英文名（中文简称）
description: 一句话说清它解决什么问题
hidden: true
sidebar: false
outline: [2, 3]
---

# 英文名（中文简称）

> 返回：[分类名](/ai/prompt-skill/good-skills/<category>/)

一句话定位 + 效果图。

## 为什么收它

它解决了什么、和同类比强在哪、不适合什么场景。

## 怎么用

安装位置、调用方式、依赖条件。

## 挑选建议

同类 Skill 怎么选、容易踩什么坑。

## 出处

原文、仓库、作者、发布时间。
```

## 总览卡片

分类与项目卡片统一用本地 `::: link-card` 容器，每张卡以 `- title:` 开头，字段包括 `icon`、`desc`、`link`，以及可选的 `github`、`created`、`updated`、`tags`。`link` 默认站内跳转；需要新窗口时加 `external: true`。`github` 始终新开窗口，`created` / `updated` 写成 `YYYY-MM-DD` 静态展示，`tags` 写成 `[标签1, 标签2]`。

## 来源分组

总览页的「📦 按来源浏览」只给多产仓库分组（当前为 anthropics/skills、vercel-labs/agent-skills），组内按分类列链接，指向现有详情页。新增 Skill 时：来源已在分组里，就在该组对应分类行补一条链接并更新标题计数；独立来源不入组。同一独立来源累计 3 条以上时，再考虑升成一组。

## 图片

- 缩略图统一为 540×720 竖版 JPG，放在 `docs/public/assets/img/skills/<skill-id>/preview.jpg`；
- 分类页以 132px 宽展示，`height:auto` 自适应；
- 详情页可另放 1–2 张原图；
- 原仓库没有可用截图时，可制作同尺寸的品牌封面，并在详情页注明「封面为本收藏自制示意图」；
- 注明图片来自原仓库或原文，版权归原作者。
