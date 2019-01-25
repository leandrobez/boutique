<template>
<div id="app" :class="getBigImg()">

    <!--background video-->
    <div class="il-back--video" v-if="hasVideoBackground">
        <div class="il-video" id="il-video">
            <div class="il-content--video">
                <!--loop="",-->
                <video autoplay loop muted type="video/mp4">
              <source :src="videoBack" />
            </video>
            </div>
        </div>
    </div>

    <!--Header-->
    <ilHeader />
    <div class="il-container">
        <div class="il-overlay--dark"></div>
        <!-- /* ==========MAIN===========*/ -->

        <main>
            <RouterView />
        </main>

        <!-- /* ======FOOTER=====*/ -->
        <il-footer />

        <!-- /* ======MODAL=====*/ -->
        <il-modal />

    </div>
</div>
</template>

<script>
import ilHeader from './components/includes/HeaderComponent.vue';
import ilFooter from './components/includes/FooterComponent.vue';
import ilModal from './components/includes/ModalComponent.vue';

export default {
    name: 'App',

    components: {
        ilHeader,
        ilFooter,
        ilModal
    },

    data() {
        return {
            videoBack: 'video/video-esteira.mp4',
            headerActive: false,
            modal: {
              title: "",
              content: "",
              footer: ""
            }
        };
    },

    computed: {
        hasVideoBackground() {
            let rota = this.$route.name;
            if (rota == 'video') {
                return true;
            }
            return false;
        }
    },

    methods: {

        getBigImg() {
            let rota = this.$route.name;
            let currentImg = null;
            switch (rota) {
                case 'home':
                    currentImg = 'big-img-home';
                    break;
                case 'about':
                    currentImg = 'big-img-about';
                    break;
                case 'studio':
                    currentImg = 'big-img-studio';
                    break;
                case 'teachers':
                    currentImg = 'big-img-instructor';
                    break;
                case 'class':
                    currentImg = 'big-img-class';
                    break;
                case 'student':
                    currentImg = 'big-img-student';
                    break;
                case 'advantage':
                    currentImg = 'big-img-advantage';
                    break;
                case 'video':
                    currentImg = '';
                    //currentImg = 'big-img-video';
                    break;
            }

            return currentImg;
        }
    }
};
</script>

<style>
@import './sass/styles.css';
</style>
