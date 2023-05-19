<script lang="ts">
    let selectedOption: string;
    let description: string;
    let file: File | null = null;
  
    const dropdownOptions: string[] = ['Option 1', 'Option 2', 'Option 3']; // Please replace with your actual options
  
    const handleFileChange = (event: Event) => {
      const target = event.target as HTMLInputElement;
      file = target.files ? target.files[0] : null;
    };
  
    const handleSubmit = () => {
      // Handle the form submission here
    };
  </script>
  
  <main class="flex items-center justify-center h-screen">
    <div class="w-1/3 bg-white rounded-lg shadow-lg p-8">
      <h1 class="text-2xl font-bold mb-4">Formulaire</h1>
  
      <form on:submit|preventDefault={handleSubmit}>
        <div class="mb-4">
          <label class="block" for="dropdown">Choisissez une option:</label>
          <select id="dropdown" class="border border-gray-300 rounded px-4 py-2 w-full" bind:value={selectedOption}>
            {#each dropdownOptions as option}
              <option>{option}</option>
            {/each}
          </select>
        </div>
  
        <div class="mb-4">
          <label class="block" for="description">Description:</label>
          <textarea id="description" class="border border-gray-300 rounded px-4 py-2 w-full" bind:value={description}></textarea>
        </div>
  
        <div class="mb-4">
          <label class="block" for="file">Télécharger un fichier:</label>
          <input type="file" id="file" multiple class="border border-gray-300 rounded px-4 py-2 w-full" on:change={handleFileChange} />
        </div>
  
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Soumettre</button>
      </form>
    </div>
  </main>