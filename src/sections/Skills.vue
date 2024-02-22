<script lang="ts">
import SkillItem from '@/components/SkillItem.vue';
import TitleSecondary from '@/components/TitleSecondary.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SkillsVue',
    components: { TitleSecondary, SkillItem },
});
</script>

<template>
    <TitleSecondary text="Adquiri habilidades em:" />
    <div class="container-skill">
        <div class="group-skills">
            <SkillItem text="Pesquisa com cliente" />
            <SkillItem text="Pesquisas com usuários" />
            <SkillItem text="Criação de personas e proto-personas" />
            <SkillItem text="Metodologia do Design Thinking" />
            <SkillItem text="Design de Interface (UI)" />
            <SkillItem text="Figma" />
            <SkillItem text="Photoshop" />
        </div>
        <div class="group-skills">
            <SkillItem text="Hierarquia tipográfica" />
            <SkillItem text="Teoria das cores" />
            <SkillItem text="Style Guide" />
            <SkillItem text="Design System" />
            <SkillItem text="Acessibilidade" />
            <SkillItem text="Discovery" />
            <SkillItem text="Criação de protótipos de baixa, média e alta fidelidade" />
        </div>
    </div>
    <p class="text-skills">
        Estou ansiosa para aplicar minha experiência e conhecimento em projetos desafiadores e contribuir para a criação de
        experiências significativas para os usuários.
    </p>
</template>

<style scoped>
@import '@/assets/main.css';

.group-skills,
.container-skill {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.text-skills {
    color: var(--color-black);
    font-size: 14px;
    font-weight: 500;
}

@media screen and (min-width: 796px) {
    .container-skill {
        flex-direction: row;
        justify-content: space-between;
    }

    .group-skills,
    .container-skill {
        gap: 8px;
    }

    .text-skills{
        font-size: 18px;
        line-height: 28px;
    }
}
</style>