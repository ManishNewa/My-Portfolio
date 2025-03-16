import simpleIcons from '@/plugins/simple-icons';

// Phone as PhoneIcon,
import { Mail as EmailIcon, MapPin as MapPinIcon } from 'lucide-vue-next';
// Social Links
const socialLinks = [
  {
    name: 'GitHub',
    icon: simpleIcons.GitIcon,
    url: 'https://github.com/likita1234',
    color: '#181717',
  },
  {
    name: 'LinkedIn',
    icon: simpleIcons.LinkedInIcon,
    url: 'https://www.linkedin.com/in/likita-maharjan/',
    color: '#0077B5',
  },
  // {
  //   name: 'Twitter',
  //   icon: simpleIcons.XIcon,
  //   url: 'https://twitter.com',
  //   color: '#000000',
  // },
  {
    name: 'Instagram',
    icon: simpleIcons.InstagramIcon,
    url: 'https://www.instagram.com/leketa.m/',
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
    title: 'Aora',
    description:
      'Mobile application created using React Native for sharing videos.',
    longDescription:
      'Built with React Native for seamless user experiences, Animatable for captivating animations, and integrated with the dependable backend systems of Appwrite, this app showcases impressive design and functionality, enabling seamless sharing of videos within the community.',
    image: 'images/projects/aora.png',
    images: ['images/projects/aora.png'],
    technologies: [
      'React Native',
      'Expo',
      'Nativewind',
      'AppWrite',
      'Animatable',
    ],
    features: [
      'Onboarding Screen: Engaging graphics and clear instructions welcome users to the app.',
      'Robust Authentication & Authorization System: Secure email login safeguards user accounts.',
      'Dynamic Home Screen with Animated Flat List: Smoothly animated flat list showcases the latest videos for seamless browsing.',
      'Pull-to-Refresh Functionality: Users can refresh content with a simple pull gesture for up-to-date information.',
      'Full-Text Search Capability: Efficiently search through videos with real-time suggestions and instant results.',
      'Tab Navigation: Navigate between sections like Home, Search, and Profile with ease using tab navigation.',
      'Post Creation Screen for Uploading Media: Upload video and image posts directly from the app with integrated media selection.',
      'Profile Screen with Detailed Insights: View account details and activity, including uploaded videos and follower count, for a personalized experience.',
      'Responsiveness: Smooth performance and adaptability across various devices and screen sizes for a consistent user experience.',
      "Animations: Dynamic animations using the Animatable library to enhance user interaction and engagement throughout the app's UI.",
    ],
    demoUrl: [],
    codeUrl: [
      { title: 'Github Link', url: 'https://github.com/likita1234/aora' },
    ],
  },
  {
    id: 2,
    title: 'InternationalMind Wellbeing',
    description:
      '(Masters - Dissertation Project): Tailored to assess the mental health of Nepalese international students in the UK.',
    longDescription:
      'International-Mind Wellbeing is a specialized web application designed to support the mental health of Nepalese international students. The platform provides accessible assessment tools and resources to help students navigate the unique challenges of studying abroad. The application features two primary user roles: Administrators and International Students. Administrators have access to a centralized dashboard for tracking mental health trends, analyzing survey data, and managing assessment forms. Meanwhile, international students can complete mental health assessments anonymously or register to track their progress over time. Prioritizing usability and accessibility, this project aims to create a meaningful impact by empowering students to monitor their well-being and make informed decisions about their mental health, ultimately enhancing their academic and personal growth.',
    image: 'images/projects/international-mind-wellbeing/landing-page.png',
    images: [
      'images/projects/international-mind-wellbeing/main-dashboard.png',
      'images/projects/international-mind-wellbeing/comparative-dashboard.png',
      'images/projects/international-mind-wellbeing/relationship-analysis.png',
      'images/projects/international-mind-wellbeing/section-analysis.png',
      'images/projects/international-mind-wellbeing/keyword-analysis.png',
      'images/projects/international-mind-wellbeing/personal-assessment-dashboard.png',
    ],
    technologies: ['Vue.js', 'NodeJS', 'PrimeVue', 'JavaScript', 'HTML', 'CSS'],
    features: [
      'The admin user has access to a centralized dashboard upon logging into the web application. The dashboard provides an overview of key metrics and insights related to mental health trends among Nepalese international students.',
      "The system's admin user can view and analyze data collected from assessments and surveys, including accessing detailed reports, visualizations, and analytics tools to track mental health trends over time.",
      'Administrators can create new questionnaires, new sections, and new assessment forms depending on their needs.',
      'Admin can remove existing questionnaires if they are not used in any existing sections. Similarly, they can remove sections as well if they are not being used in any existing assessment forms.',
      'Admin can enable/disable assessment form polls according to the requirements.',
      'The international student user can complete mental health assessments and surveys provided within the web application. Users do not need to register to access this feature within the app, hence no personal information is collected in this case.',
      "International students who would like to use the app's other features will have the option to fill out a registration form and use the self-assessment feature within the app.",
      'Registered users can also track their progress over time, including changes in mental health indicators. This allows students to monitor their well-being and assess the effectiveness of their self-care practices.',
    ],
    challenges: [
      'The study only included a limited sample size of respondents. This limited sample size may not accurately represent the entire population and reduces the generalization of the findings.',
      "The study area was confined to Nepalese students studying mainly in the UK, which may not provide a comprehensive understanding of Nepalese students' mental health conditions when studying abroad.",
      'Biases can be introduced when relying solely on self-reported data for mental health, as participants may underreport or overreport their experiences.',
      'The software won’t offer expert mental health diagnosis and treatment, but it could be used as a supplementary tool.',
      'There is an initial delay on the developed application when the frontend requests data from/to the backend API after 15 minutes of inactivity. This is a limitation on the free version of Render.',
    ],
    demoUrl: [
      {
        title: 'Front Demo Link',
        url: 'https://mental-health-front-git-master-likita1234s-projects.vercel.app/home',
      },
      {
        title: 'API Demo Link',
        url: 'https://mental-health-back-0gmp.onrender.com/',
      },
    ],
    codeUrl: [
      {
        title: 'Frontend Code Link',
        url: 'https://github.com/likita1234/mental-health-front',
      },
      {
        title: 'Backtend Code Link',
        url: 'https://github.com/likita1234/mental-health-back',
      },
    ],
  },
  {
    id: 3,
    title: 'eDonation',
    description:
      'eDonation is a mobile app designed to streamline the donation process by connecting donors with social organizations in need.',
    longDescription:
      "In today's digital era, where most people own smartphones, mobile apps have become essential tools for simplifying everyday tasks. eDonation is one such app, designed to bridge the gap between donors and social organizations, making the donation process easier and more efficient. This app enables individuals to donate clothes, books, stationery, and food effortlessly, ensuring that those in need receive timely assistance. eDonation acts as a mediator, allowing donors to search for social organizations that are actively seeking contributions. Organizations can specify their needs, making it easier for donors to provide meaningful assistance. With just an internet connection, users can quickly find verified organizations, ensuring their donations reach the right hands at the right time. The app’s user-friendly interface ensures a seamless experience, guiding users through each step of the donation process with clear navigation and intuitive functionality. Whether you’re looking to give or receive, eDonation makes supporting charitable causes simple, accessible, and hassle-free.",
    image: 'images/projects/edonation/main.jpg',
    images: [
      'images/projects/edonation/5k.png',
      'images/projects/edonation/Screenshot 3b.png',
      'images/projects/edonation/Screenshot 4b2.png',
      'images/projects/edonation/Screenshot 4b3.png',
      'images/projects/edonation/Screenshot 5a.png',
      'images/projects/edonation/Screenshot 5b.png',
      'images/projects/edonation/Screenshot 5c.png',
      'images/projects/edonation/Screenshot 5d.png',
      'images/projects/edonation/Screenshot 5e.png',
      'images/projects/edonation/Screenshot 5h.png',
      'images/projects/edonation/Screenshot 5j.png',
      'images/projects/edonation/Screenshot 5p.png',
      'images/projects/edonation/Screenshot 23g.png',
    ],
    technologies: [
      'Java',
      'XML',
      'SQLite',
      'app.diagrams.net',
      'Andriod Studio',
    ],
    features: [
      'Admin can be registered.',
      'Registered admin can log in and approve or decline requests for organization registration.',
      'Organizations can register. Once the organization fills out the registration form, it is verified by the admin based on their registration number.',
      'If the admin declines an organization’s registration, its data will be permanently removed from the database.',
      'If the admin approves an organization’s registration, its details will be visible under the donor panel dashboard, and the organization can also log in.',
      'Donors can search for an organization based on what they currently want to donate.',
      'If the donor’s current choice to donate and the organization’s current needs match, that organization is displayed on the dashboard.',
      'Donors can also view registered organization details and contact them.',
      'Registered organizations can view the list and details of other registered organizations.',
      'Registered organizations can also edit their profile except for email and password.',
      'Organizations can also add their donor details and view their list.',
    ],
    challenges: [
      'Donor’s profile is not maintained.',
      'Fund donations are not mentioned in the system since dealing with money is complicated.',
      'Validation of already registered users (Admin/Organization/Donor) is not done. This means duplication of user data is not handled.',
      'Forget password functionality is not added.',
    ],
    demoUrl: [],
    codeUrl: [],
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description:
      'A personal portfolio website showcasing projects and skills (this website).',
    longDescription:
      'This interactive portfolio website showcases my work, skills, and experience in web development. It features modern design elements, smooth animations, and responsive layouts to provide an engaging user experience.',
    image: 'images/projects/portfolio.png',
    images: ['images/projects/portfolio.png'],
    technologies: ['Vue.js', 'Tailwind CSS', 'Lottie Animation'],
    features: [
      'Interactive UI with mouse-following effects',
      'Animated tech stack icons',
      'Project showcase with detailed modal views',
      'Responsive design for all device sizes',
      'Dark/light mode toggle',
      'Contact form with validation',
    ],
    challenges: [
      'Balancing visual appeal with performance was a key challenge. I implemented efficient animations using CSS transforms and opacity changes rather than more expensive properties, and used intersection observers to trigger animations only when elements are visible.',
    ],
    demoUrl: [],
    codeUrl: [],
  },

  {
    id: 5,
    title: 'Task Management App',
    description:
      'A drag-and-drop task management application with real-time updates and team collaboration features.',
    longDescription:
      'This task management application helps teams organize their work efficiently. It features a drag-and-drop interface for easy task prioritization and real-time updates to keep everyone in sync.',
    image:
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixid=M3w3MjA0ODR8MHwxfHNlYXJjaHwxfHxUYXNrJTIwTWFuYWdlbWVudCUyMEFwcHxlbnwwfDB8fHwxNzQxODkyOTU4fDA&ixlib=rb-4.0.3&w=1200&h=800&fit=crop',
    images: [],
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
    demoUrl: [],
    codeUrl: [],
  },
  {
    id: 6,
    title: 'Weather Dashboard',
    description:
      'A weather application that displays current and forecasted weather data with beautiful visualizations.',
    longDescription:
      'This weather dashboard provides users with accurate weather information in a visually appealing format. It uses modern APIs to fetch real-time data and presents it through interactive charts and graphics.',
    image:
      'https://images.unsplash.com/photo-1558600053-2efe29d4c053?ixid=M3w3MjA0ODR8MHwxfHNlYXJjaHwxfHxXZWF0aGVyJTIwRGFzaGJvYXJkfGVufDB8MHx8fDE3NDE4OTI5NTh8MA&ixlib=rb-4.0.3&w=1200&h=800&fit=crop',
    images: [],
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
    demoUrl: [],
    codeUrl: [],
  },
  {
    id: 7,
    title: 'Recipe Finder',
    description:
      'An application that allows users to search for recipes based on ingredients they have at home.',
    longDescription:
      'This recipe finder helps users discover new meals based on ingredients they already have. It features a smart search algorithm that suggests recipes with maximum ingredient matches and minimum missing items.',
    image:
      'https://images.unsplash.com/photo-1556909211-36987daf7b4d?ixid=M3w3MjA0ODR8MHwxfHNlYXJjaHwxfHxSZWNpcGUlMjBGaW5kZXJ8ZW58MHwwfHx8MTc0MTg5Mjk1OHww&ixlib=rb-4.0.3&w=1200&h=800&fit=crop',
    images: [],
    technologies: ['Vue.js', 'Vuetify', 'Recipe API'],
    features: [
      'Ingredient-based recipe search',
      'Dietary preference and allergy filters',
      'Step-by-step cooking instructions',
      'Nutritional information and serving sizes',
      'Recipe saving and meal planning',
      'Shopping list generation for missing ingredients',
    ],
    challenges: [
      'Developing an algorithm that could effectively match available ingredients to recipes while accounting for substitutions was complex. I implemented a scoring system that ranks recipes based on ingredient matches, popularity, and preparation time.',
    ],
    demoUrl: [],
    codeUrl: [],
  },
  {
    id: 8,
    title: 'Fitness Tracker',
    description:
      'A fitness tracking application that helps users monitor their workouts and progress over time.',
    longDescription:
      'This comprehensive fitness tracker enables users to record workouts, track progress, and analyze performance trends. It provides personalized insights to help users achieve their fitness goals more effectively.',
    image:
      'https://images.unsplash.com/photo-1556909211-36987daf7b4d?ixid=M3w3MjA0ODR8MHwxfHNlYXJjaHwxfHxSZWNpcGUlMjBGaW5kZXJ8ZW58MHwwfHx8MTc0MTg5Mjk1OHww&ixlib=rb-4.0.3&w=1200&h=800&fit=crop',
    images: [],
    technologies: ['Vue.js', 'Pinia', 'Chart.js'],
    features: [
      'Customizable workout plans and routines',
      'Exercise library with proper form instructions',
      'Progress tracking with visual charts',
      'Goal setting and achievement tracking',
      'Body metrics and measurement logging',
      'Performance analytics and trend identification',
    ],
    challenges: [
      'Creating an intuitive interface for logging complex workout data quickly was challenging. I designed a streamlined input system with smart defaults and templates that makes recording workouts fast and accurate, even during active exercise sessions.',
    ],
    demoUrl: [],
    codeUrl: [],
  },
  {
    id: 9,
    title: 'E-commerce Website',
    description:
      'A fully responsive e-commerce platform with product filtering, cart functionality, and payment integration.',
    longDescription:
      'This comprehensive e-commerce solution provides businesses with a complete online shopping experience. Built with Vue.js and Node.js, it features a responsive design that works seamlessly across all devices.',
    image:
      'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixid=M3w3MjA0ODR8MHwxfHNlYXJjaHwxfHxFLWNvbW1lcmNlJTIwV2Vic2l0ZXxlbnwwfDB8fHwxNzQxODkyOTU4fDA&ixlib=rb-4.0.3&w=1200&h=800&fit=crop',
    images: [],
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
    demoUrl: [],
    codeUrl: [],
  },
];

// Contact Information
const contactInfo = [
  // { icon: PhoneIcon, label: 'Phone', value: '+44 7818721334' },
  {
    icon: EmailIcon,
    label: 'Email',
    value: 'maharjanlikitauk@gmail.com',
  },
  {
    icon: MapPinIcon,
    label: 'Address',
    value: 'Chester, UK',
  },
];

export { simpleIcons, socialLinks, workExperiences, projects, contactInfo };
