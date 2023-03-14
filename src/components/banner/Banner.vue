<script setup>
const bannerLinks = ['Adventure', 'Dangerous', 'Fantasy']    
</script>
<template>
    <div class="banner relative h-[600px] mb-10 rounded-xl">
        <div class="inset-0 absolute bg-black opacity-50 rounded-xl"></div>
        <div class="absolute left-5 bottom-5">
            <h2 class="text-[30px] font-semibold leading-8 mb-3">Knock at the cabin</h2>
            <ul class="menu flex gap-x-[20px] mb-8">
                <li class="py-2 px-4 border border-white rounded-md" v-for="bannerLink in bannerLinks" :key="bannerLink">
                    {{ bannerLink }}
                </li>
            </ul>
            <button type="button" class="px-5 py-3 bg-purple-500 rounded-md">Watch now</button>
        </div>
    </div>
</template>

<style scoped>
.banner{
  background-image: url('https://image.cnbcfm.com/api/v1/image/105828186-1554212544565avengers-endgame-poster-og-social-crop.jpg?v=1555618903&w=1920&h=1080');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>