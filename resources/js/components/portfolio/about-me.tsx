import { CalendarClock, Rocket, Shield, TrendingUp, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const edges = [
    {
        icon: Rocket,
        title: '7-Day Ramp',
        description: 'Mastered the WordPress/Elementor ecosystem in a week to hit a critical launch.',
    },
    {
        icon: Shield,
        title: 'Security-First',
        description: 'Ethical-hacking background — every endpoint built to be fortified.',
    },
    {
        icon: TrendingUp,
        title: 'ROI-Focused',
        description: 'Decisions tied to business outcomes, not just closing tickets.',
    },
];

export function AboutMe() {
    return (
        <section id="about" className="bg-card/30 py-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-start gap-12 md:flex-row">
                    <div className="flex-1 space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-sm font-semibold tracking-wider text-primary uppercase">
                                Professional Profile
                            </h2>
                            <h3 className="bg-gradient-to-r from-foreground to-primary/80 bg-clip-text text-3xl leading-tight font-bold text-transparent md:text-5xl">
                                "I don't just write code.
                                <br />I engineer velocity."
                            </h3>
                        </div>

                        <div className="prose prose-lg space-y-6 leading-relaxed text-muted-foreground dark:prose-invert">
                            <p>
                                I am a <strong>Senior Full Stack Engineer</strong> with over 4 years of experience
                                architecting end-to-end solutions for global markets. My mandate is simple: I act as a{' '}
                                <strong>Force Multiplier</strong> for startups and high-growth companies. Where
                                traditional development cycles stall, I accelerate, delivering robust, scalable products
                                focused strictly on <strong>Return on Investment (ROI)</strong>.
                            </p>

                            <div className="my-8 grid gap-4 border-l-4 border-primary py-2 pl-6">
                                <div>
                                    <h4 className="text-lg font-bold text-foreground">Extreme Adaptability</h4>
                                    <p className="text-base">
                                        I thrive in the unknown. When a global project required it, I mastered the entire
                                        WordPress/Elementor ecosystem in just <strong>7 days</strong> to execute a
                                        critical launch. I apply this same conquest mindset to every tech stack I touch.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-foreground">Speed &amp; AI-Augmentation</h4>
                                    <p className="text-base">
                                        I leverage a modern <strong>"vibe coding" workflow</strong> (Cursor, Windsurf,
                                        n8n) that allows me to operate 3x faster than standard engineers. I bridge the gap
                                        between complex backend logic and pixel-perfect design without the bloat of a
                                        large team.
                                    </p>
                                </div>
                            </div>

                            <p>
                                My approach is <strong>Product-First</strong>. I don't just execute tickets; I own the
                                lifecycle. From refining UI/UX concepts in Photoshop to architecting hard logic in
                                Laravel/NativePHP and managing deployments on Cloudways/Hetzner, I ensure your digital
                                infrastructure is not just functional, but profitable.
                            </p>
                        </div>

                        <div className="pt-2">
                            <p className="text-xl font-semibold text-foreground">
                                Ready to accelerate your roadmap?{' '}
                                <a
                                    href="#contact"
                                    className="text-primary underline-offset-4 decoration-2 hover:underline"
                                >
                                    Let's talk ROI.
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="w-full space-y-6 md:sticky md:top-24 md:w-1/3">
                        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 shadow-lg">
                            <div className="mb-2 flex items-center gap-3">
                                <Zap className="h-5 w-5 text-primary" />
                                <h4 className="text-lg font-semibold text-primary">Velocity Metric</h4>
                            </div>
                            <p className="text-4xl font-bold text-foreground">3x Faster</p>
                            <p className="mt-1 text-sm text-muted-foreground">Delivery via an AI-augmented workflow</p>
                        </div>

                        <div className="rounded-2xl border border-border bg-card p-6 shadow-lg">
                            <h4 className="mb-5 text-lg font-semibold">Why teams hire me</h4>
                            <div className="space-y-5">
                                {edges.map(({ icon: Icon, title, description }) => (
                                    <div key={title} className="flex gap-3">
                                        <div className="mt-0.5 shrink-0 rounded-lg bg-primary/10 p-2 text-primary">
                                            <Icon className="h-4 w-4" />
                                        </div>
                                        <div>
                                            <p className="font-semibold">{title}</p>
                                            <p className="text-sm text-muted-foreground">{description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Button asChild className="mt-6 w-full gap-2">
                                <a href="https://cal.com/dugoyd69-alyuzo/15min" target="_blank" rel="noopener noreferrer">
                                    <CalendarClock className="h-4 w-4" />
                                    Book a Discovery Call
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
