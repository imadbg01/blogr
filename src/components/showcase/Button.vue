<script setup>
defineProps({
  textContent: String,
});
</script>

<template>
  <button
    type="submit"
    class="px-8 py-2 font-semibold capitalize transition-colors duration-300 cursor-pointer md:px-12 md:py-3 rounded-2xl"
  >
    {{ textContent }}
  </button>
</template>
