<template>
<div :class="`il-plan il-plan--${id}`">
    <h2 class="il-color--text__accent">{{condicions}} X Semana</h2>
    <p class="il-price il-color--text__accent">R$ {{price}},00 <span>por mês</span></p>
    <a href="#!" @click="subscription(id)" class="il-btn il-btn--cards__price ">Inscreva-se</a>
</div>
</template>

<script>
//import axios from "axios";
var Gerencianet = require('gn-api-sdk-node');
import anime from 'animejs';
import gatewayGerencianet from '../../../common/gerencianet.js';
export default {
  name: 'classCards',
  props: {
    id: String,
    condicions: Number,
    price: Number,
    text: String
  },
  data() {
    return {};
  },
  mounted() {
    this.startAnime();
  },
  methods: {
    startAnime() {
      let init = 400;
      let include = 100;
      let showAnime = anime.timeline({
        targets: '.il-plan--1',
        easing: 'easeInOutQuad'
      });
      showAnime.add({
        opacity: ['0', '1'],
        duration: init
      });
      showAnime.add({
        targets: '.il-plan--2',
        opacity: ['0', '1'],
        duration: init + include
      });
      showAnime.add({
        targets: '.il-plan--3',
        opacity: ['0', '1'],
        duration: init + 2 * include
      });
    },
    newPlan(key) {
      let options = gatewayGerencianet.access.dev;
      let plans = gatewayGerencianet.plans;
      let gateway = new Gerencianet(options);
      let params = {
        header: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*"
        }
      };
     /* const axiosConfig = {
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      };*/
      //GET https://api.codetabs.com/v1/proxy?quest=<url_to_http_resource>
      try {
        gateway
        .createPlan(params, plans[key - 1].plan)
        .then(res => {
          if (res.code == 200) {
            let plan_id = res.data.plan_id;
            console.log(plan_id);
          } else if (res.code == 404) {
            console.log("Can’t access  response" + res +". Blocked by browser?");
          }
        })
        .catch(console.log("Can’t access  response. Blocked by browser?"))
        .done();

      } catch(e){
        console.log (e)
      }
      
    },
    subscription(key){
      console.log(key)
      this.$router.push({
        name: 'contact'
      })
    }
  }
};
</script>
