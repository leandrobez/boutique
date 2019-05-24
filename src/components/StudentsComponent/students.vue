<template>
<div>
    <section id="il-student" class="il-section il-section--student">
        <div class="il-container--wrapper">
            <h1 class="il-section--title"> Os <span class="il-color--text__very-light">Alunos</span></h1>
            <div class="il-students--content">
                <div class="il-box--items one-item">
                    <div class="il-item il-box il-color--background__lighten">
                        <i class="il-pilates-icon flaticon-bicycle-position light"></i>
                        <span class="il-color--text__darken">Com a palavra os alunos.</span>
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
