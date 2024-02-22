<script lang="ts">
import { defineComponent } from 'vue';

import star_icon from "@/assets/icons/Star.svg";

export default defineComponent({
    name: 'SkillItem',
    components: {},
    data() {
        return {
            star_icon
        }
    },
    props: {
        text: {
            type: String,
            required: true
        }
    }
});
</script>

<template>
    <div class="content-skill">
        <img :src="star_icon" alt="Ícone de uma estrela amarela">
        <span>{{ text }}</span>
    </div>
</template>

<style scoped>
@import '@/assets/main.css';

.content-skill {
    display: flex;
    align-items: center;
    gap: 8px;
}

.content-skill span {
    color: var(--color-black);
    font-size: 14px;
    font-weight: 500;
}

@media screen and (min-width: 796px) {
    .content-skill span{
        font-size: 18px;
    }
}
</style>