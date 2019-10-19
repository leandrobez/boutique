<template>
<section id="il-videos" class="il-section il-section--videos">
    <div class="il-container--wrapper">
        <h1 class="il-section--title">Alguns <span class="il-color--text__very-light">Vídeos</span></h1>
        <!--<div class="il-videos--content">
            <ilCards v-for="(video,index) in videos" :key="video.id" :thumbnail="video.youtube.thumbnail" :name="video.name" :description="video.description" :video="index" />
        </div>-->
        <!--
<video class="tWeCl" playsinline="" poster="https://instagram.fpoa4-1.fna.fbcdn.net/vp/e77d276ff1a51d07910067aebaf7962f/5DA92833/t51.2885-15/e35/70556914_219315322386785_723925088993438092_n.jpg?_nc_ht=instagram.fpoa4-1.fna.fbcdn.net&amp;_nc_cat=105" preload="none" src="blob:https://www.instagram.com/05167393-3854-4871-99f0-0b0e8a3b1e4c" type="video/mp4"></video>

<video class="tWeCl" playsinline="" poster="https://instagram.fpoa4-1.fna.fbcdn.net/vp/62b7e2c2d044abca5a3cca0b3e153c5c/5DA984F2/t51.2885-15/e35/67823388_2474575212622545_4220719994140357475_n.jpg?_nc_ht=instagram.fpoa4-1.fna.fbcdn.net&amp;_nc_cat=109" preload="none" src="blob:https://www.instagram.com/8c6a3196-2131-43a5-a7c3-8d7532d25f9f" type="video/mp4"></video>
        -->
        <div class="il-videos--content">
            <div class="il-card--item">
                <div class="il-card--header">
                    <span class="il-card--title il-color--white">Equilíbrio</span>
                </div>
                <div class="il-card--body">
                    <img src="/images/snapshot/equilibrio.jpg" alt="equilibrio">
                </div>
                <div class="il-card--footer">
                    <i class="mdi mdi-36px mdi-play il-color--white" @click="showModal"></i>
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
                    <i class="mdi mdi-36px mdi-play il-color--white" @click="showModal"></i>
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
                    <i class="mdi mdi-36px mdi-play il-color--white" @click="showModal"></i>
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
                    <i class="mdi mdi-36px mdi-play il-color--white" @click="showModal"></i>
                </div>
            </div>
        </div>
        <div class="il-video--modal">
            <div class="il-close--btn">
                <a href="#!" class="il-close" @click.prevent="closeModal">
                    <i class="mdi mdi-close mdi-24px"></i>
                </a>
            </div>
            <video class="tWeCl" playsinline="" src="https://www.instagram.com/05167393-3854-4871-99f0-0b0e8a3b1e4c" type="video/mp4" autoplay></video>
        </div>
    </div>
    <!--<div class="il-player" :class="getClass()" :width="getSize()" v-if="hasPlayer">
        <ilYoutube :player="player" />
    </div>-->
</section>
</template>

<script>
//import videos from '../../common/videos.json';
//import ilCards from './includes/cards.vue';
//import ilYoutube from './includes/youtube.vue';
export default {
  name: 'Videos',
  components: {
    //ilCards,
    //ilYoutube
  },
  mounted() {
    //this.videos = videos;
  },
  computed: {
    /*hasPlayer() {
              if (this.player.size) {
                return true;
              }
              return false;
            }*/
  },
  data() {
    return {
      whatIcon: 'il-pilates-icon flaticon-exercise-bands',
      player: {},
      show: false,
      trailer: null,
      videos: []
    };
  },

  methods: {
    showModal() {
      let modal = document.querySelector('.il-video--modal');
      modal.classList.add('il-show');
    },
    closeModal() {
      let modal = document.querySelector('.il-video--modal');
      modal.classList.remove('il-show');
    }
    /*getSize() {
              let size = +this.player.size + 6;
              console.log(size);
              return size;
            },
            getClass() {
              let theClass = this.show ? 'show' : '';
              return theClass;
            },
            setTrailer(key) {
              let movie = this.videos[key];
              this.player = {
                size: movie.youtube.width,
                height: movie.youtube.width * 0.5625,
                controls: 'controls',
                allowfullscreen: 'allowfullscreen',
                autoplay: false,
                preload: 'auto',
                poster: 'http://video-js.zencoder.com/oceans-clip.jpg',
                aspectRatio: '640:267',
                playbackRates: [1, 1.5, 2],
                techOrder: ['youtube'],
                sources: [
                  {
                    type: 'video/youtube',
                    src: 'https://www.youtube.com/embed/' + movie.youtube.cod
                  }
                ]
              };

              this.show = true;
            }*/
  }
};
</script>
