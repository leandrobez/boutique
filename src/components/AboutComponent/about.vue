<template>
<div class="il-container--wrapper">
    <section class="il-section il-section--about">
        <h1 class="il-section--title il-title--full">
            <!--<i :class="whatIcon"></i>-->Boutique
            <span class="il-color--text__very-light">Pilates</span>
        </h1>
        <h2 class="il-section--sub-title il-color--text__very-light text-right">E assim dizia Pilates:</h2>

        <div class="il-about--content">
            <p class="il-color--text__very-light"> Equilíbrio perfeito entre corpo e mente é aquela qualidade do homem civilizado, que não somente dá a ele uma superioridade sobre o reino selvagem e animal, mas também provê ao mesmo todos os poderes físicos e mentais que são indispensáveis para atingir o objetivo da humanidade!.</p>

            <h3 class="il-section--sub-title">Temos como missão:</h3>
            <div class="il-box--items">
                <div class="il-item ">
                    <p class="il-color--text__dark">
                        <i class="il-pilates-icon flaticon-exercises-with-body-arc"></i>
                        Potencializar as qualidades físicas individuais do aluno tendo como base os princípios do pilates.
                    </p>
                </div>
                <div class="il-item">
                    <p class="il-color--text__dark">
                        <i class="il-pilates-icon flaticon-breath-position"></i>
                        Primar pela busca de uma postura mais equilibrada através do fortalecimento da musculatura profunda com a finalidade precípua de melhorar a qualidade de vida do indivíduo.
                    </p>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    name: 'About',

    data() {
        return {
            whatIcon: 'il-pilates-icon flaticon-side-bending-posture'
        };
    }
};
</script>
