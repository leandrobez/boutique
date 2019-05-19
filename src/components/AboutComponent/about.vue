<template>
<!--SECTION ABOUT-->
<section class="il-section il-section--about">
    <div class="il-container--wrapper">
        <h1 class="il-section--title">{{$parent.titleCompost.title}}
          <span class="il-color--text__dark">{{$parent.titleCompost.title1}} e </span>            <span class="il-color--text__red">{{$parent.titleCompost.subTitle}}</span>
        </h1>
        <h2 class="il-section--sub-title il-color--text__very-light text-right">Temos como missão:</h2>
        <div class="il-about--content">
            <div class="il-box--items">
                <div class="il-item il-item--0 il-box il-color--background__lighten">
                    <i class="il-pilates-icon flaticon-exercises-with-body-arc light"></i>
                    <p class="il-content--description il-color--text">Transformar a vida dos alunos através de um atendimento de elevado nível técnico e ao mesmo tempo acolhedor, proporcionando alívio de dores, diposição física facilitando as atividades de vida diária.
                    </p>
                </div>
                <div class="il-item il-item--1 il-box il-color--background__lighten">
                    <i class="il-pilates-icon flaticon-breath-position light"></i>
                    <p class="il-content--description il-color--text">Estimular o movimento inteligente de forma repetida e sistemática, criando as condições ideais para uma vida feliz e saudável.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import { animeAbout } from '../../common/animation';
export default {
  name: 'About',
  mounted() {
    this.startAnime();
  },
  data() {
    return {
      whatIcon: 'il-pilates-icon flaticon-side-bending-posture'
    };
  },
  mixins: [animeAbout]
};
</script>
