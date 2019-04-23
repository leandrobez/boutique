<template>
<div :class="`il-card il-card--${id}`">
    <div class="il-card--header">
        <h4 class="il-card--header__title">{{title}}</h4>
        <img :src="picture" :alt="`professor ${title}`" :title="`Professor ${title}`">
        </div>
        <div class="il-card--content">
            <p class="il-content--description il-card--description il-color--text__light">{{message}}</p>
        </div>
        <div class="il-card--footer">
            <i @mouseover = "animateRight" @mouseleave = "animateLeft" class="mdi mdi-24px mdi-check il-color--text__light" title="Veja meu currículo" @click="showCV(id)"></i>
        </div>
    </div>
</template>

<script>
import { animeCards } from "../../../common/animation";
export default {
  name: "cards",
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

  mixins: [animeCards],
  methods: {
    animateRight() {
      var ele = event.currentTarget;
      ele.classList.add("moveRight");
    },
    animateLeft() {
      var ele = event.currentTarget;
      ele.classList.add("moveLeft");

      setTimeout(function() {
        ele.classList.remove("moveRight");
        ele.classList.remove("moveLeft");
      }, 500);
    },
    showCV(key) {
      this.$parent.showCV(key);

      /*if (!this.clicked) {
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
      this.clicked = !this.clicked;*/
    }
  }
};
</script>
