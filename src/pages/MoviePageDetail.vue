<script setup>
import axios from 'axios';
import { onMounted, ref, watch } from 'vue';
import { Navigation } from 'swiper';
import 'swiper/css';
import { SwiperSlide, Swiper } from 'swiper/vue';
import 'swiper/css/navigation';
import { Button, MovieCard } from '../components';
import { useRouter } from 'vue-router';

const router = useRouter();
const modules = [Navigation];

const props = defineProps({
    id: String
});
const bgImageRef = ref(null);
const results = ref({});
const genres = ref([]);
const urlRef = ref(`https://api.themoviedb.org/3/movie/${props?.id}?api_key=db4d89fe51bfd36971ac04f502407713&language=en-US`);
const castUrlRef = ref(`https://api.themoviedb.org/3/movie/${props?.id}/credits?api_key=db4d89fe51bfd36971ac04f502407713&language=en-US`);
const videoUrl = ref(`https://api.themoviedb.org/3/movie/${props?.id}/videos?api_key=db4d89fe51bfd36971ac04f502407713&language=en-US`);
const relatedUrl = ref(`https://api.themoviedb.org/3/movie/${props?.id}/similar?api_key=db4d89fe51bfd36971ac04f502407713&language=en-US&page=1`);
const casts = ref([]);
const videos = ref([]);
const relates = ref([]);


onMounted(async () => {
    const res = await axios.get(urlRef.value);
    const data = { ...res?.data };
    results.value = { ...data };
    genres.value = [...data?.genres];
    bgImageRef.value.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${data?.backdrop_path})`;
});

onMounted(async () => {
    const res = await axios.get(castUrlRef.value);
    const data = { ...res?.data };
    casts.value = [...data?.cast?.slice(0, 4)];
});

onMounted(async () => {
    const res = await axios.get(videoUrl.value);
    videos.value = [...res?.data?.results?.slice(0, 2)];
})

onMounted(async ()=>{
    const res = await axios.get(relatedUrl.value);
    relates.value = [...res?.data?.results];
});

const getFullYear = (date)=>{
    return new Date(date).getFullYear();
};


</script>
<template>
    <div class="h-[600px] mb-10 bg-cover bg-center rounded-xl relative" ref="bgImageRef">
        <div class="inset-0 absolute bg-black opacity-50 rounded-xl"></div>
    </div>
    <div class="-mt-52 relative z-10 rounded-lg mb-10">
        <div class="max-w-[800px] rounded-lg mx-auto h-[400px]">
            <img :src="`https://image.tmdb.org/t/p/original${results?.poster_path}`"
                class="rounded-lg w-full h-full object-cover object-center" />
        </div>
        <h1 class="text-center my-10 text-4xl">{{ results?.title }}</h1>
        <ul class="menu flex justify-center gap-x-[20px] mb-10">
            <li v-for="genre in genres" :key="genre.id" class="py-2 px-4 border-2 text-pink-600 border-pink-600 rounded-md">
                {{ $t(`genres.${genre?.name}`) }}
            </li>
        </ul>
        <p class="text-center leading-8 max-w-[600px] mx-auto mb-20">
            {{ results?.overview }}
        </p>
        <h1 class="text-center text-4xl mb-10">{{ $t('casts') }}</h1>
        <div class="grid grid-cols-4 gap-x-5 mb-20">
            <div v-for="cast in casts" :key="cast.id" class="rounded-md">
                <img :src="`https://image.tmdb.org/t/p/original${cast.profile_path}`"
                    class="block rounded-md object-cover h-[300px] w-full" />
                <h1 class="mt-4 font-semibold text-xl">{{ cast?.name }}</h1>
            </div>
        </div>
        <div class="mb-20">
            <div class="mb-10" v-for="video in videos" :key="video.id">
                <h1 class="text-2xl p-3 bg-purple-500 inline-block mb-5">{{ video?.name }}</h1>
                <div>
                    <iframe class="aspect-video w-full" :src="`https://www.youtube.com/embed/${video?.key}`"
                        title="WHITE LINES (Cocaine Bear Remix) by Pusha T (Official Lyric Video)" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        </div>
        <div>
            <h1 class="text-2xl font-semibold mb-10">{{ $t('relatedMovies') }}</h1>
            <swiper :slides-per-view="4" :space-between="40"  navigation :modules="modules" class="mySwiper mb-10" grabCursor>
                <SwiperSlide v-for="relate in relates" :key="relate.id">
                    <div class="bg-[#1e293b] p-3 leading-6 text-white rounded-lg">
                        <div class="rounded-lg w-full h-[250px] mb-3">
                            <img :src="`https://image.tmdb.org/t/p/w500${relate?.poster_path}`" class="rounded-[inherit] block object-cover object-center h-full w-full" />
                        </div>
                        <h1 class="font-bold text-[21px] mb-2">{{ relate.title }}</h1>
                        <div class="flex justify-between items-center text-[14px] text-gray-500 font-bold mb-3">
                            <span>{{ getFullYear(relate.release_date) }}</span>
                            <span>{{ relate.vote_average }}</span>
                        </div>
                        <Button :id="relate.id" class="py-3 px-6 bg-[#6f5cf1] rounded-lg capitalize leading-6 w-[90%] mx-auto mb-5">{{ $t('button.action') }}</Button>
                    </div>
                </SwiperSlide>
            </swiper>
        </div>
    </div>
</template>
