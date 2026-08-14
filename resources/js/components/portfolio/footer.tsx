import { Github, Linkedin, Mail } from 'lucide-react';
import { GpLogo } from '@/components/portfolio/logo';

export function Footer() {
    return (
        <footer className="border-t border-border py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="flex items-center gap-2">
                        <GpLogo className="h-7 w-7" />
                        <span className="font-bold">Gerald Pajulas</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/dugoyd69"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground transition-colors hover:text-primary"
                        >
                            <Github className="h-4 w-4" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/gerald-pajulas-62b1b5300/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground transition-colors hover:text-primary"
                        >
                            <Linkedin className="h-4 w-4" />
                        </a>
                        <a
                            href="mailto:dugoyd@gmail.com"
                            className="text-muted-foreground transition-colors hover:text-primary"
                        >
                            <Mail className="h-4 w-4" />
                        </a>
                    </div>

                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Gerald Pajulas. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
