<template>
<div :class="`il-card--video il-card--${video}`">
    <div class="il-card-video--header">
        <img :src="thumbnail" :alt="name" />
    </div>
    <div class="il-card-video--content">
        <p class="il-card-video--description il-card--description il-color--text">{{description}}</p>
    </div>
    <div class="il-card-video--footer">
        <span class="il-btn--video" @click.prevent="runVideo(video)" :title="`Assistir ${name}`"></span>
    </div>
</div>
</template>

<script>
import { animeCardVideos } from '../../../common/animation';
export default {
  name: 'cardsVideos',
  props: {
    thumbnail: String,
    description: String,
    name: String,
    video: Number
  },
  mounted() {
    this.startAnime();
  },
  mixins: [animeCardVideos],
  methods: {
    runVideo(i) {
      this.$parent.setTrailer(i);
    }
  }
};
</script>
