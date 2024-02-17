<template>
    <button :class="model" @click="functionClick()">
        {{ text }}
    </button>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'ButtonDefault',
    props: {
        text: {
            type: String,
            required: true,
        },
        functionClick: {
            type: Function,
            required: true
        },
        model: {
            type: String,
            required: true,
        }
    }
}); 
</script>

<style scoped>
@import '@/assets/main.css';

button{
    min-width: 100%;
    padding: 16px;
    border-radius: 10px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    color: var(--color-blue);
    /* z-index: 99;    */
    transition: all .2s ease-in;
}

.outline{
    border: 1px solid var(--color-orange);
    background: var(--color-white);
}

.solid{
    background: var(--color-orange-min);
    border: 1px solid var(--color-orange-min);
}

button:hover{
    background: var(--color-orange);
}

</style>