<template>
<section id="il-space" class="il-section il-section--space">
    <div class="il-container--wrapper">
        <h1 class="il-section--title">O <span class="il-color--text__very-light">Studio</span></h1>
        <h2 class="il-section--sub-title il-color--text__very-light text-right">{{$parent.title}}</h2>
        <div class="il-space--content">
            <div class="il-box--items">
                <div class="il-item il-box il-color--background__lighten">
                  <i class="il-pilates-icon flaticon-exercises-with-body-arc light"></i>
                  <p class="il-content--description il-color--text">Oferecemos um ambiente preparado para a prática de pilates e corealign com um espaço amplo, climatizado, arejado e estruturado com equipamentos de última geração, além de uma equipe de professores extremamente competentes e experientes. Trabalhamos com turmas reduzidas e também com atendimento personalizado.</p>
                </div>
            </div>
        </div>
        <router-link class="il-btn" :to="{name: 'gallery.studio'}" title="Veja fotos do studio">Acesse o álbum</router-link>
    </div>
</section>
</template>

<script>
import { animeStudio } from '../../common/animation';
export default {
  name: 'Studio',

  data() {
    return {
      whatIcon: 'il-pilates-icon flaticon-pilates-reformer'
    };
  },
  mounted() {
    this.startAnime();
  },
  mixins: [animeStudio]
};
</script>
