<script setup lang="ts">
/**
 * PromptCompare.vue — 原图 / 变体图拖拽对比滑块（全局组件）
 *
 * 入参：
 * - original: string       必填，原提示词效果图；作为上层，按分隔线裁剪显示左侧
 * - variant: string        必填，变体提示词效果图；作为底层完整显示
 * - originalLabel?: string 左上角标签，默认「原提示词」
 * - variantLabel?: string  右上角标签，默认「变体」
 * - alt?: string           图片 alt 前缀，默认「提示词效果对比」
 *
 * 用法（已在 theme/index.ts 全局注册，md 中直接写，无需 import）：
 * <PromptCompare
 *   original="/assets/img/prompts/p022/original.webp"
 *   variant="/assets/img/prompts/p022/variant.webp"
 *   variantLabel="东方故事变体"
 *   alt="中式婚礼请柬海报"
 * />
 *
 * 交互：鼠标 / 触摸拖动分隔线；滑块聚焦后可用 ← → 调整，每步 3%，范围 2%–98%。
 * 样式位于 user-theme.css 的 .pc 段。
 */
import { ref } from 'vue'

const props = withDefaults(defineProps<{
  original: string
  variant: string
  originalLabel?: string
  variantLabel?: string
  alt?: string
}>(), {
  originalLabel: '原提示词',
  variantLabel: '变体',
  alt: '提示词效果对比'
})

/** 分隔线位置（百分比，2–98） */
const pos = ref(50)
const root = ref<HTMLElement | null>(null)
let dragging = false

/** 根据指针 clientX 计算分隔线位置，并限制在 2%–98% */
function setFromClientX(x: number) {
  const el = root.value
  if (!el) return
  const r = el.getBoundingClientRect()
  if (r.width === 0) return
  pos.value = Math.min(98, Math.max(2, ((x - r.left) / r.width) * 100))
}

/** 按下开始拖动，并立即把分隔线移到按点 */
function onPointerDown(e: PointerEvent) {
  dragging = true
  const el = e.currentTarget as HTMLElement
  try {
    el.setPointerCapture?.(e.pointerId)
  } catch {
    /* 捕获失败仍可继续拖动 */
  }
  setFromClientX(e.clientX)
}

/** 拖动中实时更新分隔线位置 */
function onPointerMove(e: PointerEvent) {
  if (dragging) setFromClientX(e.clientX)
}

/** 结束拖动 */
function endDrag() {
  dragging = false
}

/** 键盘 ← → 微调分隔线位置 */
function onKey(e: KeyboardEvent) {
  if (e.key === 'ArrowLeft') {
    pos.value = Math.max(2, pos.value - 3)
    e.preventDefault()
  } else if (e.key === 'ArrowRight') {
    pos.value = Math.min(98, pos.value + 3)
    e.preventDefault()
  }
}
</script>

<template>
  <div
    ref="root"
    class="pc"
    @pointerdown="onPointerDown"
    @pointermove="onPointerMove"
    @pointerup="endDrag"
    @pointercancel="endDrag"
  >
    <img
      class="pc-img pc-base"
      :src="props.variant"
      :alt="`${props.alt} · ${props.variantLabel}`"
      loading="lazy"
      decoding="async"
      draggable="false"
    >
    <img
      class="pc-img pc-over"
      :src="props.original"
      :alt="`${props.alt} · ${props.originalLabel}`"
      loading="lazy"
      decoding="async"
      draggable="false"
      :style="{ clipPath: `inset(0 ${100 - pos}% 0 0)` }"
    >
    <div class="pc-line" :style="{ left: pos + '%' }">
      <div
        class="pc-knob"
        tabindex="0"
        role="slider"
        aria-label="拖动对比原提示词与变体效果"
        :aria-valuenow="Math.round(pos)"
        aria-valuemin="0"
        aria-valuemax="100"
        @keydown="onKey"
      >◂ ▸</div>
    </div>
    <span class="pc-tag pc-tag-l">{{ props.originalLabel }}</span>
    <span class="pc-tag pc-tag-r">{{ props.variantLabel }}</span>
  </div>
</template>