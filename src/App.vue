<template>
<div id="app" :class="getBigImg()">
    <!--VIDEO BACK-->
    <ilVideoBack v-if="hasVideoBackground" />

    <!--HEADER-->
    <header id="il-header" class="il-header" :class="isActive()">
        <ilHeader />
    </header>

    <!--MAIN-->
    <main>
        <div class="il-container">
            <RouterView />
        </div>
    </main>

    <!--FOOTER-->
    <footer id="il-footer" class="il-footer" :class="whatClass">
        <ilFooter />
    </footer>

    <!--MODAL-->
    <ilModal />

</div>
</template>

<script>
import ilVideoBack from './components/VideosComponent/includes/videoBackground.vue';
import ilHeader from './components/includes/HeaderComponent.vue';
import ilFooter from './components/includes/FooterComponent.vue';
import ilModal from './components/includes/ModalComponent.vue';

export default {
    name: 'App',

    components: {
        ilVideoBack,
        ilHeader,
        ilFooter,
        ilModal
    },

    data() {
        return {
            headerActive: false,
            showModal: false,
            whatClass: '',
            modal: {
                title: '',
                content: '',
                footer: ''
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
        },

        /*checkShowModal(){
            if(this.showModal){
                return true
            }
            return false
        }*/
    },

    methods: {
        isActive() {
            if (this.headerActive) {
                return 'active';
            }
            return;
        },

        getBigImg() {
            let rota = this.$route.name;
            let currentImg = null;
            switch (rota) {
                case 'home':
                    currentImg = 'big-img-home';
                    this.whatClass = 'il-footer--home';
                    break;
                case 'about':
                    currentImg = 'big-img-about';
                    this.whatClass = 'il-footer--about';
                    break;
                case 'studio':
                    currentImg = 'big-img-studio';
                    this.whatClass = 'il-footer--studio';
                    break;
                case 'teachers':
                    currentImg = 'big-img-instructor';
                    this.whatClass = 'il-footer--teacher';
                    break;
                case 'class':
                    currentImg = 'big-img-class';
                    this.whatClass = 'il-footer--class';
                    break;
                case 'student':
                    currentImg = 'big-img-student';
                    this.whatClass = 'il-footer--student';
                    break;
                case 'advantage':
                    currentImg = 'big-img-advantage';
                    this.whatClass = 'il-footer--advantage';
                    break;
                case 'video':
                    currentImg = '';
                    this.whatClass = 'il-footer--video';
                    break;
                case 'gallery':
                    currentImg = 'big-img-gallery';
                    this.whatClass = 'il-footer--gallery';
                    break;
            }

            return currentImg;
        },

        showFooter() {
            setTimeout(() => {
                const showClass = document.getElementById('il-footer');
                showClass.classList.add('il-footer--show');
            }, 1200);
        }
    }
};
</script>

<style>
@import './sass/styles.css';
</style>
