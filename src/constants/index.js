import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Roadmap",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Projects",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Blogs",
    url: "#blogs",
  },
  {
    id: "5",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "6",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const Services1 = ["HTML 5", "CSS 3", "Javascript", "React"];
export const Services2 = ["Express", "Node js", "Mongo DB"];
export const Services3 = ["Git & Github", "Postman", "Mongo Compass"];

export const ServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Advanced LMS System",
    text: "Developed a comprehensive Learning Management System (LMS) supporting enrollment for students, schools, and teachers. The platform features structured courses, automated AI-driven assessments, and progression tracking. Students advance upon successful evaluations and can monitor peer progress, while educators and institutions gain actionable insights into performance. The LMS also integrates real-time chat, discussion forums, and resource sharing to foster collaborative learning.",
    date: "December 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Internship Program",
    text: "Implemented a system providing students with remote internship opportunities in Web Development and AI, catering to both beginners and advanced learners. The program includes mentorship, project-based learning, and regular feedback sessions to ensure continuous growth. Participants gain hands-on experience by working on real-world projects and collaborating with industry professionals.",
    date: "May 2025",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Halasky Collaboration",
    text: "Designed and launched an integrated Airplane and Hotel Management System in partnership with Halasky, streamlining operations and enhancing user experience. The solution features automated booking, real-time availability, and advanced analytics for both airlines and hotels. This collaboration has improved operational efficiency and customer satisfaction.",
    date: "May 202",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "API Integration",
    text: "Developing and integrating over 56 APIs to enhance the Enigmatics platform, enabling efficient streaming, buffering, and seamless connectivity using Node.js buffers. The APIs cover a wide range of functionalities, including payment processing, authentication, third-party integrations, and data analytics. This initiative aims to provide a robust and scalable backend infrastructure.",
    // date: "2025",
    status: "progress",
    imageUrl: roadmap4,
  },


];

export const collabText =
  "Students and interns can communicate effortlessly, share knowledge, and solve problems as a team.";

export const collabContent = [
  {
    id: "0",
    title: "Collaborative Learning",
    text: collabText,
  },
  {
    id: "1",
    title: "Progress Tracking",
  },
  {
    id: "2",
    title: "Smart Assistance & Automation",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Frontend",
    description: "",
    price: "0",
    features: [
      "Personalized recommendations based on your preferences",
      "Coding projects for gaining experience",
      "Ability to track others progress and judge where you stand",
    ],
  },
  {
    id: "1",
    title: "Backend",
    description: "",
    price: "0",
    features: [
      "An advanced support program for any complex queries",
      "An analytical group to track your progress",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "We offer remote internship opportunities and employment to outstanding candidates who demonstrate capability and commitment.",
    price: null,
    features: [
      "Job Opportunity",
      "Hands-on Experience",
      "Grow in a Cognitive Environment",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Master the MERN Stack",
    text: "Enhance your skills with expert-led training on MongoDB, Express, React, and Node.js.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Level Up Every Day",
    text: "Gain hands-on experience with structured courses and mentorship. Improve your coding.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect & Collaborate",
    text: "Join a thriving community of developers. Engage in discussions and work on live projects.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Build & Get Hired",
    text: "Prove your skills by working on assignments. Your performances will get you the opportunity to get hired by Saif Softy Tech.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Learn at Your Own Pace",
    text: "Access high-quality course videos anytime, anywhere. Follow a structured learning path that suits your schedule.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Stay Updated",
    text: "Keep up with the latest in web development, industry standards, and cutting-edge technologies to stay ahead in your career.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
