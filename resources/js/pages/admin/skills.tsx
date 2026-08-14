import { Head } from '@inertiajs/react';
import { Pencil, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { ConfirmDeleteDialog } from '@/components/admin/confirm-delete-dialog';
import { SkillFormDialog } from '@/components/admin/skill-form-dialog';
import { TechBadge } from '@/components/portfolio/tech-badge';
import { Button } from '@/components/ui/button';
import { getLucideIcon } from '@/lib/lucide-icon';
import { destroy } from '@/routes/admin/skills';
import type { Skill, Technology } from '@/types/portfolio';

interface SkillsAdminProps {
    skills: Skill[];
    allTechnologies: Technology[];
}

export default function SkillsAdmin({ skills, allTechnologies }: SkillsAdminProps) {
    const [formOpen, setFormOpen] = useState(false);
    const [selected, setSelected] = useState<Skill | null>(null);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [deleteId, setDeleteId] = useState<string | null>(null);

    return (
        <div className="p-4 md:p-6">
            <Head title="Skills" />

            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Skills</h1>
                    <p className="mt-1 text-muted-foreground">Manage your areas of expertise.</p>
                </div>
                <Button
                    onClick={() => {
                        setSelected(null);
                        setFormOpen(true);
                    }}
                >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Skill
                </Button>
            </div>

            {skills.length === 0 ? (
                <div className="rounded-xl border border-border bg-card/50 py-12 text-center text-muted-foreground">
                    No skills yet. Create one to get started.
                </div>
            ) : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {skills.map((skill) => {
                        const Icon = getLucideIcon(skill.icon_name);
                        return (
                            <div
                                key={skill.id}
                                className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
                            >
                                <div className="mb-4 flex items-start justify-between">
                                    <div className="rounded-xl bg-primary/10 p-3 text-primary">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <div className="flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8"
                                            onClick={() => {
                                                setSelected(skill);
                                                setFormOpen(true);
                                            }}
                                        >
                                            <Pencil className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 text-destructive hover:bg-destructive/10 hover:text-destructive"
                                            onClick={() => {
                                                setDeleteId(skill.id);
                                                setDeleteOpen(true);
                                            }}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>

                                <div className="mb-2 flex items-center gap-2">
                                    <h3 className="text-lg font-semibold">{skill.title}</h3>
                                    {skill.category && (
                                        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-primary uppercase">
                                            {skill.category}
                                        </span>
                                    )}
                                </div>
                                <p className="mb-4 line-clamp-2 flex-grow text-sm text-muted-foreground">
                                    {skill.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {skill.technologies?.map((tech) => (
                                        <TechBadge key={tech.id} name={tech.name} domain={tech.domain} />
                                    ))}
                                </div>
                                <p className="mt-4 text-xs text-muted-foreground">Order: {skill.display_order}</p>
                            </div>
                        );
                    })}
                </div>
            )}

            <SkillFormDialog
                open={formOpen}
                onOpenChange={setFormOpen}
                skill={selected}
                allTechnologies={allTechnologies}
            />

            <ConfirmDeleteDialog
                open={deleteOpen}
                onOpenChange={setDeleteOpen}
                action={deleteId ? destroy(deleteId).url : null}
                title="Delete this skill?"
                description="This permanently removes the skill from your portfolio."
            />
        </div>
    );
}
