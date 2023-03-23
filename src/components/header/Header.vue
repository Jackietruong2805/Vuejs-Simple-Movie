<script setup></script>
<template>
    <header class="flex items-center py-[40px] mb-5">
        <ul class="menu text-white flex gap-x-4 text-xl">
            <li>
                <RouterLink to="/" activeClass="text-[#f62682]">
                    {{ $t('header.Home') }}    
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/movies" activeClass="text-[#f62682]">
                    {{ $t('header.Movies') }}    
                </RouterLink>
            </li>
        </ul>
        <div class="ml-auto pl-4 text-2xl">
            <select v-model="$i18n.locale" class="bg-transparent focus:outline-none border-2 border-pink-600 px-4 py-1 rounded-md">
                <option class="bg-transparent hover:bg-transparent" v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale.toUpperCase() }}</option>
            </select>
        </div>
    </header>
</template>
