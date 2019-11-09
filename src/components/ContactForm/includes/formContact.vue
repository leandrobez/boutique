<template>
<div class="il-contact--form">
    <p class="il-color--text__dark">Não se preocupe não compartilharemos seu endereço de e-mail.<br>Ele é importante para podermos entrar em contato com você e entender suas reais necessidades.</p>
    <div class="il-wrapper animated bounceInLeft">
        <div class="il-info">
            <img src="/images/banners/contact.jpg" alt="contact">
            <h3>Kaizen Pilates e CoreAlign</h3>
            <ul>
                <li><i class="mdi mdi-map"></i> Av Lavras 334 - sala 702</li>
                <li><i class="mdi mdi-sign-caution"></i> Bairro Petrópolis</li>
                <li><i class="mdi mdi-phone"></i> 3519-3339</li>
                <li><i class="mdi mdi-email"></i> contato@kaizenpilates.com</li>
            </ul>
        </div>
        <div class="il-contact">
            <h3>Envie um email</h3>
            <div class="il-alert il-alert--warning" v-if="msg">
                <p>{{msg}}</p>
            </div>
            <form @submit.prevent="sendData" data-netlify="true" class="il-form" data-netlify-honeypot="bot-field" name="form-contact">
                <fieldset>
                    <div class="il-form--fields">
                        <input type="text" id="name" class="il-input" v-model="contact.name" placeholder="Seu nome" required>
                        <input type="text" id="lastname" class="il-input" v-model="contact.lastname" placeholder="Seu sobrenome" required>
                        <input type="email" id="email" class="il-input" v-model="contact.email" placeholder="Seu email" required>
                        <input type="tel" id="phone" data-js="mask-phone" class="il-input" maxlength="15" v-model="contact.phone" placeholder="(xx) xxxx-xxxx">
                        <input type="tel" id="mobil" data-js="mask-mobil" class="il-input" maxlength="15" v-model="contact.mobil" placeholder="(xx) xxxx-xxxx">
                        <input type="hidden" id="plan" v-model="contact.plan">
                        <select v-model="contact.frowhere" id="frowhere" class="il-select">
                            <option value="" selected>Como nos achou</option>
                            <option value="amigos">Meus amigos me indicaram</option>
                            <option value="facebook">Conheci a página no facebook</option>
                            <option value="instagram">Conheci a página no instagram</option>
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
    this.mask();
  },
  methods: {
    mask() {
      /* máscara para telefone */
      let maskPh = document.querySelector('[data-js="mask-phone"]');
      let maskClr = document.querySelector('[data-js="mask-mobil"]');
      maskPh.addEventListener(
        'input',
        e => {
          this.makeMask(e);
        },
        false
      );
      maskClr.addEventListener(
        'input',
        e => {
          this.makeMask(e);
        },
        false
      );
    },
    makeMask(e) {
      const maskPhone = phone => {
        if (phone.length <= 15) {
          console.log(phone);
          phone = phone.replace(/D/g, '');
          //phone = phone.replace(/^(\d)/, '($1');
          phone = phone.replace(/^(d{2})(d)/g, '($1) $2');
          phone = phone.replace(/(d)(d{4})$/, '$1-$2');
          //.replace(/(-\d{6})\d+?$/, '$1');
          return phone;
        }
        return phone;
      };
      e.target.value = maskPhone(e.target.value);
    },
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
      if (
        this.contact.name == '' ||
        this.contact.lastname == '' ||
        this.contact.email == '' ||
        this.contact.phone == '' ||
        this.contact.mobil == ''
      ) {
        this.msg = 'Por favor prencha todos os campos.';
        setTimeout(() => {
          this.msg = '';
        }, 3000);
        return false;
      }
      if (this.contact.frowhere == '') {
        this.msg =
          'Por favor escolha uma das opções de como nos achou. Obrigado!';
        setTimeout(() => {
          this.msg = '';
        }, 3000);
        return false;
      }
      if (
        this.contact.message == '' ||
        this.contact.message == 'Deixe sua mensagem'
      ) {
        this.msg = 'Por favor preencha o campo mensagem. Obrigado!';
        setTimeout(() => {
          this.msg = '';
        }, 3000);
        return false;
      }
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
