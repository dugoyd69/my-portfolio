import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, Check, ExternalLink, Github, MonitorOff, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Footer } from '@/components/portfolio/footer';
import { Navbar } from '@/components/portfolio/navbar';
import { TechBadge } from '@/components/portfolio/tech-badge';
import { Button } from '@/components/ui/button';
import { getLucideIcon } from '@/lib/lucide-icon';
import { home } from '@/routes';
import { show } from '@/routes/project';
import type { Project } from '@/types/portfolio';

interface ProjectDetailProps {
    project: Project;
    otherProjects: Project[];
}

export default function ProjectDetail({ project, otherProjects }: ProjectDetailProps) {
    const Icon = getLucideIcon(project.icon_name);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [activeImage, setActiveImage] = useState(project.image_url);

    const uniqueImages = useMemo(() => {
        const all = [project.image_url, ...(project.images?.map((img) => img.image_url) ?? [])];
        return Array.from(new Set(all));
    }, [project]);

    useEffect(() => {
        setActiveImage(project.image_url);
        window.scrollTo(0, 0);
    }, [project]);

    useEffect(() => {
        if (!lightboxOpen) return;
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setLightboxOpen(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen]);

    const handleImageChange = (url: string) => {
        if (url === activeImage) return;
        setIsAnimating(true);
        setTimeout(() => {
            setActiveImage(url);
            setIsAnimating(false);
        }, 300);
    };

    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Head title={`${project.title} — Gerald Pajulas`}>
                <meta name="description" content={project.description} />
            </Head>

            <Navbar />

            <main className="container mx-auto flex-1 px-4 py-20 md:py-32">
                <Button variant="ghost" className="mb-8" asChild>
                    <Link href={`${home().url}#projects`}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Projects
                    </Link>
                </Button>

                <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                    <div className="space-y-6">
                        <div
                            className="group relative aspect-video cursor-zoom-in overflow-hidden rounded-2xl border border-border bg-muted shadow-2xl"
                            onClick={() => setLightboxOpen(true)}
                        >
                            <img
                                src={activeImage}
                                alt={project.title}
                                className={`h-full w-full object-cover transition-all duration-500 group-hover:scale-105 ${
                                    isAnimating ? 'opacity-0' : 'opacity-100'
                                }`}
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/10">
                                <span className="rounded-full bg-background/80 px-4 py-2 text-sm font-medium opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                                    View Fullscreen
                                </span>
                            </div>
                            <div className="absolute top-4 left-4 rounded-xl border border-border bg-background/90 p-3 backdrop-blur-sm">
                                <Icon className="h-6 w-6 text-primary" />
                            </div>
                        </div>

                        {uniqueImages.length > 1 && (
                            <div className="flex gap-2 overflow-x-auto pb-2">
                                {uniqueImages.map((img, index) => (
                                    <button
                                        key={img}
                                        onClick={() => handleImageChange(img)}
                                        className={`relative h-20 w-32 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                                            activeImage === img
                                                ? 'border-primary ring-2 ring-primary/20'
                                                : 'border-transparent opacity-70 hover:opacity-100'
                                        }`}
                                    >
                                        <img
                                            src={img}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="h-full w-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}

                        <div className="flex flex-col gap-4 sm:flex-row">
                            {project.github_url && (
                                <Button className="flex-1" variant="outline" asChild>
                                    <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                                        <Github className="mr-2 h-4 w-4" />
                                        View Source
                                    </a>
                                </Button>
                            )}
                            {project.live_url ? (
                                <Button className="flex-1" asChild>
                                    <a href={project.live_url} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        Live Demo
                                    </a>
                                </Button>
                            ) : (
                                <Button className="flex-1" disabled variant="secondary">
                                    <MonitorOff className="mr-2 h-4 w-4" />
                                    Not Available Online
                                </Button>
                            )}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h1 className="mb-4 text-4xl font-bold md:text-5xl">{project.title}</h1>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies?.map((tech) => (
                                    <TechBadge key={tech.id} name={tech.name} domain={tech.domain} className="text-sm" />
                                ))}
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none dark:prose-invert">
                            <p className="leading-relaxed whitespace-pre-wrap text-muted-foreground">
                                {project.description}
                            </p>
                        </div>

                        {project.highlights?.trim() && (
                            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                                <h2 className="mb-4 text-sm font-semibold tracking-wider text-primary uppercase">
                                    Key Outcomes
                                </h2>
                                <ul className="space-y-3">
                                    {project.highlights
                                        .split('\n')
                                        .map((line) => line.trim())
                                        .filter(Boolean)
                                        .map((line, i) => (
                                            <li key={i} className="flex gap-3 text-muted-foreground">
                                                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                                <span>{line}</span>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        )}

                        {otherProjects.length > 0 && (
                            <div className="border-t border-border pt-12">
                                <h3 className="mb-6 text-2xl font-bold">Other Projects</h3>
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                                    {otherProjects.map((p) => (
                                        <Link key={p.id} href={show(p.id)} className="group block space-y-3">
                                            <div className="aspect-video overflow-hidden rounded-xl border border-border bg-muted">
                                                <img
                                                    src={p.image_url}
                                                    alt={p.title}
                                                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="line-clamp-1 font-semibold transition-colors group-hover:text-primary">
                                                    {p.title}
                                                </h4>
                                                <p className="line-clamp-2 text-sm text-muted-foreground">
                                                    {p.description}
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            {lightboxOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4 backdrop-blur-xl"
                    role="dialog"
                    aria-modal="true"
                    onClick={() => setLightboxOpen(false)}
                >
                    <button
                        className="absolute top-4 right-4 rounded-full bg-border/50 p-2 transition-colors hover:bg-border"
                        aria-label="Close"
                        onClick={(event) => {
                            event.stopPropagation();
                            setLightboxOpen(false);
                        }}
                    >
                        <X className="h-6 w-6" />
                    </button>
                    <img
                        src={activeImage}
                        alt={project.title}
                        className="max-h-[90vh] max-w-full rounded-lg object-contain shadow-2xl"
                    />
                </div>
            )}

            <Footer />
        </div>
    );
}
