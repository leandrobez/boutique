<template>
<div>
    <section class="il-section il-section--submission">
        <div class="il-email--content" v-if="alertOk">
            <div class="il-alert">
                <i class="mdi mdi-24px mdi-checkbox-marked-circle-outline"></i>
                <p>
                    Obrigado pelo seu email!<br>Em breve entraremos em contato.
                </p>
            </div>
        </div>
        <div class="il-email--content" v-else>
            <div class="il-alert">
                <i class="mdi mdi-24px mdi-alert-octagon"></i>
                <p>
                    O envio de seu email não teve sucesso.
                </p>
            </div>  
        </div>
    </section>
    <!--<section class="il-bars">
        <div class="il-bars--items"></div>
        <div class="il-bars--items"></div>
        <div class="il-bars--items"></div>
        <div class="il-bars--items"></div>
        <div class="il-bars--items"></div>
        <div class="il-bars--items"></div>
        <div class="il-bars--items"></div>
        <div class="il-bars--items"></div>
        <div class="il-bars--items"></div>
        <div class="il-bars--items"></div>
        <div class="il-bars--items"></div>
        <div class="il-bars--items"></div>
    </section>-->
</div>
</template>

<script>
export default {
    name: 'Submission',
    computed: {
        
    },
    mounted() {
        this.getParam()
        this.animateBars()
    },
    data () {
        return {
            alertOk: ''
        }
    },

    methods: {
        getParam () {
            let type = this.$route.params.type
            if (type=='success') {
               this.alertOk = true
            } else {
                this.alertOk = false
            }
            return
        },
        animateBars () {
            let bars = document.querySelectorAll('.il-bars--items')
            let interacte = 0
            const delay = time => new Promise(resolve => {
                setTimeout(resolve,time);
            })
            
            bars.forEach(bar => {
                delay(0).then( () => {
                    setTimeout( () => { 
                        bar.style.width       = '97%'
                        bar.style.borderRight = '1px solid beige'
                    }, interacte += 120)
                })

                delay(300).then( () => {
                    setTimeout( () => {
                        bar.style.width       = '100%'
                        bar.style.height      = '100vh'
                        bar.style.transform   = 'translate(65vw, -75vh) rotate(45deg)'
                    }, interacte += 120)
                })
            });
  
        }
    }

}
</script>