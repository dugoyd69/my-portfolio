import { Award, Clock, Rocket, Zap, type LucideIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useInView } from '@/hooks/use-in-view';

interface Stat {
    icon: LucideIcon;
    prefix: string;
    value: number;
    suffix: string;
    label: string;
}

const prefersReducedMotion = () =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function useCountUp(target: number, start: boolean, delay = 0, duration = 1400) {
    const [value, setValue] = useState(0);
    const rafRef = useRef<number>(0);

    useEffect(() => {
        if (!start) return;

        if (prefersReducedMotion()) {
            setValue(target);
            return;
        }

        let startTime: number | null = null;
        const timeout = window.setTimeout(() => {
            const tick = (now: number) => {
                if (startTime === null) startTime = now;
                const progress = Math.min((now - startTime) / duration, 1);
                // easeOutExpo — fast start, gentle settle
                const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                setValue(target * eased);
                if (progress < 1) {
                    rafRef.current = requestAnimationFrame(tick);
                } else {
                    setValue(target);
                }
            };
            rafRef.current = requestAnimationFrame(tick);
        }, delay);

        return () => {
            window.clearTimeout(timeout);
            cancelAnimationFrame(rafRef.current);
        };
    }, [start, target, delay, duration]);

    return value;
}

function StatItem({ stat, start, index }: { stat: Stat; start: boolean; index: number }) {
    const Icon = stat.icon;
    const animated = useCountUp(stat.value, start, index * 120);

    return (
        <div className="group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1">
            <div className="mb-3 rounded-xl bg-primary/10 p-2.5 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
            </div>
            <p className="flex items-baseline bg-gradient-to-r from-foreground to-primary bg-clip-text text-4xl font-bold text-transparent tabular-nums md:text-5xl">
                {stat.prefix}
                {Math.round(animated)}
                {stat.suffix}
            </p>
            <p className="mt-2 text-sm tracking-wide text-muted-foreground uppercase">{stat.label}</p>
        </div>
    );
}

export function StatsBand({ projectCount }: { projectCount: number }) {
    const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });
    const shipped = projectCount >= 10 ? Math.floor(projectCount / 10) * 10 : projectCount;

    const stats: Stat[] = [
        { icon: Award, prefix: '', value: 4, suffix: '+', label: 'Years Experience' },
        { icon: Rocket, prefix: '', value: shipped, suffix: '+', label: 'Projects Shipped' },
        { icon: Zap, prefix: '', value: 3, suffix: 'x', label: 'Faster Delivery' },
        { icon: Clock, prefix: '<', value: 2, suffix: 'h', label: 'Avg. Response' },
    ];

    return (
        <section className="border-y border-border bg-card/30">
            <div ref={ref} className="container mx-auto grid grid-cols-2 gap-y-10 px-4 py-14 md:grid-cols-4 md:gap-8">
                {stats.map((stat, index) => (
                    <StatItem key={stat.label} stat={stat} start={inView} index={index} />
                ))}
            </div>
        </section>
    );
}
