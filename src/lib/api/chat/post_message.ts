import { PUBLIC_BACKEND } from "$env/static/public"

export const post_message = async (message_text: string) => {
    // timestamp
    const timestamp = new Date().toISOString();

    const body = JSON.stringify({message_text, timestamp})

    console.log(body);
    
    const res = await fetch(`${PUBLIC_BACKEND}/api/messages/add`, {
        method: "POST",
        credentials: "include",
        body: body
    })

    console.log(res);

    if (res.status === 201) {
        return true;
    }

    return false;
}