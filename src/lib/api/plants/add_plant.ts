import { PUBLIC_BACKEND } from "$env/static/public"

export const add_plant = async (body: object) => {
    const response =  await fetch(`${PUBLIC_BACKEND}/api/plants/add`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(body),
    })

    return response.json()
}
