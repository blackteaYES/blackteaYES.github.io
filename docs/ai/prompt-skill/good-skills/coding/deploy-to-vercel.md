---
title: deploy-to-vercel（一键部署）
description: 把「deploy my app」变成安全决策树：默认预览、推送先问、无登录兜底
hidden: true
sidebar: false
outline: [2, 3]
---

# deploy-to-vercel（一键部署）

> 返回：[🧑‍💻 编码开发](/ai/prompt-skill/good-skills/coding/)

一句「deploy my app」背后是一串容易出错的判断：有没有 git remote、 link 没 link、CLI 登录没有。这份 Skill（v4.0.0）把判断写成决策树，目标是把项目带进「git push 自动部署」的长期状态。

<div style="max-width:300px;margin:16px 0;">
  <img src="/assets/img/skills/deploy-to-vercel/preview.jpg" alt="一键部署封面：默认预览、推送先确认、临时部署兜底" style="width:100%;height:auto;border-radius:8px;border:1px solid var(--vp-c-divider);">
</div>

> 封面为本收藏自制示意图。

## 为什么收它

先跑四项状态检查（git remote、`.vercel/` 链接文件、`vercel whoami`、团队列表），再选路径：

- 已 link + 有 remote → commit & push 触发部署，**推送前必须问用户**；
- 已 link 无 remote → `vercel deploy -y --no-wait`，再用 `vercel inspect` 查状态；
- 未 link → 先 `vercel link --repo`（按 remote 匹配，比按目录名可靠）再部署；
- 没登录也不能交互登录（沙箱/Agent）→ `npx vercel@latest deploy --temporary -y` 免账号临时部署，返回认领链接和过期时间。

两条硬规矩很对味：除非用户明确要 production，否则一律预览部署；不要 curl 部署 URL 去「验证」，把链接还给用户就行。

## 怎么用

- 安装后直接说「deploy my app」「push this live」即可触发；
- 多团队时会列出 slug 让你选，选完不再二次确认；
- 沙箱环境网络受限时，按它的排障指引加白名单或提升权限重试。

## 挑选建议

和 vercel-cli-with-tokens 二选一：交互登录、本地开发场景用这个；CI、token 环境变量场景用 tokens 版。两者都默认预览、推送先问，安全约定一致。

## 出处

- 仓库：[vercel-labs/agent-skills · deploy-to-vercel](https://github.com/vercel-labs/agent-skills/tree/main/skills/deploy-to-vercel)
- 许可：SKILL.md 未声明，以仓库为准
- 标签：编码开发 / 部署 / Agent 工作流