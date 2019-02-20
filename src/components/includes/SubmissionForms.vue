<template>
<div>
    <section class="il-section il-section--about">
        <div class="il-container--wrapper" v-if="alertOk">
            <div class="il-alert il-alert--success">
                <p>
                    <i class="mdi mdi-24px mdi-checkbox-marked-circle-outline"></i>
                    Obrigado pelo seu email. Em breve entraremos em contato.</p>
            </div>
        </div>
        <div class="il-container--wrapper" v-else>
            <div class="il-alert il-alert--warning">
                <p>
                    <i class="mdi mdi-24px mdi-alert-octagon"></i>
                    O envio de seu email não teve sucesso.</p>
            </div>  
        </div>
    </section>
    <section class="il-bars">
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
    </section>
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
            bars.forEach(bar => {
                bar.style.width       = '97%'
                bar.style.borderRight = '1px solid beige'
                bar.style.width       = '100%'
                bar.style.height      = '100vh'
                bar.style.transform   = 'translate(65vw, -75vh) rotate(45deg)'
            });
  
        }
    }

}
</script>