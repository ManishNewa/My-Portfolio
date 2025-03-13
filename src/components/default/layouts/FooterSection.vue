<template>
  <footer
    class="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-12 px-4"
  >
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-6 md:mb-0">
          <a href="#" class="text-2xl font-bold">{{ fullname }}</a>
          <!-- <p class="mt-2 text-purple-200">Creating beautiful web experiences</p> -->
        </div>
        <div class="flex space-x-6">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            class="text-purple-200 hover:text-white transition-colors duration-300 transform hover:scale-110"
          >
            <component :is="social.icon" class="h-6 w-6" />
          </a>
        </div>
      </div>
      <div
        class="border-t border-purple-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
      >
        <p class="text-purple-200 text-sm mb-4 md:mb-0">
          &copy; {{ getCurrentYear }}. All rights reserved.
        </p>
        <div class="flex space-x-6">
          <a
            href="#"
            class="text-purple-200 hover:text-white text-sm transition-colors duration-300"
            >Privacy Policy</a
          >
          <a
            href="#"
            class="text-purple-200 hover:text-white text-sm transition-colors duration-300"
            >Terms of Service</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

defineProps({
  socialLinks: {
    type: Array,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
});

const getCurrentYear = computed(() => {
  return new Date().getFullYear();
});
</script>

<style scoped></style>
