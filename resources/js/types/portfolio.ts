export interface Technology {
    id: string;
    name: string;
    domain?: string | null;
    icon_url?: string | null;
    skills_count?: number;
    projects_count?: number;
}

export interface Skill {
    id: string;
    title: string;
    description: string;
    category: string | null;
    icon_name: string;
    display_order: number;
    technologies?: Technology[];
}

export interface ProjectImage {
    id: string;
    image_url: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    image_url: string;
    icon_name: string;
    github_url: string | null;
    live_url: string | null;
    featured: boolean;
    display_order: number;
    highlights: string | null;
    created_at: string;
    technologies?: Technology[];
    images?: ProjectImage[];
}
