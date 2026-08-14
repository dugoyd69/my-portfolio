import { useEffect, useRef, useState } from 'react';

/**
 * Returns a ref and a boolean that flips to true the first time the element
 * scrolls into view. Used to drive one-shot scroll-reveal animations.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(options?: IntersectionObserverInit) {
    const ref = useRef<T>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // If the browser can't observe (or reduced motion), reveal immediately.
        if (typeof IntersectionObserver === 'undefined') {
            setInView(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15, rootMargin: '0px 0px -10% 0px', ...options },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [options]);

    return { ref, inView };
}
