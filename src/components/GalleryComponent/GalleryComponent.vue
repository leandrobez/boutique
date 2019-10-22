<template>
<section class="il-section il-section--gallery">
    <div class="il-container--wrapper">
        <h1 class="il-section--title">Fotos <span class="il-color--text__very-light">{{title}}</span>
        </h1>
        <RouterView />
    </div>
    <div class="il-modal--big-img">
        <a href="#!" class="il-close" @click.prevent="close"></a>
        <img :src="bigImg" alt="">
    </div>
</section>
</template>

<script>
import fotos from '../../common/fotos.json';
export default {
  name: 'StudioGallery',
  data() {
    return {
      title: '',
      studio: [],
      eventos: [],
      bigImg: ''
    };
  },
  mounted() {
    this.eventos = fotos.eventos;
    this.studio = fotos.studio;
  },
  methods: {
    showBigImg(photo) {
      this.bigImg = `/images/gallery/studio/big/kaizen${photo}.jpg`;
      const modal = document.querySelector('.il-modal--big-img');
      modal.classList.add('il-modal--show');
    },
    close() {
      this.bigImg = '';
      const modal = document.querySelector('.il-modal--big-img');
      modal.classList.remove('il-modal--show');
    }
  }
};
</script>
