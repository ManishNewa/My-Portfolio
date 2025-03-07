<template>
  <div
    ref="mouseBackdrop"
    class="fixed inset-0 pointer-events-none z-0 opacity-70"
    :style="{
      background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(125, 125, 255, 0.4) 0%, rgba(0, 0, 0, 0) 50%)`,
    }"
  ></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Mouse position tracking
const mousePos = ref({ x: 0, y: 0 })
const mouseBackdrop = ref(null)
const perspectiveCard = ref(null)
const aboutImage = ref(null)

const handleMouseMove = (e) => {
  mousePos.value = { x: e.clientX, y: e.clientY }

  // 3D perspective effect for profile image
  if (perspectiveCard.value) {
    const rect = perspectiveCard.value.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const deltaX = (e.clientX - centerX) / 20
    const deltaY = (e.clientY - centerY) / 20

    perspectiveCard.value.style.transform = `rotateY(${deltaX}deg) rotateX(${-deltaY}deg)`
  }

  // 3D perspective effect for about image
  if (aboutImage.value) {
    const rect = aboutImage.value.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const deltaX = (e.clientX - centerX) / 30
      const deltaY = (e.clientY - centerY) / 30

      aboutImage.value.style.transform = `rotateY(${deltaX}deg) rotateX(${-deltaY}deg)`
    }
  }
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<style scoped></style>
