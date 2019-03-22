<template>
<div :class="`il-card--video il-card--${video}`">
    <div class="il-card-video--header">
        <img :src="thumbnail" :alt="name" />
    </div>
    <div class="il-card-video--content">
        <p class="il-card-video--description il-card--description il-color--text__very-light">{{description}}</p>
    </div>
    <div class="il-card-video--footer">
        <span class="il-btn--video" @click.prevent="runVideo(video)" :title="`Assistir ${name}`"></span>
    </div>
</div>
</template>

<script>
export default {
  name: 'cardsVideos',
  props: {
    thumbnail: String,
    description: String,
    name: String,
    video: Number
  },
  methods: {
    runVideo(i) {
      this.$parent.setTrailer(i);
    }
  }
};
</script>
