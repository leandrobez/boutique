<template>
<div :class="`il-card il-card--${id}`">
    <div class="il-card--header">
        <h4 class="il-card--header__title">{{title}}</h4>
        <img :src="picture" alt="">
        </div>
        <div class="il-card--content">
            <p class="il-content--description il-card--description il-color--text__very-light">{{message}}</p>
        </div>
        <div class="il-card--footer">
            <i @mouseover = "animateRight" @mouseleave = "animateLeft" class="mdi mdi-24px mdi-check il-color--text__light" title="Veja meu currículo" @click="showCV(id)"></i>
        </div>
    </div>
</template>

<script>
import anime from 'animejs';
export default {
  name: 'cards',
  props: {
    id: Number,
    title: String,
    message: String,
    picture: String
  },
  data() {
    return {
      clicked: false
    };
  },
  mounted() {
    this.startAnime();
  },
  methods: {
    startAnime() {
      let init = 400;
      let include = 100;
      let showAnime = anime.timeline({
        targets: '.il-card--0',
        easing: 'easeInOutQuad'
      });
      showAnime.add({
        opacity: ['0', '1'],
        duration: init
      });
      showAnime.add({
        targets: '.il-card--1',
        opacity: ['0', '1'],
        duration: init + include
      });
      showAnime.add({
        targets: '.il-card--2',
        opacity: ['0', '1'],
        duration: init + 2 * include
      });
    },
    animateRight() {
      var ele = event.currentTarget;
      ele.classList.add('moveRight');
    },
    animateLeft() {
      var ele = event.currentTarget;
      ele.classList.add('moveLeft');

      setTimeout(function() {
        ele.classList.remove('moveRight');
        ele.classList.remove('moveLeft');
      }, 500);
    },
    showCV(key) {
      if (!this.clicked) {
        this.$parent.CV = {
          id: key,
          teacher: this.$parent.instructors[key].title,
          show: true
        };
      } else {
        this.$parent.CV = {
          id: null,
          teacher: null,
          show: false
        };
      }
      this.clicked = !this.clicked;
    }
  }
};
</script>
