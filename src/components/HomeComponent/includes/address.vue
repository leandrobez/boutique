<template>
<div>
  <div class="il-home--address">
    <p class="il-weight il-color--text__dark"><i class="mdi mdi-phone mdi-12px"></i>{{phone.ddd}} {{phone.number}}</p>
    <p class="il-weight il-color--text__dark"><i class="mdi mdi-map mdi-12px"></i>{{kayzenAddress}}</p>
    <p class="il-weight il-color--text__dark"><i class="mdi mdi-earth mdi-12px"></i>Porto Alegre - RS</p>
    <p class="il-weight il-color--text__dark"><i class="mdi mdi-email-variant mdi-12px"></i>contato@kaizenpilates.com</p>
    <p class="il-weight il-color--text__dark"><i class="mdi mdi-map-marker-radius mdi-12px" ></i><a href="#!" @click.prevent="loadMap()" :class="isDisabled" >veja o mapa</a></p>
    <div class="il-clock" v-show="showLoad"></div>
</div>
<ilMap v-if="checkShowMap" :show="showMap" />
</div>
</template>

<script>
import ilMap from './map.vue';
export default {
  name: 'localization',
  components: {
    ilMap
  },
  mounted() {
    this.createScript();
  },
  data() {
    return {
      kayzenAddress: 'Av Lavras 334, Bairro Petrópolis, Porto Alegre - RS',
      phone: {
        ddd: '51',
        number: '99999-9999'
      },
      showMap: false,
      showLoad: false
    };
  },
  computed: {
    checkShowMap() {
      if (this.showMap) {
        return true;
      }
      return false;
    },
    isDisabled() {
      if (this.showMap) {
        return 'isDisabled';
      } else {
        return '';
      }
    }
  },
  methods: {
    removeScript(filename) {
      var tags = document.getElementsByTagName('script');
      for (var i = tags.length; i >= 0; i--) {
        if (
          tags[i] &&
          tags[i].getAttribute('src') != null &&
          tags[i].getAttribute('src').indexOf(filename) != -1
        )
          tags[i].parentNode.removeChild(tags[i]);
      }
    },
    createScript() {
      this.showMap = false;
      const key = 'AIzaSyBJ9usSMvev68rfDKlnHPsJbsRoSL2tZqQ';
      require('@google/maps').createClient({
        key: key
      });

      let googleMapScript = document.createElement('SCRIPT');
      if (typeof window === 'undefined') {
        // Do nothing if run from server-side
        return Promise.resolve();
      }
      if (!window.google || !window.google.map) {
        var options = {};
        if (typeof key === 'string') {
          options.key = key;
        } else {
          if (typeof key === 'object') {
            for (let k in key) {
              // transfer values in apiKey to options
              options[k] = key[k];
            }
          }
        }
      } else {
        throw new Error('`key` should either be a string or an object');
      }

      const baseUrl = 'https://maps.googleapis.com';
      const urlParams = Object.keys(options)
        .map(
          key =>
            `${encodeURIComponent(key)}=${encodeURIComponent(options[key])}`
        )
        .join('&');
      let url = `${baseUrl}/maps/api/js?${urlParams}`;
      this.removeScript(url);
      googleMapScript.setAttribute('src', url);
      googleMapScript.setAttribute('async', '');
      googleMapScript.setAttribute('defer', '');
      document.body.appendChild(googleMapScript);
    },
    loadMap() {
      this.showLoad = true;
      setTimeout(() => {
        this.showLoad = false;
        this.showMap = true;
      }, 3000);
    }
  }
};
</script>
