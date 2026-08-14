import { useId } from 'react';

/**
 * "GP" monogram badge — a rounded square in the site's blue gradient with the
 * initials in bold. Used across the navbar, footer, admin sidebar, and favicon.
 */
export function GpLogo({ className }: { className?: string }) {
    const rawId = useId();
    const gid = `gp-grad-${rawId.replace(/:/g, '')}`;

    return (
        <svg
            viewBox="0 0 40 40"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Gerald Pajulas logo"
        >
            <defs>
                <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#5372e0" />
                    <stop offset="1" stopColor="#22397d" />
                </linearGradient>
            </defs>
            <rect width="40" height="40" rx="11" fill={`url(#${gid})`} />
            <text
                x="20"
                y="21"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="Poppins, ui-sans-serif, system-ui, sans-serif"
                fontWeight="700"
                fontSize="17"
                letterSpacing="0.5"
                fill="#ffffff"
            >
                GP
            </text>
        </svg>
    );
}
