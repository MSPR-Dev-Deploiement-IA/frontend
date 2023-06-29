import { writable } from "svelte/store";

type Tokens = {
    accessToken: string;
    refreshToken: string;
};

export const tokenStore = writable<Tokens | null>(null);