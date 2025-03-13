import simpleIcons from '@/plugins/simple-icons';
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

// Projects with images and additional details
const projects = [
  {
    id: 1,
    title: 'E-commerce Website',
    description:
      'A fully responsive e-commerce platform with product filtering, cart functionality, and payment integration.',
    longDescription:
      'This comprehensive e-commerce solution provides businesses with a complete online shopping experience. Built with Vue.js and Node.js, it features a responsive design that works seamlessly across all devices.',
    image:
      'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixid=M3w3MjA0ODR8MHwxfHNlYXJjaHwxfHxFLWNvbW1lcmNlJTIwV2Vic2l0ZXxlbnwwfDB8fHwxNzQxODkyOTU4fDA&ixlib=rb-4.0.3&w=1200&h=800&fit=crop',
    images: [
      'E-commerce Homepage',
      'Product Listing',
      'Shopping Cart',
      'Checkout Process',
    ],
    technologies: ['Vue.js', 'Vuex', 'Node.js', 'MongoDB'],
    features: [
      'Responsive product catalog with filtering and sorting',
      'User authentication and profile management',
      'Shopping cart with persistent storage',
      'Secure checkout process with Stripe integration',
      'Order history and tracking',
      'Admin dashboard for inventory management',
    ],
    challenges:
      'One of the main challenges was implementing a real-time inventory system that could handle concurrent purchases. I solved this by implementing a reservation system during checkout and using WebSockets to notify users of low stock items.',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A drag-and-drop task management application with real-time updates and team collaboration features.',
    longDescription:
      'This task management application helps teams organize their work efficiently. It features a drag-and-drop interface for easy task prioritization and real-time updates to keep everyone in sync.',
    image:
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixid=M3w3MjA0ODR8MHwxfHNlYXJjaHwxfHxUYXNrJTIwTWFuYWdlbWVudCUyMEFwcHxlbnwwfDB8fHwxNzQxODkyOTU4fDA&ixlib=rb-4.0.3&w=1200&h=800&fit=crop',
    images: ['Task Board', 'Task Details', 'Team Dashboard', 'Mobile View'],
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    features: [
      'Intuitive drag-and-drop interface',
      'Real-time updates across all connected devices',
      'Team collaboration with comments and assignments',
      'Customizable boards and task categories',
      'Due date tracking with notifications',
      'Time tracking and reporting',
    ],
    challenges:
      'Implementing real-time synchronization across multiple devices while maintaining performance was challenging. I used Firebase Realtime Database with careful data structuring to ensure efficient updates and minimize bandwidth usage.',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description:
      'A weather application that displays current and forecasted weather data with beautiful visualizations.',
    longDescription:
      'This weather dashboard provides users with accurate weather information in a visually appealing format. It uses modern APIs to fetch real-time data and presents it through interactive charts and graphics.',
    image:
      'https://images.unsplash.com/photo-1558600053-2efe29d4c053?ixid=M3w3MjA0ODR8MHwxfHNlYXJjaHwxfHxXZWF0aGVyJTIwRGFzaGJvYXJkfGVufDB8MHx8fDE3NDE4OTI5NTh8MA&ixlib=rb-4.0.3&w=1200&h=800&fit=crop',
    images: [
      'Weather Dashboard',
      'Forecast View',
      'Weather Map',
      'Location Search',
    ],
    technologies: ['Vue.js', 'Chart.js', 'Weather API'],
    features: [
      'Current weather conditions with detailed metrics',
      '7-day forecast with hourly breakdowns',
      'Interactive weather maps with radar overlays',
      'Location search with autocomplete',
      'Saved locations for quick access',
      'Weather alerts and notifications',
    ],
    challenges:
      'Creating accurate and visually appealing data visualizations was a significant challenge. I used Chart.js with custom configurations to display complex weather data in an intuitive way that helps users understand patterns at a glance.',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 4,
    title: 'Recipe Finder',
    description:
      'An application that allows users to search for recipes based on ingredients they have at home.',
    longDescription:
      'This recipe finder helps users discover new meals based on ingredients they already have. It features a smart search algorithm that suggests recipes with maximum ingredient matches and minimum missing items.',
    image:
      'https://images.unsplash.com/photo-1556909211-36987daf7b4d?ixid=M3w3MjA0ODR8MHwxfHNlYXJjaHwxfHxSZWNpcGUlMjBGaW5kZXJ8ZW58MHwwfHx8MTc0MTg5Mjk1OHww&ixlib=rb-4.0.3&w=1200&h=800&fit=crop',
    images: [
      'Recipe Search',
      'Recipe Details',
      'Ingredient Selection',
      'Saved Recipes',
    ],
    technologies: ['Vue.js', 'Vuetify', 'Recipe API'],
    features: [
      'Ingredient-based recipe search',
      'Dietary preference and allergy filters',
      'Step-by-step cooking instructions',
      'Nutritional information and serving sizes',
      'Recipe saving and meal planning',
      'Shopping list generation for missing ingredients',
    ],
    challenges:
      'Developing an algorithm that could effectively match available ingredients to recipes while accounting for substitutions was complex. I implemented a scoring system that ranks recipes based on ingredient matches, popularity, and preparation time.',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 5,
    title: 'Fitness Tracker',
    description:
      'A fitness tracking application that helps users monitor their workouts and progress over time.',
    longDescription:
      'This comprehensive fitness tracker enables users to record workouts, track progress, and analyze performance trends. It provides personalized insights to help users achieve their fitness goals more effectively.',
    image:
      'https://images.unsplash.com/photo-1556909211-36987daf7b4d?ixid=M3w3MjA0ODR8MHwxfHNlYXJjaHwxfHxSZWNpcGUlMjBGaW5kZXJ8ZW58MHwwfHx8MTc0MTg5Mjk1OHww&ixlib=rb-4.0.3&w=1200&h=800&fit=crop',
    images: [
      'Workout Dashboard',
      'Progress Charts',
      'Exercise Library',
      'Goal Setting',
    ],
    technologies: ['Vue.js', 'Pinia', 'Chart.js'],
    features: [
      'Customizable workout plans and routines',
      'Exercise library with proper form instructions',
      'Progress tracking with visual charts',
      'Goal setting and achievement tracking',
      'Body metrics and measurement logging',
      'Performance analytics and trend identification',
    ],
    challenges:
      'Creating an intuitive interface for logging complex workout data quickly was challenging. I designed a streamlined input system with smart defaults and templates that makes recording workouts fast and accurate, even during active exercise sessions.',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description:
      'A personal portfolio website showcasing projects and skills (this website).',
    longDescription:
      'This interactive portfolio website showcases my work, skills, and experience in web development. It features modern design elements, smooth animations, and responsive layouts to provide an engaging user experience.',
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixid=M3w3MjA0ODR8MHwxfHNlYXJjaHwxfHxQb3J0Zm9saW8lMjBXZWJzaXRlfGVufDB8MHx8fDE3NDE4OTI5NTh8MA&ixlib=rb-4.0.3&w=1200&h=800&fit=crop',
    images: [
      'Portfolio Home',
      'Project Showcase',
      'Skills Section',
      'Contact Form',
    ],
    technologies: ['Vue.js', 'Tailwind CSS', 'Animation'],
    features: [
      'Interactive UI with mouse-following effects',
      'Animated tech stack icons',
      'Project showcase with detailed modal views',
      'Responsive design for all device sizes',
      'Dark/light mode toggle',
      'Contact form with validation',
    ],
    challenges:
      'Balancing visual appeal with performance was a key challenge. I implemented efficient animations using CSS transforms and opacity changes rather than more expensive properties, and used intersection observers to trigger animations only when elements are visible.',
    demoUrl: '#',
    codeUrl: '#',
  },
];

export { simpleIcons, socialLinks, workExperiences, projects };
