<script setup lang="ts">
/**
 * PromptBlock.vue — 提示词全文展示块（全局组件）
 *
 * 入参：
 * - text: string  必填，完整提示词原文；展示与复制均基于该字段。
 *
 * 用法（已在 theme/index.ts 全局注册，md 中直接写，无需 import）：
 * <PromptBlock text="完整原提示词" />
 * <PromptBlock text="将画面转换为水墨风格。【保留核心】...【色彩】...【避免】..." />
 *
 * 排版规则：
 * - 含【标签】时按节拆分，【标签】作为左侧小标题，节内文字保持整段；
 * - 无【标签】时按换行与句号拆行，`槽位：内容` 会拆成小标题 + 内容；
 * - 首行无标签的内容加粗（.pb-lead）；「避免」「禁止」标签使用警示色（.pb-avoid）。
 * 样式位于 user-theme.css 的 .pb 段。
 */
import { computed, ref } from 'vue'

/** 完整提示词文本 */
const props = defineProps<{ text: string }>()

const copied = ref(false)
let timer: ReturnType<typeof setTimeout> | undefined

/** 一行展示数据：label 为左侧槽位名，为 null 时只显示正文 */
interface Row { label: string | null; value: string; lead: boolean; avoid: boolean }

/** 把提示词拆成逐行结构，拆分规则见文件头注释 */
const rows = computed<Row[]>(() => {
  const raw = props.text.replace(/\r/g, '').trim()
  const out: Row[] = []

  // 变体提示词常用【标签】分节：整节作为一行，保留节内完整句意
  if (/【[^】]{1,12}】/.test(raw)) {
    let first = true
    for (const part of raw.split(/(?=【[^】]{1,12}】)/)) {
      const p = part.replace(/\s+/g, ' ').trim()
      if (!p) continue
      const m = p.match(/^【([^】]{1,12})】\s*(.*)$/)
      if (m && m[2].trim()) {
        const label = m[1].trim()
        out.push({ label, value: m[2].trim(), lead: false, avoid: label === '避免' || label === '禁止' })
      } else {
        for (const seg of p.split('。')) {
          const s = seg.trim()
          if (!s) continue
          out.push({ label: null, value: s, lead: first, avoid: false })
          first = false
        }
        continue
      }
      first = false
    }
    return out
  }

  const lines = raw.split(/\n+/).map(s => s.trim()).filter(Boolean)
  let first = true
  for (const line of lines) {
    for (const seg of line.split('。')) {
      const s = seg.trim()
      if (!s) continue
      const m = s.match(/^([\u4e00-\u9fa5A-Za-z][^：]{0,7})：(.*)$/)
      const label = m && m[2].trim() ? m[1].trim() : null
      const value = m && label ? m[2].trim() : s
      out.push({ label, value, lead: first && !label, avoid: label === '避免' })
      first = false
    }
  }
  return out
})

/** 复制全文：优先 Clipboard API，失败时回退到临时 textarea */
async function copy() {
  const raw = props.text
  try {
    await navigator.clipboard.writeText(raw)
  } catch {
    const ta = document.createElement('textarea')
    ta.value = raw
    ta.style.position = 'fixed'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    try { document.execCommand('copy') } catch { /* 忽略 */ }
    document.body.removeChild(ta)
  }
  copied.value = true
  clearTimeout(timer)
  timer = setTimeout(() => { copied.value = false }, 1600)
}
</script>

<template>
  <div class="pb">
    <div class="pb-head">
      <span class="pb-hint">全文 · {{ props.text.length }} 字 · 自动换行</span>
      <button class="pb-copy" :class="{ 'is-copied': copied }" type="button" @click="copy">
        {{ copied ? '✓ 已复制' : '复制全文' }}
      </button>
    </div>
    <div class="pb-body">
      <div
        v-for="(r, i) in rows"
        :key="i"
        class="pb-row"
        :class="{ 'pb-lead': r.lead, 'pb-avoid': r.avoid }"
      >
        <span v-if="r.label" class="pb-label">{{ r.label }}</span>
        <span class="pb-value">{{ r.value }}</span>
      </div>
    </div>
  </div>
</template>