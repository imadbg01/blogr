<script setup>
import Nav from "./Nav.vue";

import { ref } from 'vue'

let open = ref(true)

function toggle() {
    return open.value = !open.value
}


</script>

<template>
    <header class>
        <div class="flex items-center gap-6 p-4 bg-Light-red">
            <div>
                <img src="../../assets/logo.svg" alt="blogr logo" />
            </div>
            <div class="flex-1">
                <button
                    @click="toggle"
                    aria-controls="navLinks"
                    class="absolute p-1 transition duration-200 ease-out cursor-pointer top-5 right-5 md:hidden"
                >
                    <img
                        v-if="open !== true"
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
                    :class="[open ? ['block'] : 'hidden']"
                    class="absolute w-full h-full mt-12 transition duration-300 bg-White inset-4 md:flex md:static md:m-0 md:justify-between md:items-center md:bg-transparent md:text-White"
                >
                    <Nav />

                    <form
                        action="#"
                        method="post"
                        class="flex flex-col items-center self-end justify-between gap-4 md:flex-row"
                    >
                        <button
                            type="submit"
                            class="inline-block px-12 py-3 text-base font-semibold capitalize border-none outline-none cursor-pointer md:bg-transparent rounded-2xl ring-offset-0 md:text-White md:px-4 md-py-2 md:m-0 md:whitespace-nowrap hover:bg-Light-red"
                        >login</button>
                        <button
                            type="submit"
                            class="inline-block px-12 py-3 my-4 text-base font-semibold border-transparent outline-none cursor-pointer rounded-2xl text-White bg-Light-red to ring-offset-0 md:px-4 md-py-2 md:m-0 md:whitespace-nowrap md:bg-White md:text-Light-red hover:bg-transparent hover:text-White hover:outline hover:outline-White/50"
                        >sign up</button>
                    </form>
                </div>
            </div>
        </div>
    </header>
</template>