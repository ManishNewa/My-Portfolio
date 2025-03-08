<template>
  <div class="font-sans relative overflow-x-hidden">
    <MouseBackdrop />
    <NavigationBar />
    <TechIcons :floating-icons="floatingIcons" />

    <HeroSection :social-links="socialLinks" />

    <AboutSection />

    <ExperienceSection :experiences="workExperiences" />
  </div>
</template>
<script setup>
import NavigationBar from '@/components/default/layouts/NavigationBar.vue';
import TechIcons from '@/components/common/icons/TechIcons.vue';
import HeroSection from '@/components/default/sections/HeroSection.vue';
import AboutSection from '@/components/default/sections/AboutSection.vue';
import ExperienceSection from '@/components/default/sections/ExperienceSection.vue';

import { markRaw, onMounted, shallowRef } from 'vue';
import simpleIcons from '@/plugins/simple-icons';
import { colors, generateRandomValue } from '@/utils/helpers';

const floatingIcons = shallowRef([]);

// Generate Icons in form of objects with colors
const generateFloatingIcons = (iconCounts) => {
  const iconKeys = Object.keys(simpleIcons);
  const newIcons = Array.from({ length: iconCounts }, (_, index) => {
    const randomIconKey = iconKeys[index];
    return markRaw({
      component: markRaw(simpleIcons[randomIconKey]),
      color: generateRandomValue(colors),
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 15 + Math.random() * 30,
      delay: Math.random() * 5,
      opacity: 0.1 + Math.random() * 0.3,
      scale: 0.5 + Math.random() * 1.5,
    });
  });
  floatingIcons.value = newIcons;
};

// Social Links
const socialLinks = [
  {
    name: 'GitHub',
    icon: simpleIcons.GitIcon,
    url: 'https://github.com',
    color: '#181717',
  },
  {
    name: 'LinkedIn',
    icon: simpleIcons.LinkedInIcon,
    url: 'https://linkedin.com',
    color: '#0077B5',
  },
  {
    name: 'Twitter',
    icon: simpleIcons.XIcon,
    url: 'https://twitter.com',
    color: '#000000',
  },
  {
    name: 'Instagram',
    icon: simpleIcons.InstagramIcon,
    url: 'https://instagram.com',
    color: '#E4405F',
  },
];

// Work Experience
const workExperiences = [
  {
    id: 1,
    position: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    period: '2021 - Present',
    description:
      "Led the development of the company's flagship SaaS product, improving performance by 40%. Mentored junior developers and implemented modern CI/CD practices.",
    skills: ['Vue.js', 'TypeScript', 'GraphQL', 'Jest'],
    logo: '/images/logos/hylark_logo.png',
  },
  {
    id: 2,
    position: 'Frontend Developer',
    company: 'WebSolutions Ltd.',
    period: '2018 - 2021',
    description:
      'Developed responsive web applications for various clients. Collaborated with designers and backend developers to deliver high-quality products on time.',
    skills: ['React', 'JavaScript', 'SCSS', 'RESTful APIs'],
    logo: '/images/logos/cedargate_logo.png',
  },
  {
    id: 3,
    position: 'UI/UX Designer & Developer',
    company: 'CreativeMinds Agency',
    period: '2016 - 2018',
    description:
      'Created wireframes, prototypes, and implemented frontend designs. Worked directly with clients to gather requirements and iterate on designs.',
    skills: ['HTML/CSS', 'JavaScript', 'Figma', 'Adobe XD'],
    logo: '/images/logos/ignis_logo.png',
  },
  {
    id: 4,
    position: 'Junior Web Developer',
    company: 'StartUp Innovations',
    period: '2015 - 2016',
    description:
      'Assisted in the development of web applications. Learned modern web development practices and collaborated in an agile team environment.',
    skills: ['HTML/CSS', 'jQuery', 'Bootstrap', 'PHP'],
    logo: '/images/logos/codelio_logo.png',
  },
];
onMounted(() => {
  generateFloatingIcons(15);
});
</script>

<style scoped></style>
