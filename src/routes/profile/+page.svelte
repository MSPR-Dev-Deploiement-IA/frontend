<script lang="ts">
	import type { PageData } from './$types';
	import { userStore } from '$lib/stores/user';
	import { format } from 'date-fns';

	export function readableTimestamp(timestamp: string): string {
		const date = new Date(timestamp);
		return format(date, 'dd/MM/yyyy');
	}
</script>

<main class="flex h-screen items-center justify-center">
	<div class="w-1/3 rounded-lg bg-white p-8 shadow-lg">
		<h1 class="mb-4 text-2xl font-bold">Profil</h1>

		{#if $userStore}
			<div class="mb-4">
				<label class="block font-bold">Nom :</label>
				<p>{$userStore.name}</p>
			</div>

			<div class="mb-4">
				<label class="block font-bold">Email :</label>
				<p>{$userStore.email}</p>
			</div>

			<div class="mb-4">
				<label class="block font-bold">ID :</label>
				<p>{$userStore.ID}</p>
			</div>

			<div class="mb-4">
				<label class="block font-bold">Créé le :</label>
				<p>{readableTimestamp($userStore.CreatedAt)}</p>
			</div>

			<div class="mb-4">
				<label class="block font-bold">Mis à jour le :</label>
				<p>{readableTimestamp($userStore.UpdatedAt)}</p>
			</div>

			<a href="#" class="text-blue-500">Modifier le profil</a>
		{/if}
	</div>

</main>
