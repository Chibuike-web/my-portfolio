import euphoria from "@/assets/home/Euphoria.svg";
import exclusive from "@/assets/home/Exclusive.svg";
import golobe from "@/assets/home/Golobe.svg";
import kulipal from "@/assets/home/Kulipal.svg";
import medibridge from "@/assets/home/Medibridge.svg";
import modimal from "@/assets/home/Modimal.svg";
import nomba from "@/assets/home/Nomba.svg";
import sideProject from "@/assets/home/Side-Project.svg";
import zenly from "@/assets/home/Zenly.svg";

export type ProjectType = { value: string; link: string };

export type Project = {
  id: string;
  image: typeof nomba;
  title: string;
  subtitle: string;
  year: number;
  type: ProjectType | ProjectType[];
  category: "design" | "engineering";
};

export const projects: Project[] = [
  {
    id: "nomba-bulk-airtime",
    image: nomba,
    title: "Nomba",
    subtitle: "Bulk Airtime",
    year: 2024,
    type: { value: "Case Study", link: "/bulk-airtime" },
    category: "design",
  },
  {
    id: "kulipal-smart-ticketing",
    image: kulipal,
    title: "Kulipal",
    subtitle: "Smart Ticketing",
    year: 2025,
    type: { value: "Case Study", link: "/smart-ticketing" },
    category: "design",
  },
  {
    id: "medibridge-ai-powered-ehr",
    image: medibridge,
    title: "Medibridge",
    subtitle: "AI-Powered EHR",
    year: 2025,
    type: { value: "Case Study", link: "/medibridge" },
    category: "design",
  },
  {
    id: "zenly-burnout-leave",
    image: zenly,
    title: "Zenly",
    subtitle: "Burnout Leave",
    year: 2024,
    type: { value: "Case Study", link: "/burnout-leave" },
    category: "design",
  },
  {
    id: "modimal",
    image: modimal,
    title: "Modimal",
    subtitle: "Women Clothing Ecommerce Platform",
    year: 2025,
    type: [
      { value: "Live Site", link: "https://modimal-4keo.vercel.app/" },
      { value: "Github", link: "https://github.com/Chibuike-web/Modimal" },
    ],
    category: "engineering",
  },
  {
    id: "golobe",
    image: golobe,
    title: "Golobe",
    subtitle: "Travel Booking Platform",
    year: 2025,
    type: [
      { value: "Live Site", link: "https://golobe-otv2.vercel.app/" },
      { value: "Github", link: "https://github.com/Chibuike-web/Golobe" },
    ],
    category: "engineering",
  },
  {
    id: "exclusive",
    image: exclusive,
    title: "Exclusive",
    subtitle: "Ecommerce Website",
    year: 2025,
    type: [
      { value: "Live Site", link: "https://react-task-four-two.vercel.app/" },
      { value: "Github", link: "https://github.com/Chibuike-web/react-task-four" },
    ],
    category: "engineering",
  },
  {
    id: "euphoria",
    image: euphoria,
    title: "Euphoria",
    subtitle: "Ecommerce Website",
    year: 2025,
    type: [
      { value: "Live Site", link: "https://euphoria-puce.vercel.app/" },
      { value: "Github", link: "https://github.com/Chibuike-web/euphoria" },
    ],
    category: "engineering",
  },
  {
    id: "movie-search",
    image: sideProject,
    title: "Side-Project",
    subtitle: "Movie Search",
    year: 2025,
    type: {
      value: "Github",
      link: "https://github.com/Chibuike-web/Practice-Projects/tree/main/Movie%20Search",
    },
    category: "engineering",
  },
  {
    id: "ai-form-builder",
    image: sideProject,
    title: "Side-Project",
    subtitle: "AI-Form Builder",
    year: 2025,
    type: {
      value: "Github",
      link: "https://github.com/Chibuike-web/ai-form-builder",
    },
    category: "engineering",
  },
  {
    id: "email-agent",
    image: sideProject,
    title: "Side-Project",
    subtitle: "Email Agent",
    year: 2025,
    type: {
      value: "Github",
      link: "https://github.com/Chibuike-web/email-agent",
    },
    category: "engineering",
  },
  {
    id: "recipe-finder",
    image: sideProject,
    title: "Side Project",
    subtitle: "Recipe Finder",
    year: 2025,
    type: {
      value: "Github",
      link: "https://github.com/Chibuike-web/Practice-Projects/tree/main/Recipe%20Finder",
    },
    category: "engineering",
  },
];
