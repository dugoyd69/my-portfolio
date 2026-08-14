import { useForm } from '@inertiajs/react';
import { Plus, X } from 'lucide-react';
import { useEffect } from 'react';
import { IconPicker } from '@/components/admin/icon-picker';
import { TechnologySelector } from '@/components/admin/technology-selector';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
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
import { store, update } from '@/routes/admin/projects';
import type { Project, Technology } from '@/types/portfolio';

interface ProjectFormDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    project: Project | null;
    allTechnologies: Technology[];
}

type ProjectForm = {
    title: string;
    description: string;
    image_url: string;
    icon_name: string;
    github_url: string;
    live_url: string;
    featured: boolean;
    display_order: number;
    highlights: string;
    technologies: string[];
    gallery_images: string[];
};

const emptyForm: ProjectForm = {
    title: '',
    description: '',
    image_url: '',
    icon_name: 'Code2',
    github_url: '',
    live_url: '',
    featured: false,
    display_order: 0,
    highlights: '',
    technologies: [],
    gallery_images: [],
};

export function ProjectFormDialog({ open, onOpenChange, project, allTechnologies }: ProjectFormDialogProps) {
    const form = useForm<ProjectForm>(emptyForm);
    const { data, setData, errors, processing } = form;

    useEffect(() => {
        if (!open) return;
        if (project) {
            form.setData({
                title: project.title,
                description: project.description,
                image_url: project.image_url,
                icon_name: project.icon_name,
                github_url: project.github_url ?? '',
                live_url: project.live_url ?? '',
                featured: project.featured ?? false,
                display_order: project.display_order ?? 0,
                highlights: project.highlights ?? '',
                technologies: project.technologies?.map((t) => t.name) ?? [],
                gallery_images: project.images?.map((i) => i.image_url) ?? [],
            });
        } else {
            form.setData(emptyForm);
        }
        form.clearErrors();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [project, open]);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        const options = {
            preserveScroll: true,
            onSuccess: () => onOpenChange(false),
        };
        if (project) {
            form.put(update(project.id).url, options);
        } else {
            form.post(store().url, options);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[640px]">
                <DialogHeader>
                    <DialogTitle>{project ? 'Edit Project' : 'Add Project'}</DialogTitle>
                    <DialogDescription>
                        {project ? 'Update the details for this project.' : 'Add a new project to your portfolio.'}
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={submit} className="space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="title">Title</Label>
                        <Input id="title" value={data.title} onChange={(e) => setData('title', e.target.value)} required />
                        {errors.title && <p className="text-sm text-destructive">{errors.title}</p>}
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            rows={4}
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            required
                        />
                        {errors.description && <p className="text-sm text-destructive">{errors.description}</p>}
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="highlights">Highlights / Outcomes</Label>
                        <Textarea
                            id="highlights"
                            rows={4}
                            value={data.highlights}
                            placeholder={'One outcome per line, e.g.\nReduced page load time by 40% via query optimization\nIntegrated the booking form with the client CRM via webhooks'}
                            onChange={(e) => setData('highlights', e.target.value)}
                        />
                        <p className="text-xs text-muted-foreground">
                            One bullet per line. Shown on the project detail page. Focus on business impact.
                        </p>
                        {errors.highlights && <p className="text-sm text-destructive">{errors.highlights}</p>}
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="image_url">Main Image URL</Label>
                        <Input
                            id="image_url"
                            value={data.image_url}
                            placeholder="/img/portfolio/example.png or https://…"
                            onChange={(e) => setData('image_url', e.target.value)}
                            required
                        />
                        {errors.image_url && <p className="text-sm text-destructive">{errors.image_url}</p>}
                    </div>

                    <div className="grid gap-2">
                        <Label>Gallery Images</Label>
                        {data.gallery_images.map((url, index) => (
                            <div key={index} className="flex gap-2">
                                <Input
                                    value={url}
                                    placeholder="Image URL"
                                    onChange={(e) => {
                                        const next = [...data.gallery_images];
                                        next[index] = e.target.value;
                                        setData('gallery_images', next);
                                    }}
                                />
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    className="text-destructive"
                                    onClick={() =>
                                        setData(
                                            'gallery_images',
                                            data.gallery_images.filter((_, i) => i !== index),
                                        )
                                    }
                                >
                                    <X className="h-4 w-4" />
                                </Button>
                            </div>
                        ))}
                        <Button
                            type="button"
                            variant="secondary"
                            size="sm"
                            className="w-fit"
                            onClick={() => setData('gallery_images', [...data.gallery_images, ''])}
                        >
                            <Plus className="mr-1 h-4 w-4" />
                            Add Gallery Image
                        </Button>
                    </div>

                    <div className="grid gap-2">
                        <Label>Icon</Label>
                        <IconPicker value={data.icon_name} onChange={(v) => setData('icon_name', v)} />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="github_url">GitHub URL</Label>
                            <Input
                                id="github_url"
                                value={data.github_url}
                                onChange={(e) => setData('github_url', e.target.value)}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="live_url">Live URL</Label>
                            <Input
                                id="live_url"
                                value={data.live_url}
                                onChange={(e) => setData('live_url', e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="rounded-lg border border-border p-4">
                        <div className="flex items-start gap-3">
                            <Checkbox
                                id="featured"
                                checked={data.featured}
                                onCheckedChange={(checked) => setData('featured', checked === true)}
                            />
                            <div className="grid gap-1 leading-none">
                                <Label htmlFor="featured">Feature on homepage</Label>
                                <p className="text-xs text-muted-foreground">
                                    Only featured projects appear on the public homepage. Keep it to your 4–6 best.
                                </p>
                            </div>
                        </div>
                        {data.featured && (
                            <div className="mt-4 grid max-w-[200px] gap-2">
                                <Label htmlFor="display_order">Homepage order</Label>
                                <Input
                                    id="display_order"
                                    type="number"
                                    min={0}
                                    value={data.display_order}
                                    onChange={(e) => setData('display_order', Number(e.target.value))}
                                />
                                <p className="text-xs text-muted-foreground">Lower numbers show first.</p>
                            </div>
                        )}
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
                            {processing ? 'Saving…' : 'Save Project'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
