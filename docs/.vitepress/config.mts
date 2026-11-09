import { defineConfig } from 'vitepress'

import { blogTheme } from './blog-theme'

// GitHub Pages 部署到仓库子路径时设置，如 /repo-name/
// 如果项目名已经为 name.github.io 域名，则保持根路径即可
const base = '/'

export default defineConfig({
  extends: blogTheme,
  base,
  lang: 'zh-cn',
  // 忽略正文中的本机/示例死链（如 localhost、外部项目 LICENSE），源自旧博客原文
  ignoreDeadLinks: true,
  // 主题插件客户端代码含有 .vue 直接引用，需交由 Vite 处理而非外部化
  vite: {
    ssr: {
      noExternal: [
        'vitepress-plugin-product-card',
        'vitepress-plugin-group-icons'
      ]
    }
  },
  title: '红茶的博客',
  description: '红茶的博客，分享 Java、Python、前端、DevOps 等技术内容',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    outline: {
      level: [2, 3],
      label: '目录'
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '相关文章',
    lastUpdatedText: '上次更新于',
    logo: '/logo.png',
    nav: [
      { text: '🏠 首页', link: '/' },
      {
        text: '⚡ Vibe Coding',
        items: [
          { text: '🖼️ 作品集', link: '/vibe-coding/' },
          { text: '🧰 Quiver（箭袋）', link: '/vibe-coding/quiver' },
          { text: '✨ Agnes-工作台', link: '/vibe-coding/agnes-workbench' },
          { text: '📡 Jida（即达）', link: '/vibe-coding/jida' },
          { text: '📂 dir-content-analyzer', link: '/vibe-coding/dir-content-analyzer' }
        ]
      },
      {
        text: '🤖 AI 前沿',
        items: [
          { text: '🤖 大模型与 Agent 探索', link: '/ai/llm-agent/' },
          { text: '🧩 Prompt 与 Skill 工程', link: '/ai/prompt-skill/' },
          { text: '🧰 AI 工具链与工作流', link: '/ai/workflow/' },
          {
            text: '⭐ 精选 Skill 收藏',
            items: [
              { text: '📚 全部分类', link: '/ai/prompt-skill/good-skills/' },
              { text: '🧑‍💻 编码开发', link: '/ai/prompt-skill/good-skills/coding/' },
              { text: '✍️ 文档写作', link: '/ai/prompt-skill/good-skills/writing/' },
              { text: '📊 数据处理', link: '/ai/prompt-skill/good-skills/data/' },
              { text: '🔬 研究检索', link: '/ai/prompt-skill/good-skills/research/' },
              { text: '🗂️ 办公协作', link: '/ai/prompt-skill/good-skills/office/' },
              { text: '🎨 图像创作', link: '/ai/prompt-skill/good-skills/image/' }
            ]
          }
        ]
      },
      {
        text: '💻 技术体系',
        items: [
          {
            text: '🧩 设计模式',
            items: [
              { text: '设计模式简述', link: '/backEnd/设计模式/设计模式的原则和规范' },
              { text: '创造型模式', link: '/backEnd/设计模式/创造型模式' },
              { text: '结构型模式', link: '/backEnd/设计模式/结构型模式' },
              { text: '行为型模式', link: '/backEnd/设计模式/行为型模式' }
            ]
          },
          {
            text: '🛠️ 后端技术合集',
            items: [
              { text: 'Python', link: '/backEnd/python/python' },
              { text: 'Redis', link: '/backEnd/redis/redis' },
              { text: 'ElasticStack', link: '/backEnd/ElasticStack/ElasticStack' },
              { text: 'SpringBoot 合集', link: '/backEnd/java/springboot/' },
              { text: '数据库与 MySQL', link: '/backEnd/数据库/mysql%20学习' }
            ]
          },
          {
            text: '🎨 前端技术合集',
            items: [
              { text: 'Vue3', link: '/frontEnd/vue/vue3' },
              { text: 'WebRTC', link: '/frontEnd/webrtc/webrtc' }
            ]
          },
          {
            text: '🐳 运维技术合集',
            items: [
              { text: 'Arthas 线上诊断', link: '/devops/arthas/arthas' },
              { text: 'Docker 容器化', link: '/devops/docker/' }
            ]
          }
        ]
      },
      {
        text: '🚀 开源与造物',
        items: [
          { text: '📦 开源项目', link: '/projects/open-source/' },
          { text: '🌐 工具与网站', link: '/projects/tools/' },
          { text: '🧪 独立作品与 Demos', link: '/projects/demos/' }
        ]
      },
      {
        text: '🧭 视野与拾遗',
        items: [
          {
            text: '📥 输入与思考',
            items: [
              { text: '🔖 佳文摘录', link: '/digest/bookmarks/' },
              { text: '💡 技术杂谈与随笔', link: '/digest/essays/' }
            ]
          },
          {
            text: '🌿 生活切片',
            items: [
              { text: '📷 摄影技巧', link: '/shootingSkills/ShootingSkills' }
            ]
          }
        ]
      },
      { text: '👤 关于我', link: '/about' }
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/blackteaYES'
      }
    ]
  }
})
