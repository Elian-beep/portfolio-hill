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
    border-radius: 10px;
    border: 1px solid var(--color-orange);
    cursor: pointer;
    
    font-size: 14px;
    font-weight: 600;
    z-index: 99;   
    transition: all .2s ease-in;
    background: var(--color-white);
    color: var(--color-blue);
}

button:hover{
    background: var(--color-orange);
}

</style>