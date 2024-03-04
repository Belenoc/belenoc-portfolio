import {
  IDevToolsElement,
  IExperienceCard,
  IProjectCard,
} from "../models/global.interfaces";

import cosmos from "../../assets/cosmos.jpg";
import coulson from "../../assets/coulson.webp";
import ecommerce from "../../assets/instaleapEc.png";
import { v4 as uuid } from "uuid";

export const Experiences: IExperienceCard[] = [
  {
    id: uuid(),
    company_logo:
      "https://instaleap.io/wp-content/uploads/2021/11/Instaleap-Logo-1.png",
    company_name: "Instaleap",
    position_name: "Senior Support & Backend Engineer",
    dates: "March 2022 - February 2023",
    url_site: "https://instaleap.io/",
    background_url:
      "https://images.unsplash.com/photo-1545601445-5b6f418af4bf?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: uuid(),
    company_logo:
      "https://instaleap.io/wp-content/uploads/2021/11/Instaleap-Logo-1.png",
    company_name: "Instaleap",
    position_name: "Semi Senior Support Engineer",
    dates: "March 2021 - February 2022",
    url_site: "https://instaleap.io/",
    background_url:
      "https://images.unsplash.com/photo-1622230208995-0f26eba75875?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: uuid(),
    company_logo:
      "https://www.tory-tech.com/site/wp-content/uploads/2020/06/tory-alone-66px-mas.png",
    company_name: "Tory-Tech",
    position_name: "Project and Support Engineer",
    dates: "October 2019 - March 2021",
    url_site: "https://www.tory-tech.com/site/",
    background_url:
      "https://www.tory-tech.com/site/wp-content/uploads/2023/01/pipeline-1.jpg",
  },
  {
    id: uuid(),
    company_logo:
      "https://apgconsulting.com.ar/wp-content/uploads/2022/12/cropped-APG-30-anos-2048x1092.png",
    company_name: "APG-Consulting",
    position_name: "Business Intelligence Developer",
    dates: "May 2019 - October 2019",
    url_site: "https://apgconsulting.com.ar/",
    background_url:
      "https://plus.unsplash.com/premium_photo-1678891133915-2a5f0fbc7aaa?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const DevTools: IDevToolsElement[] = [
  {
    id: uuid(),
    name: "HTML5",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
  {
    id: uuid(),
    name: "CSS3",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  },
  {
    id: uuid(),
    name: "JavaScript",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
  },
  {
    id: uuid(),
    name: "TypeScript",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    id: uuid(),
    name: "React",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    id: uuid(),
    name: "Angular",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
  },
  {
    id: uuid(),
    name: "Next.js",
    icon: "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
  },
  {
    id: uuid(),
    name: "AstroJs",
    icon: "https://www.svgrepo.com/show/373446/astro.svg",
  },
  {
    id: uuid(),
    name: "Tailwind CSS",
    icon: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg",
  },
  {
    id: uuid(),
    name: "NestJs",
    icon: "https://www.svgrepo.com/show/373872/nestjs.svg",
  },
  {
    id: uuid(),
    name: ".NET",
    icon: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg",
  },
  {
    id: uuid(),
    name: "Node.js",
    icon: "https://www.svgrepo.com/show/355140/node.svg",
  },
  {
    id: uuid(),
    name: "MongoDB",
    icon: "https://www.svgrepo.com/show/331488/mongodb.svg",
  },
  {
    id: uuid(),
    name: "Postgresql",
    icon: "https://www.svgrepo.com/show/354200/postgresql.svg",
  },
  {
    id: uuid(),
    name: "Docker",
    icon: "https://www.svgrepo.com/show/452192/docker.svg",
  },
];

export const Projects: IProjectCard[] = [
  {
    id: uuid(),
    project_name: "Instaleap e-Commerce",
    description: "An online storefront for retailers & wholesalers",
    screenShot: ecommerce,
    demoLink: "https://tienda.makro.com.co/",
    className: "lg:row-span-3 xl:col-span-4",
    index: 1,
    technologies: ["React", "TypeScript","Node.Js","AWS Cloud"],
  },
  {
    id: uuid(),
    project_name: "Tory-Tech Cosmos SMADA",
    description: "Analyzing Electronic Flow Measurement data",
    screenShot: cosmos,
    demoLink: "https://www.tory-tech.com/site/cosmos/",
    className: "lg:row-span-2 xl:col-span-4",
    index: 2,
    technologies: ["Angular", "TypeScript",".NET","Microsoft Azure"],
  },
  {
    id: uuid(),
    project_name: "Instaleap Coulson API",
    description: "API for the automation and improvement of internal processes",
    screenShot: coulson,
    className: "lg:row-span-2 xl:col-span-4",
    index: 3,
    technologies: ["Node.js", "TypeScript", "RabbitMQ","AWS"],
  },
   	
];
