<template>
  <div
    :style="{
      width: size,
      height: size,
      transform: `scale(${scale}) rotate(${rotation}deg)`,
    }"
    ref="lottieContainer"
  ></div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import lottie from 'lottie-web';

const props = defineProps({
  animationData: Object,
  size: { type: String, default: '100%' },
  speed: { type: Number, default: 1 },
  loop: { type: Boolean, default: true },
  scale: { type: Number, default: 1 },
  rotation: { type: Number, default: 0 },
});

const lottieContainer = ref(null);
let anim = null;

onMounted(() => {
  anim = lottie.loadAnimation({
    container: lottieContainer.value,
    renderer: 'svg',
    loop: props.loop,
    autoplay: true,
    animationData: props.animationData,
  });
  anim.setSpeed(props.speed);
});

watch(
  () => props.speed,
  (newSpeed) => {
    if (anim) anim.setSpeed(newSpeed);
  }
);
</script>
