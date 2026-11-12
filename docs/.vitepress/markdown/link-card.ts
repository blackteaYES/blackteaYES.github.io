/**
 * link-card.ts — 自定义 Markdown 容器 `::: link-card`
 *
 * 作用：在 .md 中声明式地渲染一组卡片（分类入口、项目列表等），
 * 构建期直接输出静态 HTML，无运行时请求、无客户端脚本。
 *
 * 用法：
 * ::: link-card
 * - title: Quiver（箭袋）
 *   icon: 🧰
 *   desc: 把 AI Skill 收进一个只读箭袋。
 *   link: /vibe-coding/quiver
 *   github: https://github.com/blackteaYES/quiver
 *   created: 2026-11-03
 *   updated: 2026-11-04
 *   tags: [AI, Skill, Electron]
 *
 * - title: 站外示例
 *   link: https://example.com
 *   external: true
 * :::
 *
 * 跳转规则：
 * - link 默认站内跳转，输出普通 <a>，不强制新窗口；
 * - external 为 true / yes / 1 时，link 才加 target="_blank"；
 * - github 始终新开窗口。
 *
 * 每张卡以 title 开头，title 与 link 必填，其余字段可选。
 * 字段含义见 CardFields，样式见 ../theme/link-cards.css。
 */
import type MarkdownIt from 'markdown-it'

/** 单张卡片的原始字段（来自 ::: link-card 容器内的 key: value） */
interface CardFields {
  /** 必填，卡片标题；同时作为新卡片的起始标记 */
  title?: string
  /** 左侧图标，通常为 Emoji */
  icon?: string
  /** 一句话描述 */
  desc?: string
  /** 必填，标题跳转地址；默认站内 */
  link?: string
  /** 为 true / yes / 1 时 link 新开窗口，站外链接使用 */
  external?: string
  /** GitHub 仓库地址，始终新开窗口 */
  github?: string
  /** 创建日期（YYYY-MM-DD），随 github 链接展示 */
  created?: string
  /** 更新日期（YYYY-MM-DD），随 github 链接展示 */
  updated?: string
  /** 标签，写作 [标签1, 标签2]，中英文逗号均可 */
  tags?: string
  [key: string]: string | undefined
}

/** 容器起始行：`::: link-card` */
const OPEN = /^:::\s*link-card\s*$/
/** 容器结束行：`:::` */
const CLOSE = /^:::\s*$/

/** 去掉值两侧成对的单引号或双引号，其余原样返回 */
function unquote(value: string) {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1)
  }
  return value
}

/**
 * 把容器内容解析为卡片数组。
 * `title:` 是卡片的分隔标记：每遇到 title 就开始一张新卡片，
 * 其后的 key: value 都归属该卡片；空行与 --- 分隔线会被忽略。
 */
function parseCards(src: string): CardFields[] {
  const cards: CardFields[] = []
  let current: CardFields | null = null

  for (const raw of src.split('\n')) {
    const line = raw.trimEnd()
    if (!line.trim() || /^-{3,}$/.test(line.trim())) {
      continue
    }
    const match = line.match(/^\s*(?:-\s*)?([a-zA-Z][\w-]*)\s*:\s*(.*)$/)
    if (!match) {
      continue
    }
    const key = match[1].toLowerCase()
    const value = unquote(match[2].trim())
    if (key === 'title') {
      if (current) {
        cards.push(current)
      }
      current = { title: value }
    } else if (current) {
      current[key] = value
    }
  }
  if (current) {
    cards.push(current)
  }
  return cards
}

/** 解析 tags 字段：支持 `[标签1, 标签2]`，中英文逗号均可 */
function parseTags(value?: string) {
  if (!value) {
    return []
  }
  return value
    .replace(/^\[/, '')
    .replace(/\]$/, '')
    .split(/[,，]/)
    .map(tag => tag.trim())
    .filter(Boolean)
}

/** external 字段是否表示新窗口打开（true / yes / 1） */
function isExternal(value?: string) {
  return /^(true|yes|1)$/i.test((value || '').trim())
}

