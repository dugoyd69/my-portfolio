import type { ReactNode } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

interface RevealProps {
    children: ReactNode;
    className?: string;
    /** Delay in ms before this element animates in. Useful for staggering. */
    delay?: number;
}

/**
 * Wraps content in a one-shot scroll-reveal (fade + slide up). Motion is
 * disabled automatically for users who prefer reduced motion via the
 * `motion-reduce` utilities.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
    const { ref, inView } = useInView();

    return (
        <div
            ref={ref}
            style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
            className={cn(
                'transition-all duration-700 ease-out motion-reduce:transition-none',
                inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100',
                className,
            )}
        >
            {children}
        </div>
    );
}
