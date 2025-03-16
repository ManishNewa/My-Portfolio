<template>
  <Analytics />
  <RouterView />
</template>

<script setup>
import { Analytics } from '@vercel/analytics/react';
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