/**
 * 规范化并校验链接；非法链接（如 javascript:）降级为 `#`，
 * 与 Markdown 自身链接的校验规则保持一致。
 */
function safeLink(md: MarkdownIt, value: string) {
  try {
    const url = md.normalizeLink(value)
    return md.validateLink(url) ? url : '#'
  } catch {
    return '#'
  }
}

/**
 * 将卡片数组渲染为静态 HTML；缺少 title 或 link 的卡片会被跳过。
 * 所有文本均经 escapeHtml，链接均经 safeLink 校验。
 */
function renderCards(md: MarkdownIt, cards: CardFields[]) {
  const html = cards
    .filter(card => card.title && card.link)
    .map((card) => {
      const href = safeLink(md, card.link!)
      const target = isExternal(card.external)
        ? ' target="_blank" rel="noopener noreferrer"'
        : ''
      const icon = card.icon
        ? `<span class="link-card-icon" aria-hidden="true">${md.utils.escapeHtml(card.icon)}</span>`
        : ''
      const desc = card.desc
        ? `<div class="link-card-desc">${md.utils.escapeHtml(card.desc)}</div>`
        : ''
      const githubUrl = card.github ? safeLink(md, card.github) : ''
      const githubMeta = [
        card.created ? `创建于 ${md.utils.escapeHtml(card.created)}` : '',
        card.updated ? `更新于 ${md.utils.escapeHtml(card.updated)}` : ''
      ].filter(Boolean).join(' · ')
      const github = githubUrl && githubUrl !== '#'
        ? `<a class="link-card-meta" href="${md.utils.escapeHtml(githubUrl)}" target="_blank" rel="noopener noreferrer">GitHub${githubMeta ? `<span class="link-card-github-meta"> · ${githubMeta}</span>` : ''}</a>`
        : ''
      const tags = parseTags(card.tags)
      const tagHtml = tags.length
        ? `<div class="link-card-tags">${tags.map(tag => `<span class="link-card-tag">${md.utils.escapeHtml(tag)}</span>`).join('')}</div>`
        : ''

      return `<div class="link-card">${icon}<div class="link-card-body"><a class="link-card-title" href="${md.utils.escapeHtml(href)}"${target}>${md.utils.escapeHtml(card.title!)}</a>${desc}${github}${tagHtml}</div></div>`
    })
    .join('')

  return `<div class="link-card-list">${html}</div>`
}

/**
 * Markdown-it 插件入口：注册 `::: link-card` 块级规则与渲染器。
 * 在 config.mts 中通过 `md.use(linkCardPlugin)` 启用。
 */
export function linkCardPlugin(md: MarkdownIt) {
  md.block.ruler.before('fence', 'link_card', (state: any, startLine: number, endLine: number, silent: boolean) => {
    const start = state.bMarks[startLine] + state.tShift[startLine]
    const max = state.eMarks[startLine]
    if (!OPEN.test(state.src.slice(start, max).trim())) {
      return false
    }
    // silent 为 true 时只探测规则是否匹配，不消费内容
    if (silent) {
      return true
    }

    // 逐行收集到闭合的 `:::`；未闭合则放弃匹配，交回段落规则处理
    let nextLine = startLine + 1
    let content = ''
    let closed = false
    for (; nextLine < endLine; nextLine++) {
      const lineStart = state.bMarks[nextLine] + state.tShift[nextLine]
      const lineMax = state.eMarks[nextLine]
      const text = state.src.slice(lineStart, lineMax)
      if (CLOSE.test(text.trim())) {
        closed = true
        break
      }
      content += text + '\n'
    }
    if (!closed) {
      return false
    }

    const token = state.push('link_card', '', 0)
    token.content = content
    state.line = nextLine + 1
    return true
  }, { alt: ['paragraph', 'reference', 'blockquote'] })

  // 渲染阶段解析 token 中的原始文本，输出卡片列表 HTML
  md.renderer.rules.link_card = (tokens: any[], idx: number) => renderCards(md, parseCards(tokens[idx].content))
}
