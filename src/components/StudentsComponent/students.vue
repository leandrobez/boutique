<template>
<div>
    <section id="il-student" class="il-section il-section--student">
        <div class="il-container--wrapper">
            <h1 class="il-section--title"> Os <span class="il-color--text__very-light">Alunos</span></h1>
            <h2 class="il-section--sub-title il-color--text__very-light text-right">Tudo isso é para vocês</h2>
            <div class="il-students--content">
                <div class="il-box--items one-item">
                    <div class="il-item il-box il-color--background__lighten">
                        <i class="il-pilates-icon flaticon-bicycle-position light"></i>
                        <span class="il-color--text__darken">Os protagonistas.</span>
                        <p class="il-content--description il-color--text">Contamos com professores com formação em Educação Física e Fisioterapia, além de possuirem vários cursos de epecialização. Nosso diferencial reside nos fundamentos estabelecidos pela POLESTAR EDUCATION® - referência em pilates no mundo - e nas bases científicas que regem a ginástica postural; a ginástica localizada; a musculação e o condicionamento cardiovascular.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <il-depoiment />
</div>
</template>

<script>
import { animeBox } from '../../common/animation';
import ilDepoiment from './includes/depoiments.vue';
export default {
  name: 'Student',

  components: {
    ilDepoiment
  },
  mounted() {
    this.startAnime();
  },
  data() {
    return {
      whatIcon: 'il-pilates-icon flaticon-exercises-with-reformer'
    };
  },

  mixins: [animeBox]
};
</script>
