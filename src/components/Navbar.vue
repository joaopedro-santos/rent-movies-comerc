<template>
  <nav class="bg-[#00000096] border-gray-200 dark:bg-gray-900 dark:border-gray-700" v-if="user.isLogged === true">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="data:image/png;base64,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"
        />
      </a>
      <button
        data-collapse-toggle="navbar-dropdown"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-dropdown"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li class="text-white">Olá</li>
          <li class="text-white">|</li>
          <li>
            <a
              @click="logout"
              href="#"
              class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Sair</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { useUserStore } from "@/stores/user";
const user = useUserStore();

const logout = () => {
  user.logout().then((res) => {});
};
onMounted(() => {
  initFlowbite();
});
</script>
