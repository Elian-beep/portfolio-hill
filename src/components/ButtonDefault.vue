<template>
    <button :class="preStyle" @click="functionClick()">
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
        preStyle: {
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
    transition: all .2s ease-in;
    color: var(--color-blue);
}

.outline{
    background: var(--color-white);
    border: 1px solid var(--color-orange);
}

.solid{
    background: var(--color-orange-min);
    border: 1px solid var(--color-orange);
}

@media screen and (min-width: 796px){
    button{
        font-size: 18px;
    }

    .outline:hover, .solid:hover{
        background: var(--color-orange);
    }

    .solid:hover{}
}

</style>