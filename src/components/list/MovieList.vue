<script setup>
import MovieCard from "../card/MovieCard.vue";
import 'swiper/css';
import { Navigation } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/vue';
import 'swiper/css/navigation';

const modules = [Navigation]
const movies = [
    {
        src: "https://upload.wikimedia.org/wikipedia/en/7/78/Puss_in_Boots_The_Last_Wish_poster.jpg",
        title: "Puss in Boots",
        yearAdded: "2022",
        rate: 8.4
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/en/7/78/Puss_in_Boots_The_Last_Wish_poster.jpg",
        title: "Puss in Boots",
        yearAdded: "2022",
        rate: 8.4
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/en/7/78/Puss_in_Boots_The_Last_Wish_poster.jpg",
        title: "Puss in Boots",
        yearAdded: "2022",
        rate: 8.4
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/en/7/78/Puss_in_Boots_The_Last_Wish_poster.jpg",
        title: "Puss in Boots",
        yearAdded: "2022",
        rate: 8.4
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/en/7/78/Puss_in_Boots_The_Last_Wish_poster.jpg",
        title: "Puss in Boots",
        yearAdded: "2022",
        rate: 8.4
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/en/7/78/Puss_in_Boots_The_Last_Wish_poster.jpg",
        title: "Puss in Boots",
        yearAdded: "2022",
        rate: 8.4
    }
]

</script>
<template>
    <swiper :slides-per-view="4" :space-between="50" navigation :modules="modules" class="mySwiper" grabCursor>
        <SwiperSlide v-for="movie in movies" :key="movie.image">
            <MovieCard :src="movie.src" :title="movie.title" :yearAdded="movie.yearAdded" :rate="movie.rate">
            </MovieCard>
        </SwiperSlide>
    </swiper>
</template>