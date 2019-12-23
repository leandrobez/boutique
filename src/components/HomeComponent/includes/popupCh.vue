<template>
  <div class="popScroll il-back" :class="getPopClass()">
    <div class="popup il-christmas">
      <h1>Feliz Natal! Um ótimo Ano Novo</h1>
      <p>
        A Kaizen Pilates e CoreAlign decreta:<br /><span
          ><i
            >"A presença de vocês alunos durante o transcorrer desse ano é o
            melhor presente que poderiamos ter recebido"</i
          ></span
        >.<br />Contamos com vocês novamente para o ano de 2020.<br />Obrigado
        por ser um aluno Kaizen!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'popupCh',
  data() {
    return {
      closed: false,
      interval: null
    };
  },
  mounted() {
    this.closeBanner();
  },
  methods: {
    closeBanner() {
      setTimeout(() => {
        this.closed = true;
        this.$parent.showPopupChristmas = false;
        this.interval = null;
      }, 11000);
    },
    getPopClass() {
      if (!this.closed) {
        return 'show';
      } else {
        return 'hidden';
      }
    }
  }
};
</script>

<style></style>
