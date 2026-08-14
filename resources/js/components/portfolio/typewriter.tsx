import { useCallback, useEffect, useState } from 'react';

const words = ['Developer', 'UI/UX Designer', 'Problem Solver'];
const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const PAUSE_DURATION = 2000;

export function Typewriter() {
    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const tick = useCallback(() => {
        const currentWord = words[wordIndex];

        if (isPaused) return;

        if (!isDeleting) {
            const nextText = currentWord.slice(0, text.length + 1);
            setText(nextText);

            if (nextText === currentWord) {
                setIsPaused(true);
                setTimeout(() => {
                    setIsPaused(false);
                    setIsDeleting(true);
                }, PAUSE_DURATION);
            }
        } else {
            const nextText = currentWord.slice(0, text.length - 1);
            setText(nextText);

            if (nextText === '') {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }
        }
    }, [text, isDeleting, isPaused, wordIndex]);

    useEffect(() => {
        if (isPaused) return;

        const speed = isDeleting ? DELETING_SPEED : TYPING_SPEED;
        const timer = setTimeout(tick, speed);

        return () => clearTimeout(timer);
    }, [tick, isDeleting, isPaused]);

    return (
        <span className="inline-flex items-center">
            <span className="text-primary">{text}</span>
            <span className="ml-1 inline-block h-7 w-[3px] animate-pulse rounded-full bg-primary" />
        </span>
    );
}
