import { PUBLIC_BACKEND } from "$env/static/public"

export const get_all_messages = async () => {
    const res = await fetch(`${PUBLIC_BACKEND}/api/messages/` , {
        method: 'GET',
        credentials: 'include',
    })

    const json = await res.json();

    const messages = json.messages;
    
    return messages ? messages : ["message1", "message2"]
}