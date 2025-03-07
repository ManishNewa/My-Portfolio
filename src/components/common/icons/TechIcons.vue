<template>
    <div class="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        <div v-for="(icon, index) in floatingIcons" :key="index" class="absolute floating-icon" :style="{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            animationDuration: `${icon.duration}s`,
            animationDelay: `${icon.delay}s`,
            opacity: icon.opacity,
            transform: `scale(${icon.scale})`,
            filter: 'blur(0.5px)'
        }">
            <component :is="icon.component" class="h-10 w-10 md:h-16 md:w-16" :style="{ color: icon.color }" />
        </div>
    </div>
</template>

<script setup>

import {
    Html5Icon,
    Css3Icon,
    JavaScriptIcon,
    VueDotjsIcon,
    LaravelIcon,
    PhpIcon,
    BootstrapIcon,
    TailwindCssIcon,
    JsonIcon,
    MySqlIcon,
    MongoDbIcon,
    TypeScriptIcon,
    GitIcon,
    JQueryIcon,
    ApolloGraphQlIcon,
} from 'vue3-simple-icons';


const iconComponents = {
    html: {
        component: Html5Icon,
        color: '#e34c26',
    },
    css: {
        component: Css3Icon,
        color: '#264de4',
    },
    javascript: {
        component: JavaScriptIcon,
        color: '#f7df1e',
    },
    vuejs: {
        component: VueDotjsIcon,
        color: '#42b883',
    },
    laravel: {
        component: LaravelIcon,
        color: '#ff2d20',
    },
    php: {
        component: PhpIcon,
        color: '#777bb4',
    },
    bootstrap: {
        component: BootstrapIcon,
        color: '#7952b3',
    },
    tailwindcss: {
        component: TailwindCssIcon,
        color: '#38b2ac',
    },
    json: {
        component: JsonIcon,
        color: '#000000',
    },
    mysql: {
        component: MySqlIcon,
        color: '#4479a1',
    },
    mongodb: {
        component: MongoDbIcon,
        color: '#47a248',
    },
    typescript: {
        component: TypeScriptIcon,
        color: '#3178c6',
    },
    git: {
        component: GitIcon,
        color: '#f05032',
    },
    jquery: {
        component: JQueryIcon,
        color: '#0769ad',
    },
    graphql: {
        component: ApolloGraphQlIcon,
        color: '#e10098',
    },
}



// Generate random floating icons
const floatingIcons = [];
const iconTypes = Object.keys(iconComponents);

for (let i = 0; i < 15; i++) {
    const iconType = iconTypes[Math.floor(Math.random() * iconTypes.length)];
    const icon = iconComponents[iconType];

    floatingIcons.push({
        ...icon,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: 15 + Math.random() * 30,
        delay: Math.random() * 5,
        opacity: 0.1 + Math.random() * 0.3,
        scale: 0.5 + Math.random() * 1.5
    });
}

</script>

<style scoped>
.floating-icon {
    animation: float 20s ease-in-out infinite alternate;
}

@keyframes float {
    0% {
        transform: translate(0, 0) rotate(0deg) scale(1);
    }

    25% {
        transform: translate(20px, 15px) rotate(5deg) scale(1.05);
    }

    50% {
        transform: translate(-15px, 25px) rotate(-5deg) scale(0.95);
    }

    75% {
        transform: translate(15px, -20px) rotate(10deg) scale(1.1);
    }

    100% {
        transform: translate(-20px, -15px) rotate(-10deg) scale(0.9);
    }
}
</style>