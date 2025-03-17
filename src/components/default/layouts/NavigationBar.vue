<template>
  <div
    class="fixed w-full bg-gradient-to-b from-white/50 to-white/20 backdrop-blur-md shadow-sm z-50 px-4 py-4 md:px-8"
  >
    <div
      class="max-w-6xl mx-auto flex items-center justify-end md:justify-center"
    >
      <div class="hidden md:flex space-x-8">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="item.href"
          class="text-gray-700 hover:text-purple-600 transition-colors duration-300 relative overflow-hidden group p-2"
        >
          <span class="relative z-10">{{ item.label }}</span>
          <!-- Hover Underline -->
          <span
            class="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
          ></span>
        </a>
      </div>

      <!-- Mobile Menu Toggle Button -->
      <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden">
        <menu-icon v-if="!mobileMenuOpen" class="h-6 w-6" />
        <x-icon v-else class="h-6 w-6" />
      </button>
    </div>

    <!-- Mobile View -->
    <div
      v-if="mobileMenuOpen"
      class="md:hidden absolute top-16 left-0 right-0 bg-white/90 backdrop-blur-md shadow-md py-4 px-4"
    >
      <div class="flex flex-col space-y-4">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="item.href"
          @click="mobileMenuOpen = false"
          class="text-gray-700 hover:text-purple-600 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/50"
        >
          {{ item.label }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Menu as MenuIcon, X as XIcon } from 'lucide-vue-next';

// State for mobile menu
const mobileMenuOpen = ref(false);

// Navigation items
const navItems = [
  { id: 1, label: 'Home', href: '#home' },
  { id: 2, label: 'About', href: '#about' },
  { id: 3, label: 'Experience', href: '#experience' },
  { id: 3, label: 'Projects', href: '#projects' },
  { id: 4, label: 'Contact', href: '#contact' },
];
</script>

<style scoped>
/* Custom hover animation for desktop navigation */
.group:hover .scale-0 {
  transform: scale(1);
}

/* Smooth transitions for mobile menu */
.md\:hidden {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}
</style>
