<template>
<!--MODAL-->
<section class="il-section il-section--modal il-color--background__modal" :class="activeModal()">
    <!--modal-->
    <div id="il-modal" class="il-modal">
        <div class="il-modal--dialog">
            <div class="il-modal--content">

                <div class="il-modal--body">
                    <h4 class="il-modal--title">{{$parent.modal.title}}</h4>
                    <p>{{$parent.modal.content}}</p>
                </div>
                <div class="il-modal--footer">
                    <span>{{$parent.modal.footer}}</span>
                </div>
            </div>

            <!-- modal close button -->
            <a href="#" @click.prevent="closeModal()" class="il-modal--close"><svg class="" viewBox="0 0 24 24"><path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"/><path d="M0 0h24v24h-24z" fill="none"/></svg></a>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: 'Modal',

    data() {
        return {
            active: ''
        }
    },

    methods: {
        activeModal() {
            let rota = this.$route.name;
            if (rota == 'home' && this.active !="il-section--modal__no-active") {
               
                setTimeout( () => {
                    this.active = "il-section--modal__active"                 
                    this.$parent.modal.title = "Aula Experimental";
                    this.$parent.modal.content = "Não perca tempo! Agende um aula experimental grátis. Clique no botão e faça uma ligação no telefone 32311661";
                    this.$parent.modal.footer = "";
                    
                }, 4000);
                return this.active;
            }
        },

        closeModal(){
            this.active = 'il-section--modal__no-active'
        }
    }
};
</script>
