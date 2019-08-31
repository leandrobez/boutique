<template>
<div class="container">
    <p class="il-color--text__dark">Não se preocupe não compartilharemos seu endereço de e-mail. Ele é importante para podermos entrar em contato com você e entender suas reais necessidades.</p>
    <div class="wrapper animated bounceInLeft">
        <div class="company-info">
            <h3>Kaizen Pilates e CoreAlign</h3>
            <ul>
                <li><i class="fa fa-road"></i> Av Lavras 334, Bairro Petrópolis</li>
                <li><i class="fa fa-phone"></i> 3519-3339</li>
                <li><i class="fa fa-envelope"></i> contato@kaizenpilates.com</li>
            </ul>
        </div>
        <div class="contact">
            <h3>Email Us</h3>
            {{msg}}
            <form @submit.prevent="sendData" class="il-form" name="form-contact">
                <fieldset>
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
</div>
</template>

<script>
import axios from 'axios';
import { MaskDown, MaskUp } from '../../../common/mask.phone.js';
//import mail from 'nodemailer';
export default {
  name: 'form-contact',
  data() {
    return {
      msg: '',
      contact: {
        name: '',
        lastname: '',
        email: '',
        phone: '',
        mobil: '',
        frowhere: '',
        message: 'Deixe sua mensagem',
        plan: ''
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
      let content = this.encode({
        'form-name': 'form-contact',
        ...this.contact
      });
      let url = '/';
      axios
        .post(url, content, axiosConfig)
        .then(() => {
          //console.log(res)
          setTimeout(() => {
            this.$router.push({
              name: 'email',
              params: {
                type: 'success'
              }
            });
          }, 3000);
        })
        .catch(() => {
          this.$router.push({
            name: 'email',
            params: {
              type: 'fails'
            }
          });
        });
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%;
}

ul {
  list-style: none;
  padding: 0;
}

.brand {
  text-align: center;
}

.brand span {
  color: #fff;
}

.wrapper {
  box-shadow: 0 0 20px 0 rgba(72, 94, 116, 0.7);
}

.wrapper > * {
  padding: 1rem;
}

.company-info {
  background: #324545;
}

.company-info h3,
.company-info ul {
  text-align: center;
  margin: 0 0 1rem 0;
  color: goldenrod;
}

.contact {
  background: #f9feff;
}

/* FORM STYLES */
/*.contact form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
}*/

.contact form label {
  display: block;
  font-size: 0.9rem;
}

.contact form p {
  margin: 0;
}

.contact form .full {
  grid-column: 1 / 3;
}

.contact form button,
.contact form input,
.contact form textarea {
  width: 100%;
  padding: 0.75rem 0.5rem;
  border: 1px solid #c9e6ff;
}

.contact form button {
  background: #342312;
  border: 0;
  outline: none;
  color: #fccf00;
  text-transform: uppercase;
}

.contact form button:hover,
.contact form button:focus {
  background: #454343;
  color: #fff;
  outline: 0;
  transition: background-color 2s ease-out;
}

/* LARGE SCREENS */
@media (min-width: 700px) {
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  .wrapper > * {
    padding: 0.45rem;
  }

  .company-info h3,
  .company-info ul,
  .brand {
    text-align: left;
  }
}
</style>
