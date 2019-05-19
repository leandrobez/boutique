<template>
<div :class="`il-plan il-plan--${id} il-color--background__lightgray`">
    <h2 class="il-color--text__dark">{{condicions}} X Semana</h2>
    <p class="il-price il-color--text__accent">R$ {{price}},00 <span>por mês</span></p>
    <!--
      <p class="il-description il-color--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita molestiae nisi vel placeat, corrupti fuga assumenda non dolor cupiditate aperiam.</p>
    -->
    <a href="#!" @click.prevent="newPlan(id)" class="il-btn il-btn--cards button">Inscreva-se</a>
</div>
</template>

<script>
//import axios from "axios";
var Gerencianet = require("gn-api-sdk-node");
import anime from "animejs";
import gatewayGerencianet from "../../../common/gerencianet.js";
export default {
  name: "classCards",
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
        targets: ".il-plan--1",
        easing: "easeInOutQuad"
      });
      showAnime.add({
        opacity: ["0", "1"],
        duration: init
      });
      showAnime.add({
        targets: ".il-plan--2",
        opacity: ["0", "1"],
        duration: init + include
      });
      showAnime.add({
        targets: ".il-plan--3",
        opacity: ["0", "1"],
        duration: init + 2 * include
      });
    },
    newPlan(key) {
      let options = gatewayGerencianet.access.dev;
      let plans = gatewayGerencianet.plans;
      let gateway = new Gerencianet(options);
      let params = {};
      //console.log(gateway);
      /*const axiosConfig = {
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      };*/
      //GET https://api.codetabs.com/v1/proxy?quest=<url_to_http_resource>
      gateway
        .createPlan(params, plans[key - 1].plan)
        .then(res => {
          if (res.code == 200) {
            let plan_id = res.data.plan_id;
            console.log(plan_id);
          } else if (res.code == 404) {
            console.log(res);
          }
        })
        .catch(console.log)
        .done();
    }
  }
};
</script>
