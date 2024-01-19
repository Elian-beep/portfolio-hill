<template>
    <span class="title">{{ text }}</span>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'TItleDefault',
    props: {
        text: {
            type: String,
            required: true
        }
    }
});
</script>

<style scoped>
@import '@/assets/main.css';
.title{
    color: var(--color-orange);
    font-size: 18px;
    font-weight: 600;
}

</style>