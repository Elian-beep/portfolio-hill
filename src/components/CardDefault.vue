<template>
    <div @click="goToLink" class="container-card">
        <div class="box-img">
            <img :src="imgCard" alt="Capa de projeto/artigo">
        </div>
        <div class="area-texts">
            <span class="title-card">
                {{ title }}
            </span>
            <p class="text-card">
                {{ description }}
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CardDefault',
    components: {},
    props: {
        imgCard: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    },
    methods: {
        goToLink(){
            window.location.assign(this.link);
        }
    }
});
</script>

<style scoped>
@import '@/assets/main.css';

.container-card {
    border-radius: 10px;
    background: var(--color-gray);
    display: flex;
    flex-direction: column;
    gap: 8px;
    cursor: pointer;
}

.box-img {}

.box-img img {
    border-radius: 10px 10px 0 0;
    width: 100%;
    height: 140px;
}

.area-texts{
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0 12px 12px 12px;
}

.title-card {
    font-size: 14px;
    font-weight: 600;
    color: var(--color-blue);
}

.text-card {
    font-size: 12px;
    color: var(--color-black);
    font-weight: 400;
}

@media screen and (min-width: 796px) {}
</style>