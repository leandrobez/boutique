<template>
<!--MODAL-->
<section class="il-section il-section--modal il-color--background__modal il-section--modal__active" v-show="active">
    <!--modal-->
    <div id="il-modal" class="il-modal">
        <div class="il-forms">
            <a href="!#" class="il-modal--close" @click.prevent="closeModal()">
              <i class="mdi mdi-12px mdi-close"></i>
            </a>
            <h3 class="il-color--text__dark text-center">Fale com a gente</h3>
            <form name="form-contact" method="post" data-netlify="true" class="il-form" data-netlify-honeypot="bot-field" @submit.prevent="sendData">
                <div class="il-form--fields">
                    <input type="text" id="name" class="il-input" v-model="contact.name" placeholder="Seu nome">
                    <input type="text" id="lastname" class="il-input" v-model="contact.lastname" placeholder="Seu sobrenome">
                    <input type="email" id="email" class="il-input" v-model="contact.email" placeholder="Seu email">
                    <input type="tel" id="phone" class="il-input" v-model="contact.phone" placeholder="(xx) xxxx-xxxx">
                    <input type="tel" id="mobil" class="il-input" v-model="contact.mobil" placeholder="(xx) xxxx-xxxx">
                    <select v-model="contact.frowhere" id="frowhere" class="il-select">
                      <option value="fromfriends" selected>Meus amigos me indicaram</option>
                      <option value="fromface">Conheci a página no facebook</option>
                      <option value="fromemail">Recebi um email convidando</option>
                      <option value="fromcards">Li num encarte</option>
                  </select>
                  <div data-netlify-recaptcha="true"></div>
                  <input type="hidden" name="form-name" value="form-contact" />
                </div>
                <button class="il-btn il-btn--submit">Enviar</button>
            </form>
        </div>
    </div>
</section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Modal',
  data () {
    return {
      active: false,
      contact: {
        "form-name": 'form-contact',
        name: '',
        lastname: '',
        email: '',
        phone: '',
        mobil: '',
        frowhere: ''
      }
    };
  },
  mounted() {
    if (this.$parent.checkShowModal) {
      this.active = true
    }
  },
  methods: {
    encode (data) {
      return Object.keys(data)
      .map(
        key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      )
      .join("&");
    },
    sendData () {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      
      let content = this.encode(this.contact)
      let url = '/'
      axios.post(url, content, axiosConfig)
      .then( () => {
        this.$router.push({path: 'email/success'})
      }).catch( () => {
        console.log(url)
        this.$router.push({path: 'email/fails'})
      }) 
    },
    closeModal () {
      this.$parent.showModal = false
      this.active = false
      return
    }
  }
}
</script>
