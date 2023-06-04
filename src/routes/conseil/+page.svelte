<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<!-- <div class="">
	<ul class="flex flex-col justify-center space-y-4">
		{#each data.species as speciesItem}
			<li class="w-6/12 rounded-lg bg-white p-4 shadow">
				<button
					class="w-full text-left"
					on:click={() => goto(`/conseil/${speciesItem.scientific}`)}
				>
					<div class="flex items-center justify-between">
						<span class="text-lg font-semibold">{speciesItem.common_name}</span>
						<span class="text-gray-500">{speciesItem.scientific}</span>
					</div>
				</button>
			</li>
		{/each}
	</ul>
</div> -->

<div class="mt-8 flex flex-col items-center space-y-8">
	{#each data.species as speciesItem}
		<button
			class="w-6/12 rounded bg-white p-4 shadow"
			on:click={() => goto(`/conseil/${speciesItem.scientific}`)}
		>
			<div class="flex items-center justify-between">
				<span class="text-lg font-semibold">{speciesItem.common_name}</span>
				<span class="text-gray-500">{speciesItem.scientific}</span>
			</div>
		</button>
	{/each}
</div>
