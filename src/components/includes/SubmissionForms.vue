<template>
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
</template>

<script>
export default {
    name: 'Submission',
    computed: {
        
    },
    mounted() {
        this.getParam()
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
        }
    }

}
</script>