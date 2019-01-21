<template>
<div class="il-container--wrapper">
    <section id="il-videos" class="il-section il-section--videos">
        <div class="il-videos--content il-grid">
            <div class="il-videos--cards" :style="getBack(index)" v-for="(video,index) in videos" :key="index">
                <div class="il-cards--caption">
                    <span class="il-caption">{{ video.name }}</span>
                </div>
                <div class="il-cards--body">
                    <h5 class="il-video--title">{{video.description}}</h5>
                    <a href="#" class="il-btn il-btn--video auto" @click.prevent="runVideo(index)">Assistir</a>
                </div>
            </div>
        </div>

        <div :class="getClass()" id="il-trailer" >
            <div id="il-video" class="il-player--video"></div>
            <!--<div id="vidTrailer">
                <iframe id="vidTrailer_Youtube_api" style="top:0;left:0;position:relative" class="vjs-tech" frameborder="0" allowfullscreen="1" allow="autoplay; encrypted-media" title="YouTube video player" :width="player.size" :height="player.height" :src="player.srcVideo"></iframe>
            </div>-->
        </div>
    </section>
</div>
</template>

<script>
import Video from "video.js";
require("videojs-youtube");

export default {
    name: 'Video',

    computed: {
        showModal() {
            if (this.showVideo) {
                return true
            }
            return false
        }
    },

    mounted() {
        //this.makeVideoGallery()
    },

    data() {
        return {
            showVideo: false,
            player: {},
            videos: [{
                    repository: 'videos/chalenger.mov',
                    name: 'chalenger.mov',
                    id: 'video1',
                    description: 'Enfase no desafio e no equilíbrio.',
                    youtube: {
                        width: '560',
                        height: '325',
                        cod: 'pT7I4afnrTo',
                        thumbnail: 'images/thumbnails/chalenger.jpg'
                    }
                },
                {
                    repository: 'videos/coordination.mov',
                    name: 'coordination.mov',
                    id: 'video2',
                    description: 'Aqui a enfase está na coordenação e concentração.',
                    youtube: {
                        width: '560',
                        height: '325',
                        cod: 'BC5kitSA2aU',
                        thumbnail: 'images/thumbnails/coordination.jpg'
                    }
                },
                {
                    repository: 'videos/corealign.mov',
                    name: 'corealign.mov',
                    id: 'video3',
                    description: 'Movimentos harmoniosos e vigorosos.',
                    youtube: {
                        width: '560',
                        height: '325',
                        cod: 'pVTuIHAcwmg',
                        thumbnail: 'images/thumbnails/corealign.jpg'
                    }
                },
                {
                    repository: 'videos/plank.mov',
                    name: 'plank.mov',
                    id: 'video4',
                    description: 'Flexibilidade e equilíbrio.',
                    youtube: {
                        width: '560',
                        height: '325',
                        cod: '9HnhYYR6oE0',
                        thumbnail: 'images/thumbnails/plank.jpg'
                    }
                },
                {
                    repository: 'videos/snake.mov',
                    name: 'snake.mov',
                    id: 'video5',
                    description: 'Resistência, equilíbrio e concentração.',
                    youtube: {
                        width: '560',
                        height: '325',
                        cod: '3jPq1SmsKO8',
                        thumbnail: 'images/thumbnails/snake.jpg'
                    }
                }
            ]
        }
    },

    methods: {
        getBack(index) {
            let back = `background-image: url('${this.videos[index].youtube.thumbnail}')`
            //console.log(back)
            return back;
        },

        getClass() {
            if (this.showModal) {
                return 'il-video--modal showTrailer'
            }
            return 'il-video--modal'
        },

        runVideo(index) {
            this.showVideo = true;
            //const Player = Video.getPlayer();
            let movie = this.videos[index];
            let playerSetup = {
                size: movie.youtube.width,
                height: movie.youtube.width * 0.5625,
                controls: "controls",
                allowfullscreen: "allowfullscreen",
                autoplay: false,
                preload: "auto",
                techOrder: ["youtube"],
                sources: [{
                    type: "video/youtube",
                    src: 'https://www.youtube.com/embed/' + movie.youtube.cod
                }]
            };
            Video('#bt-trailer',playerSetup)
            /*this.player.size = movie.youtube.width
            this.player.height = movie.youtube.width * 0.5625
            this.player.srcVideo = 'https://www.youtube.com/embed/' + movie.youtube.cod + `?controls=0&amp;modestbranding=1&amp;rel=0&amp;showinfo=0&amp;loop=0&amp;fs=0&amp;hl=pt&amp;enablejsapi=1&amp;origin=http%3A%2F%2Fwww.boutiquepilates.com.br&amp;widgetid=1`;*/
            // console.log(Video.getPlayer())
        }
    }
}
</script>

<style lang="scss">
@import '../../sass/il-components/modules/videos';
</style>
