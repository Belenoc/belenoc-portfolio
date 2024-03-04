import { ReactNode } from "react";
import { StaticImageData } from "next/image";

export interface ISocialLink {
  href: string;
  target?: string;
  rel?: string;
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

export interface IExperienceCard {
  id: string;
  company_logo: string;
  company_name: string;
  position_name: string;
  dates: string;
  url_site: string;
  background_url: string;
}

export interface IDevToolsElement {
	id: string
	name: string
	icon: string
	className?: string
}

export interface IProjectCard {
	id: string
	project_name: string
	description: string
	technologies: string[]
	index: number
	screenShot: StaticImageData
	isPrivate?: boolean
	demoLink?: string
	className?: string
}