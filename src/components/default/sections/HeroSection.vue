<template>
  <section
    id="home"
    class="min-h-screen flex items-center justify-center px-4 pt-20 relative"
  >
    <div class="max-w-6xl mx-auto text-center relative z-20">
      <div class="mb-6 inline-block relative perspective-card-container">
        <div class="perspective-card" ref="perspectiveCard">
          <!-- absolute left-4 top-1/3 z-10 -->
          <div class="w-32 h-32 md:w-60 md:h-60">
            <LottieAnimation
              :animation-data="girlBlinkingAnimation"
              :speed="1"
              size="100%"
              class="hover:scale-110 transition-transform"
            />
          </div>
          <!-- <div
            class="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto"
          >
            <img
              :src="'/images/personal/Likita1.png'"
              alt="Profile"
              class="w-full h-full object-cover"
            />
          </div>-->
        </div>
        <div
          class="absolute -bottom-2 -right-2 bg-green-500 w-5 h-5 rounded-full border-2 border-white"
        ></div>
      </div>
      <h1 class="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500"
        >
          Likita Maharjan
        </span>
      </h1>
      <h2
        class="text-xl md:text-2xl text-gray-600 mb-8 animate-fadeIn animation-delay-300"
      >
        <span ref="typingText" class="typing-text whitespace-nowrap"></span>
      </h2>
      <div
        class="flex justify-center space-x-4 mb-12 animate-fadeIn animation-delay-600"
      >
        <!-- <a
          href="#"
          class="interactive-button bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2"
        >
          <download-icon class="h-5 w-5" />
          <span>Download CV</span>
        </a> -->
        <a
          href="#contact"
          class="interactive-button bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2"
        >
          <mail-icon class="h-5 w-5" />
          <span>Contact Me</span>
        </a>
      </div>
      <div
        class="flex justify-center space-x-6 animate-fadeIn animation-delay-900"
      >
        <a
          v-for="social in socialLinks"
          :key="social.name"
          :href="social.url"
          class="text-gray-600 transition-colors duration-300 transform hover:scale-110"
          :style="{ color: social.color }"
        >
          <component :is="social.icon" class="h-6 w-6" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
// Download as DownloadIcon,
import { Mail as MailIcon } from 'lucide-vue-next';

import { useMousePosition } from '@/composables/useMousePosition';
import { girlBlinkingAnimation } from '@/utils/animation-json-helpers.js';

const { registerElement } = useMousePosition();

const perspectiveCard = ref(null);

defineProps({
  socialLinks: {
    type: Array,
    required: true,
  },
});

const professionalTitles = ref([
  'React Native Developer',
  'Frontend Developer',
  'Web Application Developer',
]);
const typingText = ref(null);

onMounted(() => {
  registerElement(perspectiveCard, 20);
  setTimeout(type, 500);
});

let currentIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 50;
let newTextDelay = 1500;

function type() {
  const currentTitle = professionalTitles.value[currentIndex];
  const element = typingText.value;

  if (!element) return;

  if (!isDeleting) {
    element.textContent = currentTitle.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentTitle.length) {
      isDeleting = true;
      setTimeout(type, newTextDelay);
    } else {
      setTimeout(type, typingDelay);
    }
  } else {
    element.textContent = currentTitle.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % professionalTitles.value.length;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(type, erasingDelay);
    }
  }
}
</script>

<style scoped>
.typing-text {
  border-right: 3px solid;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  animation:
    typing 3.5s steps(30, end),
    blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }

  50% {
    border-color: black;
  }
}
</style>
