import user_image from "./profile_Image.jpeg";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./ADNAAN_White.png";
import logo_dark from "./ADNAAN_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import upstox_pro_icon from "./upstox_pro_icon.png";
import techholding_logo from "./techholding_logo.ico";
import mobilecoderz_logo from "./mobilecoderz_logo.png";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData = [
  {
    title: "Deposyt",
    description: "Web App",
    bgImage: "/deposyt_logo.png",
    link: "https://www.deposyt.com/",
  },
  {
    title: "Upstox",
    description: "Android App",
    bgImage: "/upstox.jpeg",
    link: "https://play.google.com/store/apps/details?id=in.upstox.app&pcampaignid=web_share",
  },
  {
    title: "Finoyou",
    description: "Android App",
    bgImage: "/finoyou.png",
    link: "https://play.google.com/store/apps/details?id=com.finoyou",
  },
  {
    title: "Airacer",
    description: "Web App",
    bgImage: "/airacer.jpg",
    link: "https://airacer.com/",
  },
  {
    title: "TLYNT",
    description: "Android App",
    bgImage: "/TLYNT_logo.png",
    link: "https://apps.apple.com/us/app/tlynt/id1624639948",
  },
  {
    title: "TLYNT",
    description: "Web App",
    bgImage: "/TLYNT_logo.png",
    link: "http://tlynt.com",
  },
  {
    title: "Spot Runner",
    description: "Web App",
    bgImage: "/spot_runner_logo.jpeg",
    link: "https://www.spotrunner.com/",
  },
  {
    title: "Finku",
    description: "Android App",
    bgImage: "/Finku_logo.png",
    link: "https://apps.apple.com/us/app/finku-atur-keuangan-otomatis/id1587320325?mt=8",
  },
  {
    title: "Tawqi3i",
    description: "Android App",
    bgImage: "/Tawqi3i_logo.png",
    link: "https://apps.apple.com/vn/app/tawqi3i-%D8%AA%D9%88%D9%82%D9%8A%D8%B9%D9%8A/id1567218327",
  },
];

export const experianceData = [
  {
    companyLogo: upstox_pro_icon,
    jobTitle: "SDE - II",
    companyName: "Upstox • Mumbai",
    workingPeriod: "08/2024 - Present",
    description: [
      {
        title: "Revamped IPO Interface:",
        subDescription:
          "Redesigned the Initial Public Offering (IPO) feature using Next.js, ensuring seamless integration into the mobile application for a more intuitive user experienc",
      },
      {
        title: "Fixed Deposit:",
        subDescription:
          " Launched the Fixed Deposit a web app using Next.js. Integrated it into the mobile app via web view.",
      },
      {
        title: "Bonds Section Launch:",
        subDescription:
          "Successfully launched the Bonds investment section on the web platform using Next.js.",
      },
      {
        title: "Bug Fixes in Mutual Funds:",
        subDescription:
          "Identified and resolved various bugs in the mutual funds section of the app, leading to improved functionality and an enhanced user experience.",
      },
    ],
    link: "",
  },
  {
    companyLogo: techholding_logo,
    jobTitle: "Software Engineer",
    companyName: "Tech Holding • Pune",
    workingPeriod: "04/2022 - 07/2024",
    description: [
      {
        title: "Developed the TLYNT admin portal:",
        subDescription:
          "using React.js for the web interface and React Native for the cross-platform mobile app, successfully launched on both Play Store and App Store",
      },
      {
        title: "Built the Deposy admin panel:",
        subDescription:
          "Used React.js and TypeScript, alongside a Next.js storefront; integrated Node.js APIs and PostgreSQL as the backend database for robust data management Link",
      },
      {
        title: "Created the Spotrunner web app:",
        subDescription:
          " leveraging AI for behind-the-scenes marketing automation, deployed with a user-friendly interface and external integration Link",
      },
    ],
    link: "",
  },
  {
    companyLogo: mobilecoderz_logo,
    jobTitle: " Software Engineer",
    companyName: "MobileCoderz • Remote",
    workingPeriod: " 04/2021 - 03/2022",
    description: [
      {
        title: "Developed the Finku mobile app:",
        subDescription:
          "using React Native and TypeScript; launched on both App Store and Google Play. Finku has achieved over 1 million downloads across all platforms. Play Store App Store Play Store",
      },
      {
        title: "Created Tawqui:",
        subDescription:
          "an e-signature app for documents built with React Native; published on both Play Store and App Store. App Store",
      },
      {
        title: "Built Airacer:",
        subDescription:
          "a web-based jet booking platform developed with Next.js. Personal Project Finoyou.in & Transferx.in Developed Link",
      },
    ],
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Skills",
    description:
      " React.js, Java, React Native, Next.js, AWS, Node.js,  MongoDB, PostgreSQL, Storybook, Git, CI/CD, Typescript, JavaScript, PostgreSQL, HTML 5,Terraform, System Design , JUnit, GraphQL, Jenkins, MobX, Docker",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "B.TECH in Information Technology- KIET Group Of Institutions",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];
