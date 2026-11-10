---
title: 提示词录入模板
description: 精选提示词的目录条目与详情页模板
hidden: true
sidebar: false
outline: [2, 3]
---

# 提示词录入模板

> 返回：[精选提示词](/ai/prompt-skill/good-prompts/)

## 目录结构

```text
docs/ai/prompt-skill/good-prompts/
├── index.md                 # 总览与分类导航
├── template.md              # 本页
├── portrait/                # 📷 人像写真
│   ├── index.md
│   └── <id>.md              # 提示词详情
├── poster/                  # 📰 编辑海报
├── illustration/            # 🎨 插画手绘
├── character/               # 🎬 角色与动态
└── design/                  # 🏠 设计与请柬
```

## 图片规范

每条提示词存四个 WebP，放在 `docs/public/assets/img/prompts/<id>/`：

```text
<id>/
├── original.webp        # 原提示词全图（长边 ≤ 1660px）
├── variant.webp         # 变体全图（与原图同尺寸）
├── original-thumb.webp  # 缩略图（宽 480px）
└── variant-thumb.webp   # 缩略图（宽 480px）
```

- 文件名一律 ascii（original / variant），不用中文；
- 列表页用缩略图，详情页对比组件用全图；
- 原始 PNG 不入库，控制在每条 ≈ 400KB 以内。

## 分类页条目

在对应分类的 `index.md` 里追加：

````md
### [P0XX · 名称](/ai/prompt-skill/good-prompts/<category>/<id>)

<div class="prompt-entry">
  <a class="pe-thumbs" href="/ai/prompt-skill/good-prompts/<category>/<id>">
    <span class="pe-thumb"><img src="/assets/img/prompts/<id>/original-thumb.webp" alt="名称 原提示词效果" loading="lazy" decoding="async"><em>原提示词</em></span>
    <span class="pe-thumb"><img src="/assets/img/prompts/<id>/variant-thumb.webp" alt="名称 变体风格" loading="lazy" decoding="async"><em>变体风格名</em></span>
  </a>
  <div class="pe-body">
    <p class="pe-one">一句话说清这条提示词的画面与卖点。</p>
    <p class="pe-meta">9:16 竖版 · 变体「风格名」<br><a href="/ai/prompt-skill/good-prompts/<category>/<id>">详情与对比 →</a></p>
  </div>
</div>
````md

变体一律标**实际风格名**（如「京都动画」「水彩画」），不标生成工具。

## 详情页

在分类目录下新建 `<id>.md`：

````md
---
title: P0XX · 名称
description: 一句话定位
hidden: true
sidebar: false
outline: [2, 3]
---

# P0XX · 名称

> 返回：[分类名](/ai/prompt-skill/good-prompts/<category>/)

一句话定位。

<div class="prompt-tags">
  <span class="ptag">📐 9:16 竖版</span>
  <span class="ptag">🤖 GPT Image 2</span>
  <span class="ptag ptag-style">🎨 变体 · 风格名</span>
</div>

## 效果对比

<PromptCompare original="/assets/img/prompts/<id>/original.webp" variant="/assets/img/prompts/<id>/variant.webp" variantLabel="风格名变体" alt="名称" />

## 原提示词

<PromptBlock text="完整原提示词" />

## 变体提示词 · 风格名

变体手法一句话。

<PromptBlock text="完整变体提示词" />

## 可替换变量

| 槽位 | 当前值 |
| --- | --- |
| 人物 | … |

## 为什么收它

## 怎么用

## 挑选建议

## 出处

自研实测 · 模型 GPT Image 2。
````md

## 特殊标注

- **提示词展示**：全文统一用 `<PromptBlock text="..." />`（逐槽位换行 + 一键复制全文）；不要用 `text` 代码块——长段中文会横向滚动，看不全内容；
- **视频提示词**：规格标签加 `🎬 视频提示词 · 单帧展示`，效果对比说明里注明「此处为单帧效果」；
- **需要参考图**：在「怎么用」后用引用块写执行说明（无参考图时的文字替代设定）。
