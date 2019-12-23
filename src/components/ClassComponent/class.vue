<template>
<div class="il-class">
    <section id="il-class" class="il-section il-section--class">
        <div class="il-container--wrapper">
            <h1 class="il-section--title">As
                <span class="il-color--text__very-light">Aulas</span>
            </h1>
            <h2 class="il-section--sub-title il-color--text__very-light text-right">Venha fazer uma aula com a gente.</h2>

            <div class="il-class--content">
                <div class="il-box--items one-item">
                    <div class="il-item il-box ">
                        <i class="il-pilates-icon flaticon-side-bend-posture light"></i>
                        <span class="il-color--text">Por quê?</span>
                        <p class="il-content--description il-color--text">Porque aqui na <strong class="il-color--text__gold">{{$parent.title}}</strong> você terá aulas vigorosas e inovadoras que te motivarão a retornar para a próxima.<br>Além disso você com certeza irá melhorar sua <b>concentração</b>, <b>controle e coordenação motora</b>, <b>equilíbrio muscular</b>, <b>alinhamento postural</b>, <b>respiração</b> e ganhará mais <b>fluidez</b> em seus movimentos.</p>
                        <button class="il-btn auto very-bigger il-btn--empty" @click.prevent="showPanel()">Escolha um plano</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="il-section il-section--prices">
        <div class="il-container--wrapper">
            <!-- <h4 class="il-color--accent text-center">Escolha um plano de aula:</h4>-->
            <div class="il-pricing--grid">
                <ilCards v-for="plan in plans" :key="plan.key" :id="plan.id" :condicions="plan.condicions" :price="plan.value" :text="plan.text" />
            </div>
            <p class="il-obs">Aula avulsa - R$ 70,00</p>
            <a href="#!" class="il-close il-color--white" @click.prevent="closePanel()"><i class="mdi mdi-24px mdi-close"></i></a>
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
  computed: {
    showCards() {
      if (this.show) {
        return true;
      }
      return false;
    }
  },
  data() {
    return {
      whatIcon: 'il-pilates-icon flaticon-exercises-with-chair',
      show: false,
      plans: [
        {
          id: '1',
          key: 0,
          condicions: 1,
          value: 245,
          message: ''
        },
        {
          id: '2',
          key: 1,
          condicions: 2,
          value: 460,
          message: ''
        },
        {
          id: '3',
          key: 2,
          condicions: 3,
          value: 595,
          message: ''
        }
      ]
    };
  },
  methods: {
    showPanel() {
      let panel = document.querySelector('.il-section.il-section--prices');
      panel.classList.add('il-show');
    },
    closePanel() {
      let panel = document.querySelector('.il-section.il-section--prices');
      panel.classList.remove('il-show');
    }
  },
  mixins: [animeBox]
};
</script>
