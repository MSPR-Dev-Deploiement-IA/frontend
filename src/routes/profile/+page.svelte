<script lang="ts">
    import type { PageData } from './$types';
    import { userStore } from "$lib/stores/user";
</script>

<main class="flex items-center justify-center h-screen">
    <div class="w-1/3 bg-white rounded-lg shadow-lg p-8">
      <h1 class="text-2xl font-bold mb-4">Profile</h1>

      {#if $userStore}
      <div class="mb-4">
        <label class="block font-bold">Name:</label>
        <p>{$userStore.name}</p>
      </div>
  
      <div class="mb-4">
        <label class="block font-bold">Email:</label>
        <p>{$userStore.email}</p>
      </div>
  
      <div class="mb-4">
        <label class="block font-bold">ID:</label>
        <p>{$userStore.ID}</p>
      </div>
  
      <div class="mb-4">
        <label class="block font-bold">Created At:</label>
        <p>{$userStore.CreatedAt}</p>
      </div>
  
      <div class="mb-4">
        <label class="block font-bold">Updated At:</label>
        <p>{$userStore.UpdatedAt}</p>
      </div>
  
      <a href="#" class="text-blue-500">Edit Profile</a>
      {/if}
  
      
    </div>
  </main>
  