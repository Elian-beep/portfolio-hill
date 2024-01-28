<template>
    <button @click="functionClick()">
        {{ text }}
    </button>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'ButtonOutline',
    props: {
        text: {
            type: String,
            required: true,
        },
        functionClick: {
            type: Function,
            required: true
        }
    }
}); 
</script>

<style scoped>
@import '@/assets/main.css';

button{
    min-width: 100%;
    padding: 12px 16px;
    background: var(--color-orange);
    border-radius: 10px;
    border: 1px solid var(--color-orange);

    color: var(--color-blue);
    font-size: 14px;
    font-weight: 600;
    z-index: 99;   
}

</style>