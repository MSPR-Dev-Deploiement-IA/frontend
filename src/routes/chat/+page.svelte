<script lang="ts">
	import { get_all_messages } from '$lib/api/chat/get_all_messages';
	import { post_message } from '$lib/api/chat/post_message';
	import { onMount, onDestroy } from 'svelte';

	let message: string = '';
	let messages: string | any[] = [];

	const upload = async () => {
		if (!message.trim()) {
			// Optionally add a notification here for an empty message
			return;
		}
		const isSuccessful = await post_message(message);
		if (isSuccessful) {
			message = ''; // reset the input field after successful upload
		}
	};

	const refreshMessages = async () => {
		messages = await get_all_messages();
	};

	let intervalId: string | number | NodeJS.Timer | undefined;
	onMount(() => {
		// refresh messages initially and every second
		refreshMessages();
		intervalId = setInterval(refreshMessages, 1000);
	});

	onDestroy(() => {
		// stop refreshing when the component is unmounted
		clearInterval(intervalId);
	});
</script>

{#if messages.length === 0}
	<p>Loading messages...</p>
{:else}
	{#each messages as sentMessage}
		<p>{sentMessage.user.name}</p>
		<p>{sentMessage.message_text}</p>
	{/each}
{/if}

<input type="text" placeholder="Type a message here" bind:value={message} />
<button on:click={upload}>Submit</button>
