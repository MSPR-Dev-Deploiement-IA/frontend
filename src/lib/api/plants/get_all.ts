import { PUBLIC_BACKEND } from "$env/static/public"

export const get_all_plants = async () => {
    const res = await fetch(`${PUBLIC_BACKEND}/api/plants/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    });

    const json = await res.json();

    const plants = json.plants;

    return plants;
}