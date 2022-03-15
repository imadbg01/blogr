<script setup>
import Button from "./Button.vue";
</script>

<template>
  <div
    class="flex flex-col items-center justify-center h-full my-4 text-center"
  >
    <h1
      class="text-4xl font-semibold leading-normal text-White font-ubuntu md:text-5xl lg:text-6xl"
    >
      A modern publishing platform
    </h1>
    <p class="my-4 text-base text-White/60 md:text-lg lg:text-xl">
      Grow your audience and build your brand
    </p>
    <form
      action="#"
      method="post"
      class="flex items-center justify-between gap-5 my-12"
    >
      <Button textContent="start for free" class="bg-White text-Light-red" />
      <Button
        textContent=" learn more"
        class="bg-transparent border text-White border-White"
      />
    </form>
  </div>
</template>
