<template>
<section id="il-space" class="il-section il-section--space">
    <div class="il-container--wrapper">
        <h1 class="il-section--title">O <span class="il-color--text__very-light">Studio</span></h1>
        <div class="il-space--content">
            <div class="il-box--items">
                <div class="il-item il-box il-color--background__lighten">
                  <i class="il-pilates-icon flaticon-exercises-with-body-arc light"></i>
                  <p class="il-content--description il-color--text">Oferecemos um ambiente sofisticado para a prática de pilates e corealign com amplo espaço, climatizado, "clean" e estruturado com equipamentos inovadores.<br>A competente equipe está qualificada para atender de forma rápida os seus objetivos.</p>
                </div>
            </div>
        </div>
        <div class="il-button--content">
          <router-link class="il-btn il-btn--cards" :to="{name: 'gallery.studio'}" title="Veja fotos do estúdio">Álbum</router-link>
          <router-link class="il-btn il-btn--cards" :to="{name: 'video'}" title="Assista alguns vídeos do estúdio">Videos</router-link>
        </div>
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
