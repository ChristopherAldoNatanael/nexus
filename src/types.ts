export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  category: 'Web' | 'Mobile' | 'Game' | 'Design';
  image: string;
  links: {
    github?: string;
    demo?: string;
  };
  features: string[];
  tech: string[];
}

export type TechCategory = 
  | 'Frontend Engineering'
  | 'Mobile Development'
  | 'Backend Systems'
  | 'Database Architecture'
  | 'DevOps & Deployment'
  | 'Tooling & Workflow'
  | 'Game Development';

export interface TechItem {
  name: string;
  icon?: string;
  category: TechCategory;
}

export interface StackCategory {
  id: TechCategory;
  title: string;
  tagline: string;
  description: string;
  philosophy: string[];
  technologies: {
    name: string;
    level: 'primary' | 'secondary' | 'familiar';
    purpose: string;
  }[];
  workflow: string;
  highlights: string[];
  labels: string[];
}