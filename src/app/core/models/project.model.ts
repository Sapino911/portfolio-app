export interface Project {

  // Basic Information
  id: number;
  title: string;
  subtitle: string;
  description: string;

  // Project Details
  duration: string;
  status: 'Completed' | 'In Progress' | 'Production';
  category: string;
  teamSize: string;
  users: string;

  // Media
  thumbnail: string;
  heroImage: string;
  gallery: string[];

  // Links
  github?: string;
  liveDemo?: string;

  // Tech Stack
  technologies: Technology[];

  // Tabs
  overview: Overview;
  features: Feature[];
  architecture: Architecture;
  challenges: Challenge[];
  lessons: Lessons;
}

export interface Screenshot {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface Technology {
  name: string;
  color: string;
  icon?: string;
}

export interface Overview {
  problem: string;
  solution: string;
  outcome: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Architecture {

  frontend: string;

  backend: string;

  api: string;

  database: string;

  authentication: string;

  patterns: string[];

}

export interface Challenge {

  title: string;

  problem: string;

  solution: string;

  impact: string;

}

export interface Lessons {

  technical: string[];

  process: string[];

  future: string[];

}