import {
  FaDiagramProject,
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaHouse,
  FaLinkedinIn,
  FaBlog,
  FaFilePdf,
  FaRenren,
  FaUser,
  FaYoutube,
} from "react-icons/fa6";
import {
  ChatApp,
  CodePenClone,
  FreshJuiceUI,
  ImageSharing,
  OpenAI,
  PixabayClone,
  PortfolioFirebase,
  RestaurantClone,
  SocialMedia,
  SuchitraIndustries
} from "../assets";

export const Socials = [
  // {
  //   id: `facebook-${Date.now()}`,
  //   Icon: FaFacebookF,
  //   uri: "",
  //   color: "#1877F2",
  // },
  {
    id: `linkedin-${Date.now()}`,
    Icon: FaLinkedinIn,
    uri: "https://www.linkedin.com/in/harimounika/",
    color: "#0072b1",
  },
  {
    id: `github-${Date.now()}`,
    Icon: FaGithub,
    uri: "https://github.com/YHMounika",
    color: "#fff",
  },
  {
    id: `resume-${Date.now()}`,
    Icon: FaFilePdf,
    uri: "/Yellapragada Hari Mounika_Resume.pdf",
    color: "#ff0000",
  },
  {
    id: `blog-${Date.now()}`,
    Icon: FaBlog,
    uri: "https://hashnode.com/68434d181c65461d127042ed/dashboard/posts",
    color: "#ff0000",
  },
];

export const Menus = [
  {
    id: `home-${Date.now()}`,
    Icon: FaHouse,
    uri: "#home",
    name: "Home",
  },
  {
    id: `about-${Date.now()}`,
    Icon: FaUser,
    uri: "#about",
    name: "About",
  },
  {
    id: `skills-${Date.now()}`,
    Icon: FaRenren,
    uri: "#skills",
    name: "Skills",
  },
  {
    id: `projects-${Date.now()}`,
    Icon: FaDiagramProject,
    uri: "#projects",
    name: "Projects",
  },
  {
    id: `contact-${Date.now()}`,
    Icon: FaEnvelope,
    uri: "#contact",
    name: "Contact",
  },
];


export const ProjectsData = [
  {
    id: `food-${Date.now()}`,
    name: "Suchitra Foods",
    imgSrc: SuchitraIndustries,
    gitURL: "https://github.com/AvinashMudunuri/SuchitraFoods",
  },
]

export const ProjectsData_old = [
  {
    id: `food-${Date.now()}`,
    name: "Single Food Restaurant",
    imgSrc: RestaurantClone,
    gitURL: "https://github.com/Vetrivel-VP",
  },
  {
    id: `codepen-${Date.now()}`,
    name: "CodePen Clone",
    imgSrc: CodePenClone,
    gitURL: "https://github.com/Vetrivel-VP",
  },
  {
    id: `openai-${Date.now()}`,
    name: "OpenAI",
    imgSrc: OpenAI,
    gitURL: "https://github.com/Vetrivel-VP",
  },
  {
    id: `chatapp-${Date.now()}`,
    name: "Chat App Build",
    imgSrc: ChatApp,
    gitURL: "https://github.com/Vetrivel-VP",
  },
  {
    id: `imageSharing-${Date.now()}`,
    name: "Image Sharing App",
    imgSrc: ImageSharing,
    gitURL: "https://github.com/Vetrivel-VP",
  },
  {
    id: `pixabayclone-${Date.now()}`,
    name: "Pixabay Clone 2.0",
    imgSrc: PixabayClone,
    gitURL: "https://github.com/Vetrivel-VP",
  },
  {
    id: `freshjuiceui-${Date.now()}`,
    name: "Fresh Juice UI Build",
    imgSrc: FreshJuiceUI,
    gitURL: "https://github.com/Vetrivel-VP",
  },
  {
    id: `socialmedia-${Date.now()}`,
    name: "Social Media App",
    imgSrc: SocialMedia,
    gitURL: "https://github.com/Vetrivel-VP",
  },
  {
    id: `portfoliofirebase-${Date.now()}`,
    name: "Portfolio UI Fireabse",
    imgSrc: PortfolioFirebase,
    gitURL: "https://github.com/Vetrivel-VP",
  },
];
