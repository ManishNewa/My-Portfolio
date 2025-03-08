<template>
  <section id="about" class="py-20 px-4 bg-white/90">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="order-2 md:order-1">
          <h3 class="text-2xl font-bold mb-4">Who am I?</h3>
          <p class="text-gray-600 mb-6 leading-relaxed">
            As a recent Master's graduate from Wrexham University in MSc
            Computer Science, having almost 4 years of commercial experience as
            a Software Developer, I'm currently looking for Software Developer
            roles in fintech companies.
          </p>
          <p class="text-gray-600 mb-8 leading-relaxed">
            When I'm not coding, you can find me hiking in the mountains,
            watching series, or experimenting with new recipes in the kitchen.
          </p>
          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="(detail, index) in personalDetails"
              :key="index"
              class="flex items-center space-x-2 hover-lift"
            >
              <component :is="detail.icon" class="h-5 w-5 text-purple-600" />
              <span class="text-gray-700"
                >{{ detail.label }}:
                <span class="font-medium">{{ detail.value }}</span></span
              >
            </div>
          </div>
        </div>
        <div class="order-1 md:order-2 relative">
          <div
            class="relative z-10 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 perspective-card-container"
          >
            <div class="perspective-card" ref="aboutImage">
              <img
                :src="'/images/personal/liki3.jpg'"
                alt="About me"
                class="w-full h-auto"
              />
            </div>
          </div>
          <div
            class="absolute top-10 -right-10 w-40 h-40 bg-purple-200 rounded-lg -z-10 animate-float"
          ></div>
          <div
            class="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-200 rounded-lg -z-10 animate-float animation-delay-500"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import {
  MapPin as MapPinIcon,
  Briefcase as BriefcaseIcon,
  Globe as GlobeIcon,
  Calendar as CalendarIcon,
} from 'lucide-vue-next';

import { useMousePosition } from '@/composables/useMousePosition';

const { registerElement } = useMousePosition();

const aboutImage = ref(null);

const personalDetails = [
  { icon: MapPinIcon, label: 'Location', value: 'Chester, UK' },
  { icon: BriefcaseIcon, label: 'Experience', value: '4 Years' },
  { icon: GlobeIcon, label: 'Languages', value: 'English, Nepali' },
  {
    icon: CalendarIcon,
    label: 'Availability',
    value: 'Full-time, Part-time',
  },
];

onMounted(() => {
  registerElement(aboutImage.value, 20);
});
</script>

<style scoped></style>
