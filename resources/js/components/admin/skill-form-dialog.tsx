import { useForm } from '@inertiajs/react';
import { useEffect } from 'react';
import { IconPicker } from '@/components/admin/icon-picker';
import { TechnologySelector } from '@/components/admin/technology-selector';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { store, update } from '@/routes/admin/skills';
import type { Skill, Technology } from '@/types/portfolio';

interface SkillFormDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    skill: Skill | null;
    allTechnologies: Technology[];
}

type SkillForm = {
    title: string;
    description: string;
    category: string;
    icon_name: string;
    display_order: number;
    technologies: string[];
};

const emptyForm: SkillForm = {
    title: '',
    description: '',
    category: '',
    icon_name: 'Code2',
    display_order: 0,
    technologies: [],
};

const CATEGORY_SUGGESTIONS = ['Frontend & Backend', 'Backend', 'Infrastructure', 'Automation', 'Mobile', 'Security'];

export function SkillFormDialog({ open, onOpenChange, skill, allTechnologies }: SkillFormDialogProps) {
    const form = useForm<SkillForm>(emptyForm);
    const { data, setData, errors, processing } = form;

    useEffect(() => {
        if (!open) return;
        if (skill) {
            form.setData({
                title: skill.title,
                description: skill.description,
                category: skill.category ?? '',
                icon_name: skill.icon_name,
                display_order: skill.display_order,
                technologies: skill.technologies?.map((t) => t.name) ?? [],
            });
        } else {
            form.setData(emptyForm);
        }
        form.clearErrors();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [skill, open]);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        const options = { preserveScroll: true, onSuccess: () => onOpenChange(false) };
        if (skill) {
            form.put(update(skill.id).url, options);
        } else {
            form.post(store().url, options);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[560px]">
                <DialogHeader>
                    <DialogTitle>{skill ? 'Edit Skill' : 'Add Skill'}</DialogTitle>
                    <DialogDescription>
                        {skill ? 'Update this expertise area.' : 'Add a new expertise area to your portfolio.'}
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={submit} className="space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="skill-title">Title</Label>
                        <Input
                            id="skill-title"
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                            required
                        />
                        {errors.title && <p className="text-sm text-destructive">{errors.title}</p>}
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="skill-description">Description</Label>
                        <Textarea
                            id="skill-description"
                            rows={3}
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            required
                        />
                        {errors.description && <p className="text-sm text-destructive">{errors.description}</p>}
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="category">Category</Label>
                        <Input
                            id="category"
                            list="skill-categories"
                            value={data.category}
                            placeholder="e.g. Backend, Automation, Security"
                            onChange={(e) => setData('category', e.target.value)}
                        />
                        <datalist id="skill-categories">
                            {CATEGORY_SUGGESTIONS.map((c) => (
                                <option key={c} value={c} />
                            ))}
                        </datalist>
                        <p className="text-xs text-muted-foreground">
                            Groups this skill under a labelled badge on the homepage.
                        </p>
                        {errors.category && <p className="text-sm text-destructive">{errors.category}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label>Icon</Label>
                            <IconPicker value={data.icon_name} onChange={(v) => setData('icon_name', v)} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="display_order">Display Order</Label>
                            <Input
                                id="display_order"
                                type="number"
                                min={0}
                                value={data.display_order}
                                onChange={(e) => setData('display_order', Number(e.target.value))}
                                required
                            />
                            {errors.display_order && (
                                <p className="text-sm text-destructive">{errors.display_order}</p>
                            )}
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <Label>Technologies</Label>
                        <TechnologySelector
                            options={allTechnologies}
                            value={data.technologies}
                            onChange={(v) => setData('technologies', v)}
                        />
                    </div>

                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                            Cancel
                        </Button>
                        <Button type="submit" disabled={processing}>
                            {processing ? 'Saving…' : 'Save Skill'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
