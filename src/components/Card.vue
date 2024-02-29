<template>
  <div
    class=" rounded-lg p-8 m-3 hover:shadow-2xl hover:bg-[#332f2f6c] cursor-pointer transition"
    @click="clickCard"
  >
    <div class="grid lg:grid-cols-12 gap-2">
      <div class="col-span-12 flex justify-center">
        <p class="text-white font-bold text-2xl">{{ titleCard }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["clickCard"]);
const props = defineProps({
  titleCard: {
    type: String,
    required: true,
  },
  iconCard: {
    type: String,
    required: true,
  },
});

const clickCard = () => {
  emit("clickCard");
};

const titleCard = ref(props.titleCard);
const iconCard = ref(props.iconCard);
</script>
