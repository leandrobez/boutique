<template>
<!--SECTION CONTACT-->
<section class="il-section il-section--contact">
    <div class="il-container--wrapper">
        <h1 class="il-section--title">Contate <span class="il-color--text__very-light"> agora.</span></h1>
        <div class="il-contact--content">
            <form name="form-contact" method="post" data-netlify="true" class="il-form" data-netlify-honeypot="bot-field" @submit.prevent="sendData">
                <fieldset>
                    <p class="il-contact--info il-color--text__dark">Não se preocupe não compartilharemos seu endereço de e-mail. Ele é importante para podermos entrar em contato com você e entender suas reais necessidades.</p>
                    <div class="il-form--fields">
                        <input type="text" id="name" class="il-input" v-model="contact.name" placeholder="Seu nome" required>
                        <input type="text" id="lastname" class="il-input" v-model="contact.lastname" placeholder="Seu sobrenome" required>
                        <input type="email" id="email" class="il-input" v-model="contact.email" placeholder="Seu email" required>
                        <input type="tel" id="phone" :onkeydown="maskD('p')" :onkeyup="maskU('p')" class="il-input" v-model="contact.phone" placeholder="Fone (xx) xxxx-xxxx">
                        <input type="tel" id="mobil" class="il-input" :onkeydown="maskD('m')" :onkeyup="maskU('m')" v-model="contact.mobil" placeholder="Clr (xx) xxxx-xxxx">
                        <input type="hidden" id="plan" v-model="contact.plan">
                        <select v-model="contact.frowhere" id="frowhere" class="il-select">
                            <option value="" selected>Como nos achou</option>
                            <option value="amigos">Meus amigos me indicaram</option>
                            <option value="facebook">Conheci a página no facebook</option>
                            <option value="email">Recebi um email convidando</option>
                            <option value="encartes">Li em um encarte</option>
                        </select>
                        <textarea v-model="contact.message"></textarea>
                        <div data-netlify-recaptcha="true"></div>
                        <input type="hidden" name="form-name" value="form-contact" />
                      </div>
                        <button type="submit" class="il-btn il-btn--submit">Enviar</button>
                </fieldset>
            </form>
        </div>
    </div>
</section>
</template>

<script>
import axios from 'axios';
import { MaskDown, MaskUp } from '../../common/mask.phone.js';
export default {
  name: 'contact',
  data() {
    return {
      contact: {
        'form-name': 'form-contact',
        name: '',
        lastname: '',
        email: '',
        phone: '',
        mobil: '',
        frowhere: '',
        message: 'Deixe sua mensagem',
        plan: ''
      },
      inputs: {
        inputPhone: null,
        inputMobil: null
      }
    };
  },
  mounted() {
    this.setPlan();
  },
  methods: {
    setPlan() {
      let plan = '';
      let path = this.$route.params;
      switch (path.plan) {
        case 'plan1':
          plan = 'plano1';
          this.contact.plan = plan;
          break;
        case 'plan2':
          plan = 'plano2';
          this.contact.plan = plan;
          break;
        case 'plan3':
          plan = 'plano3';
          this.contact.plan = plan;
          break;
      }
    },
    maskD(ele) {
      if (ele == 'm') {
        let mobil = document.getElementById('mobil');
        MaskDown(mobil);
      } else if (ele == 'p') {
        let phone = document.getElementById('phone');
        MaskDown(phone);
      }
    },
    maskU(ele) {
      if (ele == 'p') {
        let phone = document.getElementById('phone');
        MaskUp(phone, '(##) ####-####');
      } else if (ele == 'm') {
        let mobil = document.getElementById('mobil');
        MaskUp(mobil, '(##) ####-####');
      }
    },
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&');
    },
    sendData() {
      const axiosConfig = {
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };
      let content = this.encode(this.contact);
      let url = '/';
      axios
        .post(url, content, axiosConfig)
        .then(() => {
          this.$router.push({
            path: 'email/success'
          });
        })
        .catch(() => {
          //console.log(url)
          this.$router.push({
            path: 'email/fails'
          });
        });
    }
  }
};
</script>
