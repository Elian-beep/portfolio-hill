<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TItleSecondary',
    props: {
        text: {
            type: String,
            required: true
        }
    }
});
</script>

<template>
    <span class="title">{{ text }}</span>
</template>

<style scoped>
@import '@/assets/main.css';

.title {
    color: var(--color-blue);
    font-size: 16px;
    font-weight: 600;
}

@media screen and (min-width: 796px) {
    .title {
        font-size: 20px;
    }
}
</style>