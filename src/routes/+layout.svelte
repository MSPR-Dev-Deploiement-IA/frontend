<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import '../app.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	const isLoggedIn = data.user ? true : false;
	console.log(isLoggedIn);
</script>

<Header isLoggedIn={data.user ? true : false} />
<slot />
