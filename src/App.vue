<template>
<div id="app" :class="getBigImg()">
    <!--Header-->
    <ilHeader/>
    <div class="il-container">
        <div class="il-overlay--dark"></div>
        <!-- /* ==========MAIN===========*/ -->

        <main>
            <RouterView />
        </main>

        <!-- /* ======FOOTER=====*/ -->
        <il-footer />
        
    </div>
</div>
</template>

<script>
import ilHeader from './components/includes/HeaderComponent.vue';
import ilFooter from './components/includes/FooterComponent.vue';

export default {
    name: 'App',

    components: {
        ilHeader,
        ilFooter
    },

    data(){
        return {
            headerActive: false
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
                    currentImg = 'big-img-video';
                    break;
            }

            return currentImg
        }
    }
}
</script>

<style>
@import './sass/styles.css'
</style>
