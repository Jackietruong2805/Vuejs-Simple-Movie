<script setup>

import {Banner, MovieList, TitleBetween} from "../components";

</script>

<template>
    <Banner></Banner>
    <TitleBetween>Now Playing</TitleBetween>
    <MovieList type="now_playing"></MovieList>
    <TitleBetween>Top Rated</TitleBetween>
    <MovieList type="top_rated"></MovieList>
    <TitleBetween>Trending</TitleBetween>
    <MovieList type="popular"></MovieList>
</template>
<style>

</style>