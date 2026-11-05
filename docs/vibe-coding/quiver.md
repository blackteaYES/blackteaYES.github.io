---
date: 2026-11-04
title: 🧰 Quiver（箭袋）
sticky: 1
categories:
  - vibe-coding
tag:
  - AI
  - Skill
  - Electron
  - React
  - TypeScript
  - 工具
---

# 🧰 Quiver（箭袋）

### **把 AI Skill 收进一个只读箭袋，一处整理，多端分发**

<br/>
<div class="project-badges" style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
<a href="https://github.com/blackteaYES/quiver"><img src="https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github" alt="GitHub Repository"></a>
<a href="https://github.com/blackteaYES/quiver/releases"><img src="https://img.shields.io/github/v/release/blackteaYES/quiver?style=flat-square" alt="Release"></a>
<a href="https://github.com/blackteaYES/quiver/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-2EA043?style=flat-square" alt="License"></a>
<a href="https://www.electronjs.org/"><img src="https://img.shields.io/badge/Electron-41-2B2E3A?style=flat-square&logo=electron&logoColor=white" alt="Electron 41"></a>
<a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19-087EA4?style=flat-square&logo=react&logoColor=white" alt="React 19"></a>
<a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-7-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript 7"></a>
</div>

同一个 Skill，很快会散落在多个 coding harness 的扫描目录里：Claude Code 有一份，Cursor 有一份，项目里还有一份。复制得越多，版本越难对齐；改了一个副本，其他副本无声漂移；想清理时又分不清哪个是源头、哪个是入口。

`Quiver（箭袋）` 想解决的就是这件事：**把「技能内容」与「部署关系」分开管理**。

- 技能内容进入中央库，按内容哈希寻址，相同内容只存一份。
- Harness 目录里只放 junction / symlink，或显式创建的独立副本。
- 所有部署关系集中记录，真实文件状态由对账引擎持续校准。
- 本地修改不会被偷偷写回中央库；重置、收编、忽略都必须由你显式选择。

Quiver 本意是箭袋：Skill 像箭，箭袋负责收纳和取用。它面向同时使用 Claude Code、Codex、Cursor、Windsurf、Cline、Antigravity、Qoder、Trae 等工具，并已经开始积累自己 Skill 库的开发者。当前提供 Windows 10/11 x64 安装版与便携版。

---

## 🎯 它适合谁

如果你符合下面几种情况，Quiver 会比较有用：

- 同时使用多个 AI 编程工具，每个工具都有自己的 Skill 目录。
- 已经积累了一批 Skill，但说不清哪些还在用、哪些已经失效。
- 想把 Skill 统一备份、迁移到新电脑，或分享给团队。
- 不想让工具配置被复制粘贴和“手动同步”绑死。

它不试图替代任何一个 Harness，也不接管你的项目配置。它只管理 Skill 的内容和入口。

---

## 🧠 核心设计：内容与部署分离

Quiver 的设计可以概括成一句话：**中央库负责“是什么”，绑定关系负责“放哪里”**。

### 内容寻址，只读固化

导入 Skill 时，Quiver 先计算目录树的 SHA-256，再复制到 `store/sha256/<version_sha>/`。相同内容只存一份，版本天然去重。

中央库的目录权限是 `0555`，文件权限是 `0444`。这不是 UI 层面的“只读提示”，而是文件系统层面的硬约束。`.git`、`.DS_Store`、`Thumbs.db`、`desktop.ini` 不参与哈希，避免无意义的内容变化制造新版本。

### 绑定与对账

每个 Skill 在哪个 Harness、全局还是项目、用链接还是副本，都记录在 `bindings` 中。真实文件状态由对账引擎持续校准：文件监听负责捕捉变化，30 秒巡检负责兜底。

`link` 模式使用 junction / symlink，所有工具共享同一份只读内容；`copy` 模式创建独立副本，适合需要单独维护的场景。

### 漂移只标记，不静默回写

当目标目录与锚点哈希不一致时，Quiver 会把绑定标记为「已修改」，但不会自动合并，也不会把本地修改偷偷写回中央库。接下来有三条显式路径：

| 裁决 | 行为 |
| --- | --- |
| 重置 | 丢弃目标修改，把入口恢复到锚点版本 |
| 收编 | 把目标内容写入只读库作为新版本，并推进绑定 |
| 忽略 | 保留本地分叉，不再持续高亮 |

