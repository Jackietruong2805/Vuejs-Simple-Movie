<script setup>
import axios from 'axios';
import 'swiper/css';
import { SwiperSlide, Swiper } from 'swiper/vue';
import { ref, onMounted, computed } from "vue";
import Button from '../button/Button.vue';
const movies = ref([]);
const genres = ref([]);
const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=db4d89fe51bfd36971ac04f502407713&language=en-US`;
const genreUrl =  `https://api.themoviedb.org/3/genre/movie/list?api_key=db4d89fe51bfd36971ac04f502407713&language=en-US`;

onMounted(async () => {
    const res = await axios.get(url);
    const results =  res?.data?.results;
    movies.value = [...results];
});

onMounted(async ()=>{
    const genreRes = await axios.get(genreUrl);
    const genreResult = genreRes?.data?.genres;
    genres.value = [...genreResult];
});

const getGenresName = (genreId, genres) => {
    return genres?.find((genre) => genre.id === genreId)?.name
};

</script>
<template>
    <swiper :slides-per-view="1" class="mb-10" grabCursor>
        <SwiperSlide v-for="movie in movies" :key="movie.id">
            <div class="bg-no-repeat bg-cover bg-center relative h-[600px] mb-10 rounded-xl" :style="{backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`}">
                <div class="inset-0 absolute bg-black opacity-50 rounded-xl"></div>
                <div class="absolute left-5 bottom-5">
                    <h2 class="text-[30px] font-semibold leading-8 mb-3">{{ movie.title }}</h2>
                    <ul class="menu flex gap-x-[20px] mb-8">
                        <li class="py-2 px-4 border border-white rounded-md" v-for="genreId in movie.genre_ids" :key="genreId">
                            {{ $t(`genres.${getGenresName(genreId, genres)}`)}}
                        </li>
                    </ul>
                    <Button class="px-5 py-3 bg-purple-500 rounded-md" :id="movie.id">{{ $t('button.action') }}</Button>
                </div>
            </div>  
        </SwiperSlide>
    </swiper>
</template>
