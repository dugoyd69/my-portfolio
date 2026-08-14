import { usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { toast } from 'sonner';
import type { SharedData } from '@/types';

/**
 * Surfaces `flash.success` / `flash.error` messages shared from the server as
 * toast notifications. Safe to call once inside a persistent layout.
 */
export function useFlashToasts() {
    const { flash } = usePage<SharedData>().props;

    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.success);
        }
        if (flash?.error) {
            toast.error(flash.error);
        }
    }, [flash]);
}
