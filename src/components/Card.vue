<template>
    <div @click="goToLink" class="content-card">
        <div class="area-img">
            <img :src="imgCard" alt="capa de projeto/artigo">
        </div>
        <span class="title">
            {{ title }}
        </span>
        <p class="description">
            {{ description }}
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Card',
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
        goToLink() {
            window.location.assign(this.link);
        }
    }
});
</script>

<style scoped>
@import '@/assets/main.css';

.content-card {
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: var(--color-gray);
    padding: 12px;
    border-radius: 10px;
    cursor: pointer;
}

.area-img {
    width: 100%;
    height: 128px;
    background-color: var(--color-white);
}

.area-img img {
    border-radius: 5px;
    height: 128px;
    z-index: -9;
    width: 100%;
}

.title {
    color: var(--color-blue);
    font-size: 14px;
    font-weight: 600;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 2;
}

.description {
    color: var(--color-black);
    font-size: 12px;
    font-weight: 400;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 4;
}

@media screen and (min-width: 796px) {
    .content-card{
        width: 224px;
    }

    .title{
        font-size: 16px;
    }

    .description{
        font-size: 14px;
    }
}
</style>