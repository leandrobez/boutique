<template>
<div id="app">

    <!--HEADER-->
    <ilHeader :class="isActive()" />
    <!--MAIN-->
    <main class="il-main" :class="getCurrentClass">
        <div class="il-container">
            <div class="il-container--wrapper">
                <ilWarning :message="warning" v-show="checkWarning" />
            </div>
            <RouterView />
        </div>
    </main>

    <!--FOOTER-->
    <footer id="il-footer" class="il-footer" :class="whatClass">
        <ilFooter />
    </footer>

</div>
</template>

<script>
import ilHeader from './components/includes/HeaderComponent.vue';
import ilFooter from './components/includes/FooterComponent.vue';
import ilWarning from './components/includes/warningsComponent.vue';

export default {
    name: 'App',
    components: {
        ilHeader,
        ilFooter,
        ilWarning
    },
    data() {
        return {
            title: 'Kaizen Pilates e CoreAlign',
            titleCompost: {
                title: 'Kaizen',
                title1: 'Pilates',
                subTitle: 'CoreAlign'
            },
            hasWarning: false,
            warning: {},
            headerActive: false,
            whatClass: ''
        };
    },

    computed: {
        checkWarning() {
            if (this.warning.check) {
                this.closeWarning();
                return true;
            }
            return false;
        },
        getCurrentClass() {
            if (this.$route.name == 'home') {
                return 'il-main--back';
            } else {
                if (this.$route.name == 'class') {
                    return 'il-second--back il-vh';
                } else {
                    return 'il-second--back';
                }
            }
        }
    },
    methods: {
        closeWarning() {
            let time = 4000;
            setTimeout(() => {
                this.warning = {};
            }, time);
        },
        isActive() {
            if (this.headerActive) {
                return 'active';
            }
            return;
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

<style lang="scss">
@import './sass/styles.scss';
</style>
