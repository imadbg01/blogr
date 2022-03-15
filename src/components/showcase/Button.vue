<script setup>
defineProps({
  textContent: String,
});
</script>

<template>
  <button
    type="submit"
    class="px-12 py-2 font-semibold capitalize transition-colors duration-300 cursor-pointer rounded-2xl"
  >
    {{ textContent }}
  </button>
</template>
