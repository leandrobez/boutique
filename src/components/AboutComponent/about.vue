<template>
<!--SECTION ABOUT-->
<section class="il-section il-section--about">
    <div class="il-container--wrapper">
        <h1 class="il-section--title">{{$parent.titleCompost.title}}
            <span class="il-color--text__dark">{{$parent.titleCompost.title1}} e </span> <span class="il-color--text__red">{{$parent.titleCompost.subTitle}}</span>
        </h1>
        <h2 class="il-section--sub-title il-color--text__very-light text-right">Um breve histórico da Kaizen:</h2>
        <div class="il-about--content">
            <div class="il-box--items">
                <div class="il-item il-item--0 il-box il-color--background__lighten">
                    <h5></h5>
                    <p class="il-content--description il-color--text">O nascimento da Kaizen no dia 02 de maio de 2019 é a materialização de um sonho de uma profissional apaixonada pelo movimento. A experiência adquirida ao longo de vários anos dedicados à atividade física, permitiu criar um conceito de excelência na prestação de serviços relacionados a saúde, que possibilita o alcance rápido no seu objetivo. A atuação por 19 anos como sócia proprietária de outro local, bem como a formação de inúmeros instrutores em Pilates e CoreAlign, contribuíram para uma base sólida do projeto Kaizen.<br>E assim você encontrará um ambiente acolhedor, “clean”, sofisticado, com equipamentos de primeira qualidade, com profissionais que buscam aperfeiçoamento constante para lhe proporcionar uma experiência positiva de movimento.
</p>
                </div>

            </div>
            <ul class="il-icons">
                <li>Conheça a <a href="#!" title="Missão da Kaizen" @click.prevent="showMission()">missão</a> da Kaizen</li>
            </ul>
            <div class="il-mission">
                <div class="il-card">
                  <h5 class="il-color--text__gold">Nossa missão</h5>
                  <p class="il-color--white">Transformar a vida dos alunos através de um atendimento de elevado nível técnico e ao mesmo tempo acolhedor, proporcionando alívio de dores, disposição física e facilitando as atividades de vida diária.<br>Estimular o movimento inteligente de forma repetida e sistemática, criando as condições ideais para uma vida feliz e saudável.</p>
                  <a href="#!" class="il-close il-color--white" @click.prevent="closeMission()"> X </a>
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
  methods: {
    showMission() {
      let card = document.querySelector('.il-mission');
      card.classList.add('il-show--mission');
    },
    closeMission() {
      let card = document.querySelector('.il-mission');
      card.classList.remove('il-show--mission');
    }
  },
  mixins: [animeAbout]
};
</script>
