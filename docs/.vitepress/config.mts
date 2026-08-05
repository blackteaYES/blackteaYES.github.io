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
      { text: '首页', link: '/' },
      { text: '后端', link: '/backEnd/' },
      { text: '前端', link: '/frontEnd/' },
      { text: '运维', link: '/devops/' },
      { text: '摄影', link: '/shootingSkills/' },
      { text: '关于我', link: '/about' }
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/blackteaYES'
      }
    ]
  }
})
