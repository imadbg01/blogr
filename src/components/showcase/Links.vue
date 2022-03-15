<script setup>
import { ref } from "vue";

const products = [
  "Overview",
  " Pricing",
  " Marketplace",
  "Features",
  " Integration",
];
const Company = ["About", "Team", "Blog", "Careers"];

const Connect = ["Contact", "Newsletter", "LinkedIn"];

let isProductsShow = ref(false);
let isCompanyShow = ref(false);
let isConnectShow = ref(false);

function toggleDropDown(el) {
  return (el.value = !el.value);
}

const toggleProducts = () => toggleDropDown(isProductsShow);
const toggleCompany = () => toggleDropDown(isCompanyShow);
const toggleConnect = () => toggleDropDown(isConnectShow);
</script>

<template>
  <ul
    class="flex flex-col items-center justify-between w-full md:flex-row md:gap-x-6 md:justify-start"
  >
    <li class="relative w-full text-center md:w-3/12">
      <a
        href="#"
        class="inline-flex gap-2 mb-4 md:mb-0 text-Very-dark-black-blue md:text-White"
        @click="toggleProducts"
      >
        Product
        <img
          src="../../assets/icon-arrow-dark.svg"
          alt="arrow"
          class="block object-contain w-auto transition-transform duration-200 ease-in-out md:hidden"
          :class="[isProductsShow ? ['rotate-180'] : 'rotate-0']"
        />
        <img
          src="../../assets/icon-arrow-light.svg"
          alt="arrow"
          class="hidden object-contain w-full transition-transform duration-200 md:block"
          :class="[isProductsShow ? ['rotate-180'] : 'rotate-0']"
        />
      </a>
      <ul
        class="w-full p-4 mt-4 rounded-md bg-Grayish-blue text-Very-dark-black-blue md:p-0 md:absolute md:bg-White shadow-Grayish-blue md:text-Very-dark-blue"
        :class="[isProductsShow ? ['block'] : 'hidden']"
      >
        <li
          v-for="(product, i) in products"
          :key="i"
          class="w-full p-1 md:p-2 hover:opacity-75"
        >
          <a href="#">{{ product }}</a>
        </li>
      </ul>
    </li>

    <li class="relative w-full text-center md:w-3/12">
      <a
        href="#"
        class="inline-flex gap-2 mb-4 md:mb-0 text-Very-dark-black-blue md:text-White"
        @click="toggleCompany"
      >
        Company
        <img
          src="../../assets/icon-arrow-dark.svg"
          alt="arrow"
          class="block object-contain w-auto transition-transform duration-200 ease-in-out md:hidden"
          :class="[isCompanyShow ? ['rotate-180'] : 'rotate-0']"
        />
        <img
          src="../../assets/icon-arrow-light.svg"
          alt="arrow"
          class="hidden object-contain w-full transition-transform duration-200 md:block"
          :class="[isCompanyShow ? ['rotate-180'] : 'rotate-0']"
        />
      </a>
      <ul
        class="w-full p-4 mt-4 rounded-md bg-Grayish-blue text-Very-dark-black-blue md:p-0 md:absolute md:bg-White shadow-Grayish-blue md:text-Very-dark-blue"
        :class="[isCompanyShow ? ['block'] : 'hidden']"
      >
        <li
          v-for="(c, i) in Company"
          :key="i"
          class="w-full p-2 md:p-2 hover:opacity-75"
        >
          <a href="#">{{ c }}</a>
        </li>
      </ul>
    </li>

    <li class="relative w-full text-center md:w-3/12">
      <a
        href="#"
        class="inline-flex gap-2 mb-4 md:mb-0 text-Very-dark-black-blue md:text-White"
        @click="toggleConnect"
      >
        Connect
        <img
          src="../../assets/icon-arrow-dark.svg"
          alt="arrow"
          class="block object-contain w-auto transition-transform duration-200 ease-in-out md:hidden"
          :class="[isConnectShow ? ['rotate-180'] : 'rotate-0']"
        />
        <img
          src="../../assets/icon-arrow-light.svg"
          alt="arrow"
          class="hidden object-contain w-full transition-transform duration-200 md:block"
          :class="[isConnectShow ? ['rotate-180'] : 'rotate-0']"
        />
      </a>
      <ul
        class="w-full p-4 mt-4 rounded-md bg-Grayish-blue text-Very-dark-black-blue md:p-0 md:absolute md:bg-White shadow-Grayish-blue md:text-Very-dark-blue"
        :class="[isConnectShow ? ['block'] : 'hidden']"
      >
        <li
          v-for="(connect, i) in Connect"
          :key="i"
          class="w-full p-2 md:p-2 hover:opacity-75"
        >
          <a href="#">{{ connect }}</a>
        </li>
      </ul>
    </li>
  </ul>
</template>
