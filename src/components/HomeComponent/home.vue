<template>
<!--SECTION HOME-->
<section id="il-home" class="il-section il-section--home">
    <div class="il-container--wrapper">
        <h1 class="il-section--title">Bem <span class="il-color--text__very-light">Vindo! a  <b>{{$parent.title}}</b></span></h1>
        <h2 class="il-section--sub-title">Somos especialistas em Pilates e CoreAlign.</h2>
        <div class="il-home--content">
            <p class="il-weight">Seu rendimento nas atividades diárias é prejudicado por dores musculares?<br>Percebe que sua postura não é como você gostaria que fosse?<br> Gostaria de fazer atividade física mas não consegue criar um vínculo?<br> Então conheça nosso principal método que será seu aliado permanente na busca por uma melhor qualidade de vida, eliminando assim essas dores inconvenientes.<br>Quer saber mais? Não perca tempo faça contato agora ou use o nosso whatsApp.</p>
            <ilLanding />
            <h3>Nossa Localização</h3>
            <ilAddress />
        </div>
        <div class="il-icons">
            <a href="#" class="il-icons--link" title="Contate pelo whatsapp" @click="socialNetOpen('wap')"><i class="mdi mdi-whatsapp mdi-48px"></i></a>
            <a href="#" class="il-icons--link" title="Visite a rede social" @click="socialNetOpen('fb')"><i class="mdi mdi-facebook mdi-48px"></i></a>
            <a href="#" class="il-icons--link" title="Visite a rede social" @click="socialNetOpen('in')"><i class="mdi mdi-instagram mdi-48px"></i></a>
            <!--<a href="#" class="il-icons--link" title="Visite a rede social" @click="socialNetOpen('go')"><i class="mdi mdi-git mdi-48px"></i></a>-->
        </div>
    </div>
</section>
</template>

<script>
import ilAddress from "./includes/address.vue";
import ilLanding from "./includes/landing.vue";
export default {
  name: "Home",
  components: {
    ilAddress,
    ilLanding
  },
  data() {
    return {
      whatIcon: "il-pilates-icon flaticon-precision-posture",

      geometry: {}
    };
  },

  methods: {
    openMap() {
      //let address = "Av Lavras 334, Bairro Petrópolis, Porto Alegre - RS";
      /*map.create.geocode({ address }, (err, response) => {
                    if (!err) {
                      //console.log(response.json);
                      this.geometry = response.json.results[0].geometry;
                      this.load();
                    }
                  });*/
      //var map = map.load();
      //console.log(map.load());
    },
    socialNetOpen(path) {
      let w = 626,
        h = 436;
      let urlFb = "https://www.facebook.com/BusqueFilme/?ref=bookmarks";
      let urlFbShare = "https://www.facebook.com/sharer/sharer.php?u=";
      let urlIn = "http://instagram.com/claumuraguti?ref=badge";
      let urlGo = "https://plus.google.com/u/0/114144280855980132006";
      let urlWap = "https://api.whatsapp.com/send?phone=5551999767179";
      switch (path) {
        case "wap":
          window.open(
            urlWap,
            "whatsapp-share-dialog",
            `"width=${w},height=${h}"`
          );
          break;
        case "fb":
          window.open(
            urlFbShare + encodeURIComponent(urlFb),
            "fb-follow",
            `"width=${w},height=${h}"`
          );
          break;
        case "in":
          window.open(
            urlIn,
            "instagram-share-dialog",
            `"width=${w},height=${h}"`
          );
          break;
        case "go":
          window.open(urlGo, "google-share-dialog", `"width=${w},height=${h}"`);
          break;
      }
    }
  }
};
</script>
