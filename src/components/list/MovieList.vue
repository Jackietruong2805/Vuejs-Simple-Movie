<script setup>
import MovieCard from "../card/MovieCard.vue";
import { Navigation } from 'swiper';
import 'swiper/css';
import { SwiperSlide, Swiper } from 'swiper/vue';
import 'swiper/css/navigation';
import { ref, onMounted } from "vue";
import axios from "axios";

const modules = [Navigation];

const props = defineProps({
    type: String,
});
const movies = ref([]);
const url = `https://api.themoviedb.org/3/movie/${props.type}?api_key=db4d89fe51bfd36971ac04f502407713&language=en-US`;

onMounted(async () => {
    const res = await axios.get(url);
    const results =  res?.data?.results;
    movies.value = [...movies.value];
    movies.value = [...results];
});

</script>
<template>
    <swiper :slides-per-view="4" :space-between="40"  navigation :modules="modules" class="mySwiper mb-10" grabCursor>
        <SwiperSlide v-for="movie in movies" :key="movie.id">
            <MovieCard :id="movie.id" :title="movie.title" :posterPath="movie.poster_path" :yearAdded="movie.release_date" :rate="movie.vote_average">
            </MovieCard>
        </SwiperSlide>
    </swiper>
</template>