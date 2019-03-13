<template>
<div :class="`il-card--video il-card--${video}`">
    <div class="il-card--header">
        <img :src="thumbnail" :alt="name" />
    </div>
    <div class="il-card--content">
        <p class="il-content--description il-card--description il-color--text__very-light">{{description}}</p>
    </div>
    <div class="il-card--footer">
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
            let movie = this.$parent.videos[i];
            console.log(movie);
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
        }
    }
};
</script>
