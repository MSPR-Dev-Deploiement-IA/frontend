import type { PageLoad } from './$types';
import { get_plant_by_id } from '$lib/api/plants/get_id';
import { get_plant_history_by_id } from '$lib/api/plants/get_plant_history';

export const load = (async ({ params }) => {
	const id = params.slug;

	const plant = await get_plant_by_id(id);
	const dates = await get_plant_history_by_id(id);
	// We need to create a list of dates that are in the range of the start and end date

	console.log(dates);
	
	const filledDates = [];
	for (let i = 0; i < dates.length; i++) {
		const date = new Date(dates[i].start_date);
		const endDate = new Date(dates[i].end_date);

		while (date <= endDate) {
			filledDates.push(date.toISOString());
			date.setDate(date.getDate() + 1);
		}
	}


	return { plant, dates: filledDates };
}) satisfies PageLoad;
