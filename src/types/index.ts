import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export const techTools = [
  'Typescript',
  'React',
  'NodeJS',
  'NextJS',
  'NestJS',
  'Stripe',
  'Sockets',
  'MongoDB',
  'MUI',
  'Antd',
  'PostgreSQL',
  'GPT API',
  'Vector Database',
] as const

export type TechTool = typeof techTools[number];

export interface ProjectImage {
  src: string;
  description: string;
}

export interface OtherLink {
  url: string;
  title: string;
}

export interface Project {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  techStack: TechTool[];
  primaryImage: ProjectImage;
  images: ProjectImage[];
  link: string;
  // otherLinks?: OtherLink[];
  github?: string;
  chromeWebStore?: string;
  primaryTitle?: boolean;
  cardStyle?: string;
}
