<template>
<section id="il-advantage" class="il-section il-section--advantage">
     <div class="il-container--wrapper">
         <h1 class="il-section--title">As <span class="il-color--text__very-light">Vantagens</span></h1>
         <h2 class="il-section--sub-title il-color--text__very-light text-right">Nossos diferencias falam por si só</h2>
         <div class="il-advantage--content">
             <div class="il-box--items">
                 <div class="il-item il-item--0 il-box il-color--background__lighten">
                     <i class="il-pilates-icon flaticon-side-kick-kneeling light"></i><span class="il-color--text__darken">Pilates</span>
                     <p class="il-content--description il-color--text">O Método foca no movimento natural do nosso corpo e no respeito à nossa anatomia e a nossa biomecânica. Tem como objetivo fortalecer os músculos e articulações e melhorar a flexibilidade do corpo. É atualmente uma técnica reconhecida para tratamento e prevenção de problemas na coluna vertebral.</p>
                 </div>
                 <div class="il-item il-item--1 il-box il-color--background__lighten">
                     <i class="il-pilates-icon flaticon-elongation-posture light"></i><span class="il-color--text__darken">CoreAlign</span>
                     <p class="il-content--description il-color--text">CoreAlign é um ótimo complemento para o seu programa já existente, sendo uma ferramenta essencial para reabilitação e excelente para o equilíbrio e readaptação neuromuscular. Devido a sua versatilidade incrível permite o uso de adução, alongamento, aquecimento, resfriamento, ou para simplesmente se exercitar.</p>          
                 </div>
             </div>
         </div>
     </div>
</section>
</template>

<script>
import anime from 'animejs';
export default {
  name: 'Advantage',
  mounted() {
    this.startAnime();
  },
  data() {
    return {
      whatIcon: 'il-pilates-icon flaticon-pilates-equipment'
    };
  },
  methods: {
    startAnime() {
      let showAnime = anime.timeline({
        targets: '.il-item.il-item--0',
        easing: 'easeInOutQuad'
      });
      showAnime.add({
        opacity: ['0', '1'],
        duration: 500
      });
      let showAnime1 = anime.timeline({
        targets: '.il-item.il-item--1',
        easing: 'easeInOutQuad'
      });
      showAnime1.add({
        opacity: ['0', '1'],
        delay: 500,
        duration: 800
      });
    }
  }
};
</script>
