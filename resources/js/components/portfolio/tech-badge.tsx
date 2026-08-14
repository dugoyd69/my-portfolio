import { cn } from '@/lib/utils';

const techDomains: Record<string, string> = {
    React: 'react.dev',
    TypeScript: 'typescriptlang.org',
    Laravel: 'laravel.com',
    Inertia: 'inertiajs.com',
    Vite: 'vitejs.dev',
    'Vue.js': 'vuejs.org',
    VueJS: 'vuejs.org',
    'Tailwind CSS': 'tailwindcss.com',
    Bootstrap: 'getbootstrap.com',
    WordPress: 'wordpress.org',
    Elementor: 'elementor.com',
    WooCommerce: 'woocommerce.com',
    'Google Tag Manager': 'tagmanager.google.com',
    'Facebook Pixel': 'facebook.com',
    n8n: 'n8n.io',
    FlutterFlow: 'flutterflow.io',
    Flutter: 'flutter.dev',
    NativePHP: 'nativephp.com',
    Adalo: 'adalo.com',
    'Kali Linux': 'kali.org',
    'Burp Suite': 'portswigger.net',
    MySQL: 'mysql.com',
    Supabase: 'supabase.com',
    Vercel: 'vercel.com',
    Cloudways: 'cloudways.com',
    'Digital Ocean': 'digitalocean.com',
    Coolify: 'coolify.io',
    GitHub: 'github.com',
    GitLab: 'gitlab.com',
    Bitbucket: 'bitbucket.org',
};

interface TechBadgeProps {
    name: string;
    domain?: string | null;
    className?: string;
    showIcon?: boolean;
}

export function TechBadge({ name, domain, className, showIcon = true }: TechBadgeProps) {
    const finalDomain = domain || techDomains[name];

    return (
        <span
            className={cn(
                'flex cursor-default items-center gap-1.5 rounded-full border border-transparent bg-muted px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/20 hover:bg-primary/10 hover:text-primary',
                className,
            )}
        >
            {showIcon && finalDomain && (
                <img
                    src={`https://www.google.com/s2/favicons?sz=64&domain_url=${finalDomain}`}
                    alt={`${name} icon`}
                    className="h-3.5 w-3.5 rounded-full bg-white object-contain p-[1px]"
                    loading="lazy"
                />
            )}
            {name}
        </span>
    );
}
