---
title: 开源项目收藏
description: 我收藏的别人做的开源项目，以及它们好在哪
hidden: true
sidebar: false
---

# 📦 开源项目收藏

看到值得放的仓库就记在这里。只写**别人的**项目——我自己做的那些在 [Vibe Coding 作品集](/vibe-coding/) 和 [关于我](/about) 里。

每条想清楚三件事：解决什么问题、比同类好在哪、自己是怎么用上的。

## Java 生态

### Hutool

**仓库**：[dromara/hutool](https://github.com/dromara/hutool) · Java 工具类库

- **解决什么**：业务代码里日期、字符串、加密、HTTP、Excel 处理的重复劳动。
- **好在哪**：覆盖面广、API 对中文场景友好，不用拼五六个小库。
- **怎么用**：按需引模块（hutool-core、hutool-crypto 等），别为一两个功能引 hutool-all。

### Sa-Token

**仓库**：[dromara/sa-token](https://github.com/dromara/sa-token) · Java 权限认证框架

- **解决什么**：登录认证、权限校验、SSO、分布式 Session 这一整套。
- **好在哪**：比 Spring Security 轻量得多，踢人下线、角色层级这类 API 贴合国内业务场景。
- **怎么用**：中小项目直接拿来做登录和鉴权；复杂 OAuth2 场景先读透文档再上。

## 建站

### VitePress

**仓库**：[vuejs/vitepress](https://github.com/vuejs/vitepress) · 静态站点生成器

- **解决什么**：把 Markdown 变成快且好看的文档/博客站。
- **好在哪**：Vite 驱动，开发服务器秒启动；Markdown 里能直接嵌 Vue 组件。
- **怎么用**：本博客就是 VitePress + @sugarat/theme 搭的，部署流程见 [自动部署实验](/projects/demos/github-actions-deploy)。

### @sugarat/theme

**仓库**：[ATQQ/sugar-blog](https://github.com/ATQQ/sugar-blog) · VitePress 博客主题 · [官网](https://theme.sugarat.top/) · MIT

- **解决什么**：VitePress 原生是文档站，离博客还差首页文章流、分类标签、评论、搜索、RSS 这最后一公里。
- **好在哪**：简约风、开箱即用，中文文档齐全；本博客就是活例子（在用 0.5.27），配置与踩坑都沉淀在这个仓库里。
- **怎么用**：存量 VitePress 项目按官网「存量 VitePress 项目中引入」换主题入口；新项目走快速上手。部署搭配 [自动部署实验](/projects/demos/github-actions-deploy)。

::: tip 收录标准
只收真正用过或认真评估过的，每条写清问题、优点、用法，不只留一行简介。
:::
