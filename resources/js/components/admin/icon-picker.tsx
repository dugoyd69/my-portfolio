import { getLucideIcon, ICON_CHOICES } from '@/lib/lucide-icon';
import { cn } from '@/lib/utils';

interface IconPickerProps {
    value: string;
    onChange: (value: string) => void;
}

export function IconPicker({ value, onChange }: IconPickerProps) {
    return (
        <div className="grid grid-cols-8 gap-2 rounded-lg border border-border p-3">
            {ICON_CHOICES.map((name) => {
                const Icon = getLucideIcon(name);
                const selected = value === name;
                return (
                    <button
                        key={name}
                        type="button"
                        title={name}
                        onClick={() => onChange(name)}
                        className={cn(
                            'flex aspect-square items-center justify-center rounded-md border transition-colors',
                            selected
                                ? 'border-primary bg-primary/10 text-primary'
                                : 'border-transparent text-muted-foreground hover:bg-muted hover:text-foreground',
                        )}
                    >
                        <Icon className="h-5 w-5" />
                    </button>
                );
            })}
        </div>
    );
}
