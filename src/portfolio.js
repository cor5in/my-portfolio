/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file
import React from "react";
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const SoftwareSkill = ({softwareSkills}) => {
  return (
    <div>
      {softwareSkills.map((skill, index) => (
        <div key={index} className="software-skill">
          <img
            src={skill.imageSrc}
            alt={skill.skillName}
            style={{width: "50px"}}
          />
          <p>{skill.skillName}</p>
        </div>
      ))}
    </div>
  );
};

export default SoftwareSkill;

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
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/41vin",
  linkedin: "https://www.linkedin.com/in/41vin/",
  gmail: "gun@khu.ac.kr",
  instagram: "https://www.instagram.com/gun.__.kim",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle:
    "Researching next-generation mobile communication, particularly cloud native RAN",
  skills: [
    emoji("⚡ Research on AI/ML workflow in Open RAN"),
    emoji("⚡ Study of cloud native RAN architecture"),
    emoji("⚡ Research on self-organizing network and zero-touch network")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
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
      descBullets: ["SON & ZTN", "Open RAN"]
    },
    {
      schoolName: "KyungHee University",
      logo: require("./assets/images/khuLogo.png"),
      subHeader: "Bachelor of Science in Electronic Engineering",
      duration: "March 2017 - February 2023",
      desc: "Ranked top 5% in the program. Took courses about Mobile Communication, Wireless Communication, Computer Network ...",
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
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Aether",
      companylogo: require("./assets/images/aether.png"),
      date: "March 2024 ~ Present",
      desc: "SD-RAN engineer team",
      descBullets: [
        "Release process",
        "Design/Implement Scalable RAN Simulator",
        "Aether OnRamp integration",
        "Research SD-RAN/Aether"
      ]
    },
    {
      role: "Lead Mentee",
      company: "Microsoft Korea",
      companylogo: require("./assets/images/azure.png"),
      date: "July 2023 – October 2023",
      desc: "Azure SDK for Python and Korean",
      descBullets: [
        "Azure SDK Korean: Main contributor",
        "Azure-quickstart-templates",
        "Azure SDK for python"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: true, // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Team Projects",
  subtitle: "PROJECTS ACCOMPLISHED WITH OTHER INDIVIDUALS",
  projects: [
    {
      image: require("./assets/images/OSS.webp"),
      projectName: "Open Source Contribution Academy",
      projectDesc: "Team: Azure SDK for Python and Korean",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.contribution.ac/2023-ossca-apply"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ETRI-KT.webp"),
      projectName: "제 2회 통신망 안정성 확보를 위한 인공지능 해커톤",
      projectDesc: "Team: MCL",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://aifactory.space/task/2513/overview"
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
      subtitle: " Associate exam validates individuals' abilities to architect and deploy secure and robust applications on AWS technologies, crucial for those in cloud architecture roles.",
      image: require("./assets/images/AWS-SAA.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: []
    },
    {
      title: "Certified Kubernetes Administrator",
      subtitle:
        "A certification offered by the Cloud Native Computing Foundation (CNCF) that validates one's expertise in deploying, managing, and troubleshooting Kubernetes clusters",
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

