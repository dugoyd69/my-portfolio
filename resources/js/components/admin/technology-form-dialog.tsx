import { useForm } from '@inertiajs/react';
import { useEffect } from 'react';
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
import { store, update } from '@/routes/admin/technologies';
import type { Technology } from '@/types/portfolio';

interface TechnologyFormDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    technology: Technology | null;
}

type TechForm = {
    name: string;
    domain: string;
    icon_url: string;
};

const emptyForm: TechForm = { name: '', domain: '', icon_url: '' };

export function TechnologyFormDialog({ open, onOpenChange, technology }: TechnologyFormDialogProps) {
    const form = useForm<TechForm>(emptyForm);
    const { data, setData, errors, processing } = form;

    useEffect(() => {
        if (!open) return;
        if (technology) {
            form.setData({
                name: technology.name,
                domain: technology.domain ?? '',
                icon_url: technology.icon_url ?? '',
            });
        } else {
            form.setData(emptyForm);
        }
        form.clearErrors();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [technology, open]);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        const options = { preserveScroll: true, onSuccess: () => onOpenChange(false) };
        if (technology) {
            form.put(update(technology.id).url, options);
        } else {
            form.post(store().url, options);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[440px]">
                <DialogHeader>
                    <DialogTitle>{technology ? 'Edit Technology' : 'Add Technology'}</DialogTitle>
                    <DialogDescription>
                        The domain powers the little favicon shown on each badge (e.g. <code>laravel.com</code>).
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={submit} className="space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="tech-name">Name</Label>
                        <Input
                            id="tech-name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />
                        {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="tech-domain">Domain (optional)</Label>
                        <Input
                            id="tech-domain"
                            value={data.domain}
                            placeholder="laravel.com"
                            onChange={(e) => setData('domain', e.target.value)}
                        />
                        {errors.domain && <p className="text-sm text-destructive">{errors.domain}</p>}
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="tech-icon">Icon URL (optional)</Label>
                        <Input
                            id="tech-icon"
                            value={data.icon_url}
                            onChange={(e) => setData('icon_url', e.target.value)}
                        />
                        {errors.icon_url && <p className="text-sm text-destructive">{errors.icon_url}</p>}
                    </div>

                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                            Cancel
                        </Button>
                        <Button type="submit" disabled={processing}>
                            {processing ? 'Saving…' : 'Save'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
