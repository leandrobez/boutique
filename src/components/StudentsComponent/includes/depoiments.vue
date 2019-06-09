<template>
<div class="il-container--wrapper">
    <section class="il-section il-section--depoiments il-color--background__header">
        <div class="il-depoiments--navigation">
            <i id="nav-left" class="mdi mdi-24px mdi-arrow-left-drop-circle il-color--white" @click.prevent="move('left')" title="Retroceder"></i>
            <i id="nav-right" class="mdi mdi-24px mdi-arrow-right-drop-circle il-color--white" @click.prevent="move('right')" title="Avançar"></i>
        </div>
        <div class="il-depoiments--content">
            <div class="il-depoiments--slider">
                <div class="il-depoiment--item" v-for="(item,index) in students" :key="index">
                    <div class="il-item--caption il-color--text__gold">
                        {{item.name}}
                    </div>
                    <div class="il-item--picture">
                        <img :src="item.picture" :alt="item.name" class="il-img--medium">
                    </div>
                       
                        <div class="il-item--info">
                            <p class="il-color--text__light"><em>{{item.text}}</em>.</p>
                        </div>
                    </div>
                </div>
            </div>
    </section>
</div>
</template>

<script>
export default {
  name: 'Depoiment',

  data() {
    return {
      init: 0,
      time: 12000,
      students: [
        {
          name: 'Janice Kruse',
          picture: '/images/pictures/janice.jpg',
          text:
            'Ha 20 anos atrás, eu afirmava com convicção que odiava ginástica até conhecer a profissional Claudia Muraguti. Hoje, aos 66 anos, estou feliz porque ela me ensinou a amar Pilates e CoreAlign. A academiz KAIZEN é a realização deste trabalho sério com o objetivo de oferecer profissionais competentes em uma área física clean, agradável e espaçosa onde os alunos se reunem em uma convivência alegre e saudável! Parabéns KAIZEN: seja bem vinda a Porto Alegre',
          social: [
            {
              icon: 'mdi-facebook',
              address: 'https://www.facebook.com/nome-do-site'
            },
            {
              icon: 'mdi-twitter',
              address: 'https://www.twitter.com/nome-do-site'
            },
            {
              icon: 'mdi-pinterest',
              address: 'https://www.piterest.com/nome-do-site'
            }
          ]
        },
        {
          name: 'César Terra Burmann',
          picture: '/images/pictures/burmann.jpg',
          text:
            'Registro aqui meus cumprimentos à Claudia pelo novo espaço/estúdio de pilates/corealign - Kaizen, com design clean e muito bom gosto, que oportuniza a continuidade do excelente e reconhecidíssimo trabalho da nossa querida profe, nos entregando qualidade de vida. Parabéns e muito sucesso',
          social: [
            {
              icon: 'mdi-facebook',
              address: 'https://www.facebook.com/nome-do-site'
            },
            {
              icon: 'mdi-twitter',
              address: 'https://www.twitter.com/nome-do-site'
            },
            {
              icon: 'mdi-pinterest',
              address: 'https://www.piterest.com/nome-do-site'
            }
          ]
        },
        /*{
          name: 'Terezinha Milanesi',
          picture: '/images/pictures/teka.jpg',
          text: 'lklklklkl',
          social: [
            {
              icon: 'mdi-facebook',
              address: 'https://www.facebook.com/nome-do-site'
            },
            {
              icon: 'mdi-twitter',
              address: 'https://www.twitter.com/nome-do-site'
            },
            {
              icon: 'mdi-pinterest',
              address: 'https://www.piterest.com/nome-do-site'
            }
          ]
        },*/
        {
          name: 'Vera Stracke',
          picture: '/images/pictures/vera.jpg',
          text:
            'Pilates corealign me desafia e me alicia. É um convite para suspender minha idade e implodir as travas que o peso do automatismo cravou no meu corpo. Aventura muito prazerosa porque a conquista de maior equilíbrio, tônus, agilidade e flexibilidade traz uma consciência inusitada. E então já não sabemos se o corpo anima a alma ou o contrário. Integrados, corpo e alma levitam. Integração é a chave e o bônus. Parabéns profe Claudia Muraguti!!!',
          social: [
            {
              icon: 'mdi-facebook',
              address: 'https://www.facebook.com/nome-do-site'
            },
            {
              icon: 'mdi-twitter',
              address: 'https://www.twitter.com/nome-do-site'
            },
            {
              icon: 'mdi-pinterest',
              address: 'https://www.piterest.com/nome-do-site'
            }
          ]
        }
      ]
    };
  },

  mounted() {
    this.runSliders();
  },

  methods: {
    move(side) {
      const styles = document.querySelectorAll('.il-depoiment--item');
      let count = styles.length;
      let classActive = 'il-item--active';
      /**move left */
      const moveLeft = index => {
        if (index < count - 1) {
          styles[index + 1].classList.add(classActive);
        } else {
          styles[0].classList.add(classActive);
        }
      };

      /** move right */
      const moveRight = index => {
        if (index < count - 1) {
          styles[index + 1].classList.add(classActive);
        } else {
          styles[0].classList.add(classActive);
        }
      };

      for (let i = 0; i < count; i++) {
        let el = styles[i];
        if (el.hasAttribute('class') && el.classList.contains(classActive)) {
          el.classList.remove(classActive);
          if (side == 'left') {
            moveLeft(i);
          } else {
            moveRight(i);
          }
          break;
        }
      }
    },

    runSliders() {
      const styles = document.querySelectorAll('.il-depoiment--item');
      let count = styles.length;
      styles[0].classList.add('il-item--active');
      let vm = this;
      const nextEl = (index, styles, vm) => {
        let init = vm.init;

        let classActive = 'il-item--active';
        if (index < count) {
          styles[index].classList.add(classActive);
          for (let i = 0; i < count; i++) {
            if (i !== index) {
              let el = styles[i];
              if (
                el.hasAttribute('class') &&
                el.classList.contains(classActive)
              ) {
                el.classList.remove(classActive);
              }
            }
          }
        } else {
          vm.init = 0;
          init = 0;
          styles[init].classList.add(classActive);
          styles[count - 1].classList.remove(classActive);
        }
      };
      /**temporizador */
      
      setInterval(() => {
        nextEl(vm.init, styles, vm);
        vm.init++;
      }, vm.time);
    }
  }
};
</script>
