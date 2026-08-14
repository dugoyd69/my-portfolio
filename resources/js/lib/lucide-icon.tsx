import {
    Box,
    BrainCircuit,
    Bug,
    Cloud,
    Code2,
    Cpu,
    Database,
    FolderGit2,
    Globe,
    Layers,
    Lock,
    type LucideIcon,
    Network,
    Palette,
    Rocket,
    Server,
    Shield,
    Smartphone,
    Terminal,
    Workflow,
    Zap,
} from 'lucide-react';

/**
 * Static map of every icon the portfolio can reference by name. Keeping this
 * explicit (instead of `import * as LucideIcons`) lets the bundler tree-shake
 * away the rest of the icon library — the admin icon picker only ever offers
 * these names, so any stored `icon_name` resolves here.
 */
const ICON_MAP: Record<string, LucideIcon> = {
    Code2,
    Shield,
    Database,
    Terminal,
    Workflow,
    Smartphone,
    BrainCircuit,
    Cpu,
    Globe,
    Server,
    Layers,
    Box,
    Cloud,
    FolderGit2,
    Network,
    Lock,
    Zap,
    Rocket,
    Palette,
    Bug,
};

/** Resolve a Lucide icon component by name. Falls back to Code2. */
export function getLucideIcon(name?: string | null): LucideIcon {
    if (!name) {
        return Code2;
    }

    return ICON_MAP[name] ?? Code2;
}

/** Icon names offered in the admin icon picker (keys of ICON_MAP). */
export const ICON_CHOICES: string[] = Object.keys(ICON_MAP);
