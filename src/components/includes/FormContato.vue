<template>
<div>
    <form name="form-contact" method="post" data-netlify="true" class="il-form" data-netlify-honeypot="bot-field" @submit.prevent="sendData">
      <div class="il-modal--content  il-color--background__modal">
        <h4 class="il-color--text__dark text-center">Fale com a gente</h4>
        <div class="il-form--fields">
            <input type="text" id="name" class="il-input" v-model="contact.name" placeholder="Seu nome">
            <input type="text" id="lastname" class="il-input" v-model="contact.lastname" placeholder="Seu sobrenome">
            <input type="email" id="email" class="il-input" v-model="contact.email" placeholder="Seu email">
            <input type="tel" id="phone" class="il-input" v-model="contact.phone" data-phone="mask-phone" placeholder="(xx) xxxx-xxxx">
            <input type="tel" data-mobil="mask-mobile" id="mobil" class="il-input" v-model="contact.mobil" placeholder="(xx) xxxx-xxxx">
            <textarea v-model="contact.message"></textarea>
            <select v-model="contact.frowhere" id="frowhere" class="il-select">
              <option value="" selected>Como nos achou</option>
              <option value="fromfriends">Meus amigos me indicaram</option>
              <option value="fromface">Conheci a página no facebook</option>
              <option value="fromemail">Recebi um email convidando</option>
              <option value="fromcards">Li num encarte</option>
          </select>
          <div data-netlify-recaptcha="true"></div>
          <input type="hidden" name="form-name" value="form-contact" />
        </div>
        <button class="il-btn il-btn--submit">Enviar</button>
      </div>
    </form>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: "FormContato",
    data () {
        return {
            contact: {
                "form-name": 'form-contact',
                name: '',
                lastname: '',
                email: '',
                phone: '',
                mobil: '',
                frowhere: '',
                message: 'Deixe sua mensagem'
            }
        }
    },
    mounted () {
        /* máscara para telefone */

        let maskTel = document.querySelector('[data-phone="mask-phone"]');

        if (maskTel) {

            maskTel.addEventListener('input', this.makeMask, false);

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
        makeMask (e) {
            const maskPhone = (phone) => {
                let res =  phone.replace(/\D/g, '')
                    .replace(/^(\d)/, '($1')
                    .replace(/^(\(\d{2})(\d)/, '$1) $2')
                    .replace(/(\d{5})(\d{1,6})/, '$1-$2')
                    .replace(/(-\d{6})\d+?$/, '$1');

                return res

            }
            //console.log(maskPhone)
            e.target.value = maskPhone(e.target.value)

        },
    }
}
</script>
