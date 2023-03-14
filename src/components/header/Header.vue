<script setup>
const menuLinks = [
    {
        url: "/",
        title: "Home",
    },
    {
        url: "/movies",
        title: "Movies",
    }
]
</script>
<template>
    <header class="flex items-center justify-center py-[40px] mb-5">
        <ul class="menu text-white flex gap-x-4">
            <li v-for="menuLink in menuLinks" :key="menuLink.title">
                <RouterLink :to="menuLink.url" activeClass="active-color">
                    {{ menuLink.title }}    
                </RouterLink>
            </li>
        </ul>
    </header>
</template>

<style scoped>
    .active-color{
        color: #f62682;
    }
</style>

