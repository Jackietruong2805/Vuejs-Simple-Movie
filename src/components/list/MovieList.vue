<script setup>
import MovieCard from "../card/MovieCard.vue";
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
    }

]

</script>
<template>
    <div class="grid grid-cols-4 gap-x-10">
        <MovieCard v-for="movie in movies" :key="movie.image" :src="movie.src" :title="movie.title" :yearAdded="movie.yearAdded" :rate="movie.rate">
        </MovieCard>
    </div>
</template>