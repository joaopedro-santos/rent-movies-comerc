<template>
  <div>
    <div class="border bg-white rounded-lg p-2 w-80 h-60">
      <div>
        <i class="fa-solid fa-film text-cyan-500 text-lg"></i>
      </div>

      <label class="text-slate-500 text-sm font-bold">Titulo:</label>
      <p class="text-gray-600 text-sm font-bold">{{ ` ${title}` }}</p>
      <label class="text-slate-500 text-sm font-bold">Ano:</label>
      <p class="text-gray-600 text-sm font-bold">{{ `${year}` }}</p>
      <div class="mt-2">
        <button
          @click="clickLocation"
          v-if="isLocation === false && isDelivered === false"
          type="button"
          class="bg-cyan-500 text-white px-4 py-1 rounded-md"
        >
          Alugar
        </button>
        <div
          v-if="isLocation"
          type="button"
          class="bg-yellow-100 text-gray-600 text-sm font-bold p-2 rounded-lg mt-1"
        >
          Alugado - 10/10/2024
        </div>

        <div
          v-if="isDelivered"
          type="button"
          class="bg-green-300 text-gray-600 text-sm font-bold p-2 rounded-lg mt-1"
        >
          Entregue - 10/10/2024
        </div>
        <div
          v-if="isLocation"
          type="button"
          class="text-gray-600 text-sm font-bold p-2 rounded-lg mt-1"
        >
          Cliente - {{ client }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["clickLocation"]);
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  client: {
    type: String,
  },
  isDelivered: {
    type: Boolean,
    default: false,
  },
  isLocation: {
    type: Boolean,
    default: false,
  },
});

const clickLocation = () => {
  emit("clickLocation");
};

const title = ref(props.title);
const year = ref(props.year);
</script>
