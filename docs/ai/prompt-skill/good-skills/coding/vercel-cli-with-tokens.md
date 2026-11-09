---
title: vercel-cli-with-tokens（令牌部署）
description: 用环境变量 token 操作 Vercel CLI：部署、env、域名，不暴露密钥
hidden: true
sidebar: false
outline: [2, 3]
---

# vercel-cli-with-tokens（令牌部署）

> 返回：[🧑‍💻 编码开发](/ai/prompt-skill/good-skills/coding/)

不依赖 `vercel login` 的 CLI 工作流：token 走环境变量，项目靠 ID 定位，适合 CI、沙箱和一切不能交互登录的环境。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/vercel-cli-with-tokens/preview.jpg" alt="令牌部署封面：token 走环境变量、部署与 env 管理" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面为本收藏自制示意图。

## 为什么收它

token 查找有明确顺序：环境变量 `VERCEL_TOKEN` → `.env` 里的 `VERCEL_TOKEN` → `.env` 里其他像 token 的变量（`vca_` 开头）→ 最后才问用户。最关键的一条安全约定：**绝不把 token 传成 `--token` 参数**——命令行参数会进 shell 历史和进程列表；export 成环境变量让 CLI 原生读取。

其余约定同样克制：`VERCEL_ORG_ID` 与 `VERCEL_PROJECT_ID` 必须成对设置；默认预览部署；git push 前先问；不手改 `.vercel/` 目录；不 curl 部署 URL 验证。还覆盖 env add/ls/pull/rm、域名管理、`inspect --logs` 查构建日志。

## 怎么用

- 安装后说「deploy to vercel」「add environment variables to vercel」触发；
- 有 project ID 时 `vercel deploy -y --no-wait` 直接部署，无需 link；
- 没有 ID 走 `vercel link --repo --scope <team>` 再部署。

## 挑选建议

CI / 自动化 / token 场景选它；本地交互开发选 deploy-to-vercel（带免登录临时部署兜底）。两份的安全约定一致，可以共存，触发场景不重叠。

## 出处

- 仓库：[vercel-labs/agent-skills · vercel-cli-with-tokens](https://github.com/vercel-labs/agent-skills/tree/main/skills/vercel-cli-with-tokens)
- 许可：SKILL.md 未声明，以仓库为准
- 标签：编码开发 / Vercel CLI / CI