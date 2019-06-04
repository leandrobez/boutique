<template>
    <!-- popup -->
    <div class="popScroll" :class="getCurrentClass()">
        <div class="popup">
            <span class="ribbon top-left ribbon-primary">
                <small>KAIZEN</small>
            </span>
            <h1>Seja Bem Vindo!</h1>
            <p>Agende uma aula experimental grátis!</p>
            <div id="option">
                
                <div class='il-picture'>
                  <img id="slider" src="images/gallery/studio/kaizen1.jpg" alt="kaizen1.jpg" title="Espaço Kaizen">
                </div>

                <router-link id="agendar" class="boxi" :to="{name:'contact', params: {plan:'message'}}" title="Agendar uma aula experimental">Agendar</router-link>
                <em>ou</em>
                <a href="#" id="close" class="boxi closei" @click.prevent="closePop">Fechar</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'popup',
  data() {
    return {
      slider: [
        'kaizen1',
        'kaizen2',
        'kaizen3',
        'kaizen4',
        'kaizen5',
        'kaizen6',
        'kaizen7',
        'kaizen8'
      ],
      closed: false
    };
  },
  mounted() {
    this.rotateSlider();
  },
  methods: {
    closePop() {
      this.closed = true;
    },
    getCurrentClass() {
      if (!this.closed) {
        return 'show';
      } else {
        return 'hidden';
      }
    },
    rotateSlider() {
      const sliders = document.getElementById('slider');
      let init = 0;
      let end = 7;
      setInterval(() => {
        let current = init;
        sliders.src = 'images/gallery/studio/' + this.slider[current] + '.jpg';

        if (init <= end) {
          init++;
        } else {
          init = 0;
        }
      }, 4000);
    }
  }
};
</script>