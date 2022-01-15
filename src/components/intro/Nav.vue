x<script setup>

const links = ['Prodact', 'Company', 'connect']

const prodacts = ['Overview', ' Pricing', ' Marketplace', 'Features', ' Integration']

const company = ['About ', 'Team', ' Blog', ' Careers']

const connect = ['Contact', ' Newsletter', ' LinkedIn']
</script>

<template>
    <nav class="flex-1 h-3/6 md:w-2/3 ">
        <ul class="flex flex-col items-center justify-between p-5 h-3/5 md:flex-row md:gap-4 md:justify-start">
            <li v-for="link in links" :key="link.index" class>
                <a href="#" class="inline-flex items-center justify-center gap-2">
                    {{ link }}
                    <img src="../../assets/icon-arrow-light.svg" alt />
                </a>
                <li v-for="prodact in prodacts" :key="prodact.index" class="hidden">
                    {{prodact}}
                </li>
            </li>
        </ul>
    </nav>
</template>
