<template>
<div>
    <!--SECTION HOME-->
    <section id="il-home" class="il-section il-section--home">
        <div class="il-container--wrapper">

            <h1 class="il-section--title"><!--<i :class="whatIcon"></i>-->Claudia <span class="il-color--text__very-light">Muraguti</span></h1>
            <h2 class="il-section--sub-title">Educadora Physio Pilates, Master Trainer CoreAlign, Educadora
                Física</h2>
            <!--<h3 class="il-section--sm-title il-color--text__gold">Proprietária da Boutique Pilates e CoreAlign</h3>-->
            <p class="il-section--description il-color--text__very-light">Palestrante e Instrutora.</p>
            <div class="il-icons">
                <a href="#" class="il-icons--link" title="Visite a rede social" @click="socialNetOpen('fb')"><i class="mdi mdi-facebook mdi-48px"></i></a>
                <a href="#" class="il-icons--link" title="Visite a rede social" @click="socialNetOpen('in')"><i class="mdi mdi-instagram mdi-48px"></i></a>
                <a href="#" class="il-icons--link" title="Visite a rede social" @click="socialNetOpen('go')"><i class="mdi mdi-git mdi-48px"></i></a>
            </div>

        </div>
    </section>
</div>
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
