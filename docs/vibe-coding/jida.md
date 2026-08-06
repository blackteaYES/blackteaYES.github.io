---
date: 2026-08-06
categories:
  - vibe-coding
tag:
  - 开发
  - node
  - 局域网
---

# 📡 Jida（即达）

### **局域网文件传输工具 · 发出，即达**

<br/>
<div class="project-badges" style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
<a href="https://github.com/blackteaYES/Jida/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License"></a>
<a href="https://nodejs.org/"><img src="https://img.shields.io/badge/node-%3E%3D20-green.svg" alt="Node"></a>
<a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/typescript-5.x-3178c6.svg" alt="TypeScript"></a>
<a href="https://github.com/blackteaYES/Jida/actions"><img src="https://img.shields.io/github/actions/workflow/status/blackteaYES/Jida/ci.yml?branch=main" alt="CI"></a>
</div>

`Jida（即达）` 是一款注重隐私的**局域网文件传输工具**。在同一 Wi-Fi / 局域网下，用浏览器即可在设备间互传文件——无云端、无账号、免安装。选择、发送、到达，三步完成。

---

## 📝 名字由来

**Jida（即达）** 的字面含义是「即刻到达」：

- **即（Ji）** —— 即刻、立即、不等待
- **达（Da）** —— 到达、抵达、完成

更深一层看，名字里藏着几条产品哲学：

1. **不经过第三方** —— 「即」是直接，「达」是终点，中间没有「转」「存」「代」，暗示数据传输是**端到端直达**，隐私和安全天然得到保障。
2. **简单才是效率** —— 局域网传输本该最快，但很多工具做得过于复杂。「即达」想说：打开，选择，发出，即达。
3. **人与人的连接** —— 「达」不只是数据包的到达，更是**「送达」**，像快递把包裹亲手交到你手上。

---

## ✨ 功能特性

* 🖥️ **设备自动出现**：同一服务 / 同一房间的设备自动出现在列表中。
* 📱 **二维码 + 短码房间**：扫码或输入 6 位短码即可配对。
* 🔁 **中继保底 + WebRTC 加速**：默认中继保证能传，可选 WebRTC 直连提速。
* 🏠 **纯局域网**：不依赖公网，数据不出本地网络。
* 📦 **Windows 便携包**：用户无需安装 Node，解压双击即可启动。

---

## 💾 下载体验

想直接体验？前往 [Jida Releases 发布页](https://github.com/blackteaYES/Jida/releases) 下载 Windows 便携版：

* `Jida-win-x64-<版本号>.zip` —— 解压后双击 `start.bat` 即可使用，无需安装 Node
* `SHA256.txt` —— 用于校验下载完整性

> 提示：运行无签名包时可能提示「智能应用控制已阻止可能不安全的文件」，这是对开源软件的常规保护。请在 `.zip` 上右键 → 属性 → 勾选「解除锁定」→ 确定后再解压。

---

## 🚀 快速开始

### 1. Windows 便携版（给普通用户）

```bash
npm install
npm run pack:win
```

生成目录：`release/Jida-win-x64/`

1. 将该文件夹打成 zip 发给用户
2. 用户解压后建议先打开 **`guide.html`**（或双击 `open-guide.bat`）
3. 再双击 **`start.bat`**
4. 手机与电脑同一 Wi-Fi，扫码或打开窗口中的局域网地址

### 2. 源码运行（给开发者）

**环境要求**：Node.js 20+，设备连接在同一局域网。

```bash
npm install

# 开发模式（前端热更新 + 后端）
npm run dev
# 浏览器打开 http://127.0.0.1:5173

# 生产构建并启动
npm run build
npm start
# 例如 http://192.168.x.x:3000
```

**使用方法**：

1. 一台电脑运行服务（`npm start` 或便携版 `start.bat`）
2. 终端打印局域网地址和二维码
3. 其它设备浏览器打开该地址
4. 「附近设备」点对方 → 选文件 → 对方接受 → 下载完成

---

## 📸 使用指南

完整的使用说明与界面导览请参考下表：

![项目简介与使用说明](/assets/img/Jida/guide.png)

---

## ⚙️ 配置与脚本

### 环境变量

| 环境变量 | 说明 | 默认 |
|---------|------|------|
| `PORT` | 服务端口 | `3000` |
| `HOST` | 监听地址 | `0.0.0.0` |

```powershell
$env:PORT=8080; npm start
```

### 常用脚本

| 命令 | 说明 |
|------|------|
| `npm run dev` | 开发模式 |
| `npm run build` | 构建前端 + 编译服务端 |
| `npm start` | 生产启动 |
| `npm run typecheck` | 类型检查 |
| `npm run pack:win` | 打 Windows 便携包到 `release/Jida-win-x64` |

---

## 🔐 安全与限制

* 仅建议在**家庭 / 公司受信局域网**使用，不要在公共不受控网络对陌生人开放。
* 非系统级蓝牙传文件，依赖 Wi-Fi + 浏览器。
* 传输中请保持页面在前台，避免手机锁屏或切换 App 导致中断。
* 超大文件受浏览器内存限制，可分批传输。

---

## 🛠️ 技术栈

* **服务端**：Node.js + Fastify + WebSocket
* **前端**：Vite + TypeScript
* **传输**：中继分片 + 可选 WebRTC DataChannel

---

## 📦 开源地址

- GitHub：https://github.com/blackteaYES/Jida
- 发布页：https://github.com/blackteaYES/Jida/releases

---

## 📄 许可证

本项目基于 [MIT License](https://github.com/blackteaYES/Jida/blob/main/LICENSE) 开源。
