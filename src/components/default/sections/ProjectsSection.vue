<template>
  <section id="projects" class="py-20 px-4 bg-white/90">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
        My Projects
      </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group hover-lift"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="relative overflow-hidden">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-48 object-contain transition-transform duration-500 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            >
              <div
                class="flex space-x-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
              >
                <button
                  v-tooltip="'Project Details'"
                  @click="openProjectModal(project)"
                  class="bg-white text-purple-600 p-2 rounded-full hover:bg-purple-100 transition-colors"
                >
                  <eye-icon class="h-5 w-5 cursor-pointer" />
                </button>
                <a
                  v-for="code in project.codeUrl"
                  :key="code.url"
                  v-tooltip="code.title"
                  :href="code.url"
                  class="bg-white text-purple-600 p-2 rounded-full hover:bg-purple-100 transition-colors"
                >
                  <code-icon class="h-5 w-5 cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
          <div class="p-6">
            <h3 class="font-bold text-lg mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Project Modal -->
    <ProjectModal
      v-if="modalOpen"
      :currentProject="currentProject"
      @close-modal="closeProjectModal"
    />
  </section>
</template>

<script setup>
import ProjectModal from '@/components/common/ProjectModal.vue';

import { ref } from 'vue';
import { Eye as EyeIcon, Code as CodeIcon } from 'lucide-vue-next';

defineProps({
  projects: {
    type: Array,
    required: true,
  },
});

const modalOpen = ref(false);
const currentProject = ref(null);

const openProjectModal = (project) => {
  currentProject.value = project;
  modalOpen.value = true;
};

const closeProjectModal = () => {
  currentProject.value = null;
  modalOpen.value = false;
};
</script>

<style scoped></style>
