<script setup>
import {ref} from 'vue';
import Button from "../button/Button.vue";
// https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=<<api_key>>&language=en-US

const props = defineProps({
    src: String,
    title: String,
    yearAdded: String,
    rate: Number,
    posterPath: String
});

const urlRef = ref(`https://image.tmdb.org/t/p/w500${props?.posterPath}`); 

const getFullYear = (date)=>{
    return new Date(date).getFullYear();
}

</script>

<template>
    <div class="bg-[#1e293b] p-3 leading-6 text-white rounded-lg">
        <div class="rounded-lg w-full h-[250px] mb-3">
            <img :src="urlRef" class="rounded-[inherit] block object-cover object-center h-full w-full" />
        </div>
        <h1 class="font-bold text-[21px] mb-2">{{ props.title }}</h1>
        <div class="flex justify-between items-center text-[14px] text-gray-500 font-bold mb-3">
            <span>{{ getFullYear(props.yearAdded) }}</span>
            <span>{{ props.rate }}</span>
        </div>
        <Button>watch now</Button>
    </div>
</template>