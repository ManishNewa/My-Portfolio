<template>
    <div class="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        <div v-for="(icon, index) in props.floatingIcons" :key="index" class="absolute floating-icon" :style="{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            animationDuration: `${icon.duration}s`,
            animationDelay: `${icon.delay}s`,
            opacity: icon.opacity,
            transform: `scale(${icon.scale})`,
            filter: 'blur(0.5px)'
        }">
            <component :is="icon.component" class="h-10 w-10 md:h-16 md:w-16" :style="{ color: icon.color }" />
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    floatingIcons: {
        type: Array,
        required: true
    }
})
</script>

<style scoped>
.floating-icon {
    animation: float 20s ease-in-out infinite alternate;
}

@keyframes float {
    0% {
        transform: translate(0, 0) rotate(0deg) scale(1);
    }

    25% {
        transform: translate(20px, 15px) rotate(5deg) scale(1.05);
    }

    50% {
        transform: translate(-15px, 25px) rotate(-5deg) scale(0.95);
    }

    75% {
        transform: translate(15px, -20px) rotate(10deg) scale(1.1);
    }

    100% {
        transform: translate(-20px, -15px) rotate(-10deg) scale(0.9);
    }
}
</style>