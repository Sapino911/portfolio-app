export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;

  duration: string;
  users: string;
  category: string;

  liveDemo?: string;
  github?: string;

  technologies: string[];

  screenshots: string[];

  problem: string;
  solution: string;

  features: string[];

  challenges: string[];

  lessonsLearned: string[];
}