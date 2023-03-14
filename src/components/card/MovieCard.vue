<script setup>

const props = defineProps({
    src: String,
    title: String,
    yearAdded: String,
    rate: Number
});
</script>

<template>
    <div class="bg-[#1e293b] p-3 leading-6 text-white rounded-lg">
        <div class="rounded-lg w-full h-[250px] mb-3">
            <img :src="props.src" class="rounded-[inherit] block object-cover object-center h-full w-full" />
        </div>
        <h1 class="font-bold text-[21px] mb-2">{{ props.title }}</h1>
        <div class="flex justify-between items-center text-[14px] text-gray-500 font-bold">
            <span>{{ props.yearAdded }}</span>
            <span>{{ props.rate }}</span>
        </div>
    </div>
</template>