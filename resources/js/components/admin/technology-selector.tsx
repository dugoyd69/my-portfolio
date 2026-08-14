import { Check, Plus, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import type { Technology } from '@/types/portfolio';

interface TechnologySelectorProps {
    /** All existing technologies to offer as quick picks. */
    options: Technology[];
    /** Currently selected technology names. */
    value: string[];
    onChange: (value: string[]) => void;
}

/**
 * Friendly technology picker: click an existing tech to toggle it, or type a
 * new name and press Add / Enter to create it on the fly. Names are matched
 * case-insensitively so we never create accidental duplicates.
 */
export function TechnologySelector({ options, value, onChange }: TechnologySelectorProps) {
    const [query, setQuery] = useState('');

    const selectedLower = useMemo(() => value.map((v) => v.toLowerCase()), [value]);

    const toggle = (name: string) => {
        if (selectedLower.includes(name.toLowerCase())) {
            onChange(value.filter((v) => v.toLowerCase() !== name.toLowerCase()));
        } else {
            onChange([...value, name]);
        }
    };

    const addNew = () => {
        const name = query.trim();
        if (name === '') return;
        if (!selectedLower.includes(name.toLowerCase())) {
            onChange([...value, name]);
        }
        setQuery('');
    };

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return options.filter((o) => o.name.toLowerCase().includes(q));
    }, [options, query]);

    const isNew = query.trim() !== '' && !options.some((o) => o.name.toLowerCase() === query.trim().toLowerCase());

    return (
        <div className="space-y-3">
            {value.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {value.map((name) => (
                        <span
                            key={name}
                            className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                            {name}
                            <button
                                type="button"
                                onClick={() => toggle(name)}
                                className="rounded-full transition-colors hover:text-destructive"
                                aria-label={`Remove ${name}`}
                            >
                                <X className="h-3 w-3" />
                            </button>
                        </span>
                    ))}
                </div>
            )}

            <div className="flex gap-2">
                <Input
                    value={query}
                    placeholder="Search or add a technology…"
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            addNew();
                        }
                    }}
                />
                {isNew && (
                    <Button type="button" variant="secondary" onClick={addNew}>
                        <Plus className="mr-1 h-4 w-4" />
                        Add
                    </Button>
                )}
            </div>

            <div className="flex max-h-40 flex-wrap gap-2 overflow-y-auto rounded-lg border border-border p-3">
                {filtered.length === 0 ? (
                    <p className="text-xs text-muted-foreground">No matches — type a name and click Add to create one.</p>
                ) : (
                    filtered.map((tech) => {
                        const selected = selectedLower.includes(tech.name.toLowerCase());
                        return (
                            <button
                                key={tech.id}
                                type="button"
                                onClick={() => toggle(tech.name)}
                                className={cn(
                                    'inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs transition-colors',
                                    selected
                                        ? 'border-primary bg-primary/10 text-primary'
                                        : 'border-border text-muted-foreground hover:border-primary/40 hover:text-foreground',
                                )}
                            >
                                {selected && <Check className="h-3 w-3" />}
                                {tech.name}
                            </button>
                        );
                    })
                )}
            </div>
        </div>
    );
}
