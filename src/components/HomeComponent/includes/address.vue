<template>
<div>
    <div class="il-home--address">
        <p class="il-weight il-color--text__dark"><i class="mdi mdi-map mdi-12px"></i>{{kayzenAddress}}, {{kayzenCity}}</p>
        <p class="il-weight il-color--text__dark"><i class="mdi mdi-phone mdi-12px"></i>{{phone.ddd}} {{phone.number}}</p>
        <p class="il-weight il-color--text__dark"><i class="mdi mdi-cellphone-iphone mdi-12px"></i>{{mobil.ddd}} {{mobil.number}}</p>
        <p class="il-weight il-color--text__dark"><i class="mdi mdi-earth mdi-12px"></i>{{kayzenCity}}</p>
        <p class="il-weight il-color--text__dark"><i class="mdi mdi-email-variant mdi-12px"></i>{{kayzenEmail}}</p>
        <p class="il-weight il-color--text__dark"><i class="mdi mdi-map-marker-radius mdi-12px"></i><a href="#!" class="il-color--text__red" @click.prevent="loadMap()" :class="isDisabled">veja o mapa</a></p>
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
            kayzenAddress: 'Av Lavras 334, Bairro Petrópolis, Sala 702, CEP - 90460-040',
            kayzenCity: 'Porto Alegre - RS',
            kayzenEmail: 'contato@kaizenpilates.com',
            phone: {
                ddd: '51',
                number: '3519-3339'
            },
            mobil: {
                ddd: '51',
                number: '99301-5930'
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
            let check = false
            var tags = document.getElementsByTagName('script')
            for (var i = tags.length; i >= 0; i--) {

                if (
                    tags[i] &&
                    tags[i].getAttribute('src') != null &&
                    tags[i].getAttribute('src').indexOf(filename) != -1
                ) {
                    check = true
                    tags[i].parentNode.removeChild(tags[i])
                }
            }
            return check
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
            if (!this.removeScript(url)) {
                googleMapScript.setAttribute('src', url);
                googleMapScript.setAttribute('async', '');
                googleMapScript.setAttribute('defer', '');
                document.body.appendChild(googleMapScript);
            }
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
