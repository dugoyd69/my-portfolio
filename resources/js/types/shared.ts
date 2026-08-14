import type { User } from './auth';

export type SharedData = {
    name: string;
    auth: {
        user: User | null;
    };
    flash: {
        success: string | null;
        error: string | null;
    };
    sidebarOpen: boolean;
    [key: string]: unknown;
};
