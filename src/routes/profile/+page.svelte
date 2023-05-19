<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData

    const userData = data.user
</script>

<main class="flex items-center justify-center h-screen">
    <div class="w-1/3 bg-white rounded-lg shadow-lg p-8">
      <h1 class="text-2xl font-bold mb-4">Profile</h1>
  
      <div class="mb-4">
        <label class="block font-bold">Name:</label>
        <p>{userData.user.name}</p>
      </div>
  
      <div class="mb-4">
        <label class="block font-bold">Email:</label>
        <p>{userData.user.email}</p>
      </div>
  
      <div class="mb-4">
        <label class="block font-bold">ID:</label>
        <p>{userData.user.ID}</p>
      </div>
  
      <div class="mb-4">
        <label class="block font-bold">Created At:</label>
        <p>{userData.user.CreatedAt}</p>
      </div>
  
      <div class="mb-4">
        <label class="block font-bold">Updated At:</label>
        <p>{userData.user.UpdatedAt}</p>
      </div>
  
      <a href="#" class="text-blue-500">Edit Profile</a>
    </div>
  </main>
  