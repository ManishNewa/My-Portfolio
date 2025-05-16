<template>
  <section id="about" class="py-20 px-4 bg-white/90">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="order-2 md:order-1">
          <h3 class="text-2xl font-bold mb-4">Who am I?</h3>
          <p class="text-gray-600 mb-6 leading-relaxed">
            I am a results-driven software developer with over 4 years of
            hands-on experience in building and maintaining mobile and web
            applications, specializing in React JS and React Native. With a
            strong foundation in PHP, JavaScript, Java, and AWS services, I’ve
            contributed across all stages of the software development life
            cycle—ranging from requirement analysis and system design to
            implementation and testing—using both Agile and Waterfall
            methodologies.
          </p>
          <p class="text-gray-600 mb-6 leading-relaxed">
            I hold an MSc in Computer Science with Advanced Practice
            (Distinction) from Wrexham University, where I also explored the
            intersection of tech and mental health in my dissertation project.
            Let’s connect if you’re looking for someone who thrives on solving
            complex problems and building tech that makes a difference
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
            class="relative z-10 overflow-hidden transform hover:scale-105 transition-transform duration-300 perspective-card-container"
          >
            <div class="perspective-card flex justify-center" ref="aboutImage">
              <div class="w-60 h-60 md:w-90 md:h-90">
                <LottieAnimation
                  :animation-data="ladyWavingAnimation"
                  :speed="1"
                  size="100%"
                  class="hover:scale-110 transition-transform"
                />
              </div>
              <!-- <img
                :src="'/images/personal/liki3.jpg'"
                alt="About me"
                class="w-full h-auto"
              /> -->
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
import { ladyWavingAnimation } from '@/utils/animation-json-helpers.js';

const { registerElement } = useMousePosition();

const aboutImage = ref(null);

const personalDetails = [
  { icon: MapPinIcon, label: 'Location', value: 'Chester, UK' },
  { icon: BriefcaseIcon, label: 'Experience', value: 'Over 4 Years' },
  { icon: GlobeIcon, label: 'Languages', value: 'English, Nepali' },
  {
    icon: CalendarIcon,
    label: 'Availability',
    value: 'Full-time, Part-time',
  },
];

onMounted(() => {
  registerElement(aboutImage, 20);
});
</script>

<style scoped></style>
