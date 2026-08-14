import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Typewriter } from '@/components/portfolio/typewriter';
import { Button } from '@/components/ui/button';

export function Hero() {
    const [text, setText] = useState('Gerald Pajulas');

    useEffect(() => {
        const targets = ['Gerald Pajulas', 'Gerald'];
        let currentIndex = 0;
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

        const intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % targets.length;
            const nextText = targets[currentIndex];
            let iteration = 0;

            const scrambleId = setInterval(() => {
                setText(
                    nextText
                        .split('')
                        .map((letter, index) => {
                            if (index < iteration) {
                                return nextText[index];
                            }
                            return chars[Math.floor(Math.random() * chars.length)];
                        })
                        .join(''),
                );

                if (iteration >= nextText.length) {
                    clearInterval(scrambleId);
                    setText(nextText);
                }

                iteration += 1 / 3;
            }, 30);
        }, 4000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 h-72 w-72 animate-pulse rounded-full bg-primary/20 blur-3xl" />
                <div className="delay-1000 absolute right-1/4 bottom-1/4 h-96 w-96 animate-pulse rounded-full bg-accent/20 blur-3xl" />
            </div>

            <div className="relative container mx-auto px-4 py-20">
                <div className="flex flex-col items-center space-y-8 text-center">
                    <div className="animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 backdrop-blur-sm">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                            <span className="font-mono text-sm text-primary">Available for opportunities</span>
                        </div>
                    </div>

                    <div className="animate-fade-in space-y-4 opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards]">
                        <p className="text-lg font-medium text-muted-foreground md:text-xl">Hello, I'm</p>
                        <h1 className="min-h-[1.2em] py-2 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
                            <span className="inline-block bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text pb-4 text-transparent">
                                {text}
                            </span>
                        </h1>
                    </div>

                    <div className="animate-fade-in opacity-0 [animation-delay:0.6s] [animation-fill-mode:forwards]">
                        <p className="text-xl font-semibold text-muted-foreground md:text-2xl lg:text-3xl">
                            <Typewriter />
                        </p>
                    </div>

                    <div className="animate-fade-in opacity-0 [animation-delay:0.8s] [animation-fill-mode:forwards]">
                        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground/80 md:text-lg">
                            Passionate about building secure systems, exploring vulnerabilities ethically, and
                            architecting robust network infrastructures. Let's create something amazing together.
                        </p>
                    </div>

                    <div className="animate-fade-in flex flex-wrap justify-center gap-4 opacity-0 [animation-delay:1s] [animation-fill-mode:forwards]">
                        <Button
                            size="lg"
                            className="group"
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            View My Work
                            <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="backdrop-blur-sm"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Get In Touch
                        </Button>
                    </div>

                    <div className="animate-fade-in flex gap-4 pt-8 opacity-0 [animation-delay:1.2s] [animation-fill-mode:forwards]">
                        <a
                            href="https://github.com/dugoyd69"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-border bg-card/50 p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-primary/50 hover:bg-primary/10"
                        >
                            <Github className="h-5 w-5" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/gerald-pajulas-62b1b5300/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-border bg-card/50 p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-primary/50 hover:bg-primary/10"
                        >
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a
                            href="mailto:dugoyd@gmail.com"
                            className="rounded-full border border-border bg-card/50 p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-primary/50 hover:bg-primary/10"
                        >
                            <Mail className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform">
                <div className="animate-bounce">
                    <ArrowDown className="h-6 w-6 text-muted-foreground/50" />
                </div>
            </div>
        </section>
    );
}
