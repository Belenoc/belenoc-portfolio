import {
  IDevToolsElement,
  IExperienceCard,
  IProjectCard,
} from "@/shared/models/global.interfaces";

import cosmos from "@/assets/cosmos.jpg";
import coulson from "@/assets/coulson.webp";
import ecommerce from "@/assets/instaleapEc.png";
import twilioLogo from "@/assets/Twilio_logo.png";
import simetrikLogo from "@/assets/simetrik_logo.png";
import toryLogo from "@/assets/TORY LOGO 1_edited.avif";

const uuid = () => crypto.randomUUID();

export const Experiences: IExperienceCard[] = [
  {
    id: uuid(),
    company_logo: twilioLogo,
    company_name: "Twilio",
    position_name: "Technical Support Engineer 2",
    dates: "April 2025 - Present",
    url_site: "https://www.twilio.com/",
    background_url:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
    responsibilities: [
      "experience.twilio.resp_0",
      "experience.twilio.resp_1",
      "experience.twilio.resp_2",
    ],
  },
  {
    id: uuid(),
    company_logo: simetrikLogo,
    company_name: "Simetrik",
    position_name: "Technical Support Engineer",
    dates: "July 2024 - April 2025",
    url_site: "https://simetrik.com/",
    background_url:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    responsibilities: [
      "experience.simetrik.resp_0",
      "experience.simetrik.resp_1",
      "experience.simetrik.resp_2",
    ],
  },
  {
    id: uuid(),
    company_logo:
      "https://instaleap.io/wp-content/uploads/2021/11/Instaleap-Logo-1.png",
    company_name: "Instaleap",
    position_name: "Senior Support & Backend Engineer",
    dates: "March 2022 - March 2023",
    url_site: "https://instaleap.io/",
    background_url:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2070&auto=format&fit=crop",
    responsibilities: [
      "experience.instaleap_senior.resp_0",
      "experience.instaleap_senior.resp_1",
      "experience.instaleap_senior.resp_2",
    ],
  },
  {
    id: uuid(),
    company_logo:
      "https://instaleap.io/wp-content/uploads/2021/11/Instaleap-Logo-1.png",
    company_name: "Instaleap",
    position_name: "Semi Senior Support Engineer",
    dates: "March 2021 - April 2022",
    url_site: "https://instaleap.io/",
    background_url:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    responsibilities: [
      "experience.instaleap_junior.resp_0",
      "experience.instaleap_junior.resp_1",
      "experience.instaleap_junior.resp_2",
    ],
  },
  {
    id: uuid(),
    company_logo: toryLogo,
    company_name: "Tory-Tech",
    position_name: "Project and Support Engineer",
    dates: "October 2019 - March 2021",
    url_site: "https://www.tory-tech.com/site/",
    background_url:
      "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?q=80&w=2070&auto=format&fit=crop",
    responsibilities: [
      "experience.tory.resp_0",
      "experience.tory.resp_1",
      "experience.tory.resp_2",
    ],
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
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop",
    responsibilities: [
      "experience.apg.resp_0",
      "experience.apg.resp_1",
    ],
  },
];

export const DevTools: IDevToolsElement[] = [
  {
    id: uuid(),
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    id: uuid(),
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    id: uuid(),
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    id: uuid(),
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    id: uuid(),
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    id: uuid(),
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    id: uuid(),
    name: "Angular",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  {
    id: uuid(),
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    id: uuid(),
    name: "Astro",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/astro/astro-original.svg",
  },
  {
    id: uuid(),
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    id: uuid(),
    name: "Django",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
  {
    id: uuid(),
    name: "NestJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
  },
  {
    id: uuid(),
    name: ".NET",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
  },
  {
    id: uuid(),
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    id: uuid(),
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    id: uuid(),
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    id: uuid(),
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    id: uuid(),
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  },
  {
    id: uuid(),
    name: "Azure",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  },
  {
    id: uuid(),
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    id: uuid(),
    name: "Linux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  {
    id: uuid(),
    name: "Redis",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
  {
    id: uuid(),
    name: "Claude",
    icon: "https://cdn.simpleicons.org/anthropic",
  },
  {
    id: uuid(),
    name: "Gemini",
    icon: "https://cdn.simpleicons.org/googlegemini",
  },
  {
    id: uuid(),
    name: "OpenAI",
    icon: "https://cdn.simpleicons.org/openai",
  },
  {
    id: uuid(),
    name: "Copilot",
    icon: "https://cdn.simpleicons.org/githubcopilot",
  },
];

export const Projects: IProjectCard[] = [
  {
    id: uuid(),
    project_name: "Instaleap e-Commerce",
    description: "An online storefront for retailers & wholesalers",
    screenShot: ecommerce,
    demoLink: "https://tienda.makro.com.co/",
    index: 1,
    technologies: ["React", "TypeScript", "Node.Js", "AWS Cloud"],
  },
  {
    id: uuid(),
    project_name: "Tory-Tech Cosmos SMADA",
    description: "Analyzing Electronic Flow Measurement data",
    screenShot: cosmos,
    demoLink: "https://www.tory-tech.com/site/cosmos/",
    index: 2,
    technologies: ["Angular", "TypeScript", ".NET", "Microsoft Azure"],
  },
  {
    id: uuid(),
    project_name: "Instaleap Coulson API",
    description: "API for automation and improvement of internal processes",
    screenShot: coulson,
    index: 3,
    technologies: ["Node.js", "TypeScript", "RabbitMQ", "AWS"],
  },
];
