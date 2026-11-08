---
date: 2026-11-08
title: 🚀 把博客交给 GitHub Actions：自动部署实验
categories:
  - demos
tag:
  - 运维
  - GitHub Actions
  - GitHub Pages
---

# 🚀 把博客交给 GitHub Actions：自动部署实验

目标很简单：推完代码站点自动更新，人不碰部署。成品是一个工作流文件 `.github/workflows/deploy.yml`。

## 流水线拆解

1. **触发**：push 或 PR 到 main，另支持手动 workflow_dispatch。
2. **构建**：Node 20，`npm install` + `npm run build`，产物在 `docs/.vitepress/dist`。
3. **Jekyll 处理**：`actions/jekyll-build-pages` 把 dist 拷进 `_site`，兼容 Pages 的默认流程。
4. **部署**：`upload-pages-artifact` + `deploy-pages`，权限开 `pages: write` 和 `id-token: write`。

## 两个值得记的细节

- **concurrency group 是 pages**：并发推送排队而不是互相覆盖，避免「旧部署盖掉新部署」。
- **PR 也触发构建**：等于合并前跑一次构建验证，构建不过会在 PR 里直接看到。

## 实验结论

推送后看 Actions 变绿、刷新站点，全程不需要服务器、不需要手动上传。代价是每次等一分钟左右构建时间。

对个人博客来说，这是性价比最高的「运维」：流水线写一次，之后只管写文章。
