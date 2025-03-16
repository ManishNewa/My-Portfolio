<template>
  <!-- Project Modal -->
  <div
    v-if="selectedProject"
    class="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
  >
    <!-- Backdrop -->
    <div
      class="absolute inset-0 bg-black/70 backdrop-blur-sm"
      @click="closeProjectModal"
    ></div>

    <!-- Modal Content -->
    <div
      class="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 animate-modal-in"
    >
      <!-- Close button -->
      <button
        @click="closeProjectModal"
        class="cursor-pointer absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full text-gray-800 hover:text-purple-600 transition-colors z-20"
      >
        <x-icon class="h-6 w-6" />
      </button>

      <!-- Carousel -->
      <div class="relative h-64 sm:h-80 md:h-96 bg-gray-100">
        <div class="h-full relative">
          <transition-group name="carousel" tag="div" class="h-full">
            <div
              class="absolute inset-0 flex items-center justify-center"
              v-if="selectedProject.images.length === 0"
            >
              <img
                :src="selectedProject.image"
                :alt="selectedProject.title"
                class="w-full h-full object-contain"
              />
              <!-- <image-icon class="h-16 w-16 text-gray-300" /> -->
            </div>
            <div
              v-for="(image, idx) in selectedProject.images"
              :key="idx"
              v-show="currentImageIndex === idx"
              class="absolute inset-0"
            >
              <img
                :src="image"
                :alt="`${selectedProject.title} - Image ${idx + 1}`"
                class="w-full h-full object-contain"
              />
            </div>
          </transition-group>

          <!-- Carousel controls -->
          <button
            v-if="selectedProject.images.length > 1"
            @click="prevImage"
            class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full text-gray-800 hover:text-purple-600 transition-colors"
          >
            <chevron-left-icon class="h-6 w-6" />
          </button>
          <button
            v-if="selectedProject.images.length > 1"
            @click="nextImage"
            class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full text-gray-800 hover:text-purple-600 transition-colors"
          >
            <chevron-right-icon class="h-6 w-6" />
          </button>

          <!-- Carousel indicators -->
          <div
            v-if="selectedProject.images.length > 1"
            class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
          >
            <button
              v-for="(_, idx) in selectedProject.images"
              :key="idx"
              @click="currentImageIndex = idx"
              class="w-2.5 h-2.5 rounded-full transition-colors"
              :class="currentImageIndex === idx ? 'bg-white' : 'bg-white/50'"
            ></button>
          </div>
        </div>
      </div>

      <!-- Project details -->
      <div class="p-6 md:p-8">
        <h3 class="text-2xl font-bold mb-2">{{ selectedProject.title }}</h3>

        <div class="flex flex-wrap gap-2 mb-4">
          <span
            v-for="tech in selectedProject.technologies"
            :key="tech"
            class="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded"
          >
            {{ tech }}
          </span>
        </div>

        <div class="prose prose-gray max-w-none">
          <p class="text-gray-600 mb-4">{{ selectedProject.description }}</p>
          <p class="text-gray-600 mb-4">
            {{ selectedProject.longDescription }}
          </p>

          <h4 class="text-lg font-semibold mt-6 mb-3">Key Features</h4>
          <ul class="list-disc pl-5 space-y-1 text-gray-600">
            <li v-for="feature in selectedProject.features" :key="feature">
              {{ feature }}
            </li>
          </ul>
          <div v-if="selectedProject.challenges">
            <h4 class="text-lg font-semibold mt-6 mb-3">
              Challenges & Solutions
            </h4>
            <ul class="list-disc pl-5 space-y-1 text-gray-600">
              <li
                v-for="challenge in selectedProject.challenges"
                :key="challenge"
              >
                {{ challenge }}
              </li>
            </ul>
          </div>
        </div>

        <div class="flex justify-between mt-8">
          <a
            :href="selectedProject.demoUrl"
            target="_blank"
            class="interactive-button bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2"
          >
            <external-link-icon class="h-5 w-5" />
            <span>Live Demo</span>
          </a>
          <a
            :href="selectedProject.codeUrl"
            target="_blank"
            class="interactive-button bg-white border border-gray-300 text-gray-800 px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2"
          >
            <component :is="simpleIcons.GitIcon" class="h-5 w-5" />
            <span>View Code</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watchEffect } from 'vue';
import {
  X as XIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  ExternalLink as ExternalLinkIcon,
  // Image as ImageIcon,
} from 'lucide-vue-next';

import simpleIcons from '@/plugins/simple-icons';

const emit = defineEmits(['close-modal']);

const props = defineProps({
  currentProject: {
    type: Object,
    required: true,
  },
});

// Project modal
const selectedProject = ref(null);
const currentImageIndex = ref(0);

const closeProjectModal = () => {
  emit('close-modal');
};

const nextImage = () => {
  if (!selectedProject.value) return;
  currentImageIndex.value =
    (currentImageIndex.value + 1) % selectedProject.value.images.length;
};

const prevImage = () => {
  if (!selectedProject.value) return;
  currentImageIndex.value =
    (currentImageIndex.value - 1 + selectedProject.value.images.length) %
    selectedProject.value.images.length;
};

const handleKeyDown = (e) => {
  if (!selectedProject.value) return;

  if (e.key === 'Escape') {
    closeProjectModal();
  } else if (e.key === 'ArrowRight') {
    nextImage();
  } else if (e.key === 'ArrowLeft') {
    prevImage();
  }
};

onMounted(() => {
  selectedProject.value = props.currentProject;
  currentImageIndex.value = 0;
  // Add escape key listener for modal
  document.addEventListener('keydown', handleKeyDown);
  watchEffect(() => {
    if (selectedProject.value) {
      document.body.style.overflow = 'hidden';
    }
  });
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown);
  document.body.style.overflow = '';
});
</script>

<style scoped></style>
