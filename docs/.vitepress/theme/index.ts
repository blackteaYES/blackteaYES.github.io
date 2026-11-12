/**
 * 主题入口：继承 @sugarat/theme，注册博客自定义的全局组件与样式。
 *
 * 全局组件（md 中可直接使用，无需 import）：
 * - PromptBlock   提示词全文展示块，入参见 components/PromptBlock.vue
 * - PromptCompare 原图 / 变体图对比滑块，入参见 components/PromptCompare.vue
 *
 * 样式：
 * - link-cards.css 配合 config.mts 中的 linkCardPlugin（::: link-card 容器）
 * - user-theme.css 站点级主题色与页面样式
 */
import BlogTheme from '@sugarat/theme'
import PromptCompare from './components/PromptCompare.vue'
import PromptBlock from './components/PromptBlock.vue'

import './link-cards.css'
import './user-theme.css'

export default {
  ...BlogTheme,
  enhanceApp(ctx: any) {
    BlogTheme.enhanceApp?.(ctx)
    ctx.app.component('PromptCompare', PromptCompare)
    ctx.app.component('PromptBlock', PromptBlock)
  }
}
