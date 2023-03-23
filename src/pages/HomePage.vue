<script setup>
import { Banner, MovieList, TitleBetween } from '../components';

</script>

<template>
    <Banner></Banner>
    <TitleBetween>{{ $t('home.NowPlaying') }}</TitleBetween>
    <MovieList type="now_playing"></MovieList>
    <TitleBetween>{{ $t('home.TopRated') }}</TitleBetween>
    <MovieList type="top_rated"></MovieList>
    <TitleBetween>{{ $t('home.Trending') }}</TitleBetween>
    <MovieList type="popular"></MovieList>
</template>
<style>

</style>