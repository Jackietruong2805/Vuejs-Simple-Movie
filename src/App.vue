<script setup>
import {Header} from "./components";


</script>
<template>
    <Header></Header>
    <RouterView :key="$route.params.id || ''"></RouterView>   
</template>

