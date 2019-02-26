<template>
<!--SECTION HOME-->
<section id="il-home" class="il-section il-section--home">
    <div class="il-container--wrapper">
        <h1 class="il-section--title">Bem <span class="il-color--text__very-light">Vindo!</span></h1>
        <h2 class="il-section--sub-title">Somos a <b>{{$parent.title}}</b></h2>
        <div class="il-icons">
            <a href="#" class="il-icons--link" title="Visite a rede social" @click="socialNetOpen('fb')"><i class="mdi mdi-facebook mdi-48px"></i></a>
            <a href="#" class="il-icons--link" title="Visite a rede social" @click="socialNetOpen('in')"><i class="mdi mdi-instagram mdi-48px"></i></a>
            <a href="#" class="il-icons--link" title="Visite a rede social" @click="socialNetOpen('go')"><i class="mdi mdi-git mdi-48px"></i></a>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: "Home",
    
    data() {
        return {
            whatIcon: "il-pilates-icon flaticon-precision-posture"
        }
    },

    methods: {
        socialNetOpen (path) {
            let w = 626, h = 436;
            let urlFb = 'https://www.facebook.com/BusqueFilme/?ref=bookmarks'
            let urlFbShare = 'https://www.facebook.com/sharer/sharer.php?u='
            let urlIn = 'http://instagram.com/claumuraguti?ref=badge'
            let urlGo = 'https://plus.google.com/u/0/114144280855980132006'
            switch(path){
                case 'fb':
                    window.open(urlFbShare + encodeURIComponent(urlFb),"fb-follow",`"width=${w},height=${h}"`)
                    break
                case 'in':
                    window.open(urlIn,"instagram-share-dialog",`"width=${w},height=${h}"`)
                    break
                case 'go':
                    window.open(urlGo,"google-share-dialog",`"width=${w},height=${h}"`)
                    break
            }
        }
    }
}
</script>
