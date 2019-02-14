<template>
<div class="il-container--wrapper">

    <section id="il-student" class="il-section il-section--student">
        <h1 class="il-section--title">
            <!--<i :class="whatIcon"></i>-->Os <span class="il-color--text__very-light">Alunos</span></h1>
        <h2 class="il-section--sub-title il-color--text__very-light text-right">Tudo isso é para vocês</h2>
    </section>
    <section class="il-section">
        <div class="il-space--content">
            <h3 class="il-section--title__small il-color--text__dark">Vocês são os protagonistas</h3>
            <p class="il-color--text__dark">Contamos com professores com formação em Educação Física e Fisioterapia, além de possuirem vários cursos de epecialização. Nosso diferencial reside nos fundamentos estabelecidos pela POLESTAR EDUCATION® - referência em pilates no mundo - e nas bases científicas que regem a ginástica postural; a ginástica localizada; a musculação e o condicionamento cardiovascular..</p>
        </div>
    </section>

    <il-depoiment />

</div>
</template>

<script>
import ilDepoiment from "./includes/depoiments.vue";
export default {
    name: 'Student',

    components: {
        ilDepoiment
    },

    data() {
        return {
            whatIcon: 'il-pilates-icon flaticon-exercises-with-reformer',
            
        };
    },

    

    methods: {

    }
};
</script>