需要直接修改 Skill 时，可以把 `link` 绑定「转为本地副本」：先从 Store 复制到 `staging/`，再原子移动到目标路径；转换后目标可写，中央库源文件保持不变。

### 安全解链

禁用或重挂载之前，Quiver 会先 `lstat`。只要目标是 symlink / junction，就只删除入口本身，**中央库源目录永远不递归删除**。副本模式也只删除目标副本。

这条规则由引擎集成测试持续验证。对于“Skill 管理器”来说，删错目录的代价太高，所以 Quiver 在这一点上选择了保守。

---

## ✨ 核心能力

### 管理

- **三视图**：技能库、Harness、项目共享同一份 `bindings` 数据，只是三种查看切片。
- **25 项工具字典**：共享层 1 + 国内主流 11 + 国际主力 13，内置 126 条候选路径。
- **候选路径链**：每个工具可配置多条有序的全局 / 项目扫描路径，支持父级目录与 monorepo 子包发现。
- **自定义工具**：自动生成英文 ID，可编辑候选链、优先级、首选路径，也能恢复默认路径链。
- **收藏与筛选**：星标置顶，支持「全部 / 收藏 / 已修改 / 未分发」快速筛选。
- **别名与备注**：只写入 Quiver 元数据，不改动 `SKILL.md` 源文件。

### 分发

- **链接 / 副本**：`link` 共享只读内容，`copy` 创建独立副本。
- **跨工具共享**：`~/.agents/skills` 一次启用、多工具同时可见；禁用时可「智能拆分」或「从共享目录彻底移除」。
- **同名遮蔽**：同一技能出现在多条候选目录时，按优先级决定生效入口，其余标记为被覆盖。
- **外部技能收编**：扫描 Harness 目录，识别不由 Quiver 创建的外部技能，支持批量「收编到技能库」或「原地登记」。

### 安全与运维

- **依赖保护**：`depends_on` 声明依赖关系，禁用被依赖技能前先确认。
- **项目复活**：项目路径移走后标记「路径失效」，30 秒巡检自动重挂并提示。
- **操作审计**：桌面端与 Web 端的所有写操作都有中文审计记录，可筛选与导出。
- **完整备份**：技能、全部只读版本、依赖声明与全局绑定可完整导出 / 导入。
- **多端 Web**：桌面窗口之外，可在平板、手机的浏览器里使用完整界面。
- **托盘驻留**：可选关闭窗口时隐藏到系统托盘并保持 Web 服务在线，默认关闭。

---

## 🛡️ 设计上比较克制的几个点

Quiver 不读取、不修改 Harness 自己的配置文件，也不会在项目中偷偷创建文件。项目级 manifest 只有在显式导出时才会写入 `.quiver/manifest.json`。

默认只监听 `127.0.0.1:4310`。局域网访问必须在设置中显式开启，开启后 Host 与 CORS 白名单也只扩展为当前网卡的 IPv4；所有 `/api/*` 请求都必须携带 `X-Quiver-Token`，由 `timingSafeEqual` 校验，不使用 Cookie。

遇到漂移、缺失或外部技能时，Quiver 只做标记，不自动合并、不静默回写，由用户决定下一步。中央库保持不可变，修改必须经过显式裁决。

---

## 🖥️ 界面与架构

### 四步总览

![Quiver 四步总览：导入技能、启用到工具、一处对账、多端访问](/assets/img/Quiver/00-quickstart.png)

导入技能 → 启用到工具 → 一处对账 → 多端访问。

### 技能库与生效拓扑

![Quiver 技能库与生效拓扑](/assets/img/Quiver/01-skills.png)

技能库、Harness 与项目共享同一份绑定数据：中央库只读，入口可追踪、可回滚。右侧详情会展示技能在哪些 Harness 生效、是全局还是项目、版本锚点与对账状态。

### 启用到多个工具

![启用到多个工具](/assets/img/Quiver/02-enable.png)

选择目标 Harness 与候选路径，可以建立链接或副本；也可以一键启用跨工具共享层 `~/.agents/skills`。

### Harness 候选路径链

![Harness 候选路径链](/assets/img/Quiver/03-harness.png)

每个工具维护自己的候选路径链，支持「本机活跃 / 全部 / 国内主流 / 国际主力 / 自定义」筛选。同一技能出现多次时，按优先级决定生效入口。

