<template>
<!--SECTION ADVANTAGE-->
<section class="il-section il-section--advantage">
    <div class="il-container--wrapper">
        <h1 class="il-section--title">As <span class="il-color--text__very-light">Técnicas</span></h1>
        <h2 class="il-section--sub-title il-color--text__very-light text-right">Nossos diferencias falam por si</h2>
        <div class="il-advantage--content">
            <div class="il-box--items">
                <div class="il-item il-item--0 il-box il-color--background__lighten">
                    <i class="il-pilates-icon flaticon-pilates-cadillac light"></i><span class="il-color--text__darken">Pilates</span>
                    <p class="il-content--description il-color--text">O Método foca no movimento natural do corpo com base na anatomia e biomecânica. Tem como objetivo fortalecer e alongar os músculos de forma equilibrada gerando saúde articular. É atualmente uma técnica reconhecida para tratamento e prevenção de problemas na coluna vertebral.</p>
                    <ul class="il-icons">
                        <li>Assista o <a href="#!" @click.prevent="runVideo('video0')" title="Veja um vídeo sobre pilates">vídeo</a></li>
                    </ul>
                    <div class="il-video video0">
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fkaizenpilatescorealign%2Fvideos%2F629348774197765%2F&width=500&show_text=false&appId=215407862194548&height=893" width="500" height="893" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media" allowFullScreen="true"></iframe>
                        <a href="#!" class="il-close il-color--white" @click.prevent="closeVideo('video0')"> X </a>
                    </div>
                </div>
                <div class="il-item il-item--1 il-box il-color--background__lighten">
                    <i class="il-pilates-icon flaticon-elongation-posture light"></i><span class="il-color--text__darken">CoreAlign</span>
                    <p class="il-content--description il-color--text">O CoreAlign é uma técnica inovadora que prioriza os movimentos na posição em pé. Criado a partir da reabilitação tornou-se uma vigorosa ferramenta para condicionamento físico aeróbico e neuromuscular.<br>Devido a sua versatilidade incrível as aulas são divertidas, intensas, gerando o aumento do gasto calórico. Fornece uma experiência de exercício única, que combina o trabalho cardiovascular com a melhora da postura através do alogamento axial.</p>
                        <ul class="il-icons">
                            <li>Assista o <a href="#!" @click.prevent="runVideo('video1')" title="Veja um vídeo sobre pilates">vídeo</a></li>
                        </ul>
                        <div class="il-video video1">
                            <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fkaizenpilatescorealign%2Fvideos%2F407667683412187%2F&width=500&show_text=false&appId=215407862194548&height=500" width="500" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media" allowFullScreen="true"></iframe>
                            <a href="#!" class="il-close il-color--white" @click.prevent="closeVideo('video1')"> X </a>
                        </div>
                </div>
                <div class="il-item il-item--2 il-box il-color--background__lighten">
                    <i class="il-pilates-icon flaticon-pilates-reformer light"></i><span class="il-color--text__darken">Konnector</span>
                    <p class="il-content--description il-color--text">A versatilidade do konnector multiplicou a intensidade do reformer <em>(equipamento utilizado no pilates</em>). Através de quatro alças conectadas entre si o aluno é estimulado a utilizar todo corpo de forma desafiadora aumentando assim o gasto energético a cada movimento.</p>
                    <ul class="il-icons">
                        <li>Assista o <a href="#!" @click.prevent="runVideo('video2')" title="Veja um vídeo sobre pilates">vídeo</a></li>
                    </ul>
                    <div class="il-video video2">
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fkaizenpilatescorealign%2Fvideos%2F455694028566885%2F&width=500&show_text=false&appId=215407862194548&height=500" width="500" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media" allowFullScreen="true"></iframe>
                        <a href="#!" class="il-close il-color--white" @click.prevent="closeVideo('video2')"> X </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import { animeAbout } from '../../common/animation';
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
    runVideo(v) {
      let player = document.querySelector('.il-video.' + v);
      player.classList.add('show');
    },
    closeVideo(v) {
      let player = document.querySelector('.il-video.' + v);
      player.classList.remove('show');
    }
  },
  mixins: [animeAbout]
};
</script>
