---
title: 工具与网站
description: 值得收藏的在线工具、实用网站与终端软件
hidden: true
sidebar: false
---

# 🌐 工具与网站

收藏在线工具、实用网站与终端软件，记录它们解决什么问题、适合什么场景，以及有哪些使用限制。当前 6 类 24 条。

快速跳转：[🤖 AI 编程](#ai) · [🧠 AI 客户端与模型](#ai-client) · [🧰 桌面与网络](#desktop) · [🎨 图像与前端参考](#image-fe) · [🚀 建站与部署](#deploy) · [💬 社区与文档](#community)

## 收录范围

- 浏览器里直接可用的在线工具与服务
- 值得收藏的实用网站
- 提升开发、设计、写作与日常效率的终端软件（不论是否开源）

## 与其他栏目的区别

- 别人的开源代码库、框架与仓库，放在 [开源项目收藏](/projects/open-source/)；终端软件与在线服务收在这里。
- AI 工具的配置、对比和完整使用流程，放在 [AI 工具链与工作流](/ai/workflow/)；这里只留目录级结论，链去细文。
- 自己持续维护的项目，放在 [Vibe Coding 作品集](/vibe-coding/)。

## 🤖 AI 编程与 Agent {#ai}

### <img src="/icons/tools/qoder.png" alt="" decoding="async" /> Qoder

**官网**：[qoder.com](https://qoder.com) · Agentic 编码 IDE · Windows / macOS

日常编码、读仓库、跑构建验证都在它里面完成：Agent 带着整个仓库的上下文干活，约定留在 AGENTS.md 里，不是每次从零开始。本博客的内容整理与几轮重构就是在这里做的。闭源商业软件；分工与用法见 [我的 AI 工具链](/ai/workflow/my-ai-toolchain)。

### <img src="/icons/tools/antigravity.png" alt="" decoding="async" /> Antigravity

**官网**：[antigravity.google](https://antigravity.google) · Google 的 Agent 优先 IDE · Windows / macOS

多 Agent 并行干活是它的卖点，我拿它跑过代理配置这类环境杂活。限制是不一定吃系统代理，开 TUN 又等于全机器接管；我的办法是启动时注入代理环境变量，见 [不开 TUN 配代理](/ai/workflow/antigravity-proxy)。

### <img src="/icons/tools/trae.png" alt="" decoding="async" /> Trae

**官网**：[trae.ai](https://www.trae.ai/) · 字节跳动的 AI IDE · Windows / macOS

VSCode 底子套了层 Agent，Builder 模式能从一句需求铺出整个项目骨架，本仓库里就留着它跑过的 `.trae/` 工作目录。限制是免费额度和可用模型变动频繁，国内版与国际版账号、模型不互通，别指望一套配置两边通用。

### <img src="/icons/tools/claude-code.png" alt="" decoding="async" /> Claude Code

**官网**：[claude.com/product/claude-code](https://claude.com/product/claude-code) · Anthropic 的终端编码 Agent · Windows / macOS / Linux

活在终端里的编码 Agent，读整个仓库、跨文件改、跑测试命令一气呵成；Skill 按 `~/.claude/skills/` 约定放，博客 [精选 Skill 收藏](/ai/prompt-skill/good-skills/) 里多条就是照它的目录装的。限制是要 Claude 订阅或 API，按用量计费，长任务烧钱不慢。

### <img src="/icons/tools/codex.png" alt="" decoding="async" /> Codex

**仓库**：[openai/codex](https://github.com/openai/codex) · OpenAI 的终端编码 Agent · Windows / macOS / Linux

OpenAI 官方的本地编码 Agent，CLI 开源，另有 IDE 扩展和云端版；精选 Skill 里不少图像、编码技能标注了 Codex 兼容（见 [Skill 收藏](/ai/prompt-skill/good-skills/)）。限制是 CLI 虽开源，模型调用仍要 OpenAI 账号与订阅，能力上限取决于你接的模型。

### <img src="/icons/tools/opencode.png" alt="" decoding="async" /> OpenCode

**官网**：[opencode.ai](https://opencode.ai/) · 开源终端编码 Agent · Windows / macOS / Linux

最大卖点是不绑模型：Claude、GPT、Gemini 乃至本地 Ollama 都能接，适合想自带模型、不被单一订阅绑死的人。以终端界面为主，也有桌面、网页版。限制是打磨和生态不如商业 IDE，模型、密钥、代理都得自己配齐才跑得顺。

## 🧠 AI 客户端与模型 {#ai-client}

### <img src="/icons/tools/cherry-studio.png" alt="" decoding="async" /> Cherry Studio

**仓库**：[CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) · 多模型桌面客户端 · Windows / macOS / Linux

把各家模型 API（含本地 Ollama）聚到一个桌面界面里对话，知识库、AI 绘画、小程序都内置，开源免费。它是对话工作台不是编码 Agent——别指望它读仓库、跑构建；模型费用自理，密钥配多了管理也是个事。

### <img src="/icons/tools/deepseek.png" alt="" decoding="async" /> DeepSeek

**官网**：[deepseek.com](https://www.deepseek.com) · 模型服务（对话 + API）

Quiver 的代码协作就是在 Qoder 里借它完成的，长任务拆得动、成本可控。开放权重版可以自部署，但我用的是官方托管服务，没折腾本地推理。

## 🧰 桌面与网络 {#desktop}

### <img src="/icons/tools/vscode.png" alt="" decoding="async" /> VSCode

**官网**：[code.visualstudio.com](https://code.visualstudio.com/) · 代码编辑器 · Windows / macOS / Linux

微软的免费编辑器，插件生态几乎覆盖所有语言，写 Python 时悬停看 docstring、调试、Git 都靠它。本体只是编辑器，AI 能力要另装 Copilot 或 Agent 插件——这也是它和上面那排 AI IDE 的区别；大仓库索引起来吃内存。

### <img src="/icons/tools/snipaste.png" alt="" decoding="async" /> Snipaste

**官网**：[snipaste.com](https://www.snipaste.com/) · 截图 + 贴图 · Windows / macOS

杀手功能是「贴图」：把截图钉在所有窗口最上层，对照设计稿、抄参数时不用来回切窗口。免费版个人使用足够，Pro 版多屏贴图等高级功能收费。

### <img src="/icons/tools/pixpin.png" alt="" decoding="async" /> PixPin

**官网**：[pixpin.cn](https://pixpin.cn/) · 截图 + 贴图 + OCR · Windows / macOS

截图、贴图、长截图、文字识别、录屏一体，比 Snipaste 多了 OCR 和滚动长截图，Ctrl+1 截图、Ctrl+2 贴图。基础功能免费，AI 翻译、表格、公式识别要会员；和 Snipaste 功能高度重叠，留一个就够。

### <img src="/icons/tools/everything.png" alt="" decoding="async" /> Everything

**官网**：[voidtools.com](https://www.voidtools.com/) · 文件名搜索 · Windows

对 NTFS 文件名建索引，输入即出结果，比资源管理器搜索快几个数量级。只搜文件名不搜内容，内容检索要另配工具。免费。

### <img src="/icons/tools/utools.png" alt="" decoding="async" /> uTools

**官网**：[u.tools](https://u.tools) · 启动器式效率工具 · 跨平台

一个快捷键呼出一切：翻译、JSON 格式化、剪贴板历史都做成插件。核心免费，部分插件要会员；插件生态是它最大的优点，也是质量最参差的地方。

### <img src="/icons/tools/clash-verge-rev.png" alt="" decoding="async" /> Clash Verge Rev

**仓库**：[clash-verge-rev/clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev) · 代理客户端 · Windows / macOS / Linux

日常代理出口，混合端口默认 7897，脚本里写死的就是它。TUN 模式一开是全机器接管，我只开系统代理，个别不吃系统代理的进程单独注入环境变量（见 [Antigravity 配代理](/ai/workflow/antigravity-proxy)）。开源终端软件，按终端软件收在这里。

## 🎨 图像与前端参考 {#image-fe}

### <img src="/icons/tools/squoosh.png" alt="" decoding="async" /> Squoosh

**官网**：[squoosh.app](https://squoosh.app/) · 浏览器图片压缩（Google）

MozJPEG、WebP、AVIF 编码器全在本地 WASM 里跑，图片不上传服务器，双栏实时对比原图与压缩图，压博客封面很顺手。限制是一次一张，批量不如 TinyPNG 的 API；AVIF 编码慢，急着出图时不划算。

### <img src="/icons/tools/tinypng.png" alt="" decoding="async" /> TinyPNG

**官网**：[tinypng.com](https://tinypng.com/) · 在线图片压缩

拖进去 PNG/JPEG，体积能压到原来的几分之一，肉眼几乎看不出差别，适合压博客封面和文章配图。免费版有上传数量限制，批量处理走 API 或本地工具。

### <img src="/icons/tools/mdn.png" alt="" decoding="async" /> MDN Web Docs

**官网**：[developer.mozilla.org](https://developer.mozilla.org/) · 前端参考文档

查 JS/CSS/Web API 直接去 MDN，兼容表和示例比多数二手博客可靠。它不是工具，是「实用网站」，放在这里当字典用。

### <img src="/icons/tools/caniuse.png" alt="" decoding="async" /> Can I use

**官网**：[caniuse.com](https://caniuse.com/) · 浏览器兼容性查询

用新 CSS/JS 特性前先查支持表，决定要不要写降级。数据靠社区维护，关键特性再和 MDN 交叉核对一次。

## 🚀 建站与部署 {#deploy}

### <img src="/icons/tools/github.png" alt="" decoding="async" /> GitHub

**官网**：[github.com](https://github.com) · 代码托管 + Actions + Pages

本博客的仓库、推送即部署的 Actions 工作流、评论依托的 Discussions 全在它上面，一个账号串起整条链路。免费额度的 Actions 分钟数对个人博客足够；私有仓库玩 Pages 要付费计划。部署流程见 [自动部署实验](/projects/demos/github-actions-deploy)。

### <img src="/icons/tools/cloudflare.png" alt="" decoding="async" /> Cloudflare

**官网**：[cloudflare.com](https://www.cloudflare.com/) · 静态托管 + CDN + DNS

Pages 推仓库即部署、全球边缘缓存，还顺带 DNS 和 CDN；[Agnes Workbench](/vibe-coding/agnes-workbench) 的在线演示就挂在 Cloudflare Pages 上。免费额度对个人足够，但 Workers、带宽超额要计费，国内访问速度看线路。

### <img src="/icons/tools/giscus.png" alt="" decoding="async" /> giscus

**官网**：[giscus.app](https://giscus.app) · 基于 GitHub Discussions 的评论服务

评论数据留在自己仓库的 Discussions 里，不寄存在第三方数据库；官网生成配置贴进主题即可，本博客正在用。限制是评论者要有 GitHub 账号、仓库必须公开且开启 Discussions，对纯读者门槛不低。

## 💬 社区与文档 {#community}

### <img src="/icons/tools/linux-do.png" alt="" decoding="async" /> linux.do

**网址**：[linux.do](https://linux.do/) · 中文技术社区（Discourse）

Discourse 搭的中文社区，软件、网络、VPS 折腾帖密集，和 linux.sb 一样是动手帖的来源地。邀请制注册挡掉一部分水帖，但内容偏资源分享，深度结论自己复验一遍再收。

### <img src="/icons/tools/linux-sb.png" alt="" decoding="async" /> linux.sb（烧饼社区）

**网址**：[linux.sb](https://linux.sb) · 中文技术社区

动手帖的来源地：代理帖与 Quiver 介绍都先发在这里，评论区的补充常常比正文值钱。内容偏实操分享，帖子深度不一，关键结论自己复验一遍再收。

### <img src="/icons/tools/sugarat-theme.png" alt="" decoding="async" /> @sugarat/theme 官网

**网址**：[theme.sugarat.top](https://theme.sugarat.top) · 主题配置参考

改 homeTags、pageSize 这类首页配置前先查它的 frontmatter 与主题配置文档，再动手不迟。文档跟发布版本走，跨版本字段以本地 node_modules 里的类型定义交叉核对。

::: tip 收录标准
只写真正用过的：解决什么问题、限制是什么。用了一段时间扔掉的，也如实记一笔。
:::