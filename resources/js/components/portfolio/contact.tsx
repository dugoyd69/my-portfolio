import { Calendar, Check, Clock, Copy, Mail, Rocket, Shield, TrendingUp, Zap } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const PROJECT_TYPES = [
    { value: 'mvp', label: 'MVP Build (Velocity)', subject: 'MVP Build Inquiry' },
    { value: 'retainer', label: 'Retainer / Ongoing', subject: 'Retainer Partnership Inquiry' },
    { value: 'security-audit', label: 'Security Audit', subject: 'Security Audit Request' },
    { value: 'other', label: 'Other', subject: 'General Inquiry' },
] as const;

type ProjectTypeValue = (typeof PROJECT_TYPES)[number]['value'];

export function Contact() {
    const [copied, setCopied] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: '' as ProjectTypeValue | '',
        message: '',
    });

    const handleCopyEmail = async () => {
        await navigator.clipboard.writeText('dugoyd@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const projectTypeInfo = PROJECT_TYPES.find((pt) => pt.value === formData.projectType);
        const subject = projectTypeInfo?.subject || 'General Inquiry';
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;

        window.location.href = `mailto:dugoyd@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        toast.success('Opening your email client…', {
            description: "If nothing happens, email me directly at dugoyd@gmail.com.",
        });
    };

    return (
        <section id="contact" className="bg-background py-24">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="mb-3 font-mono text-sm font-semibold tracking-wider text-primary uppercase">
                        // initiate_contact
                    </h2>
                    <p className="text-3xl font-bold md:text-4xl lg:text-5xl">
                        Partner With a <span className="text-primary">Force Multiplier</span>
                    </p>
                </div>

                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
                        <div className="space-y-6">
                            <div>
                                <h3 className="mb-2 text-xl font-semibold">
                                    Not another freelancer. A strategic partner.
                                </h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    I engineer competitive advantages with production-grade architecture and bulletproof
                                    security.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-6">
                                <div className="mb-3 flex items-center gap-3">
                                    <Calendar className="h-5 w-5 text-primary" />
                                    <p className="font-semibold">Ready to move fast?</p>
                                </div>
                                <p className="mb-4 text-sm text-muted-foreground">
                                    Skip the back-and-forth. Book a 15-minute discovery call and let's talk scope,
                                    timeline, and fit.
                                </p>
                                <Button asChild className="group w-full" size="lg">
                                    <a href="https://cal.com/dugoyd69-alyuzo/15min" target="_blank" rel="noopener noreferrer">
                                        Book a Discovery Call
                                        <Calendar className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                                    </a>
                                </Button>
                            </div>

                            <div className="flex items-center justify-between rounded-xl border border-border bg-card/30 p-4">
                                <div className="flex items-center gap-3">
                                    <Mail className="h-5 w-5 text-muted-foreground" />
                                    <div>
                                        <p className="text-xs tracking-wider text-muted-foreground uppercase">
                                            Prefer email?
                                        </p>
                                        <p className="font-mono text-sm font-medium">dugoyd@gmail.com</p>
                                    </div>
                                </div>
                                <Button variant="ghost" size="sm" onClick={handleCopyEmail} className="shrink-0">
                                    {copied ? (
                                        <Check className="h-4 w-4 text-green-500" />
                                    ) : (
                                        <Copy className="h-4 w-4" />
                                    )}
                                </Button>
                            </div>

                            <div className="border-t border-border pt-4">
                                <p className="mb-4 text-xs tracking-wider text-muted-foreground uppercase">
                                    Why partner with me
                                </p>
                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
                                    {[
                                        { icon: Zap, title: 'Velocity', sub: 'Ship in days, not months' },
                                        { icon: Shield, title: 'Security-First', sub: 'Every endpoint fortified' },
                                        { icon: TrendingUp, title: 'ROI-Focused', sub: 'Aligned with business outcomes' },
                                    ].map(({ icon: Icon, title, sub }) => (
                                        <div
                                            key={title}
                                            className="flex items-center gap-3 rounded-lg border border-border bg-card/30 p-3 transition-colors hover:bg-card/50"
                                        >
                                            <div className="shrink-0 rounded-lg bg-primary/10 p-2 text-primary">
                                                <Icon className="h-4 w-4" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium">{title}</p>
                                                <p className="text-xs text-muted-foreground">{sub}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="self-start rounded-2xl border border-border bg-card p-6 md:p-8">
                            <div className="mb-6">
                                <h3 className="mb-1 text-lg font-semibold">Start a Project</h3>
                                <p className="text-sm text-muted-foreground">
                                    Tell me about your goals and I'll respond with a tailored approach.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <label htmlFor="contact-name" className="text-sm font-medium">
                                            Name
                                        </label>
                                        <Input
                                            id="contact-name"
                                            placeholder="Your name"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="bg-background/50"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="contact-email" className="text-sm font-medium">
                                            Email
                                        </label>
                                        <Input
                                            id="contact-email"
                                            type="email"
                                            placeholder="you@company.com"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="bg-background/50"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="contact-project-type" className="text-sm font-medium">
                                        Project Type
                                    </label>
                                    <Select
                                        value={formData.projectType}
                                        onValueChange={(value: ProjectTypeValue) =>
                                            setFormData({ ...formData, projectType: value })
                                        }
                                        required
                                    >
                                        <SelectTrigger id="contact-project-type" className="w-full bg-background/50">
                                            <SelectValue placeholder="What are you looking to build?" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {PROJECT_TYPES.map((type) => (
                                                <SelectItem key={type.value} value={type.value}>
                                                    {type.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="contact-message" className="text-sm font-medium">
                                        Project Details
                                    </label>
                                    <Textarea
                                        id="contact-message"
                                        placeholder="Describe your project scope, timeline, and budget range..."
                                        rows={5}
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="resize-none bg-background/50"
                                    />
                                </div>

                                <Button type="submit" className="group w-full" size="lg">
                                    Initialize Project
                                    <Rocket className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                                </Button>

                                <div className="flex items-center justify-center gap-2 pt-2">
                                    <Clock className="h-4 w-4 text-primary" />
                                    <p className="text-xs text-muted-foreground">
                                        <span className="font-semibold text-foreground">Average Response Time:</span>{' '}
                                        <span className="font-mono text-primary">&lt; 2 hours</span>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
