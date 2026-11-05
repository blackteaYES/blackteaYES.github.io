import { getThemeConfig } from '@sugarat/theme/node'

const blogTheme = getThemeConfig({
  // 文章默认作者
  author: '红茶',

  // Vibe Coding 作品集（/vibe-coding/）
  works: {
    title: 'Vibe Coding 作品集',
    description: '一些自己做的 AI 工具与效率项目，按时间倒序排列。',
    list: [
      {
        title: 'Quiver（箭袋）',
        description:
          '把 AI Skill 收进一个只读箭袋：内容寻址、集中对账，一处整理，多端分发。',
        time: { start: '2026-11-04', lastupdate: '2026-11-04' },
        status: { text: '持续更新', type: 'tip' },
        url: '/vibe-coding/quiver',
        github: 'https://github.com/blackteaYES/quiver',
        cover: {
          urls: [
            '/assets/img/Quiver/00-quickstart.png',
            '/assets/img/Quiver/01-skills.png',
            '/assets/img/Quiver/02-enable.png',
            '/assets/img/Quiver/03-harness.png'
          ],
          layout: 'swiper'
        },
        tags: ['AI', 'Skill', 'Electron', 'React', 'TypeScript'],
        links: [
          { title: '论坛介绍', url: 'https://linux.sb/topic/29595' }
        ]
      },
      {
        title: 'Agnes-工作台',
        description:
          '浏览器里的多模态 AI 创作工作台，文本、图像、视频与作品管理一站式完成。',
        time: { start: '2026-08-14', lastupdate: '2026-09-12' },
        status: { text: '在线体验', type: 'tip' },
        url: '/vibe-coding/agnes-workbench',
        github: 'https://github.com/blackteaYES/agnes-workbench',
        cover: {
          urls: [
            '/assets/img/agnes-workbench/agnes-chat.png',
            '/assets/img/agnes-workbench/generate-image.png',
            '/assets/img/agnes-workbench/generate-video.png',
            '/assets/img/agnes-workbench/works.png'
          ],
          layout: 'swiper'
        },
        tags: ['AI', 'JavaScript', '多模态', '创作工具'],
        links: [
          { title: '在线 Demo', url: 'https://agnes-workbench.pages.dev/' }
        ]
      },
      {
        title: 'Jida（即达）',
        description:
          '注重隐私的局域网文件传输工具，同一 Wi-Fi 下浏览器互传，无云端、无账号、免安装。',
        time: { start: '2026-08-06', lastupdate: '2026-11-03' },
        url: '/vibe-coding/jida',
        github: 'https://github.com/blackteaYES/Jida',
        cover: {
          urls: [
            '/assets/img/Jida/jida-home.png',
            '/assets/img/Jida/jida-connect.png',
            '/assets/img/Jida/jida-qr.png'
          ],
          layout: 'swiper'
        },
        tags: ['局域网', 'Node', 'WebRTC', '文件传输'],
        links: [
          { title: '下载 Releases', url: 'https://github.com/blackteaYES/Jida/releases' }
        ]
      },
      {
        title: 'dir-content-analyzer',
        description:
          '结合传统扫描与 LLM 的本地目录分析工具，找出空间大户并给出语义化清理建议。',
        time: { start: '2026-04-30', lastupdate: '2026-08-17' },
        url: '/vibe-coding/dir-content-analyzer',
        github: 'https://github.com/blackteaYES/dir-content-analyzer',
        cover: {
          urls: [
            '/assets/img/vibe-coding/covers/dir-content-analyzer.png',
            '/assets/img/vibe-coding/covers/dir-ai-classify.png',
            '/assets/img/vibe-coding/covers/dir-report.png'
          ],
          layout: 'swiper'
        },
        tags: ['Python', 'LLM', '目录分析', 'Streamlit'],
        links: [
          { title: 'Gitee 镜像', url: 'https://gitee.com/zjydzyjs/dir-content-analyzer' }
        ]
      }
    ]
  },

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