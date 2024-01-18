<template>
    <ContainerPage>
        <section class="area-profile">
            <div>
                <img src="@/assets/images/profile-mobile.png" alt="Imagem de perfil">
            </div>
            <div class="area-desc">
                <span>Oioi! Eu sou a</span>
                <div class="area-texts">
                    <div class="area-role">
                        <h1>Linda Souza!</h1>
                        <h3>Product Designer Júnior (UX/UI)</h3>
                    </div>
                    <p>
                        Sou apaixonada pelo universo da Experiência do Usuário, com uma pitada de conhecimento em
                        desenvolvimento
                        front-end. Foco em resolver problemas e criar produtos digitais que fazem a diferença, utilizando
                        ferramentas e processos de UX/UI centradas na experiência do usuário.
                        Estou sempre aberta a novos desafios e oportunidades de aprendizado, pronta para trazer minha paixão
                        pela UX/UI para a mesa e contribuir com energia positiva em projetos super legais!
                    </p>
                    <span>Vamos criar experiências incríveis juntos?</span>
                </div>
                <div>icones vão aqui</div>
            </div>
        </section>
    </ContainerPage>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContainerPage from '@/components/ContainerPage.vue';

export default defineComponent({
    name: 'Home',
    components: { ContainerPage }
});
</script>

<style scoped>
@import '@/assets/main.css';

.area-profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
}

.area-desc {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.area-desc span {
    color: var(--color-black);
    font-size: 12px;
    font-weight: 400;
}

.area-texts {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.area-texts p {
    color: var(--color-black);
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
}

.area-texts span {
    color: var(--color-blue);
    font-size: 14px;
    font-weight: 600;
}

.area-role h1 {
    color: var(--color-orange);
    font-size: 32px;
    font-weight: 700;
}

.area-role h3 {
    color: var(--color-blue);
    font-size: 16px;
    font-weight: 600;
}
</style>