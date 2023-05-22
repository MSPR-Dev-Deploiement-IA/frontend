import { PUBLIC_BACKEND } from "$env/static/public";

export const get_plant_by_id = async (id: string) => {
    const url = `${PUBLIC_BACKEND}/api/plants/${id}`
    console.log(url)
    const response = await fetch(url , {
        method: 'GET',
        credentials: 'include',
    })

    const json = await response.json()

    console.log(json);

    return json.plant ? json.plant : null;
}