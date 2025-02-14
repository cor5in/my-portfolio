/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the _globalColor.scss file
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

/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = {
  animated: true
};

const greeting = {
  username: "Corbin Kim",
  title: "Glad to see you, I'm Corbin",
  subTitle: emoji(
    "A dedicated researcher exploring radio resource management and AI/ML workflows within RIC architecture in Open RAN-based networks, striving for innovation and impactful solutions. 🚀"
  ),
  resumeLink: "", // 이력서 링크가 있다면 추가
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/cor5in",
  linkedin: "https://www.linkedin.com/in/cor5in/",
  gmail: "gun@khu.ac.kr",
  instagram: "https://www.instagram.com/gun.__.kim",
  // 다른 소셜 미디어는 제거
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle:
    "Researching next-generation mobile communication, particularly open RAN",
  skills: [
    emoji(
      "⚡ Research on building energy-efficient networks through radio resource management"
    ),
    emoji("⚡ Research on AI/ML workflow in open RAN"),
    emoji("⚡ Study on open RAN specifications")
  ],
  softwareSkills: [], // 기존 빈 배열 유지
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "KyungHee University",
      logo: require("./assets/images/khuLogo.png"),
      subHeader:
        "Ph.D. Candidate in Electronic and Information Convergence Engineering",
      duration: "March 2025 - Expected",
      desc: "Belong to Mobile Communications Lab and participate in the research of next-generation communication, focusing on radio resource management and open RAN-based software and specifications.",
      descBullets: ["Open RAN", "Radio Resource Management"]
    },
    {
      schoolName: "KyungHee University",
      logo: require("./assets/images/khuLogo.png"),
      subHeader:
        "Master of Science in Electronic and Information Convergence Engineering",
      duration: "March 2023 - February 2025",
      desc: "Belong to Mobile Communications Lab, and participate in the research of next-generation communication",
      descBullets: ["Open RAN", "Mobile Traffic Prediction"]
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

// Tech Stack Section
const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Artificial Intelligence",
      progressPercentage: "90%"
    },
    {
      Stack: "Cloud Native Infrastructure",
      progressPercentage: "70%"
    },
    {
      Stack: "Radio Resource Management Algorithm",
      progressPercentage: "80%"
    },
    {
      Stack: "Optimization Theory",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: true
};

// Work Experiences Section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Open Source Contributor",
      company: "O-RAN Software Community",
      companylogo: require("./assets/images/O-RAN.jpeg"),
      date: "March 2024 - Present",
      desc: "Researcher",
      descBullets: [
        "AIMLFW: Contributor",
        "Officially registered a new use case: Traffic Forecasting for Green Network",
        "Developed and maintained the installation process for AIMLFW",
        "Improved the Training Manager(TM) module to enhance functionality and performance"
      ]
    },
    {
      role: "Software Engineer",
      company: "Aether 5G",
      companylogo: require("./assets/images/linux.png"),
      date: "March 2024 - Present",
      desc: "SD-RAN engineer team",
      descBullets: [
        "Release process",
        "Design/Implement Scalable RAN Simulator",
        "Aether OnRamp integration",
        "Research SD-RAN/Aether"
      ]
    },
    {
      role: "Open Source Contributor",
      company: "Microsoft Korea",
      companylogo: require("./assets/images/azure.jpeg"),
      date: "July 2023 – October 2023",
      desc: "Azure SDK for Python and Korean",
      descBullets: [
        "Azure SDK Korean: Main contributor",
        "Azure-quickstart-templates",
        "Azure SDK for Python"
      ]
    }
  ]
};

// Open Source Section
const openSource = {
  showGithubProfile: "true",
  display: true
};

