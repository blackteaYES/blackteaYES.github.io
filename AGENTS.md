# AGENTS.md

个人博客仓库（作者：红茶），基于 VitePress 2.0 alpha + `@sugarat/theme` 主题，通过 GitHub Actions 自动构建并部署到 GitHub Pages（`blackteaYES.github.io`）。内容为中文技术文章。

## 目录结构

- `docs/` — 全部博客内容（Markdown 文章），按栏目分目录：
  - `backEnd/`（Java/Python/Redis/ElasticStack/数据库/设计模式）、`frontEnd/`（Vue/WebRTC）、`devops/`（Docker/Arthas）、`vibe-coding/`（AI 编程项目介绍）、`ai/`（AI 前沿探索）、`projects/`（开源收藏与 Demos）、`digest/`（好文摘录与随笔）、`shootingSkills/`（摄影）
  - 每个栏目目录有 `index.md` 作为栏目首页
- 顶栏导航名 ≠ 目录名，按导航名找不到目录时查这张表：

  | 导航 | 目录 |
  | --- | --- |
  | ⚡ Vibe Coding | `vibe-coding/` |
  | 🤖 AI 前沿 | `ai/` |
  | 💻 技术体系 | `backEnd/`、`frontEnd/`、`devops/` |
  | 🚀 开源与造物 | `projects/` |
  | 🧭 视野与拾遗 | `digest/`、`shootingSkills/` |
- `docs/.vitepress/config.mts` — VitePress 主配置：`base: '/'`（部署到 name.github.io 根路径，勿改为子路径）、导航菜单、`ignoreDeadLinks: true`
- `docs/.vitepress/blog-theme.ts` — 主题配置（作者、页脚、giscus 评论）；修改站点级展示配置改这里，不是 config.mts
- `docs/.vitepress/theme/` — 主题覆盖入口 `index.ts` + 自定义样式 `user-theme.css`
- `docs/public/` — 静态资源（favicon.ico、logo.png 等），引用时用根路径如 `/logo.png`
- `.github/workflows/deploy.yml` — Pages 部署工作流

## 常用命令

```bash
npm run dev     # 本地开发预览（vitepress dev docs）
npm run build   # 构建到 docs/.vitepress/dist
npm run serve   # 本地预览构建产物
```

无 lint / 测试配置。验证改动以 `npm run build` 成功为准。

## 部署机制

推送（或 PR）到 `main` 分支即触发 `.github/workflows/deploy.yml`：Node 20 上 `npm install` + `npm run build`，产物经 Jekyll 处理后部署到 GitHub Pages。无需手动部署；提交前建议本地跑 `npm run build` 确认构建通过。

## 文章约定

- frontmatter 使用 `date`（YYYY-MM-DD）、`categories`（专题名，与目录/专题页一致）、`tag`（标签数组，**第一位是导航大类**：后端/前端/运维/设计模式/AI/摄影，后面跟细分标签），示例见 `docs/vibe-coding/jida.md`
- 部分目录/文件名是中文且含空格（如 `docs/backEnd/数据库/mysql 学习.md`）；在 config.mts 导航里引用时需 URL 编码（空格写 `%20`）
- 新增文章后通常要在 `config.mts` 的 `nav` 中登记入口（vibe-coding 等栏目）

## 注意事项

- `node_modules/`、`docs/.vitepress/dist/`、`docs/.vitepress/cache/` 已被 gitignore，不要提交
- `config.mts` 中 `vite.ssr.noExternal` 列出的插件（product-card、group-icons）含 `.vue` 直接引用，不可移除该配置，否则构建报错
- `ignoreDeadLinks: true` 是为容忍旧文中的示例死链（localhost 等），新文章仍应避免真实死链
