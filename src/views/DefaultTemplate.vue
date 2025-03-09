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
    position: 'React Native Developer',
    company: 'Executives Place Limited',
    location: 'London, UK',
    period: 'Jan 2025 - Present',
    description:
      'Developed highly responsive mobile application. Collaborated with designers and backend developers to deliver high-quality application on time.',
    skills: ['React Native', 'JavaScript', 'SCSS', 'Apollo GraphQL', 'Expo'],
    logo: '/images/logos/hylark_logo.png',
  },
  {
    id: 2,
    position: 'Software Intern (Advanced Practice)',
    company: 'Ignis Technologies',
    location: 'Chester, UK',
    period: 'Oct 2023 - Dec 2023',
    description:
      'As a part of my advanced practice for my masters degree i joined Ignis Technologies. During my tenure I had supported integration of two software applications from core PHP to Vue.js, significantly enhancing front-end performance and user experience.',
    skills: [
      'Vue.js',
      'JavaScript',
      'MySQL',
      'Laravel',
      'Git',
      'Rest API',
      'AWS',
    ],
    logo: '/images/logos/ignis_logo.png',
  },
  {
    id: 3,
    position: 'Software Engineer',
    company: 'Cedargate Technologies',
    location: 'Kathmandu, Nepal',
    period: 'Sept 2020 - Aug 2022',
    description:
      'Migrated the critical UI components of our operational management software from Angular JS to React JS fixing UI crash issues along with an increased speed on components loading by 75%.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'MySQL', 'Java', 'AWS'],
    logo: '/images/logos/cedargate_logo.png',
  },
  {
    id: 4,
    position: 'React Native Developer',
    company: 'Codelio Solutions',
    location: 'Kathmandu, Nepal',
    period: 'Aug 2019 - Sep 2020',
    description:
      'Collaborated with product management to design, build and test systems covering the overall SDLC phases for the software system from scratch and successfully delivered 5 mobile app projects based on React Native during my tenure.',
    skills: ['React Native', 'HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel'],
    logo: '/images/logos/codelio_logo.png',
  },
  {
    id: 5,
    position: 'Lab Instructor',
    company: 'National College of Computer Studies',
    location: 'Kathmandu, Nepal',
    period: 'Dec 2018 - Sep 2019',
    description:
      'Supported all computer lab operations and evaluated student performances in the lab and on tests.',
    skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Java', 'MySQL', 'Git'],
    logo: '/images/logos/nccs_logo.png',
  },
  {
    id: 6,
    position: 'React Native Intern',
    company: 'Auxfin Development Nepal',
    location: 'Kathmandu, Nepal',
    period: 'Jun 2018 - Dec 2018',
    description:
      'Learnt how to work on developing mobile applications using React native framework and successfully migrated Laravel web-based application into a React native mobile application',
    skills: ['React Native', 'HTML', 'CSS', 'JavaScript', 'Laravel'],
    logo: '/images/logos/auxfin_logo.png',
  },
];
onMounted(() => {
  generateFloatingIcons(15);
});
</script>

<style scoped></style>
