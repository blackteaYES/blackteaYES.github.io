---
date: 2026-08-14
title: ✨ Agnes-工作台
categories:
  - vibe-coding
tag:
  - AI
  - JavaScript
  - 多模态
  - 创作工具
---

# ✨ Agnes-工作台

### **一个浏览器里的多模态 AI 创作工作台**

<br/>
<div class="project-badges" style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
<a href="https://github.com/blackteaYES/agnes-workbench"><img src="https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github" alt="GitHub Repository"></a>
<a href="https://agnes-workbench.pages.dev/"><img src="https://img.shields.io/badge/Online-Demo-F38020?style=flat-square&logo=cloudflarepages&logoColor=white" alt="Online Demo"></a>
<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript"><img src="https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="Vanilla JavaScript"></a>
</div>

`Agnes-工作台` 是一个基于原生 JavaScript 构建的 AI 创作工作台。它把文本对话、图像生成、视频生成和作品管理放进同一个浏览器界面，使用 Agnes API 提供模型能力。

项目没有前端框架和打包步骤，部署静态文件即可运行。对于希望快速尝试多模态创作、又不想在多个工具之间切换的用户，这是一个直接、轻量的入口。

---

## 🚀 在线体验

- 在线体验：[https://agnes-workbench.pages.dev/](https://agnes-workbench.pages.dev/)
- GitHub：[https://github.com/blackteaYES/agnes-workbench](https://github.com/blackteaYES/agnes-workbench)

首次使用前，需要准备一个 Agnes API Key 并在工作台中完成连接。

---

## ✨ 功能特性

* 💬 **文本对话与图像理解**：支持流式输出、思考模式、多会话，以及图片附件和图片链接理解。
* 🖼️ **图像生成**：提供文生图、图生图和多图合成，支持尺寸、比例、风格预设、随机灵感与提示词优化。
* 🎬 **视频生成**：支持文生视频、图生视频和关键帧动画，能够设置时长、画幅、帧率、负面提示词与随机种子。
* 🗂️ **作品管理**：集中保存图片和视频的 URL、提示词与生成参数，支持筛选、下载、缓存、导入和导出备份。
* 💾 **本地数据管理**：轻量状态保存在 `localStorage`，会话、聊天附件和媒体缓存保存到 IndexedDB，减少浏览器存储压力。
* ⚙️ **统一设置中心**：可配置主题、界面密度、自动保存、保留数量、浏览器存储和 Agnes API 连接。

---

## 🔑 获取并配置 Agnes API Key

### 1. 在 Agnes 平台创建 Key

1. 登录或注册 [Agnes AI Platform](https://platform.agnes-ai.com/settings/apiKeys)。
2. 在 `API Keys` 页面点击 `Create new secret key`。
3. 为 Key 填写一个便于识别的名称，例如 `agnes-workbench-local`，然后确认创建。
4. 按平台提示妥善保存生成的密钥。

官方文档的国际站 API 地址为 `https://apihub.agnes-ai.com/v1`，认证方式是 `Authorization: Bearer YOUR_API_KEY`。

### 2. 在工作台中建立连接

1. 打开 [Agnes-工作台](https://agnes-workbench.pages.dev/)。
2. 点击右上角的设置按钮，打开“应用设置”。
3. 切换到“连接”标签。
4. 在“API 站点”中选择“国际站”。
5. 将刚创建的密钥粘贴到“API 密钥”输入框中。
6. 点击“保存连接”，再点击“测试连接”确认状态。

工作台会自动添加 `Bearer ` 请求头，因此输入框中只需要粘贴 Key 本身。

> 下图用于展示连接面板。截图中选中了“国内站”；本文以 Agnes 官方公开文档的国际站为例，首次配置请选择“国际站”。

![Agnes API 连接配置](/assets/img/agnes-workbench/model-config.png)

> **密钥安全提示**：工作台会把 API Key 保存在当前浏览器的 `localStorage` 中，方便个人在自己的设备上体验。Agnes 官方文档明确要求不要将密钥暴露在公开前端、截图、仓库或文档中。不要在共享设备保存真实 Key；使用结束后可在“连接”页面点击“清除本地密钥”。若 Key 已泄露，应尽快在平台控制台删除或重置。

> **生产环境提示**：面向其他用户发布的站点不应直接在浏览器中持有 Agnes Key。应通过服务端或自建代理保管密钥，再让前端调用受控接口。

---

## 📸 使用界面

### **文本对话与图像理解**

在文本对话页，可以直接提出创作需求、整理 brief，或让模型协助拆解镜头语言与优化图像提示词。对话支持流式输出，也可以添加本地图片或图片链接进行理解。

![Agnes 文本对话](/assets/img/agnes-workbench/agnes-chat.png)

### **图像生成**

图像生成页支持三种创作路径：从提示词直接生成、基于一张参考图重绘，以及使用多张图片合成。输入提示词后，可结合风格预设、画幅比例和输出档位收敛画面方向。

![Agnes 图像生成](/assets/img/agnes-workbench/generate-image.png)

### **视频生成**

视频生成页将文生视频、图生视频和关键帧动画整合在一起。任务以异步方式创建，右侧监视器会显示生成进度和最终媒体地址。提示词中明确主体、动作、场景、运镜、光线和风格，通常更容易获得可控的结果。

![Agnes 视频生成](/assets/img/agnes-workbench/generate-video.png)

### **作品历史与备份**

每次生成的作品会保留提示词、模型参数和媒体 URL，可按图片或视频筛选。作品页支持下载、媒体缓存与 JSON 备份；备份不包含 API Key、聊天会话或图片和视频二进制文件，因此重要媒体仍应另行保存。

![Agnes 作品历史](/assets/img/agnes-workbench/works.png)

---

## 💻 本地运行

项目是静态网页，不需要安装前端依赖或执行构建。克隆仓库后，用任意静态 HTTP 服务启动即可：

```powershell
git clone https://github.com/blackteaYES/agnes-workbench.git
cd agnes-workbench
uv run --no-cache python -m http.server 4173 --bind 127.0.0.1
```

浏览器打开 `http://127.0.0.1:4173/index.html`。

Chrome 和 Edge 可以直接打开 `index.html`，但不同浏览器对 `file://` 页面下的 `localStorage`、IndexedDB 和 CORS 限制并不一致，因此更推荐通过 HTTP(S) 服务运行。

---

## ☁️ 静态部署

项目适合发布到 Cloudflare Pages 或任意静态 HTTP(S) 服务。以 Cloudflare Pages 为例：

| 配置项 | 值 |
|------|-----|
| 构建命令 | 留空 |
| 输出目录 | `.` |
| 入口文件 | `index.html` |

项目资源全部使用相对路径，本地提供图标和字体资源，不依赖第三方脚本或字体 CDN。若选择“自定义” API 端点，则需要由该服务自行配置允许页面来源的 CORS。

---

## 🛠️ 技术栈

* **前端**：HTML + CSS + 原生 JavaScript，无框架、无打包器。
* **图标与字体**：本地加载的 Lucide 图标和字体资源。
* **浏览器存储**：`localStorage` 保存轻量状态，IndexedDB 保存完整会话、聊天附件和作品缓存。
* **模型接口**：Agnes OpenAI 兼容 API，默认使用 `agnes-2.5-flash`、`agnes-image-2.1-flash` 和 `agnes-video-v2.0`。
* **部署方式**：任意静态 HTTP(S) 服务，在线演示部署于 Cloudflare Pages。

---

## 📚 参考资料

- [Agnes API 概览](https://wiki.agnes-ai.com/en/docs/overview.md)
- [Agnes API 快速开始](https://wiki.agnes-ai.com/en/docs/quickstart.md)
- [Agnes Image 2.1 Flash 文档](https://wiki.agnes-ai.com/en/docs/agnes-image-21-flash.md)
- [Agnes Video V2.0 文档](https://wiki.agnes-ai.com/en/docs/agnes-video-v20.md)
