<script setup>
import Nav from "./Nav.vue";

import { ref } from "vue";
import Button from "./Button.vue";

let isOpen = ref(false);

function toggle() {
  return (isOpen.value = !isOpen.value);
}
</script>

<template>
  <header class="flex items-center gap-x-6">
    <div>
      <img src="../../assets/logo.svg" alt="blogr logo" />
    </div>
    <div class="flex-1">
      <button
        @click="toggle"
        aria-controls="navigation"
        class="absolute p-1 transition duration-300 ease-out cursor-pointer top-8 right-16 md:hidden"
      >
        <img
          v-if="isOpen !== true"
          src="../../assets/icon-hamburger.svg"
          alt="menu icon"
          class="transition duration-200 ease-out md:hidden"
        />
        <img
          v-else
          src="../../assets/icon-close.svg"
          alt="menu icon"
          class="transition duration-200 ease-out md:hidden"
        />
      </button>
      <div
        :class="[isOpen ? ['ml-0', 'inset-8'] : '-ml-[150%]']"
        class="absolute mt-12 transition-all duration-500 ease-out bg-White md:flex md:static md:m-0 md:justify-between md:items-center md:bg-transparent md:text-White sm:shadow-Grayish-blue min-h-min"
      >
        <Nav />

        <form
          action="#"
          method="post"
          class="flex flex-col items-center self-end justify-between gap-4 py-6 m-auto mx-6 border-t md:flex-row border-t-Grayish-blue md:border-none md:p-0 md:mx-0"
        >
          <Button
            textContent="login in"
            class="text-Very-dark-blue md:text-White hover:opacity-70"
          />
          <Button
            textContent="sign up"
            class="transition-colors duration-300 bg-gradient-to-tr from-light-red to-very-light-red text-White hover:bg-gradient-to-tr hover:from-Very-light-red hover:to-Very-light-red md:bg-gradient-to-tr md:from-White md:to-White md:text-light-red md:hover:text-White"
          />
        </form>
      </div>
    </div>
  </header>
</template>
