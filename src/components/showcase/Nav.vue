x
<script setup>
import Links from "./Links.vue";

const products = [
  "Overview",
  " Pricing",
  " Marketplace",
  "Features",
  " Integration",
];

const company = ["About ", "Team", " Blog", " Careers"];

const connect = ["Contact", " Newsletter", " LinkedIn"];
</script>

<template>
  <nav class="flex-1 h-3/6 md:w-2/3">
    <ul
      class="flex flex-col items-center justify-between h-3/5 md:flex-row md:gap-4 md:justify-start"
    >
      <links />
    </ul>
  </nav>
</template>
