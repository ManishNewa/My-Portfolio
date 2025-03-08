<template>
  <div class="font-sans relative overflow-x-hidden">
    <MouseBackdrop />
    <NavigationBar />
    <TechIcons :floating-icons="floatingIcons" />
  </div>
</template>
<script setup>
import NavigationBar from '@/components/default/layouts/NavigationBar.vue';
import TechIcons from '@/components/common/icons/TechIcons.vue';

import { markRaw, onMounted, shallowRef } from 'vue';
import simpleIcons from '@/plugins/simple-icons';
import { colors, generateRandomValue } from '@/utils/helpers';

const floatingIcons = shallowRef([]);

// Generate Icons in form of objects with colors
const generateFloatingIcons = (iconCounts) => {
  const iconKeys = Object.keys(simpleIcons);
  const newIcons = Array.from({ length: iconCounts }, () => {
    const randomIconKey = generateRandomValue(iconKeys);
    floatingIcons.value.push(
      markRaw({
        component: markRaw(simpleIcons[randomIconKey]),
        color: generateRandomValue(colors),
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: 15 + Math.random() * 30,
        delay: Math.random() * 5,
        opacity: 0.1 + Math.random() * 0.3,
        scale: 0.5 + Math.random() * 1.5,
      })
    );
  });
  floatingIcons.value = newIcons;
};

onMounted(() => {
  generateFloatingIcons(15);
});
</script>

<style scoped></style>
