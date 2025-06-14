/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Paul",
  logo_name: "./dev.sql",
  nickname: "mhizterpaul / picleric",
  full_name: "Paul Irem",
  subTitle: "Backend Developer, Open Source Enthusiast 🔥. Always learning.",
  resumeLink:
    "",
  mail: "mailto:hkanani191@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/mhizterpaul",
  linkedin: "https://www.linkedin.com/in/mhizterpaul",
  gmail: "dev.paulirem@gmail.com",
  gitlab: "",
  // facebook: "https://www.facebook.com/harikrishan.kanani/",
  twitter: "https://x.com/mhizterpaul",
  instagram: "",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Developing mobile applications using Android Studio & Kotlin Multiplatform ",
        "⚡ Creating application backend in Node, Express & Flask",
        "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "ElectronJS",
          fontAwesomeClassname: "simple-icons:electron",
          style: {
            color: "#47848F",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "devicon-plain:java-wordmark",
          style: {
            color: "#f89820",
          },
        },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
        // {
        //   skillName: "Dart",
        //   fontAwesomeClassname: "simple-icons:dart",
        //   style: {
        //     color: "#29B0EE",
        //   },
        // },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Ahmadu Bello University",
      subtitle: "Bachelor in Electrical Engineering",
      logo_path: "ssec.png",
      alt_name: "abu",
      duration: "2020 - 2025",
      descriptions: [
        "⚡ I have studied core subjects like Machine Learning, Computer Vision, Advanced Web Development.",
        "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://abu.edu.ng/",
    },
  ],
};

