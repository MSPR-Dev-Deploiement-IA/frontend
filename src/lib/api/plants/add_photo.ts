import { env } from '$env/dynamic/public';

export async function add_photo(plant_id: string, files: File[]) {
	const formData = new FormData();
	for (const file of files) {
		formData.append('files', file);
	}

	const response = await fetch(`${env.PUBLIC_BACKEND}/api/plants/upload?plantId=${plant_id}`, {
		method: 'POST',
		body: formData,
		credentials: 'include'
	});

	return response.json();
}
