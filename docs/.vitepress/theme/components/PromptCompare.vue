<script setup lang="ts">
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

const pos = ref(50)
const root = ref<HTMLElement | null>(null)
let dragging = false

function setFromClientX(x: number) {
  const el = root.value
  if (!el) return
  const r = el.getBoundingClientRect()
  if (r.width === 0) return
  pos.value = Math.min(98, Math.max(2, ((x - r.left) / r.width) * 100))
}

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

function onPointerMove(e: PointerEvent) {
  if (dragging) setFromClientX(e.clientX)
}

function endDrag() {
  dragging = false
}

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