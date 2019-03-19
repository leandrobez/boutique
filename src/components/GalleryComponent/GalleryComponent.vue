<template>
<section id="il-gallery" class="il-section il-section--gallery">
  <div class="il-container--wrapper">
        <h1 class="il-section--title">Fotos <span class="il-color--text__very-light">{{title}}</span>
        </h1>
        <!--<h2 class="il-section--sub-title il-color--text__very-light text-right">Calendário de Curso - 2019.</h2>-->
        <RouterView />
  </div>
</section>
</template>

<script>
import fotos from '../../common/fotos.json';
export default {
  name: 'StudioGallery',
  data () {
    return {
      title: '',
      studio: [],
      eventos: []
    };
  },
  mounted () {
    this.eventos = fotos.eventos;
    this.studio = fotos.studio;
  }
};
</script>
