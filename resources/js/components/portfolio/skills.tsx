import { TechBadge } from '@/components/portfolio/tech-badge';
import { getLucideIcon } from '@/lib/lucide-icon';
import type { Skill } from '@/types/portfolio';

export function Skills({ skills }: { skills: Skill[] }) {
    return (
        <section id="skills" className="relative overflow-hidden py-24">
            <div className="absolute top-1/4 left-1/4 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute right-1/4 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl" />

            <div className="container mx-auto px-4">
                <div className="mb-16 space-y-4 text-center">
                    <h2 className="text-sm font-semibold tracking-wider text-primary uppercase">My Capabilities</h2>
                    <p className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
                        Technical Expertise
                    </p>
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        A hybrid stack combining foundational engineering with modern AI acceleration.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {skills.map((skill) => {
                        const IconComponent = getLucideIcon(skill.icon_name);
                        const title = skill.title.toLowerCase();
                        const isAiSkill =
                            title.includes('ai') || title.includes('automation') || title.includes('cms');

                        return (
                            <div
                                key={skill.id}
                                className={`group relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                                    isAiSkill
                                        ? 'border-purple-500/30 bg-purple-500/5 hover:border-purple-500/60 hover:shadow-purple-500/10'
                                        : 'border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-primary/5'
                                }`}
                            >
                                <div className="mb-4 flex items-start justify-between">
                                    <div
                                        className={`rounded-xl p-3 transition-colors duration-300 ${
                                            isAiSkill
                                                ? 'bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white'
                                                : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground'
                                        }`}
                                    >
                                        <IconComponent className="h-6 w-6" />
                                    </div>

                                    {skill.category && (
                                        <span
                                            className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase ${
                                                isAiSkill
                                                    ? 'border-purple-500/30 bg-purple-500/5 text-purple-400'
                                                    : 'border-primary/20 bg-primary/5 text-primary'
                                            }`}
                                        >
                                            {skill.category}
                                        </span>
                                    )}
                                </div>

                                <h3 className="mb-3 text-xl font-semibold transition-colors group-hover:text-foreground">
                                    {skill.title}
                                </h3>

                                <p className="mb-6 flex-grow text-sm leading-relaxed text-muted-foreground">
                                    {skill.description}
                                </p>

                                <div className="mt-auto flex flex-wrap gap-2 border-t border-border/50 pt-4">
                                    {skill.technologies?.map((tech) => (
                                        <TechBadge key={tech.id} name={tech.name} domain={tech.domain} />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
