<template>
    <img class="img-footer" src="@/assets/images/footer-oragen-outline.svg" alt="">
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'FooterImgDefault',
});
</script>

<style scoped>
@import '@/assets/main.css';

.img-footer{
    width: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
}
</style>