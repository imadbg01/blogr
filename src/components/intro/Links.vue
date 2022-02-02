<script setup>

const links = ['Product', 'Company', 'connect']

 defineProps(
    {
        subLinks: Array()
    }
)

</script>

<template>
    <li v-for="link in links" :key="link.index" class>
        <a href="#" class="inline-flex items-center justify-center gap-2 text-base">
            {{ link }}
            <img src="../../assets/icon-arrow-light.svg" alt />
        </a>
        <li v-for="subLink in subLinks">
            <a href="#">
                {{subLink}}
            </a>
        </li>
    </li>
</template>