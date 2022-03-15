<script setup>
import Header from "./Header.vue";
import Hero from "./Hero.vue";
</script>

<template>
  <div
    class="h-[90vh] bg-gradient-to-bl from-light-red to-very-light-red rounded-bl-[6rem]"
  >
    <div
      class="h-full bg-center bg-hero-pattern rounded-bl-[6rem] md:bg-bg-pattern-desktop"
    >
      <!-- Container -->
      <div class="w-full h-full px-16 py-8 mx-auto">
        <Header />
        <Hero />
      </div>
    </div>
  </div>
</template>
