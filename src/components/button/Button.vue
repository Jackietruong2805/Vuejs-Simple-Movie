<script setup>
import { ref } from "vue";
import {useRouter} from "vue-router";
const router = useRouter();
const props =  defineProps({
    type: {
        type: String,
        default: 'button'
    },
    class: String,
    id: Number
});



const handleNavigate = ()=>{
    router.push({
        name: "movieDetail",
        params: {id: props.id}
    });
};

</script>
<template>
    <button :type="props?.type" class="text-center block" :class="props?.class" @click="handleNavigate" >
        <slot></slot>
    </button>
</template>