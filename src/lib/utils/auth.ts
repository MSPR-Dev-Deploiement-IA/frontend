import { tokenStore } from "$lib/stores/token";

export const makeAuthHeader = () => {
    // read access token from store
    let access_token = "";

    tokenStore.subscribe((tokens) => {
        if (tokens) {
            access_token = tokens.accessToken;
        }
    });

    return `Bearer ${access_token}`;
};