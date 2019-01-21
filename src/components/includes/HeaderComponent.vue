<template>
<div>
    <header id="il-header" class="il-header">
        <div class="il-header--menu" @click.prevent="activeMenu">
            <div class="il-menu--line"></div>
            <div class="il-menu--line"></div>
            <div class="il-menu--line"></div>
        </div>
        <div class="il-header--content">
            <div class="il-header--portrait">
                <div class="il-avatar--portrait">
                    <div id="il-avatar"></div>
                </div>
            </div>
            <nav class="il-header--nav">
                <ul class="il-menu--list">
                    <li class="il-menu--list__item" v-for="m in menu" :key="m.id">
                        <router-link :to="{name: m.link}" class="il-menu--link" :class="isActive(m.id)" :title="m.title">
                          <i :class="m.icon"></i>
                          <span @click="hiddenMenu()">{{m.label}}</span>
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</div>
</template>

<script>
export default {
  name: 'HeaderComponent',

  mounted() {},

  data() {
    return {
      showMenu: false,
      menu: [
        {
          id: 1,
          link: 'home',
          title: 'Comece por aqui',
          label: 'Home',
          icon: 'flaticon-precision-posture',
          show: true
        },
        {
          id: 2,
          link: 'about',
          title: 'Saiba mais',
          label: 'Sobre',
          icon: 'flaticon-side-bending-posture',
          show: true
        },
        {
          id: 3,
          link: 'studio',
          title: 'Esse é o nosso studio',
          label: 'O Studio',
          icon: 'flaticon-pilates-reformer',
          show: true
        },
        {
          id: 4,
          link: 'teachers',
          title: 'Sem eles não existiriamos',
          label: 'Os Intrutores',
          icon: 'flaticon-twisting-arms',
          show: true
        },
        {
          id: 5,
          link: 'class',
          title: 'E para isso existimos',
          label: 'As Aulas',
          icon: 'flaticon-pilates-chair',
          show: true
        },
        {
          id: 6,
          link: 'student',
          title: 'Tudo isso para vocês',
          label: 'Os Alunos',
          icon: 'flaticon-exercises-with-reformer',
          show: true
        },
        {
          id: 7,
          link: 'advantage',
          title: 'Como ganhamos sua confiança',
          label: 'Vantagens',
          icon: 'flaticon-pilates-equipment',
          show: true
        },
        {
          id: 8,
          link: 'video',
          title: 'Para conhecer mais',
          label: 'Vídeos',
          icon: 'flaticon-centering-position',
          show: true
        }
      ]
    };
  },

  methods: {
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
      const headerPortrait = document.querySelector('.il-header--portrait');
      const headerNav = document.querySelector('.il-header--nav');
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
    },

    activeMenu() {
      //const main = document.querySelector('main');
      const headerContent = document.querySelector('.il-header--content');
      const headerPortrait = document.querySelector('.il-header--portrait');
      const header = document.getElementById('il-header');
      const headerNav = document.querySelector('.il-header--nav');
      const headerNavList = document.querySelectorAll('.il-menu--list__item');

      const menuLine = document.querySelectorAll('.il-menu--line');

      if (!this.showMenu) {
        //main.classList.remove('on-top');
        //this.classList.add('radius');
        //this.checkActive = true
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
      } else {
        //main.classList.add('on-top');
        //this.classList.remove('radius');
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
      }
    }
  }
};
</script>

<style lang="scss">
</style>
