import emoji from 'react-easy-emoji';

export const greetings = {
  name: 'Loh Jun Heng Clarence',
  title: "Hi all, I'm Clarence",
  description:
    "A VR/AR professional in the making while practising full stack development!",
  resumeLink: '',
};

export const openSource = {
  githubUserName: 'QuiteSour',
};

export const contact = {};

export const socialLinks = {
  github: 'https://github.com/QuiteSour',
  linkedin: 'https://www.linkedin.com/in/clarence-loh-649ba7212/',
};

export const skillsSection = {
  title: 'What I do',
  subTitle:
    'A VR/AR professional in the making while doing full stack',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Full stack web applications with vanilla JavaScript'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassname: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassname: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassname: 'logos:javascript',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassname: 'logos:npm-icon',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji('⚡ Building servers with SQL (PostgreSQL, MySQL, MicrosoftSQL)'),
      ],
      softwareSkills: [
        {
          skillName: 'AWS',
          fontAwesomeClassname: 'logos:aws',
        },
        {
          skillName: 'Heroku',
          fontAwesomeClassname: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassname: 'logos:postgresql',
        },
      ],
    },
    {
      title: 'VR AR',
      lottieAnimationFile: 'https://assets8.lottiefiles.com/packages/lf20_clujqcpl.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Creating Unity Projects in Both Augmented Reality and Virtual Reality.'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Unity',
          fontAwesomeClassname: 'logos:unity',
        },
      ],
    },
    {
      title: 'Modeling',
      lottieAnimationFile: 'https://assets3.lottiefiles.com/packages/lf20_epmgdhei.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Designing Models in Blender'
        ),        emoji(
          '⚡ Texturing Models in Adobe Substance Painter'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Blender',
          fontAwesomeClassname: 'logos:blender',
        },
        {
          skillName: 'Adobe Substance Painter',
          fontAwesomeClassname: 'cib:adobe',
        },
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '70', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '75',
  },
  {
    Stack: 'Programming',
    progressPercentage: '75',
  },
  {
    Stack: 'Unity', //Insert stack or technology you have experience in
    progressPercentage: '85', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Blender', //Insert stack or technology you have experience in
    progressPercentage: '65', //Insert relative proficiency in percentage
  },
];

export const educationInfo = [
  {
    schoolName: 'Singapore Polytechnic',
    subHeader: 'Pursuing Diploma in Information Technology',
    duration: 'June 2021 - Present Date',
    // desc: 'Participated in the research of XXX and published 3 papers.',
    descBullets: ['Expected to finish education by June 2024'],
  },  
  {
    schoolName: 'Unity Secondary',
    subHeader: 'Pursuing N Level Certificate',
    duration: 'January 2016 - November 2019',
  },
];

export const experience = [
  //   {
  //     role: 'API Engineer',
  //     company: 'Duseca Software',
  //     companylogo: '/img/icons/common/dusecaSoftware.jpg',
  //     date: 'Jan 2022 – Mar 2022',
  //     desc: 'I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.',
  //     // descBullets: [
  //     // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
  //     // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //     // ],
  //   },
  //   {
  //     role: 'Full Stack Developer',
  //     company: 'Bleed-AI',
  //     companylogo: '/img/icons/common/bleedAI.jpg',
  //     date: 'Sept 2021 - Oct 2021',
  //     desc: 'Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.',
  //   },
  //   {
  //     role: 'Backend Developer',
  //     company: 'Wapidu',
  //     companylogo: '/img/icons/common/wapidu.jpg',
  //     date: 'Sept 2021',
  //     desc: 'Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.',
  //   },
];

export const projects = [
  {
    name: 'ATBG (School Group Project)',
    desc: 'A Test Based WebGame designed with Javascript, PostgresSQL, CSS, HTML',
    link: 'https://ades-team1.netlify.app/',
    text: 'Demo',
  },
  {
    name: 'Gun Training in Augmented Reality (School Group Project)',
    desc: 'An augmented reality game made using Unity3D',
    link: 'https://drive.google.com/file/d/1u_3aaFlmqgg83E1yHwssoYR1bidlkgf6/view?usp=sharing',
    text: 'Download Link',
  },
  {
    name: 'Gun Training in Virtual Reality (School Group Project)',
    desc: 'An virtual reality game made using Unity3D',
    link: 'https://drive.google.com/file/d/1lCAPbpXSGparMSN4ZRuOdPCeZKlP9cT-/view?usp=sharing',
    text: 'Download Link',
  },
];

export const feedbacks = [
  //   {
  //     name: 'John Smith',
  //     feedback:
  //       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  //   },
  //   {
  //     name: 'John Smith',
  //     feedback:
  //       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  //   },
];
