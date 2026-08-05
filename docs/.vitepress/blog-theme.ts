import { getThemeConfig } from '@sugarat/theme/node'

const blogTheme = getThemeConfig({
  // 文章默认作者
  author: '红茶',

  // 主题色修改（旧站 vuepress-theme-hope 主题色 #096dd9，可自行调整）
  themeColor: 'el-blue',

  // 首页右侧作者信息（优先取 frontmatter blog.author / logo）
  // home: {
  //   author: '红茶',
  //   logo: '/icon.png'
  // },

  // 页脚
  footer: {
    message: '天天开心',
    copyright: '红茶'
  },

  // 评论：giscus（需替换为你在 giscus.app 生成的配置）
  // 未配置前可先注释掉，待申请后填入
  comment: {
    type: 'giscus',
    options: {
      repo: 'blackteaYES/blackteaYES.github.io',
      repoId: 'R_kgDOJBiLFA',
      category: 'Announcements',
      categoryId: 'DIC_kwDOJBiLFM4CnZmq',
      mapping: 'pathname',
      inputPosition: 'top',
      lang: 'zh-CN'
    }
  },

  // 搜索：默认开启 pagefind 离线全文搜索
  // search: false,
})

export { blogTheme }