### 手机浏览器访问

![手机 Web 端](/assets/img/Quiver/08-web-mobile.png)

桌面端启动本地 Web 服务后，手机或平板可以通过带 Token 的链接访问同一套界面，状态与桌面端同源。

### 架构

![Quiver 架构总览：渲染层、桥接层、引擎层与落盘层](/assets/img/Quiver/09-architecture.svg)

单一事实来源是 `engine.snapshot()`。渲染层不维护业务副本，也不做乐观写入；每个动作返回结果与最新快照，文件监听与 30 秒巡检负责把物理世界的变化带回来。

四层结构分别是：渲染层（React 19 + Vite）、桥接层（Electron 主进程 + 本地 HTTP 服务）、引擎层（`node:sqlite`、Reconciler、chokidar、30 秒巡检）与落盘层（只读中央库、版本别名、Harness 目录）。

---

## 🚀 快速体验

### 直接下载

前往 [Quiver Releases](https://github.com/blackteaYES/quiver/releases) 下载 Windows 10/11 x64 版本：

- `Quiver-<版本号>-win-x64-setup.exe` —— NSIS 安装版，可选安装目录、桌面与开始菜单快捷方式。
- `Quiver-<版本号>-win-x64-portable.exe` —— 免安装便携版，单文件启动。

> Windows 构建没有配置代码签名证书，发布者可能显示为「未知发布者」。SmartScreen、解除锁定与 SHA-256 校验说明见 [快速上手](https://github.com/blackteaYES/quiver/blob/main/docs/QUICKSTART.md#1-下载与启动)。

### 从源码运行

环境要求：Node.js **20.19+** 或 **22.12+**。应用使用 Electron 41 内置 Node 24 的 `node:sqlite`，无需本地编译 SQLite。

```bash
npm install
npm run dev
```

`npm run dev` 会同时启动 Vite（`127.0.0.1:5173`）与 Electron 窗口。默认使用真实本地目录 `~/.quiver/`；可在「设置 → 运行模式」切换到演示沙盒，沙盒不会触碰真实的 Harness 目录。

### 常用命令

| 命令 | 作用 |
| --- | --- |
| `npm run dev` | Vite + Electron 桌面窗口 |
| `npm run dev:web` | 仅浏览器渲染层，无桌面桥接 |
| `npm run build` | TypeScript 类型检查 + 前端生产构建 |
| `npm run test:engine` | 20 项隔离引擎集成测试 |
| `npm run dist:win` | 构建 Windows 安装版与便携版 |

> 当前仅发布 Windows 10/11 x64 构建，macOS / Linux 尚无打包目标。

---

## 🧩 开发方式

Quiver 是我用 **Qoder + DeepSeek** 以 vibe coding 方式完成的项目。

产品定位、交互逻辑、架构取舍、原型、规格文档与最终验收由我完成；代码、测试与文档在 Qoder 客户端中借助 DeepSeek 模型协作实现。

这也是 Vibe Coding 比较现实的一种分工：AI 负责把规格变成代码，人负责决定做什么、为什么做、什么算做完。目前项目仍有一些已知问题和待完善的地方，欢迎下载体验、提 Issue，也欢迎 Fork 一起维护。

---

## 🛠️ 技术栈

- **桌面框架**：Electron 41
- **前端**：React 19 + TypeScript 7 + Vite 8
- **数据**：Electron 内置 Node 24 的 `node:sqlite`
- **文件与监听**：junction / symlink、chokidar、30 秒巡检
- **通信**：IPC 白名单、本地 HTTP + SSE、`X-Quiver-Token`
- **测试**：20 项隔离引擎集成测试
- **平台**：Windows 10/11 x64

---

## 📦 开源地址

- GitHub：https://github.com/blackteaYES/quiver
- 发布页：https://github.com/blackteaYES/quiver/releases
- 快速上手：https://github.com/blackteaYES/quiver/blob/main/docs/QUICKSTART.md
- 设计规格：https://github.com/blackteaYES/quiver/blob/main/assets/SPEC.md
- 问题反馈：https://github.com/blackteaYES/quiver/issues

---

## 📄 许可证

本项目基于 [MIT License](https://github.com/blackteaYES/quiver/blob/main/LICENSE) 开源。
