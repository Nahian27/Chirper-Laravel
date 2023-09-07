export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export interface Chirp {
    map: any;
    id: number;
    user: User;
    message: string;
    created_at: string;
    updated_at: String;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User

    }
    chirp: Chirp
};
