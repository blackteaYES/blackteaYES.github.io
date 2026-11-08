---
date: 2026-11-08
title: 🌐 不开 TUN：用批处理脚本给 Antigravity 配代理启动
categories:
  - workflow
tag:
  - AI
  - Antigravity
  - 代理
  - 工具链
---

# 🌐 不开 TUN：用批处理脚本给 Antigravity 配代理启动

Antigravity 不一定吃系统代理，而 TUN 模式一开就是全机器接管——我只想让它一个走代理。办法是启动时往进程里注入代理环境变量，不碰系统设置。

## 思路：环境变量只作用于这个进程

`HTTP_PROXY` / `HTTPS_PROXY` / `ALL_PROXY` 是大量网络库认的约定；`NO_PROXY` 把本地地址排除掉。用批处理 `set` 之后 `start`，变量只对这个进程和它的子进程生效，关掉就没了，比改系统环境变量干净。

## 脚本

```bat
@echo off
set HTTP_PROXY=http://127.0.0.1:7897
set HTTPS_PROXY=http://127.0.0.1:7897
set ALL_PROXY=http://127.0.0.1:7897
set NO_PROXY=localhost,127.0.0.1,::1
start "" "C:\Users\Administrator\AppData\Local\Programs\antigravity\Antigravity.exe"
```

保存为 `Antigravity_proxy.bat`，以后双击它启动。

## 用前改两处

- **端口**：`set` 后面的端口改成你自己代理软件的，Clash 默认是 7897。
- **路径**：`start` 后面跟 Antigravity.exe 的完整地址，别用相对路径。

## 两个注意

- 环境变量是启动时注入的，**Antigravity 更新后要关掉软件，重新双击脚本启动**，否则更新后的进程不带代理。
- 代理软件换端口时，脚本里的三行 `set` 要同步改。

## 效果

实测可用：

![Antigravity 走代理启动效果](/assets/img/workflow/antigravity-proxy.webp)

## 出处

本文整理自我在烧饼社区的原帖 [《不使用tun模式使用Antigravity》](https://linux.sb/topic/29830)（2026-11-05 发布），评论区还有其它同学的补充，值得回去看看。
