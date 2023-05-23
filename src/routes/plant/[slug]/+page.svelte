<script lang="ts">
	import { env } from '$env/dynamic/public';

	const PUBLIC_BACKEND = env.PUBLIC_BACKEND;

	import type { PageData } from './$types';

	export let data: PageData;

	const generate_image_url = (photo_url: string) => {
		return `${PUBLIC_BACKEND}/api/static/${photo_url}`;
	};

	let activeIndex = 0;
	const next = () => (activeIndex = (activeIndex + 1) % data.photos.length);
	const prev = () => (activeIndex = (activeIndex - 1 + data.photos.length) % data.photos.length);
</script>

{#if data}
	<div class="flex flex-col items-center justify-center">
		<h1 class="mb-4 text-2xl font-bold">{data.name}</h1>
		<p class="mb-4 text-lg">{data.species.common_name}</p>

		<div class="relative h-64 w-full max-w-md overflow-hidden rounded-lg shadow-lg">
			{#each data.photos as photo_url, index}
				<img
					src={`${PUBLIC_BACKEND}/api/static/${photo_url.photo_file_url}`}
					alt={photo_url.photo_file_url}
					class="absolute left-0 top-0 h-full w-full object-cover transition-opacity duration-200 {index ===
					activeIndex
						? 'opacity-100'
						: 'opacity-0'}"
				/>
			{/each}
			<button
				class="absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white bg-opacity-50 p-2 shadow-md"
				on:click={prev}
			>
				&#10094;
			</button>
			<button
				class="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white bg-opacity-50 p-2 shadow-md"
				on:click={next}
			>
				&#10095;
			</button>
		</div>
	</div>
{/if}
