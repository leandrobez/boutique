<template>
<section id="il-videos" class="il-section il-section--videos">
    <div class="il-container--wrapper">
        <h1 class="il-section--title il-title--full">Assita esses <span class="il-color--text__very-light">Vídeos</span></h1>
        <div class="il-videos--content">
            <ilCards v-for="(video,index) in videos" :key="video.id" :thumbnail="video.youtube.thumbnail" :name="video.name" :description="video.description" :video="index" />
        </div>
    </div>
    <div class="il-player" :class="getClass()" :width="getSize()" v-if="hasPlayer">
        <ilYoutube :player="player" />
    </div>
</section>
</template>

<script>
import videos from '../../common/videos.json';
import ilCards from './includes/cards.vue';
import ilYoutube from './includes/youtube.vue';
export default {
  name: 'Videos',
  components: {
    ilCards,
    ilYoutube
  },
  mounted() {
    this.videos = videos;
  },
  computed: {
    hasPlayer() {
      if (this.player.size) {
        return true;
      }
      return false;
    }
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
    getSize() {
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
    }
  }
};
</script>