const certifications = {
  certifications: [

    {
      title: "Postman Student Expert",
      subtitle: "Postman",
      logo_path: "postman.png",
      certificate_link:
        "https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g",
      alt_name: "Postman",
      // color_code: "#f36c3d",
      color_code: "#fffbf3",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteers",
  description:
    "As a Node.js Backend Developer, I have worked with real projects for over two years.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Software Engineer",
          company: "Hotels.ng",
          company_url: "https://hotels.ng/",
          logo_path: "hotelsng.png",
          duration: "2024",
          location: "Remote, Nigeria",
          description: `Contributed to various internal and customer-facing products using the MERN stack (MongoDB, Express.js, React.js, Node.js). Developed reusable components and RESTful APIs to enhance product scalability and maintainability. Collaborated with cross-functional teams to improve system performance, implement responsive UI designs, and optimize backend logic for speed and reliability. Led bug-fixing initiatives and feature rollouts that improved user engagement and developer workflow.`,
          color: "#1E90FF",
        }

        // {
        //   title: "Node.js Backend Developer",
        //   company: "Valora Infotech",
        //   company_url: "http://valorainfotech.com/",
        //   logo_path: "valora.jpg",
        //   duration: "Oct 2020 - Dec 2022",
        //   location: "Surat, Gujarat",
        //   description: `Train, oversee, and mentor young software development employees. I created and managed the admin panel backend and a gambling application as a Node.js backend developer. I obtained knowledge in Web Socket, Payment Gateway Integration, and gaming legislation, while growing my industry experience and investigating new technologies.
        //   Focus on change request functions in close collaboration with the project manager and team leads.
        //   Developed new and maintained existing applications.
        //   Increased productivity and problem-solving technics by 20%.
        //   We primarily used PERN and MERN Stack. 80% of my work was doing backend development and the remaining 20% was DevOps-related tasks.
        //   `,
        //   // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
        //   color: "#0071C5",
        // },
        // {
        //   title: "Node.js Backend Developer (Intern)",
        //   company: "Valora Infotech",
        //   company_url: "http://valorainfotech.com/",
        //   logo_path: "valora.jpg",
        //   duration: "Oct 2020 - Mar 2021",
        //   location: "Surat, Gujarat",
        //   description: `Focus on change request functions in close collaboration with the project manager and team leads.
        //   Developed new and maintained existing applications.
        //   Increased productivity and problem-solving technics by 20%.
        //   We primarily used PERN and MERN Stack. 80% of my work was doing backend development and the remaining 20% was DevOps-related tasks.
        //   `,
        //   // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
        //   color: "#0071C5",
        // },
      ],
    },
    {
      title: "Volunteers",
      experiences: [

        {
          title: "Postman Student Expert",
          company: "Postman",
          company_url: "https://www.postman.com/",
          logo_path: "postman.png",
          duration: "Feb 2020 - Present",
          location: "Work From Home",
          description:
            "Google Developer Group Surat Student Volunteer and Member.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "hari-crop.png",
    description:
      `Feel free to reach out through any of the platforms listed below — I typically respond within minutes.
      ✨ Get 50% off your first service request. 
      I look forward to working with you.`,
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/mhizterpaul",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: 0,
      name: "chat-app",
      url: "https://github.com/mhizterpaul/chat-app",
      description: "A real-time chat application built with modern web technologies.",
      languages: [
        { "name": "NodeJS", "iconifyClass": "logos-nodejs" },
        { "name": "ReactJS", "iconifyClass": "logos-react" },
        { "name": "Socket.io", "iconifyClass": "logos-socket-io" }
      ],
      links: [
        { "name": "Github", "url": "https://github.com/mhizterpaul/chat-app", "iconifyClass": "ri:github-fill" },
        {
          "name": "Live Demo", "url": "https://chat-app-one-rust.vercel.app", "iconifyClass": "mdi:web"
        }
      ]
    },
    {
      id: 1,
      name: "restaurant-review-app",
      url: "https://github.com/mhizterpaul/restaurant-review-app",
      description: "A platform to review and discover restaurants, with user authentication and rating features.",
      languages: [
        { "name": "NodeJS", "iconifyClass": "logos-nodejs" },
        { "name": "ReactJS", "iconifyClass": "logos-react" },
        { "name": "MongoDB", "iconifyClass": "logos-mongodb-icon" }
      ],
      links: [
        { "name": "Github", "url": "https://github.com/mhizterpaul/restaurant-review-app", "iconifyClass": "ri:github-fill" },
        { "name": "Live Demo", "url": "https://mhizterpaul.github.io/restaurant-review-app/", "iconifyClass": "mdi:web" }
      ]
    },
    {
      id: 2,
      name: "bincom-citizenreport",
      url: "https://github.com/mhizterpaul/bincom-citizenreport",
      description: "Citizen Report is a platform for reporting issues in your community. Users can submit reports, track statuses, and view updates.",
      languages: [
        { "name": "TypeScript", "iconifyClass": "skill-icons:typescript" },
        { "name": "ReactJS", "iconifyClass": "logos-react" }
      ],
      links: [
        { "name": "Github", "url": "https://github.com/mhizterpaul/bincom-citizenreport", "iconifyClass": "ri:github-fill" },
        { "name": "Live Demo", "url": "https://bincom-citizenreport.vercel.app/", "iconifyClass": "mdi:web" }
      ]
    },
    {
      id: 3,
      name: "spotify-clone",
      url: "https://github.com/mhizterpaul/SpotifyUI",
      description: "spotify clone",
      languages: [
        { "name": "JavaScript", "iconifyClass": "logos-javascript" },
        { "name": "CSS3", "iconifyClass": "logos-css-3" }
      ],
      links: [
        { "name": "Github", "url": "https://github.com/mhizterpaul/reveal-categories", "iconifyClass": "ri:github-fill" },
        { "name": "Live Demo", "url": "https://spotify-ui-one.vercel.app/", "iconifyClass": "mdi:web" }
      ]
    },
    {
      id: 4,
      name: "e-commerce_clothing_classifier",
      url: "https://github.com/mhizterpaul/e-commerce_clothing_classifier",
      description: "Multiclass image classification for e-commerce clothing using PyTorch CNN. Detects product types and attributes from images.",
      languages: [
        { "name": "Python", "iconifyClass": "logos-python" },
        { "name": "Jupyter Notebook", "iconifyClass": "vscode-icons:file-type-light-ipynb" }
      ],
      links: [
        { "name": "Github", "url": "https://github.com/mhizterpaul/e-commerce_clothing_classifier", "iconifyClass": "ri:github-fill" }
      ]
    },
    {
      id: 5,
      name: "food-image-classification",
      url: "https://github.com/mhizterpaul/food-image-classification",
      description: "Classify food images using machine learning models. finetuning google/vit-base-patch16-224-in21k",
      languages: [
        { "name": "Python", "iconifyClass": "logos-python" },
        { "name": "TensorFlow", "iconifyClass": "logos-tensorflow" }
      ],
      links: [
        { "name": "Github", "url": "https://github.com/mhizterpaul/food-image-classification", "iconifyClass": "ri:github-fill" }
      ]
    },
    {
      "id": 6,
      "name": "RL stock trading",
      "url": "https://github.com/mhizterpaul/stock-trading-simulation",
      "description": "This project demonstrates training a reinforcement learning model to trade stocks using real financial data.\n\nIt utilizes a custom Gymnasium environment and trains the agent with StableBaseline3's PPO (Proximal Policy Optimization) algorithm to optimize trading strategies.",
      "languages": [
        { "name": "Python", "iconifyClass": "logos-python" },
        { "name": "Gymnasium", "iconifyClass": "logos-openai-gym" },
        { "name": "StableBaseline3", "iconifyClass": "simple-icons:stablebaselines" },
        { "name": "PPO", "iconifyClass": "simple-icons:openai" }
      ],
      "links": [
        { "name": "Github", "url": "https://github.com/mhizterpaul/stock-trading-simulation", "iconifyClass": "ri:github-fill" }
      ]
    },
    {
      id: 7,
      name: "reveal-categories",
      url: "https://github.com/mhizterpaul/reveal-categories",
      description: "A project that demonstrates using natural language processing and clustering (with scikit-learn) to analyze and reveal topics from client review documents. It automatically extracts topics using techniques such as TF-IDF and KMeans, helping you understand customer feedback at scale.",
      languages: [
        { "name": "Python", "iconifyClass": "logos-python" },
        { "name": "scikit-learn", "iconifyClass": "logos-sklearn" },
        { "name": "JavaScript", "iconifyClass": "logos-javascript" },
        { "name": "CSS3", "iconifyClass": "logos-css-3" }
      ],
      links: [
        { "name": "Github", "url": "https://github.com/mhizterpaul/reveal-categories", "iconifyClass": "ri:github-fill" }
      ]
    }
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
