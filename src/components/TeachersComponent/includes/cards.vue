<template>
<div :class="`il-card il-card--${id}`">
    <div class="il-card--header">
        <h4 class="il-card--header__title">{{title}}</h4>
        <img :src="picture" :alt="`professor ${title}`" :title="`Professor ${title}`">
        </div>
        <div class="il-card--content">
            <p class="il-content--description il-card--description il-color--text__gold">{{message}}</p>
            <p class="il-color--white">Paixão pelo trabalho e dedicação no que for necessário para atingir a excelência no atendimento ao aluno/cliente, é o que define esta profissional que possui 33 anos de experiência, regados por constante atualização.<br>Como educadora de Pilates e Corealign formou inúmeros instrutores, tendo participado como palestrante em vários eventos relacionados a área.<br>Estas características revertem em minuciosa capacidade em avaliar, planejar e executar as ações necessárias para atingir objetivos, trilhando o caminho mais eficaz.</p>
        </div>
        <div class="il-card--footer">
            <i @mouseover = "animateRight" @mouseleave = "animateLeft" class="mdi mdi-24px mdi-check il-color--text__light" title="Veja meu currículo" @click="showCV(id)"></i>
        </div>
    </div>
</template>

<script>
import { animeCards } from '../../../common/animation';
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

  mixins: [animeCards],
  methods: {
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
      this.$parent.showCV(key);
    }
  }
};
</script>
