<template>
    <!-- popup -->
    <div class="popScroll" :class="getCurrentClass()">
        <div class="popup">
            <span class="ribbon top-left ribbon-primary">
                <small>KAIZEN</small>
            </span>
            <h1>Seja Bem Vindo!</h1>
           <!-- <div class="subscribe-widget">-->
                <!-- form --
                <form id="subscribe-form">
                    <input type="email" name="email" placeholder="Inform seu email" class="email-form" required>
                    <button type="submit" class="button">Subscribe</button>
                </form>
                -- end form-->
            <!--</div>-->
            <p>Agende uma aula experimental agora!</p>
            <div id="option">
                <router-link id="agendar" class="boxi" :to="{name:'contact'}" title="Agendar uma aula experimental">Agendar</router-link>
                <em>ou</em>
                <a href="#" id="close" class="boxi closei" @click.prevent="closePop">Fechar</a>
                
                <div class='video-wrapper'>
                    <div class='video'>
                        <iframe id="player" width="290" height="200" src="https://www.youtube.com/embed/pT7I4afnrTo" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'popup',
  data() {
    return {
      closed: false
    };
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
    }
  }
};
</script>