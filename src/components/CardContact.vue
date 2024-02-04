<template>
    <div @click="redirectSocialMedia" class="container_card_contact">
        <img :src="icon" alt="icone de link social">
        <span>
            {{ text }}
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CardContact',
    components: {},
    props: {
        link: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true
        }
    }, 
    methods: {
        redirectSocialMedia() {
            window.location.href = this.link;
        },
    }
});
</script>

<style scoped>
@import '@/assets/main.css';

.container_card_contact {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px;
    background: var(--color-gray-light);
    border-radius: 10px;
}

.container_card_contact span {
    color: var(--color-black);
    font-size: 14px;
    font-weight: 400;
}

@media screen and (min-width: 796px) {}
</style>