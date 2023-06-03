import { env } from '$env/dynamic/public';

export const get_advices = async () => {
    const response = await fetch(`${env.PUBLIC_BACKEND}/api/advice/`, {
        method: 'GET',
        credentials: 'include'
    });

    const json = await response.json();

    if (json.advices) {
    }

    return json.advices ? json.advices : [];
};