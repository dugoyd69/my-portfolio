import { Link } from '@inertiajs/react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { TechBadge } from '@/components/portfolio/tech-badge';
import { Button } from '@/components/ui/button';
import { getLucideIcon } from '@/lib/lucide-icon';
import { show } from '@/routes/project';
import type { Project } from '@/types/portfolio';

export function Projects({ projects }: { projects: Project[] }) {
    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="mb-3 text-sm font-semibold tracking-wider text-primary uppercase">Portfolio</h2>
                    <p className="text-3xl font-bold md:text-4xl lg:text-5xl">Featured Projects</p>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {projects.map((project) => {
                        const Icon = getLucideIcon(project.icon_name);
                        return (
                            <div
                                key={project.id}
                                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
                            >
                                <div className="relative h-48 shrink-0 overflow-hidden">
                                    <img
                                        src={project.image_url}
                                        alt={project.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                                    <div className="absolute top-4 left-4 rounded-lg bg-card/80 p-2 backdrop-blur-sm">
                                        <Icon className="h-5 w-5 text-primary" />
                                    </div>
                                </div>

                                <div className="flex flex-1 flex-col p-6">
                                    <h3 className="mb-2 text-xl font-semibold transition-colors group-hover:text-primary">
                                        {project.title}
                                    </h3>
                                    <p className="mb-4 line-clamp-3 leading-relaxed text-muted-foreground">
                                        {project.description}
                                    </p>

                                    <div className="mt-auto mb-6 flex flex-wrap gap-2">
                                        {project.technologies?.map((tech) => (
                                            <TechBadge key={tech.id} name={tech.name} domain={tech.domain} />
                                        ))}
                                    </div>

                                    <div className="flex gap-3">
                                        <Button variant="outline" size="sm" className="flex-1" asChild>
                                            <Link href={show(project.id)}>
                                                View Details
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                        {project.live_url && (
                                            <Button size="sm" variant="ghost" className="px-3" asChild>
                                                <a href={project.live_url} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink className="h-4 w-4" />
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
