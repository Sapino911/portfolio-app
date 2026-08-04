export type ProjectStatus =
    | 'Production'
    | 'In Development'
    | 'Private';

export interface ProjectCard {

    id: number;

    title: string;

    subtitle?: string;

    description: string;

    image?: string;

    technologies: string[];

    language?: string;

    githubUrl?: string;

    liveDemo?: string;

    caseStudy?: boolean;

    stars?: number;

    forks?: number;

    updatedAt?: string;

    status: ProjectStatus;

    featured: boolean;

}