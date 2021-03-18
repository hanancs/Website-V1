module.exports = {
  siteTitle: ' Ben Hanan Subendran | Software Engineer ',
  siteDescription:
    'Ben Hanan Subendran is a software developer specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.',
  siteKeywords:
    'Ben Hanan Subendran, Benhanan, Subendran, hanancs, software engineer, web developer, javascript, gospelport, unknown inc, mannar',
  siteUrl: 'https://hanancs.github.io/mypersonalwebsite/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  email: 'benhanan.subendran@gmail.com',
  github: 'https://github.com/HananCS',
  twitterHandle: '@jerome_hanan',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/HananCS',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/jerome_hanan/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/Jerome_Hanan',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/ben-hanan-subendran-2b691116a/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/ben-hanan-subendran',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
