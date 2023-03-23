<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const props = defineProps(['id']);
const bgImageRef = ref(null);
const results = ref({});
const genres = ref([]);
const urlRef = ref(`https://api.themoviedb.org/3/movie/${props.id}?api_key=db4d89fe51bfd36971ac04f502407713&language=en-US`);

onMounted(async ()=>{
    const res = await axios.get(urlRef.value);
    const data = {...res?.data};
    console.log("data: ",data)
    results.value = {...data};
    genres.value = [...data?.genres];
    bgImageRef.value.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${data?.backdrop_path})`;
});


// MovieLlist Api
// https://api.themoviedb.org/3/genre/movie/list?api_key=db4d89fe51bfd36971ac04f502407713&language=en-US
</script>
<template>
    <div class="h-[600px] mb-10 bg-cover bg-center rounded-xl relative" ref="bgImageRef">
        <div class="inset-0 absolute bg-black opacity-50 rounded-xl"></div>
    </div>
    <div class="-mt-52 relative z-10 rounded-lg mb-10">
        <div class="max-w-[800px] rounded-lg mx-auto h-[400px]">
            <img :src="`https://image.tmdb.org/t/p/original${results?.poster_path}`" class="rounded-lg w-full h-full object-cover object-center"/>
        </div>
        <h1 class="text-center my-10 text-4xl">{{ results?.title }}</h1>
        <ul class="menu flex justify-center gap-x-[20px] mb-8">
            <li v-for="genre in genres" :key="genre.id" class="py-2 px-4 border-2 text-pink-600 border-pink-600 rounded-md">
                {{ genre?.name }}
            </li>
        </ul>
    </div>
</template>
