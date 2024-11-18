export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#About',
  },
  {
    id: 3,
    name: 'Education',
    href: '#Exducation',
  },
  {
    id: 4,
    name: 'A_ELBOUZARI',
    href: '#Hero',
  },
  {
    id: 5,
    name: 'Skils',
    href: '#Skils',
  },
  {
    id: 6,
    name: 'Project',
    href: '#Project',
  },
  {
    id: 7,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'SmartIrrig ',
    desc: 'Smart Irrigation is an IoT-based system designed to optimize agricultural water use and monitor soil conditions in real-time. The project tracks soil moisture levels, water usage, and automates irrigation to ensure efficient water management.',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'arduino.h',

      },
      {
        id: 2,
        name: 'esp32',

      },
      {
        id: 3,
        name: 'reactNative',

      },
      {
        id: 4,
        name: 'firebase',

      },
      {
        id: 5,
        name: 'Javascript',
      },
      {
        id: 6,
        name: 'R3F',
      },

    ],
  },
  {
    title: 'Portfolio',
    desc: 'A modern and interactive portfolio designed to showcase my skills and projects. Built with React, React Three Fiber (R3F), and Vite for a fast and seamless user experience. The design incorporates animations using Framer Motion, while 3D elements were created with Blender, bringing creativity and interactivity to life. This portfolio reflects my technical expertise and attention to detail.',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/portfoliologo.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React',

      },
      {
        id: 2,
        name: 'TailwindCSS',

      },
      {
        id: 3,
        name: 'javascript',

      },
      {
        id: 4,
        name: 'Framer Motion',

      },
      {
        id: 5,
        name: 'blender',
      },
      {
        id: 6,
        name: 'R3F',
      },

    ],
  },

];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const Experiences = [
  {
    id: 1,
    name: 'internship in an agatronic company    ',
    duration: '8-2023 => 9-2023    ',
    title: "Selling electronic components , mechanical manudacture.    ",
    icon: '/assets/agatronic.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'internship in an agri4.0 company    ',
    duration: '1-2024 => 7-2024    ',
    title: "IOT Solution    ",
    icon: '/assets/logoagri.svg',
    animation: 'victory',
  },


];
export const Educations = [
  {
    id: 1,
    name: 'Study of electrical engineering , elecronic and robotics , automation systems',
    duration: '2023-present',
    place: "ISTA AIT MELLOUL",
    icon: '/assets/ofppt.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Diplom Industrial Maintenance Electricity \"Technician\" ',
    duration: '2021-2023',
    place: "ISTA ASSAKA TIKIOUINE",
    icon: '/assets/ofppt.png',
    animation: 'victory',
  },

  {
    id: 4,
    name: 'Baccalaureate physics and chemistry sciences',
    duration: '2019-2020    ',
    place: "Lycee AL-AMAL TIKIOUINE",
    icon: '/assets/grid6.png',
    animation: 'victory',
  },

];