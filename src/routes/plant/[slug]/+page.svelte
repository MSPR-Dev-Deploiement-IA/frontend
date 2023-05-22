<script lang="ts">
    import { PUBLIC_BACKEND } from '$env/static/public';
    import type { PageData } from './$types';

    export let data: PageData;

    const generate_image_url = (photo_url: string) => {
        return `${PUBLIC_BACKEND}/api/static/${photo_url}`
    }

    let activeIndex = 0;
    const next = () => activeIndex = (activeIndex + 1) % data.photos.length;
    const prev = () => activeIndex = (activeIndex - 1 + data.photos.length) % data.photos.length;
</script>

{#if data}
    <div class="flex flex-col items-center justify-center">
        <h1 class="text-2xl font-bold mb-4">{data.name}</h1>
        <p class="text-lg mb-4">{data.species.common_name}</p>

        <div class="relative w-full max-w-md h-64 overflow-hidden rounded-lg shadow-lg">
            {#each data.photos as photo_url, index}
                <img 
                    src={`${PUBLIC_BACKEND}/api/static/${photo_url.photo_file_url}`} 
                    alt={photo_url.photo_file_url}
                    class="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-200 {index === activeIndex ? 'opacity-100' : 'opacity-0'}"
                >
            {/each}
            <button 
                class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow-md"
                on:click={prev}
            >
                &#10094;
            </button>
            <button 
                class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow-md"
                on:click={next}
            >
                &#10095;
            </button>
        </div>
    </div>
{/if}
