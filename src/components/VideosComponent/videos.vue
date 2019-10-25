<template>
<section id="il-videos" class="il-section il-section--videos">
    <div class="il-container--wrapper">
        <h1 class="il-section--title">Alguns <span class="il-color--text__very-light">Vídeos</span></h1>
        <div class="il-videos--content">
            <div class="il-card--item">
                <div class="il-card--header">
                    <span class="il-card--title il-color--white">Equilíbrio</span>
                </div>
                <div class="il-card--body">
                    <img src="/images/snapshot/equilibrio.jpg" alt="equilibrio">
                </div>
                <div class="il-card--footer">
                    <i class="mdi mdi-36px mdi-play il-color--white" @click="showModal(0)"></i>
                </div>
            </div>
            <div class="il-card--item">
                <div class="il-card--header">
                    <span class="il-card--title il-color--white">Desafio</span>
                </div>
                <div class="il-card--body">
                    <img src="/images/snapshot/desafio.jpg" alt="desafio">
                </div>
                <div class="il-card--footer">
                    <i class="mdi mdi-36px mdi-play il-color--white" @click="showModal(1)"></i>
                </div>
            </div>
            <div class="il-card--item">
                <div class="il-card--header">
                    <span class="il-card--title il-color--white">Tenacidade</span>
                </div>
                <div class="il-card--body">
                    <img src="/images/snapshot/tenacidade.jpg" alt="tenacidade">
                </div>
                <div class="il-card--footer">
                    <i class="mdi mdi-36px mdi-play il-color--white" @click="showModal(2)"></i>
                </div>
            </div>
            <div class="il-card--item">
                <div class="il-card--header">
                    <span class="il-card--title il-color--white">Concentração</span>
                </div>
                <div class="il-card--body">
                    <img src="/images/snapshot/concentracao.jpg" alt="concentracao">
                </div>
                <div class="il-card--footer">
                    <i class="mdi mdi-36px mdi-play il-color--white" @click="showModal(3)"></i>
                </div>
            </div>
        </div>
        <div class="il-video--modal">
            <div class="il-close--btn">
                <a href="#!" class="il-close" @click.prevent="closeModal">
                    <i class="mdi mdi-close mdi-24px"></i>
                </a>
            </div>
           <video :width="player.size" :height="player.height" :controls="player.controls" :autoplay="player.autoplay" :src="player.src"  type="video/mp4"></video>
        </div>
    </div>
</section>
</template>

<script>
export default {
  name: 'Videos',
  data() {
    return {
      whatIcon: 'il-pilates-icon flaticon-exercise-bands',
      player: {},
      show: false,
      videos: [
        {
          size: 432,
          height: 432 * 0.5625,
          controls: 'controls',
          autoplay: true,
          preload: 'auto',
          poster: 'http://video-js.zencoder.com/oceans-clip.jpg',
          src: '/videos/equilibrio.mp4'
        },
        {
          size: 432,
          height: 432 * 0.5625,
          controls: 'controls',
          autoplay: true,
          preload: 'auto',
          poster: 'http://video-js.zencoder.com/oceans-clip.jpg',
          src: '/videos/concentracao.mp4'
        },
        {
          size: 432,
          height: 432 * 0.5625,
          controls: 'controls',
          autoplay: true,
          preload: 'auto',
          poster: 'http://video-js.zencoder.com/oceans-clip.jpg',
          src: '/videos/tenacidade.mp4'
        },
        {
          size: 432,
          height: 432 * 0.5625,
          controls: 'controls',
          autoplay: true,
          preload: 'auto',
          poster: 'http://video-js.zencoder.com/oceans-clip.jpg',
          src: '/videos/concentracao.mp4'
        }
      ]
    };
  },

  methods: {
    showModal(key) {
      this.player = this.videos[key];
      let modal = document.querySelector('.il-video--modal');
      modal.classList.add('il-show');
    },
    closeModal() {
      let modal = document.querySelector('.il-video--modal');
      modal.classList.remove('il-show');
    }
  }
};
</script>
