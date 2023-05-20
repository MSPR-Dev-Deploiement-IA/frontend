import { PUBLIC_BACKEND } from "$env/static/public"

export const add_plant = async (formData: FormData) => {
    const response =  await fetch(`${PUBLIC_BACKEND}/api/plants/add`, {
        method: 'POST',
        credentials: 'include',
        body: formData
    })

    return response.json()
}
