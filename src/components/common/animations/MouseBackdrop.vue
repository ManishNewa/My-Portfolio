<template>
    <div class="fixed inset-0 pointer-events-none z-0" :style="{
        background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, ${gradientColorStart} 0%, ${gradientColorEnd} 50%)`,
        opacity: opacity,
    }">
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Props for customization
const props = defineProps({
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
})

// Mouse position tracking
const mousePos = ref({ x: 0, y: 0 })

const handleMouseMove = (e) => {
    mousePos.value = { x: e.clientX, y: e.clientY }
}

onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<style scoped></style>
