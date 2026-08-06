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
      {
        text: 'Vibe Coding',
        items: [
          {
            text: '项目',
            items: [
              { text: 'dir-content-analyzer', link: '/vibe-coding/dir-content-analyzer' }
            ]
          }
        ]
      },
      {
        text: '设计模式',
        items: [
          { text: '设计模式简述', link: '/backEnd/设计模式/设计模式的原则和规范' },
          { text: '创造型模式', link: '/backEnd/设计模式/创造型模式' },
          { text: '结构型模式', link: '/backEnd/设计模式/结构型模式' },
          { text: '行为型模式', link: '/backEnd/设计模式/行为型模式' }
        ]
      },
      {
        text: '后端技术合集',
        items: [
          {
            text: 'python',
            items: [
              { text: 'python', link: '/backEnd/python/python' },
              { text: 'dir-content-analyzer', link: '/backEnd/python/dir-content-analyzer' }
            ]
          },
          {
            text: 'redis',
            items: [
              { text: 'redis', link: '/backEnd/redis/redis' }
            ]
          },
          {
            text: 'ElasticStack',
            items: [
              { text: 'ElasticStack学习', link: '/backEnd/ElasticStack/ElasticStack' }
            ]
          },
          {
            text: 'springboot合集',
            items: [
              { text: 'SpringBoot整合Minio', link: '/backEnd/java/springboot/SpringBoot整合Minio' },
              { text: 'SpringBoot整合Sharding-JDBC', link: '/backEnd/java/springboot/SpringBoot整合Sharding-JDBC' },
              { text: 'SpringBoot整合WebMagic', link: '/backEnd/java/springboot/SpringBoot整合WebMagic' }
            ]
          },
          {
            text: '数据库',
            items: [
              { text: 'mysql 学习', link: '/backEnd/数据库/mysql%20学习' }
            ]
          }
        ]
      },
      {
        text: '前端技术合集',
        items: [
          {
            text: 'webrtc',
            items: [
              { text: 'webrtc基础使用', link: '/frontEnd/webrtc/webrtc' }
            ]
          },
          {
            text: 'vue',
            items: [
              { text: 'vue3学习', link: '/frontEnd/vue/vue3' },
              { text: 'vue3-AI', link: '/frontEnd/vue/vue3-ai' }
            ]
          }
        ]
      },
      {
        text: '运维技术合集',
        items: [
          {
            text: 'arthas',
            items: [
              { text: 'arthas', link: '/devops/arthas/arthas' }
            ]
          },
          {
            text: 'docker',
            items: [
              { text: 'Docker基础学习', link: '/devops/docker/Docker学习' },
              { text: '基于Docker实现mysql主从配置', link: '/devops/docker/基于Docker实现mysql主从配置' }
            ]
          }
        ]
      },
      {
        text: '摄影',
        items: [
          { text: '摄影技巧', link: '/shootingSkills/ShootingSkills' }
        ]
      },
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
