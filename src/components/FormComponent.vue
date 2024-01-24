<template>
  <form class="max-w-md mx-auto mt-4 p-6 bg-black rounded-md shadow-md">
    <div class="mb-4">
      <label for="nome" class="block text-gray-700 text-sm font-bold mb-2"
        >Nome:</label
      >
      <input
        type="text"
        id="nome"
        name="nome"
        class="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>

    <div class="mb-4">
      <label for="email" class="block text-gray-700 text-sm font-bold mb-2"
        >Email:</label
      >
      <input
        type="email"
        id="email"
        name="email"
        class="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>

    <div class="mb-4">
      <label for="mensagem" class="block text-gray-700 text-sm font-bold mb-2"
        >Mensagem:</label
      >
      <textarea
        id="mensagem"
        name="mensagem"
        rows="4"
        class="w-full p-2 border border-gray-300 rounded-md"
      ></textarea>
    </div>

    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">
      Enviar
    </button>
  </form>
</template>
