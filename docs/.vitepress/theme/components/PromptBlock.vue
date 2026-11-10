<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{ text: string }>()

const copied = ref(false)
let timer: ReturnType<typeof setTimeout> | undefined

interface Row { label: string | null; value: string; lead: boolean; avoid: boolean }

const rows = computed<Row[]>(() => {
  const out: Row[] = []
  const lines = props.text.split(/\n+/).map(s => s.trim()).filter(Boolean)
  let first = true
  for (const line of lines) {
    for (const seg of line.split('。')) {
      const s = seg.trim()
      if (!s) continue
      const m = s.match(/^([^：]{1,8})：(.*)$/)
      const label = m && m[2].trim() ? m[1].trim() : null
      const value = m && label ? m[2].trim() : s
      out.push({ label, value, lead: first && !label, avoid: label === '避免' })
      first = false
    }
  }
  return out
})

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