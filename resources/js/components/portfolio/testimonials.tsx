import { Quote } from 'lucide-react';

interface Testimonial {
    quote: string;
    author: string;
    role: string;
}

/**
 * TODO: Replace these placeholders with real client quotes. Keep the shape the
 * same. Empty this array to hide the section entirely. (Ask to have this moved
 * into the admin panel if you'd rather manage it there.)
 */
const testimonials: Testimonial[] = [
    {
        quote: 'Replace this with a real client quote about the outcome you delivered — speed, reliability, or business impact works best.',
        author: 'Client name',
        role: 'Their role, Company',
    },
    {
        quote: 'A second short testimonial focused on how you work — communication, ownership, or how fast you shipped.',
        author: 'Client name',
        role: 'Their role, Company',
    },
    {
        quote: 'A third quote that speaks to trust and results. One or two sentences is ideal.',
        author: 'Client name',
        role: 'Their role, Company',
    },
];

export function Testimonials() {
    if (testimonials.length === 0) {
        return null;
    }

    return (
        <section id="testimonials" className="py-24">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="mb-3 text-sm font-semibold tracking-wider text-primary uppercase">Social Proof</h2>
                    <p className="text-3xl font-bold md:text-4xl lg:text-5xl">What Clients Say</p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {testimonials.map((t, i) => (
                        <figure
                            key={i}
                            className="flex flex-col rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm"
                        >
                            <Quote className="mb-4 h-8 w-8 text-primary/40" />
                            <blockquote className="flex-grow leading-relaxed text-muted-foreground">
                                “{t.quote}”
                            </blockquote>
                            <figcaption className="mt-6 border-t border-border/50 pt-4">
                                <p className="font-semibold">{t.author}</p>
                                <p className="text-sm text-muted-foreground">{t.role}</p>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
