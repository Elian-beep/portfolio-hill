<template>
    <img :src="imgPath" :alt="textAlt">
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'ResizeImg',
    props: {
        imgMobile: {
            type: String,
            required: true
        },
        imgLaptop: {
            type: String,
            required: true
        },
        textAlt: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            isWideScreen: window.innerWidth > 769,
        };
    },computed: {
        imgPath(): string {
            return this.isWideScreen ? this.imgLaptop : this.imgMobile;
        }
    },
});
</script>

<style scoped>
@import '@/assets/main.css';

@media screen and (min-width: 796px){
}

</style>