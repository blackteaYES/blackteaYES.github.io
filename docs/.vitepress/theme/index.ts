import BlogTheme from '@sugarat/theme'
import PromptCompare from './components/PromptCompare.vue'
import PromptBlock from './components/PromptBlock.vue'

import './user-theme.css'

export default {
  ...BlogTheme,
  enhanceApp(ctx: any) {
    BlogTheme.enhanceApp?.(ctx)
    ctx.app.component('PromptCompare', PromptCompare)
    ctx.app.component('PromptBlock', PromptBlock)
  }
}
