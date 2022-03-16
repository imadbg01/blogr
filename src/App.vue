<script setup>
import Showcase from "./components/showcase/Showcase.vue";
import Features from "./components/features/Features.vue";
import Footer from "./components/footer/Footer.vue";
</script>

<template>
  <div class="overflow-hidden">
    <Showcase />
    <Features />
    <Footer />
    <div class="py-6 text-center bg-Very-dark-black-blue text-Grayish-blue">
      <hr class="w-2/3 pb-4 mx-auto border-t border-t-Grayish-blue" />
      Challenge by
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        class="text-very-light-red"
        >Frontend Mentor</a
      >. Coded by
      <a
        href="https://www.imadbg01.github.io"
        target="_blank"
        class="text-very-light-red"
        >imad boudguigue</a
      >.
    </div>
  </div>
</template>
