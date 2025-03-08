<template>
  <div class="font-sans relative overflow-x-hidden">
    <MouseBackdrop />
    <NavigationBar />
    <TechIcons :floating-icons="floatingIcons" />
  </div>
</template>
<script setup>
import NavigationBar from "@/components/default/layouts/NavigationBar.vue";
import TechIcons from "@/components/common/icons/TechIcons.vue";

import { onMounted } from "vue";

import simpleIcons from "@/plugins/simple-icons";
import { colors, generateRandomValue } from "@/utils/helpers";

const floatingIcons = [];

// Generate Icons in form of objects with colors
const generateFloatingIcons = (iconCounts) => {
  const iconKeys = Object.keys(simpleIcons);
  for (let i = 0; i < iconCounts; i++) {
    const randomIconKey = generateRandomValue(iconKeys);
    floatingIcons.push({
      component: simpleIcons[randomIconKey],
      color: generateRandomValue(colors),
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 15 + Math.random() * 30,
      delay: Math.random() * 5,
      opacity: 0.1 + Math.random() * 0.3,
      scale: 0.5 + Math.random() * 1.5,
    });
  }
};

onMounted(() => {
  generateFloatingIcons(15);
});
</script>

<style scoped></style>
