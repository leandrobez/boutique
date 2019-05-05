<template>
<header id="il-header" class="il-header">
    <div class="il-header--menu" @click.prevent="activeMenu" :class="hasActive()">
        <div class="il-menu--line"></div>
        <div class="il-menu--line"></div>
        <div class="il-menu--line"></div>
    </div>
    <div class="il-header--brand">
      <!--<img src="images/theme/logo234x80.png">-->
      <h1 class="il-color--text__gold">KAIZEN</h1>
    </div>
    <div class="il-header--content">
        <div class="il-content--portrait">
            <div class="il-avatar--portrait">
                <div class="il-avatar"></div>
            </div>
            <span class="il-authenticated il-color--text__light" v-if="checkAuthenticated">Você está logado</span>
        </div>
        <nav class="il-content--nav">
            <ul class="il-menu--list">
                <li class="il-menu--list__item" v-for="m in menu" :key="m.id">
                    <router-link class="il-menu--link il-color--text__yellow" :to="{name:m.link}" :class="isActive(m.id)" :title="m.title">
                        <span @click="hiddenMenu()">{{m.label}}</span>
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</header>
</template>

<script>
export default {
  name: 'HeaderComponent',

  data() {
    return {
      showMenu: false,
      menu: [
        {
          id: 1,
          link: 'home',
          title: 'Comece por aqui',
          label: 'Home',
          icon: 'il-pilates-icon flaticon-precision-posture',
          show: true
        },
        /* {
                    id: 2,
                    link: 'curriculum',
                    title: 'Informações sobre a proprietária',
                    label: 'Currículo',
                    icon: 'il-pilates-icon flaticon-precision-posture',
                    show: true
                }, */
        {
          id: 2,
          link: 'about',
          title: 'Saiba mais',
          label: 'Sobre',
          icon: 'il-pilates-icon flaticon-side-bending-posture',
          show: true
        },
        {
          id: 3,
          link: 'studio',
          title: 'Esse é o nosso studio',
          label: 'O Studio',
          icon: 'il-pilates-icon flaticon-pilates-reformer',
          show: true
        },
        {
          id: 4,
          link: 'teachers',
          title: 'Sem eles não existiriamos',
          label: 'Os Intrutores',
          icon: 'il-pilates-icon flaticon-twisting-arms',
          show: true
        },
        {
          id: 5,
          link: 'class',
          title: 'E para isso existimos',
          label: 'As Aulas',
          icon: 'il-pilates-icon flaticon-pilates-chair',
          show: true
        },
        {
          id: 6,
          link: 'student',
          title: 'Tudo isso para vocês',
          label: 'Os Alunos',
          icon: 'il-pilates-icon flaticon-exercises-with-reformer',
          show: true
        },
        {
          id: 7,
          link: 'advantage',
          title: 'Como ganhamos sua confiança',
          label: 'Vantagens',
          icon: 'il-pilates-icon flaticon-pilates-equipment',
          show: true
        },
        {
          id: 8,
          link: 'video',
          title: 'Para conhecer mais',
          label: 'Vídeos',
          icon: 'il-pilates-icon flaticon-centering-position',
          show: true
        },
        {
          id: 9,
          link: 'contact',
          title: 'Quer enviar uma mensagem?',
          label: 'Contato',
          icon: 'il-pilates-icon flaticon-centering-position',
          show: true
        }
        /*{
          id: 9,
          link: 'login',
          title: 'Área Administrativa',
          label: 'Login',
          icon: 'il-pilates-icon flaticon-bosu-ball',
          show: true
        }*/
      ]
    };
  },
  props: {
    authenticated: Boolean
  },
  computed: {
    checkAuthenticated() {
      if (this.authenticated) {
        return true;
      }
      return false;
    }
  },
  methods: {
    hasActive() {
      if (this.showMenu) {
        return 'radius';
      }
      return;
    },

    isActive(i) {
      let rota = this.$route.name;
      let index = i - 1;
      if (rota == this.menu[index].link) {
        return ['current'];
      }
    },

    hiddenMenu() {
      const menuLine = document.querySelectorAll('.il-menu--line');
      const header = document.getElementById('il-header');
      const headerContent = document.querySelector('.il-header--content');
      const headerPortrait = document.querySelector('.il-content--portrait');
      const headerNav = document.querySelector('.il-content--nav');
      const headerNavList = document.querySelectorAll('.il-menu--list__item');
      menuLine.forEach(item => {
        item.classList.remove('deform');
      });
      header.classList.remove('active');
      headerContent.classList.remove('il-show--header');
      headerPortrait.classList.remove('show');
      headerNav.classList.remove('show');
      headerNavList.forEach((item, k) => {
        let child = item.children[0];
        child.classList.remove('show-me' + (k + 1));
      });
      this.showMenu = false;
      this.$parent.headerActive = false;
    },

    activeMenu() {
      const headerContent = document.querySelector('.il-header--content');
      const headerPortrait = document.querySelector('.il-content--portrait');
      const header = document.getElementById('il-header');
      const headerNav = document.querySelector('.il-content--nav');
      const headerNavList = document.querySelectorAll('.il-menu--list__item');
      const menuLine = document.querySelectorAll('.il-menu--line');

      if (!this.showMenu) {
        menuLine.forEach(item => {
          item.classList.add('deform');
        });
        header.classList.add('active');
        headerContent.classList.add('il-show--header');
        headerPortrait.classList.add('show');
        headerNav.classList.add('show');
        headerNavList.forEach((item, k) => {
          let child = item.children[0];
          child.classList.add('show-me' + (k + 1));
        });
        this.showMenu = true;
        this.$parent.headerActive = true;
      } else {
        menuLine.forEach(item => {
          item.classList.remove('deform');
        });
        header.classList.remove('active');
        headerContent.classList.remove('il-show--header');
        headerPortrait.classList.remove('show');
        headerNav.classList.remove('show');
        headerNavList.forEach(item => {
          item.classList.remove('show-me');
        });
        this.showMenu = false;
        this.$parent.headerActive = false;
      }
    }
  }
};
</script>

<style lang="scss">
</style>
