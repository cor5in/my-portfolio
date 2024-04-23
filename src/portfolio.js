/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file
import { FaAws, FaPython, FaDocker } from "react-icons/fa";
import { SiMicrosoftazure, SiPytorch, SiScikitlearn, SiTensorflow, SiKubernetes } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Geon Kim",
  title: "Glad to see you, I'm Geon",
  subTitle: emoji(
    "A passionate researcher studying vRAN 🚀, eager to collaborate with diverse individuals and achieve innovation"
  ),
  /* resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button */
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/41vin",
  linkedin: "https://www.linkedin.com/in/41vin/",
  gmail: "gun@khu.ac.kr",
  /* gitlab: "https://gitlab.com/saadpasta" */
  /*facebook: "https://www.facebook.com/saad.pasta7",*/
  instagram: "https://www.instagram.com/gun.__.kim",
  /* stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta" */
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Researching next-generation mobile communication, particularly cloud native RAN",
  skills: [
    emoji("⚡ Research on AI/ML workflow in Open RAN"),
    emoji(
      "⚡ Study of cloud native RAN architecture"
    ),
    emoji(
      "⚡ Research on self-organizing network and zero-touch Network"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "aws",
      fontAwesomeClassname: <FaAws />
    },
    {
      skillName: "azure",
      fontAwesomeClassname: <SiMicrosoftazure />
    },
    {
      skillName: "python",
      fontAwesomeClassname: <FaPython />
    },
    {
      skillName: "c++",
      fontAwesomeClassname: <TbBrandCpp />
    },
    {
      skillName: "go",
      fontAwesomeClassname: <FaGolang />
    },
    {
      skillName: "pytorch",
      fontAwesomeClassname: <SiPytorch />
    },
    {
      skillName: "scikit-learn",
      fontAwesomeClassname: <SiScikitlearn />
    },
    {
      skillName: "tensorflow",
      fontAwesomeClassname: <SiTensorflow />
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: <SiKubernetes />
    },
    {
      skillName: "docker",
      fontAwesomeClassname: <FaDocker />
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "KyungHee University",
      logo: require("./assets/images/khuLogo.png"),
      subHeader:
        "Master of Science in Electronic and Information Convergence Engineering",
      duration: "March 2023 - ",
      desc: "Belong to Mobile Communications Lab, and participate in the research of next-generation communication",
      descBullets: ["Cloud native 5G core network", "Open RAN"]
    },
    {
      schoolName: "KyungHee University",
      logo: require("./assets/images/khuLogo.png"),
      subHeader: "Bachelor of Science in Electronic Engineering",
      duration: "March 2017 - February 2023",
      desc: "Ranked top 10% in the program. Took courses about Mobile Communication, Wireless Communication, Computer Network ...",
      descBullets: ["Summa Cum Laude"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Artificial Intelligence", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Cloud Native Infrastructure",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    },
    {
      Stack: "Optimization",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 ~ Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: true, // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Team Projects",
  subtitle: "PROJECTS ACCOMPLISHED WITH OTHER INDIVIDUALS",
  projects: [
    {
      image: require("./assets/images/OSS.webp"),
      projectName: "Open Source Contribution Academy",
      projectDesc: "Team: Azure SDK for Python and Korean, Lead Mentee",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.contribution.ac/2023-ossca-apply"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Solutions Architect Associate",
      subtitle: "A certification that paved the way to the cloud",
      image: require("./assets/images/AWS-SAA.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: []
    },
    {
      title: "Certified Kubernetes Administrator",
      subtitle: "A certification offered by the Cloud Native Computing Foundation (CNCF) that validates one's expertise in deploying, managing, and troubleshooting Kubernetes clusters",
      image: require("./assets/images/CKA.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Content related to 5G core, Open RAN, and various open-source technologies",
  blogs: [
    {
      url: "https://41vin.github.io/research/OTIC",
      title: "1st OTIC in SUTD, Singapore",
      description: "My Participation Review of the 1st OTIC"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "If you find my research interesting, please feel free to send me an email!",
  email_address: "gun@khu.ac.kr"
};

// Twitter Sectioneee

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
