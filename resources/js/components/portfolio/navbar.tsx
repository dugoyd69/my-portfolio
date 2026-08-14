import { Link, router, usePage } from '@inertiajs/react';
import { CalendarClock, LayoutDashboard, Menu, Terminal } from 'lucide-react';
import { ThemeToggle } from '@/components/portfolio/theme-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { home } from '@/routes';
import admin from '@/routes/admin';
import type { SharedData } from '@/types';

const navLinks = [
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

export function Navbar() {
    const page = usePage<SharedData>();
    const { auth } = page.props;
    const onHome = page.url === '/' || page.url.startsWith('/#');

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (onHome) {
            e.preventDefault();
            document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            e.preventDefault();
            router.visit(home().url + href);
        }
    };

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href={home()} className="flex items-center gap-2 font-mono text-xl font-bold">
                    <Terminal className="h-6 w-6 text-primary" />
                    <span>Gerald Pajulas</span>
                </Link>

                <div className="flex items-center gap-6">
                    <div className="hidden items-center gap-6 md:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleClick(e, link.href)}
                                className="relative font-medium text-muted-foreground transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:text-primary hover:after:w-full"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {auth.user && (
                        <Button variant="ghost" size="sm" className="hidden gap-2 md:flex" asChild>
                            <Link href={admin.dashboard()}>
                                <LayoutDashboard className="h-4 w-4" />
                                Admin
                            </Link>
                        </Button>
                    )}

                    <Button size="sm" className="hidden gap-2 md:flex" asChild>
                        <a href="https://cal.com/dugoyd69-alyuzo/15min" target="_blank" rel="noopener noreferrer">
                            <CalendarClock className="h-4 w-4" />
                            Let's talk
                        </a>
                    </Button>

                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent>
                                <SheetTitle className="sr-only">Menu</SheetTitle>
                                <div className="mt-8 flex flex-col gap-4">
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.href}
                                            href={link.href}
                                            onClick={(e) => handleClick(e, link.href)}
                                            className="text-lg font-medium transition-colors hover:text-primary"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                    {auth.user && (
                                        <Link
                                            href={admin.dashboard()}
                                            className="flex items-center gap-2 text-lg font-medium transition-colors hover:text-primary"
                                        >
                                            <LayoutDashboard className="h-4 w-4" />
                                            Admin
                                        </Link>
                                    )}
                                    <Button className="mt-2 gap-2" asChild>
                                        <a
                                            href="https://cal.com/dugoyd69-alyuzo/15min"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <CalendarClock className="h-4 w-4" />
                                            Let's talk
                                        </a>
                                    </Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}
