<template>
<section class="il-section il-section--about">
    <div class="il-container--wrapper">
        <h1 class="il-section--title il-title--full">{{$parent.titleCompost.title}}
            <span class="il-color--text__very-light">{{$parent.titleCompost.subTitle}}</span>
        </h1>
        <h2 class="il-section--sub-title il-color--text__very-light text-right">Temos como missão:</h2>
        <div class="il-about--content">
            <div class="il-box--items">
                <div class="il-item il-item--0 il-box il-color--background__lighten">
                    <i class="il-pilates-icon flaticon-exercises-with-body-arc light"></i>
                    <p class="il-content--description il-color--text">Potencializar as qualidades físicas individuais do aluno tendo como base os princípios do pilates.
                    </p>
                </div>
                <div class="il-item il-item--1 il-box il-color--background__lighten">
                    <i class="il-pilates-icon flaticon-breath-position light"></i>
                    <p class="il-content--description il-color--text">
                        Primar pela busca de uma postura mais equilibrada através do fortalecimento da musculatura profunda com a finalidade precípua de melhorar a qualidade de vida do indivíduo.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import anime from 'animejs';
export default {
  name: 'About',
  data() {
    return {
      whatIcon: 'il-pilates-icon flaticon-side-bending-posture'
    };
  },
  mounted() {
    this.startAnime();
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
