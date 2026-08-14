import { Head, router } from '@inertiajs/react';
import { ExternalLink, Github, Pencil, Plus, Star, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { ConfirmDeleteDialog } from '@/components/admin/confirm-delete-dialog';
import { ProjectFormDialog } from '@/components/admin/project-form-dialog';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { destroy, featured as featuredRoute } from '@/routes/admin/projects';
import type { Project, Technology } from '@/types/portfolio';

interface ProjectsAdminProps {
    projects: Project[];
    allTechnologies: Technology[];
}

export default function ProjectsAdmin({ projects, allTechnologies }: ProjectsAdminProps) {
    const [formOpen, setFormOpen] = useState(false);
    const [selected, setSelected] = useState<Project | null>(null);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [deleteId, setDeleteId] = useState<string | null>(null);

    const openAdd = () => {
        setSelected(null);
        setFormOpen(true);
    };

    const openEdit = (project: Project) => {
        setSelected(project);
        setFormOpen(true);
    };

    const openDelete = (id: string) => {
        setDeleteId(id);
        setDeleteOpen(true);
    };

    const toggleFeatured = (project: Project) => {
        router.patch(featuredRoute(project.id).url, {}, { preserveScroll: true });
    };

    const featuredCount = projects.filter((p) => p.featured).length;

    return (
        <div className="p-4 md:p-6">
            <Head title="Projects" />

            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Projects</h1>
                    <p className="mt-1 text-muted-foreground">
                        Manage your portfolio projects. <span className="font-medium text-foreground">{featuredCount}</span>{' '}
                        featured on the homepage.
                    </p>
                </div>
                <Button onClick={openAdd}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Project
                </Button>
            </div>

            {projects.length === 0 ? (
                <div className="rounded-xl border border-border bg-card/50 py-12 text-center text-muted-foreground">
                    No projects yet. Create one to get started.
                </div>
            ) : (
                <div className="grid gap-4">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4 shadow-sm md:flex-row"
                        >
                            <div className="h-32 w-full shrink-0 overflow-hidden rounded-lg bg-muted md:w-48">
                                <img src={project.image_url} alt={project.title} className="h-full w-full object-cover" />
                            </div>

                            <div className="flex-1 space-y-3">
                                <div className="flex items-start justify-between gap-2">
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-lg font-semibold">{project.title}</h3>
                                            {project.featured && (
                                                <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-primary uppercase">
                                                    <Star className="h-3 w-3 fill-current" />
                                                    Featured
                                                </span>
                                            )}
                                        </div>
                                        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                                            {project.description}
                                        </p>
                                    </div>
                                    <div className="flex shrink-0 gap-1">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            title={project.featured ? 'Remove from homepage' : 'Feature on homepage'}
                                            onClick={() => toggleFeatured(project)}
                                        >
                                            <Star
                                                className={cn(
                                                    'h-4 w-4',
                                                    project.featured && 'fill-primary text-primary',
                                                )}
                                            />
                                        </Button>
                                        <Button variant="ghost" size="icon" onClick={() => openEdit(project)}>
                                            <Pencil className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="text-destructive hover:bg-destructive/10 hover:text-destructive"
                                            onClick={() => openDelete(project.id)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.technologies?.map((tech) => (
                                        <span
                                            key={tech.id}
                                            className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary"
                                        >
                                            {tech.name}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 pt-1 text-sm text-muted-foreground">
                                    {project.github_url && (
                                        <a
                                            href={project.github_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center hover:text-foreground"
                                        >
                                            <Github className="mr-1 h-4 w-4" /> Code
                                        </a>
                                    )}
                                    {project.live_url && (
                                        <a
                                            href={project.live_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center hover:text-foreground"
                                        >
                                            <ExternalLink className="mr-1 h-4 w-4" /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <ProjectFormDialog
                open={formOpen}
                onOpenChange={setFormOpen}
                project={selected}
                allTechnologies={allTechnologies}
            />

            <ConfirmDeleteDialog
                open={deleteOpen}
                onOpenChange={setDeleteOpen}
                action={deleteId ? destroy(deleteId).url : null}
                title="Delete this project?"
                description="This permanently removes the project and its gallery images."
            />
        </div>
    );
}
