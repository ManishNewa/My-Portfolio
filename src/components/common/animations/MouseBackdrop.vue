<template>
  <div
    class="fixed inset-0 pointer-events-none z-0"
    :style="{
      background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, ${gradientColorStart} 0%, ${gradientColorEnd} 50%)`,
      opacity: opacity,
    }"
  ></div>
</template>

<script setup>
import { useMousePosition } from '@/composables/useMousePosition';

const { mousePos } = useMousePosition();

// Props for customization
defineProps({
  gradientColorStart: {
    type: String,
    default: 'rgba(125, 125, 255, 0.4)',
  },
  gradientColorEnd: {
    type: String,
    default: 'rgba(0, 0, 0, 0)',
  },
  opacity: {
    type: Number,
    default: 0.7,
    validator: (value) => value >= 0 && value <= 1,
  },
});
</script>

<style scoped></style>
