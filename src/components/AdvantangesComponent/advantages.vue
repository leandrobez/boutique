<template>
<!--SECTION ADVANTAGE-->
<section class="il-section il-section--advantage">
     <div class="il-container--wrapper">
         <h1 class="il-section--title">As <span class="il-color--text__very-light">Vantagens</span></h1>
         <h2 class="il-section--sub-title il-color--text__very-light text-right">Nossos diferencias falam por si</h2>
         <div class="il-advantage--content">
             <div class="il-box--items">
                 <div class="il-item il-item--0 il-box il-color--background__lighten">
                     <i class="il-pilates-icon flaticon-side-kick-kneeling light"></i><span class="il-color--text__darken">Pilates</span>
                     <p class="il-content--description il-color--text">O Método foca no movimento natural do corpo com base na anatomia e biomecânica. Tem como objetivo fortalecer e alongar os músculos de forma equilibrada gerando saúde articular. É atualmente uma técnica reconhecida para tratamento e prevenção de problemas na coluna vertebral.</p>
                 </div>
                 <div class="il-item il-item--1 il-box il-color--background__lighten">
                     <i class="il-pilates-icon flaticon-elongation-posture light"></i><span class="il-color--text__darken">CoreAlign</span>
                     <p class="il-content--description il-color--text">O CoreAlign é uma técnica inovadora que prioriza os movimentos na posição em pé. Criado a partir da reabilitação tornou-se uma vigorosa ferramenta para condicionamento físico aeróbico e neuromuscular.<br>Devido a sua versatilidade incrível as aulas são divertidas, intensas, gerando o aumento do gasto calórico. Fornece uma experiência de exercício única, que combina o trabalho cardiovascular com a melhora da postura através do alogamento axial.
</p>          
                 </div>
                 <div class="il-item il-item--2 il-box il-color--background__lighten">
                     <i class="il-pilates-icon flaticon-elongation-posture light"></i><span class="il-color--text__darken">Konnector</span>
                     <p class="il-content--description il-color--text">A versatilidade do konnector multiplicou a intensidade do reformer <em>(equipamento utilizado no pilates</em>). Através de quatro alças conectadas entre si o aluno é estimulado a utilizar todo corpo de forma desafiadora aumentando assim o gasto energético a cada movimento.</p>          
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
  mixins: [animeAbout]
};
</script>