// Big Projects Section
const bigProjects = {
  title: "Team Projects",
  subtitle: "PROJECTS ACCOMPLISHED WITH OTHER INDIVIDUALS",
  projects: [
    {
      image: require("./assets/images/O-RAN.jpeg"),
      projectName: "Open Source Contribution Academy",
      projectDesc: "O-RAN Software Community: AIMLFW",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://lf-o-ran-sc.atlassian.net/wiki/spaces/AIMLFEW/overview?homepageId=13697038"
        }
      ]
    },
    {
      image: require("./assets/images/SKT.png"),
      projectName: "SKT AI Fellowship",
      projectDesc: "5G Green AI Algorithm Development",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.sktaifellowship.com/d5818d3c-16e2-467c-82a1-3f56bd6dfbcb"
        }
      ]
    },
    {
      image: require("./assets/images/azure.jpeg"),
      projectName: "Open Source Contribution Academy",
      projectDesc: "Team: Azure SDK for Python and Korean, Lead Mentee",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.contribution.ac/2023-ossca-apply"
        }
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
      ]
    }
  ],
  display: true
};

// Achievement Section
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done!",
  achievementsCards: [
    {
      title: "Best Paper Award",
      subtitle:
        "Recognized for exceptional research contributions to O-RAN testbed implementation at the KICS symposium",
      image: require("./assets/images/KICS.png"),
      imageAlt: "KICS Logo",
      footerLink: []
    },
    {
      title: "Outstanding Research Award",
      subtitle:
        "Awarded for the 5G Green AI Algorithm research project conducted with SKT",
      image: require("./assets/images/SKT.png"),
      imageAlt: "SKT Logo",
      footerLink: []
    },
    {
      title: "Best Paper Award",
      subtitle:
        "Honored for excellence in research on traffic prediction at the KICS symposium",
      image: require("./assets/images/KICS.png"),
      imageAlt: "KICS Logo",
      footerLink: []
    },
    {
      title: "AWS Solutions Architect Associate",
      subtitle:
        "Validates expertise in architecting and deploying secure and robust applications on AWS technologies",
      image: require("./assets/images/AWS-SAA.webp"),
      imageAlt: "AWS Logo",
      footerLink: []
    },
    {
      title: "Certified Kubernetes Administrator",
      subtitle:
        "Certification offered by CNCF validating expertise in managing Kubernetes clusters",
      image: require("./assets/images/CKA.png"),
      imageAlt: "CKA Logo",
      footerLink: []
    },
    {
      title: "Data Science: Coaching Study, Leader",
      subtitle: "Certification offered by the Naver Connect Foundation",
      image: require("./assets/images/naver.png"),
      imageAlt: "Naver Connect Foundation Logo",
      footerLink: []
    }
  ],
  display: true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle:
    "Content focused on research papers and personal records related to open RAN and various research topics",
  displayMediumBlogs: "false",
  blogs: [
    {
      url: "https://cor5in.github.io/blog/paper/2024-09-26-joint-traffic-prediction-and-base-station-sleepiong-for-energy-saving-in-cellular-networks/",
      title:
        "[Review]Joint Traffic Prediction and Base Station Sleeping for Energy Saving in Cellular Networks",
      description:
        "A paper review conducted as part of preliminary research on energy-saving via traffic prediction and base station sleeping in cellular networks"
    },
    {
      url: "https://cor5in.github.io/blog/paper/2024-11-15-AI-ready-Energy-Modeling-for-Next-Generation-RAN/",
      title: "[Review]AI-Ready Energy Modelling for Next Generation RAN",
      description:
        "A review of the paper referenced for implementing a cell on/off simulator for AI-ready energy modeling in next-generation RAN"
    },
    {
      url: "https://cor5in.github.io/blog/paper/2025-01-13-analyzing-and-modeling-spatil-temporal-dependence-of-cellular-traffic-at-city-scale/",
      title:
        "[Review]Analyzing and Modeling Spatio-Temporal Dependence of Cellular Traffic at City Scale",
      description:
        "A review of the paper referenced for developing algorithms to analyze SKT's real base station traffic data at a city scale"
    }
  ],
  display: true
};

// Talk Section
const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY KNOWLEDGE"),
  talks: [],
  display: false // 내용이 없으므로 false로 설정
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false // 내용이 없으므로 false로 설정
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "",
  display: false // 내용이 없으므로 false로 설정
};

// Contact Info Section
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "If you find my research interesting, please feel free to send me an email!",
  number: "",
  email_address: "gun@khu.ac.kr"
};

// Twitter Section
const twitterDetails = {
  userName: "",
  display: false // 트위터 정보가 없으므로 false로 설정
};

const isHireable = true;

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
  isHireable,
  resumeSection
};
