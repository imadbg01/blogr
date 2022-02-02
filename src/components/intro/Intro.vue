<script setup>
import Hero from "./Hero.vue";
import Header from "./Header.vue";

</script>

<template>
  <header
    class="h-[90vh] bg-gradient-to-tl from-light-red to-very-light-red rounded-bl-[21%] py-3 px-5 m-auto"
  >
    <div class="h-full bg-center bg-hero-pattern rounded-bl-[21%] md:bg-bg-pattern-desktop">
      <div class="container relative h-full m-auto">
        <Header />
        <Hero />
      </div>
    </div>
  </header>
</template>
