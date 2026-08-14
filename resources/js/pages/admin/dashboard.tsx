import { Head, Link } from '@inertiajs/react';
import { BrainCircuit, Cpu, FolderGit2, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import admin from '@/routes/admin';
import type { Project } from '@/types/portfolio';

interface DashboardProps {
    stats: {
        projects: number;
        skills: number;
        technologies: number;
    };
    recentProjects: Pick<Project, 'id' | 'title' | 'image_url' | 'created_at'>[];
}

const cards = [
    { key: 'projects' as const, label: 'Projects', icon: FolderGit2, href: admin.projects.index() },
    { key: 'skills' as const, label: 'Skills', icon: BrainCircuit, href: admin.skills.index() },
    { key: 'technologies' as const, label: 'Technologies', icon: Cpu, href: admin.technologies.index() },
];

export default function Dashboard({ stats, recentProjects }: DashboardProps) {
    return (
        <div className="p-4 md:p-6">
            <Head title="Admin Dashboard" />

            <div className="mb-8">
                <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
                <p className="mt-1 text-muted-foreground">Manage your portfolio content from one place.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cards.map(({ key, label, icon: Icon, href }) => (
                    <Link
                        key={key}
                        href={href}
                        className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary/40"
                    >
                        <div className="flex items-center justify-between">
                            <div className="rounded-lg bg-primary/10 p-3 text-primary">
                                <Icon className="h-6 w-6" />
                            </div>
                            <span className="text-3xl font-bold">{stats[key]}</span>
                        </div>
                        <p className="mt-4 font-medium transition-colors group-hover:text-primary">Manage {label}</p>
                    </Link>
                ))}
            </div>

            <div className="mt-8 rounded-xl border border-border bg-card shadow-sm">
                <div className="flex items-center justify-between border-b border-border p-6">
                    <h2 className="text-lg font-semibold">Recent Projects</h2>
                    <Button size="sm" asChild>
                        <Link href={admin.projects.index()}>
                            <Plus className="mr-1 h-4 w-4" />
                            New Project
                        </Link>
                    </Button>
                </div>

                {recentProjects.length === 0 ? (
                    <p className="p-6 text-sm text-muted-foreground">No projects yet.</p>
                ) : (
                    <ul className="divide-y divide-border">
                        {recentProjects.map((project) => (
                            <li key={project.id} className="flex items-center gap-4 p-4">
                                <div className="h-12 w-16 shrink-0 overflow-hidden rounded-md bg-muted">
                                    <img src={project.image_url} alt={project.title} className="h-full w-full object-cover" />
                                </div>
                                <span className="line-clamp-1 font-medium">{project.title}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
