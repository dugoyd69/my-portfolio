import { Head } from '@inertiajs/react';
import { useEffect } from 'react';
import { AboutMe } from '@/components/portfolio/about-me';
import { Contact } from '@/components/portfolio/contact';
import { Footer } from '@/components/portfolio/footer';
import { Hero } from '@/components/portfolio/hero';
import { Navbar } from '@/components/portfolio/navbar';
import { Projects } from '@/components/portfolio/projects';
import { Reveal } from '@/components/portfolio/reveal';
import { Skills } from '@/components/portfolio/skills';
import { StatsBand } from '@/components/portfolio/stats-band';
import type { Project, Skill } from '@/types/portfolio';

interface PortfolioPageProps {
    skills: Skill[];
    projects: Project[];
    projectCount: number;
}

export default function PortfolioIndex({ skills, projects, projectCount }: PortfolioPageProps) {
    useEffect(() => {
        if (window.location.hash) {
            const el = document.querySelector(window.location.hash);
            if (el) {
                setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
            }
        }
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <Head title="Gerald Pajulas — Developer, Hacker & Network Engineer">
                <meta
                    name="description"
                    content="Portfolio of Gerald Pajulas — Developer, Ethical Hacker, and Network Engineer. Building secure systems and robust infrastructures."
                />
            </Head>

            <Navbar />
            <main>
                <Hero />
                <StatsBand projectCount={projectCount} />
                <Reveal>
                    <AboutMe />
                </Reveal>
                <Reveal>
                    <Skills skills={skills} />
                </Reveal>
                <Reveal>
                    <Projects projects={projects} />
                </Reveal>
                <Reveal>
                    <Contact />
                </Reveal>
            </main>
            <Footer />
        </div>
    );
}
