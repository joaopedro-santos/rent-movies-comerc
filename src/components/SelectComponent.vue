<template>
  <div>
    <label
      for="countries"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >{{ title }}</label
    >
    <select
      @change="updateValue"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option
        v-for="option in valueOptions"
        :selected="option.value === 'ativo'"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["clickCard", "update:modelValue"]);
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  valueOptions: {
    default() {
      return [
        { value: "ativo", name: "Ativo" },
        { value: "desativado", name: "Desativado" },
      ];
    },
  },
  modelValue: {
    type: String,
    required: true,
  },
});

const valueOptions = ref(props.valueOptions);
const title = ref(props.title);
const updateValue = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
};


</script>
