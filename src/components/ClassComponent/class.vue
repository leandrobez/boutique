<template>
<div>
    <section id="il-class" class="il-section il-section--class">
        <div class="il-container--wrapper">
            <h1 class="il-section--title il-title--full">As
                <span class="il-color--text__very-light">Aulas</span>
            </h1>
            <h2 class="il-section--sub-title il-color--text__very-light text-right">Venha fazer uma aula com a gente.</h2>

            <div class="il-class--content">
                <div class="il-box--items one-item">
                    <div class="il-item il-box il-color--background__lighten">
                        <i class="il-pilates-icon flaticon-side-bend-posture light"></i>
                        <span class="il-color--text">Por quê?</span>
                        <p class="il-content--description il-color--text">Porque aqui na <b>{{$parent.title}}</b> oferecemos um ambiente climatizado com cerca de 90 m², onde equipamentos de excelente qualidade estão a sua disposição.<br>Aqui o foco sempre está na individualidade do aluno para que você receba toda a atenção que lhe é devida.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="il-section il-section--prices">
        <div class="il-container--wrapper">
            <h2 class="il-section--sub-title il-color--text__very-light text-right">Escolha um plano de aula:</h2>
            <div class="il-pricing--grid">
              <ilCards v-for="plan in plans" :key="plan.key" :id="plan.id"
                :condicions="plan.condicions" :price="plan.value" 
                :text="plan.text" />
            </div>
        </div>
    </section>
</div>
</template>

<script>
import { animeBox } from '../../common/animation';
import ilCards from './includes/cards.vue';
export default {
  name: 'Class',
  components: {
    ilCards
  },
  mounted() {
    this.startAnime();
  },
  data() {
    return {
      whatIcon: 'il-pilates-icon flaticon-exercises-with-chair',
      plans: [
        {
          id: '1',
          key: 0,
          condicions: 1,
          value: 250,
          message: ''
        },
        {
          id: '2',
          key: 1,
          condicions: 2,
          value: 480,
          message: ''
        },
        {
          id: '3',
          key: 2,
          condicions: 3,
          value: 720,
          message: ''
        }
      ]
    };
  },
  mixins: [animeBox]
};
</script>
