<script setup>
import axios from 'axios';
import {computed, onMounted, ref, watch} from 'vue';
import { Button } from '../components';
const isLoading = ref(false);
const isLoadingMore = ref(false);
const search = ref('');
const query = ref('');
const page = ref(1);
const pagePopular = ref(1);
const popularUrl = ref(`https://api.themoviedb.org/3/movie/popular?api_key=db4d89fe51bfd36971ac04f502407713&language=en-US&page=1`);
const popularMovies = ref([]);
const searchMovies = ref([]);
const loadMoreMovies = ref([]);

onMounted(async ()=>{
    const res = await axios.get(popularUrl?.value);
    popularMovies.value = [...res?.data?.results]; 
});

const fetchSearchMovies = async (newQuery)=>{
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=db4d89fe51bfd36971ac04f502407713&language=en-US&query=${newQuery}&page=${page?.value}&include_adult=true`);
    searchMovies.value = [...res?.data?.results];
};

watch(query, (newQuery)=>{
    fetchSearchMovies(newQuery);    
});

watch(search, (newSearch)=>{
    if(!newSearch){
        query.value = "";
    }
})

const handleInputChange = ()=>{
    if(!search.value){
        return;
    }else{
        isLoading.value = true;
        setTimeout(()=>{
            query.value = search.value;
            isLoading.value = false;
        }, 600);
    }
};


const getFullYear = (date)=>{
    return new Date(date).getFullYear();
};

const handleLoadMore = async ()=>{
    isLoadingMore.value = true;
    pagePopular.value =  pagePopular.value + 1;
    popularUrl.value = `https://api.themoviedb.org/3/movie/popular?api_key=db4d89fe51bfd36971ac04f502407713&language=en-US&page=${pagePopular?.value}`
    const res = await axios.get(popularUrl?.value);
    loadMoreMovies.value = [...res?.data?.results];
    popularMovies.value = [...popularMovies.value, ...loadMoreMovies.value];
    isLoadingMore.value = false;
};

</script>

<template>
    <div class="flex bg-[#1e293b] p-6 rounded-2xl mb-10">
        <input v-model="search" @input="handleInputChange" class="bg-transparent focus:outline-none flex-1" placeholder="Type here to search...">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6 text-[#db2777]">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
    </div>
    <div v-if="isLoading" class="border-2 border-t-transparent border-[#db2777] w-10 h-10 animate-spin mx-auto rounded-full"></div>
    <div v-else-if="query" class="grid grid-cols-4 gap-10 mb-16">
        <div v-for="searchMovie in searchMovies" :key="searchMovie?.id" class="bg-[#1e293b] p-3 leading-6 text-white rounded-lg" >
            <div class="rounded-lg w-full h-[250px] mb-3">
                <img :src="`https://image.tmdb.org/t/p/w500${searchMovie?.poster_path}`" class="rounded-[inherit] block object-cover object-center h-full w-full" />
            </div>
            <h1 class="font-bold text-[21px] mb-2">{{ searchMovie?.title }}</h1>
            <div class="flex justify-between items-center text-[14px] text-gray-500 font-bold mb-3">
                <span>{{ getFullYear(searchMovie.release_date) }}</span>
                <span>{{ searchMovie.vote_average }}</span>
            </div>
            <Button :key="searchMovie?.id" :id="searchMovie?.id" class="block py-3 px-6 bg-[#6f5cf1] rounded-lg capitalize leading-6 w-[90%] mx-auto mb-5">{{ $t('button.action') }}</Button>
        </div>
    </div>
    <div v-else class="grid grid-cols-4 gap-10 mb-16">
        <div v-for="popularMovie in popularMovies" :key="popularMovie?.id" class="bg-[#1e293b] p-3 leading-6 text-white rounded-lg" >
            <div class="rounded-lg w-full h-[250px] mb-3">
                <img :src="`https://image.tmdb.org/t/p/w500${popularMovie?.poster_path}`" class="rounded-[inherit] block object-cover object-center h-full w-full" />
            </div>
            <h1 class="font-bold text-[21px] mb-2">{{ popularMovie?.title }}</h1>
            <div class="flex justify-between items-center text-[14px] text-gray-500 font-bold mb-3">
                <span>{{ getFullYear(popularMovie.release_date) }}</span>
                <span>{{ popularMovie.vote_average }}</span>
            </div>
            <Button :key="popularMovie?.id" :id="popularMovie?.id" class="block py-3 px-6 bg-[#6f5cf1] rounded-lg capitalize leading-6 w-[90%] mx-auto mb-5">{{ $t('button.action') }}</Button>
        </div>
    </div>
    <div class="mb-20">
        <template v-if="!isLoading">
            <div v-if="isLoadingMore" class="border-2 border-t-transparent border-[#db2777] w-10 h-10 animate-spin mx-auto rounded-full"></div>
            <button v-else type="button" class="mx-auto block px-5 py-3 bg-pink-600 rounded-md" @click="handleLoadMore">
                    Load More
            </button>
        </template>
    </div>
</template>