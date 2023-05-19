<script lang="ts">
  import { register } from '$lib/api/auth/register'; // Replace with the actual path to your register function

  let name: string = '';
  let password: string = '';
  let password_confirm: string = '';
  let email: string = '';
  let registrationSuccess: boolean = false;
  let registrationError: boolean = false;

  async function handleSubmit() {
    try {
      const isSuccess: boolean = await register(name, email, password);
      if (isSuccess) {
        registrationSuccess = true;
        registrationError = false;
      } else {
        registrationSuccess = false;
        registrationError = true;
      }
    } catch (error: any) {
      console.error(error);
      registrationSuccess = false;
      registrationError = true;
    }
  }
</script>

<main class="flex items-center justify-center h-screen">
  <div class="w-1/3 bg-white rounded-lg shadow-lg p-8">
    <h1 class="text-2xl font-bold mb-4">Register</h1>

    {#if registrationSuccess}
      <p class="text-green-500">Registration successful!</p>
    {:else if registrationError}
      <p class="text-red-500">Registration failed. Please try again later.</p>
    {/if}

    <form on:submit|preventDefault={handleSubmit}>
      <div class="mb-4">
        <label for="name" class="block">Name:</label>
        <input type="text" id="name" class="border border-gray-300 rounded px-4 py-2 w-full" bind:value={name} required />
      </div>

      <div class="mb-4">
        <label for="email" class="block">Email:</label>
        <input type="email" id="email" class="border border-gray-300 rounded px-4 py-2 w-full" bind:value={email} required />
      </div>

      <div class="mb-4">
        <label for="password" class="block">Password:</label>
        <input type="password" id="password" class="border border-gray-300 rounded px-4 py-2 w-full" bind:value={password} required />
      </div>

      <div class="mb-4">
        <label for="password-confirmation" class="block">Password Confirmation:</label>
        <input type="password" id="password-confirmation" class="border border-gray-300 rounded px-4 py-2 w-full" bind:value={password_confirm} required />
      </div>

      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Register</button>
    </form>
  </div>
</main>
