<script setup>
import Nav from "./Nav.vue";

import { ref } from 'vue'
import Hero from "./Hero.vue";

let open = ref(true)

function toggle() {
  return open.value = !open.value
}

</script>

<template>
  <header
    class="h-[90vh] bg-gradient-to-tl from-light-red to-very-light-red rounded-bl-[21%] py-3 px-5 m-auto"
  >
    <div class="h-full bg-center bg-hero-pattern rounded-bl-[21%] md:bg-bg-pattern-desktop">
      <div class="relative w-11/12 h-full m-auto capitalize">
        <!-- top header -->
        <div class="flex items-center justify-between p-4">
          <div>
            <img src="../../assets/logo.svg" alt />
          </div>
          <div>
            <button
              @click="toggle"
              class="absolute p-1 transition duration-200 ease-out cursor-pointer top-5 right-5 md:hidden"
            >
              <img
                v-if="open !== true"
                src="../../assets/icon-hamburger.svg"
                alt
                class="transition duration-200 ease-out md:hidden"
              />
              <img
                v-else
                src="../../assets/icon-close.svg"
                alt
                class="transition duration-200 ease-out md:hidden"
              />
            </button>
            <div
              :class="[open ? ['block'] : 'hidden']"
              class="absolute w-full h-full mt-12 transition duration-300 bg-White inset-4 md:flex md:static md:m-0 md:justify-between md:items-center md:bg-transparent md:text-White"
            >
              <Nav />

              <form
                action="#"
                method="post"
                class="flex flex-col items-center justify-between gap-4 md:flex-row"
              >
                <button
                  type="submit"
                  class="inline-block px-12 py-3 text-base font-semibold capitalize border-none outline-none cursor-pointer md:bg-transparent rounded-2xl ring-offset-0 md:text-White md:px-4 md-py-2 md:m-0 md:whitespace-nowrap"
                >login</button>
                <button
                  type="submit"
                  class="inline-block px-12 py-3 my-4 text-base font-semibold border-transparent outline-none cursor-pointer rounded-2xl text-White bg-Light-red to ring-offset-0 md:px-4 md-py-2 md:m-0 md:whitespace-nowrap md:bg-White md:text-Light-red"
                >sign up</button>
              </form>
            </div>
          </div>
        </div>
        <Hero />
      </div>
    </div>
  </header>
</template>
