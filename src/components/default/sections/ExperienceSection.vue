<template>
  <section id="experience" class="py-20 px-4 bg-gray-50/90">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
        Work Experience
      </h2>

      <div class="relative">
        <!-- Timeline line -->
        <div
          class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-blue-500 hidden md:block"
        ></div>

        <!-- Experience items -->
        <div class="space-y-12">
          <div
            v-for="(job, index) in experiences"
            :key="job.id"
            class="relative"
            :class="{ 'md:ml-auto': index % 2 !== 0 }"
          >
            <!-- Timeline dot -->
            <div
              class="hidden md:block absolute top-6 left-0 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full border-4 border-white"
              :class="{
                'bg-purple-500': index % 2 === 0,
                'bg-blue-500': index % 2 !== 0,
              }"
            ></div>

            <!-- Experience card -->
            <div
              class="md:w-5/12 ml-8 md:ml-0"
              :class="{
                'md:mr-auto md:pr-16': index % 2 === 0,
                'md:ml-auto md:pl-16': index % 2 !== 0,
              }"
            >
              <div
                class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover-lift perspective-card-container"
                :ref="
                  (el) => {
                    if (el) cards[index] = el;
                  }
                "
              >
                <div class="perspective-card">
                  <div class="flex justify-between items-start mb-4">
                    <div>
                      <h3 class="text-xl font-bold text-gray-900">
                        {{ job.position }}
                      </h3>
                      <p class="text-purple-600 font-medium">
                        {{ job.company }}
                      </p>
                    </div>
                    <span
                      class="px-3 py-1 mx-3 bg-purple-100 text-purple-800 rounded-full text-sm"
                      >{{ job.period }}</span
                    >
                  </div>
                  <p class="text-gray-600 mb-4">{{ job.description }}</p>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="skill in job.skills"
                      :key="skill"
                      class="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded"
                    >
                      {{ skill }}
                    </span>
                  </div>

                  <!-- Company logo -->
                  <div
                    class="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden"
                  >
                    <img
                      :src="job.logo"
                      :alt="job.company"
                      class="w-10 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useMousePosition } from '@/composables/useMousePosition';

const { cards } = useMousePosition();

defineProps({
  experiences: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped></style>
