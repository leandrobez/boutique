<template>
<section id="il-videos" class="il-section il-section--videos">
    <div class="il-container--wrapper">
        <h1 class="il-section--title il-title--full">Veja esses <span class="il-color--text__very-light">Vídeos</span></h1>
        <div class="il-videos--content">
            <ilCards v-for="(video,index) in videos" :key="video.id" :thumbnail="video.youtube.thumbnail" :name="video.name" :description="video.description" :video="index" />
        </div>

    </div>
    <div class="il-player" :class="getClass()">
        <i class="mdi mdi-close mdi-24px" @click.prevent="closeVideo()"></i>
        <div id="il-video" class="il-player--video"></div>
    </div>
</section>
</template>

<script>
import ilCards from './includes/cards.vue';
import videos from '../../common/videos.json';
export default {
  name: 'Videos',
  components: {
    ilCards
  },
  mounted() {
    this.videos = videos;
  },

  data() {
    return {
      whatIcon: 'il-pilates-icon flaticon-exercise-bands',
      show: false,
      trailer: null,
      videos: []
    };
  },

  methods: {
    getClass() {
      let theClass = this.show ? 'show' : '';
      return theClass;
    },

    closeVideo() {
      let iFrame = document.querySelector('iframe');
      let trailer = document.getElementById('il-video');

      setTimeout(() => {
        this.show = false;
        iFrame.setAttribute('src', '');
        iFrame.style.width = 0;
        iFrame.style.height = 0;
        trailer.removeChild(trailer.childNodes[0]);
      }, 1000);
    }

    /*runVideo(i) {
            this.trailer = i;
            let movie = this.videos[i];
            let playerSetup = {
                size: movie.youtube.width,
                height: movie.youtube.width * 0.5625,
                controls: 'controls',
                allowfullscreen: 'allowfullscreen',
                autoplay: false,
                preload: 'auto',
                techOrder: ['youtube'],
                sources: [{
                    type: 'video/youtube',
                    src: 'https://www.youtube.com/embed/' + movie.youtube.cod
                }]
            };
            //console.log(Players, playerSetup);
            //this.show = true;
            //Players('#il-trailer', playerSetup)
            let iFrame = document.createElement('iframe');
            iFrame.setAttribute('src', playerSetup.sources[0].src);
            iFrame.style.width = movie.youtube.width;
            iFrame.style.height = movie.youtube.width * 0.5625;
            let trailer = document.getElementById('il-video');
            this.show = true;
            setTimeout(() => {
                trailer.appendChild(iFrame);
            }, 1000);
        } */
  }
};
</script>