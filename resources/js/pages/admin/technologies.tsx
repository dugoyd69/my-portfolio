import { Head } from '@inertiajs/react';
import { Pencil, Plus, Search, Trash2 } from 'lucide-react';
import { useMemo, useState } from 'react';
import { ConfirmDeleteDialog } from '@/components/admin/confirm-delete-dialog';
import { TechnologyFormDialog } from '@/components/admin/technology-form-dialog';
import { TechBadge } from '@/components/portfolio/tech-badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { destroy } from '@/routes/admin/technologies';
import type { Technology } from '@/types/portfolio';

export default function TechnologiesAdmin({ technologies }: { technologies: Technology[] }) {
    const [formOpen, setFormOpen] = useState(false);
    const [selected, setSelected] = useState<Technology | null>(null);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [deleteId, setDeleteId] = useState<string | null>(null);
    const [query, setQuery] = useState('');

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return technologies;
        return technologies.filter((t) => t.name.toLowerCase().includes(q));
    }, [technologies, query]);

    return (
        <div className="p-4 md:p-6">
            <Head title="Technologies" />

            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Technologies</h1>
                    <p className="mt-1 text-muted-foreground">Manage your technology stack and badges.</p>
                </div>
                <Button
                    onClick={() => {
                        setSelected(null);
                        setFormOpen(true);
                    }}
                >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Technology
                </Button>
            </div>

            <div className="mb-6 flex max-w-sm items-center gap-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="Search technologies…"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="h-9"
                />
            </div>

            {filtered.length === 0 ? (
                <div className="rounded-xl border border-border bg-card/50 py-12 text-center text-muted-foreground">
                    No technologies found.
                </div>
            ) : (
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {filtered.map((tech) => (
                        <div
                            key={tech.id}
                            className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-3 shadow-sm"
                        >
                            <div className="min-w-0">
                                <TechBadge name={tech.name} domain={tech.domain} />
                                <p className="mt-1 pl-1 text-[10px] text-muted-foreground">
                                    {(tech.projects_count ?? 0) + (tech.skills_count ?? 0)} uses
                                </p>
                            </div>
                            <div className="flex shrink-0 gap-0.5 opacity-0 transition-opacity group-hover:opacity-100">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-7 w-7"
                                    onClick={() => {
                                        setSelected(tech);
                                        setFormOpen(true);
                                    }}
                                >
                                    <Pencil className="h-3 w-3" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-7 w-7 text-destructive hover:bg-destructive/10 hover:text-destructive"
                                    onClick={() => {
                                        setDeleteId(tech.id);
                                        setDeleteOpen(true);
                                    }}
                                >
                                    <Trash2 className="h-3 w-3" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <TechnologyFormDialog open={formOpen} onOpenChange={setFormOpen} technology={selected} />

            <ConfirmDeleteDialog
                open={deleteOpen}
                onOpenChange={setDeleteOpen}
                action={deleteId ? destroy(deleteId).url : null}
                title="Delete this technology?"
                description="Skills or projects using it will simply lose the reference."
            />
        </div>
    );
}
