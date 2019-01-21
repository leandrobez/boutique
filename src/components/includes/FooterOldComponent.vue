<template>
<footer id="il-footer" class="il-footer" :class="getClass()">
    <div class="il-footer--col">
        <div class="il-container--wrapper">
            <ul class="il-footer--list">
                <li class="il-footer--item"><a href="#" class="il-footer--link">Álbum</a></li>
                <li class="il-footer--item"><a href="albuns.html#studio" class="il-footer--link">Do studio</a></li>
                <li class="il-footer--item"><a href="albuns.html#events" class="il-footer--link">Eventos</a></li>
                <li class="il-footer--item"><a href="albuns.html#courses" class="il-footer--link">Cursos</a></li>
            </ul>
        </div>
    </div>
    <div class="il-footer--col">
        <div class="il-container--wrapper">
            <ul class="il-footer--list">
                <li class="il-footer--item" v-for="m in menu" :key="m.id">
                    <router-link :to="{name: m.link}" class="il-menu--link" :title="m.title"><span >{{m.label}}</span></router-link>
                </li>
            </ul>
        </div>
    </div>
    <div class="il-footer--col">
        <div class="il-container--wrapper">
            <ul class="il-footer--list">
                <li class="il-footer--item"><a href="" class="il-footer--link">item1</a></li>
                <li class="il-footer--item"><a href="" class="il-footer--link">item2</a></li>
                <li class="il-footer--item"><a href="" class="il-footer--link">item3</a></li>
                <li class="il-footer--item"><a href="" class="il-footer--link">item4</a></li>
            </ul>
        </div>
    </div>
</footer>
</template>

<script>
export default {
  name: 'Footer',

  data() {
    return {
      currentFooter: '',
      menu: [
        {
          id: 1,
          link: 'home',
          title: 'Comece por aqui',
          label: 'Home',
          show: true
        },
        {
          id: 2,
          link: 'about',
          title: 'Saiba mais',
          label: 'Sobre',
          show: true
        },
        {
          id: 3,
          link: 'studio',
          title: 'Esse é o nosso studio',
          label: 'O Studio',
          show: true
        },
        {
          id: 4,
          link: 'teachers',
          title: 'Sem eles não existiriamos',
          label: 'Os Intrutores',
          show: true
        },
        {
          id: 5,
          link: 'class',
          title: 'E para isso existimos',
          label: 'As Aulas',
          show: true
        },
        {
          id: 6,
          link: 'student',
          title: 'Tudo isso para vocês',
          label: 'Os Alunos',
          show: true
        },
        {
          id: 7,
          link: 'advantage',
          title: 'Como ganhamos sua confiança',
          label: 'Vantagens',
          show: true
        },
        {
          id: 8,
          link: 'video',
          title: 'Para conhecer mais',
          label: 'Vídeos',
          show: true
        }
      ]
    };
  },

  mounted() {
    this.showFooter();
  },

  methods: {
    getClass() {
      let routeName = this.$route.name;
      let currentFooter = '';
      switch (routeName) {
        case 'home':
          currentFooter = 'il-footer--home';
          break;
        case 'about':
          currentFooter = 'il-footer--about';
          break;
        case 'studio':
          currentFooter = 'il-footer--studio';
          break;
        case 'teachers':
          currentFooter = 'il-footer--teacher';
          break;
        case 'class':
          currentFooter = 'il-footer--class';
          break;
        case 'student':
          currentFooter = 'il-footer--student';
          break;
        case 'advantage':
          currentFooter = 'il-footer--advantage';
          break;
        case 'video':
          currentFooter = 'il-footer--video';
          break;
        default:
          currentFooter = 'il-footer--home';
      }
      this.showFooter();
      return currentFooter;
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
