<!-- PaginationButton.vue -->
<template>
  <button @click="clickHandler" :disabled="isDisabled">
    {{ label }}
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    label: String,
    onClick: Function,
    isDisabled: Boolean,
  },
  setup(props) {
    const clickHandler = () => {
      if (!props.isDisabled && props.onClick) {
        props.onClick();
      }
    };

    return { clickHandler };
  },
});
</script>

<style scoped>
</style>
