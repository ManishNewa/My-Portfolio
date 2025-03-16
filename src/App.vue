<template>
  <Analytics />
  <RouterView />
</template>

<script setup>
import { Analytics } from '@vercel/analytics/vue';
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
