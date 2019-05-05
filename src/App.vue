<template>
<div id="app" >

    <!--HEADER-->
    <ilHeader :class="isActive()" :authenticated="authenticated" />
    <!--MAIN-->
    <main class="il-main" :class="getHeightClass">
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

    <!--MODAL--
    <ilModal :check="checkActive" />-->
</div>
</template>

<script>
import ilHeader from './components/includes/HeaderComponent.vue';
import ilFooter from './components/includes/FooterComponent.vue';
import ilWarning from './components/includes/warningsComponent.vue';
//import ilModal from './components/includes/ModalComponent.vue';

/**https://github.com/sqreen/vue-authentication-example */
//import axios from 'axios';
export default {
  name: 'App',
  components: {
    ilHeader,
    ilFooter,
    ilWarning
    //ilModal
  },
  data() {
    return {
      title: 'Kaizen Pilates',
      titleCompost: {
        title: 'Kaizen',
        subTitle: 'Pilates'
      },
      hasWarning: false,
      warning: {},
      authenticated: false,
      headerActive: false,
      //showModal: false,
      whatClass: ''
    };
  },
  mounted() {
    /*setTimeout(() => {
      this.showModal = true;
    }, 4000);*/
  },
  computed: {
    /* checkActive() {
      if (this.showModal) {
        return true;
      }
      return false;
    },*/
    checkWarning() {
      if (this.warning.check) {
        this.closeWarning();
        return true;
      }
      return false;
    },
    getHeightClass() {
      if (
        this.$route.name == 'home' ||
        this.$route.name == 'class' ||
        this.$route.name == 'student' ||
        this.$route.name == 'curse' ||
        this.$route.name == 'advantage'
      ) {
        return 'il-main--perc';
      } else {
        return 'il-app-vh';
      }
    }
  },
  methods: {
    /*intercepter() {
      axios.interceptors.response.use(undefined, function(err) {
        return new Promise(function(resolve, reject) {
          if (
            err.status === 401 &&
            err.config &&
            !err.config.__isRetryRequest
          ) {
            // if you ever get an unauthorized, logout the user
            this.$store.dispatch(AUTH_LOGOUT);
            // you can also redirect to /login if needed !
          }
          throw err;
        });
      });
    },*/
    closeWarning() {
      let time = 4000;
      setTimeout(() => {
        this.warning = {};
      }, time);
    },

    checkAuthenticated() {
      if (this.authenticated) {
        return true;
      }
      return false;
    },
    /*closeModal() {
      this.showModal = false;
    },*/
    isActive() {
      if (this.headerActive) {
        return 'active';
      }
      return;
    },
    /*getHomeClass() {
      if (
        this.$route.name == 'home' ||
        this.$route.name == 'teachers' ||
        this.$route.name == 'class' ||
        this.$route.name == 'student' ||
        this.$route.name == 'advantage' ||
        this.$route.name == 'curse' ||
        this.$route.name == 'video'
      ) {
        return 'il-main--perc';
      }
    },*/
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
