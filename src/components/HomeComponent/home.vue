<template>
<!--SECTION HOME-->
<section class="il-section il-section--home">
    <div class="il-container--wrapper">
        <h1 class="il-section--title">Bem Vindo a <br>{{$parent.titleCompost.title}}
            <span class="il-color--text__dark">{{$parent.titleCompost.title1}} e </span> <span class="il-color--text__red">{{$parent.titleCompost.subTitle}}</span>
        </h1>
        <h2 class="il-section--sub-title">Somos especialistas em Pilates e <span class="il-color--text__red">CoreAlign</span>.</h2>
        <div class="il-home--content">
            <p class="il-content--description il-color--text__alt">Olá! Você quer melhorar sua saúde reduzindo dores musculares?<br>Você sabia que com a melhora da postura pode-se alcançar esse objetivo?<br>Gostaria de fazer uma atividade física apaixonante que queime muitas calorias?<br>Então conheça as novidades que a {{$parent.title}} trouxe para o <span class="tooltip">
              <a class="il-hints" id="konnector-picture" href="#!" >pilates</a>
            <span class="tooltiptext">
              <picture id="konnector">
                    <img :src="thumbs.konnector" alt="Konnector" title="Konnector">
                </picture>
              </span>
              </span>
                <!--colocar link sobr konnector--> e o <span class="tooltip">
              <a class="il-hints" id="corealign-picture" href="#!" >corealign</a>
              <span class="tooltiptext">
              <picture id="corealign">
                    <img :src="thumbs.corealign" alt="CoreAlign" title="CoreAlign">
                </picture>
              </span>
              </span>.<br><b>Quer saber mais</b> ? Entre em contato através do nosso <a class="il-color--text__dark il-link--decoration" href="#!" @click.prevent="socialNetOpen('wap')" title="Entra em contato através do whatsApp">whatsApp</a> ou mande uma <router-link :to="{name:'contact'}" class="il-color--text__dark il-link--decoration">mensagem</router-link>.</p>
                <h3>Nossa Localização</h3>
                <ilAddress />
        </div>
        <div class="il-icons">
            <a href="#" class="il-icons--link il-color--text__alt" title="Contate pelo whatsapp" @click="socialNetOpen('wap')"><i class="mdi mdi-whatsapp mdi-36px"></i></a>
            <a href="#" class="il-icons--link il-color--text__alt" title="Visite a rede social" @click="socialNetOpen('fb')"><i class="mdi mdi-facebook mdi-36px"></i></a>
            <a href="#" class="il-icons--link il-color--text__alt" title="Visite a rede social" @click="socialNetOpen('in')"><i class="mdi mdi-instagram mdi-36px"></i></a>
        </div>
    </div>
    <ilPopUp />
</section>
</template>

<script>
import ilAddress from './includes/address.vue';
import ilPopUp from './includes/popup.vue';
export default {
  name: 'Home',
  components: {
    ilAddress,
    ilPopUp
  },
  data() {
    return {
      whatIcon: 'il-pilates-icon flaticon-precision-posture',
      thumbs: {
        konnector: 'images/banners/thumbs/konnector.jpg',
        corealign: 'images/banners/thumbs/corealign.jpg'
      }
    };
  },

  methods: {
    socialNetOpen(path) {
      let w = 626,
        h = 436;
      let urlFb =
        'https://www.facebook.com/kaizenpilatescorealign/?ref=bookmarks';
      let urlFbShare = 'https://www.facebook.com/sharer/sharer.php?u=';
      let urlIn = 'http://instagram.com/pilateskaizen?ref=badge';
      let urlGo = 'https://plus.google.com/u/0/114144280855980132006';
      let urlWap = 'https://api.whatsapp.com/send?phone=5551993015930';
      switch (path) {
        case 'wap':
          window.open(
            urlWap,
            'whatsapp-share-dialog',
            `"width=${w},height=${h}"`
          );
          break;
        case 'fb':
          window.open(
            urlFbShare + encodeURIComponent(urlFb),
            'fb-follow',
            `"width=${w},height=${h}"`
          );
          break;
        case 'in':
          window.open(
            urlIn,
            'instagram-share-dialog',
            `"width=${w},height=${h}"`
          );
          break;
        case 'go':
          window.open(urlGo, 'google-share-dialog', `"width=${w},height=${h}"`);
          break;
      }
    }
  }
};
</script>

<style scoped>
section.il-section--home {
  position: relative;
}
</style>
