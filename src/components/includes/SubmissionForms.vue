<template>
<section class="il-section il-section--email">
    <div class="il-container--wrapper">
        <h1 class="il-section--title il-title--full">Encaminhamento de
            <span class="il-color--text__very-light">Email</span>
        </h1>
        <div class="il-email--content" v-if="alertOk">
            <div class="il-alert">
                <div class="il-alert--success">
                    <i class="mdi mdi-48px mdi-checkbox-marked-circle-outline"></i>
                    <p>Obrigado pelo seu email!<br>Em breve entraremos em contato.</p>
                </div>
            </div>
        </div>
        <div class="il-email--content" v-else>
            <div class="il-alert">
                <div class="il-alert--warning">
                    <i class="mdi mdi-48px mdi-alert-octagon"></i>
                    <p>Infelizmente não foi possível encaminhar seu email. Por favor tente novamente mais tarde.</p>
                </div>
            </div> 
        </div>
    </div>
</section>
</template>

<script>
export default {
  name: 'Submission',
  mounted() {
    this.getParam();
  },
  data() {
    return {
      alertOk: ''
    };
  },

  methods: {
    getParam() {
      let type = this.$route.params.type;
      if (type == 'success') {
        this.alertOk = true;
      } else {
        this.alertOk = false;
      }
      return;
    }
  }
};
</script>