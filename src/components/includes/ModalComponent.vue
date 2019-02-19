<template>
<!--MODAL-->
<section :class="active" v-if="activeModal">
    <!--modal-->
    <div id="il-modal" class="il-modal">
        <div class="il-forms">
            <a href="#" class="il-modal--close">X</a>
            <h3>Fale com a gente</h3>
            <form name="contact" method="POST" data-netlify="true" class="il-form" data-netlify-honeypot="bot-field">
                <div class="il-form--fields">
                    <input type="text" id="name" class="il-input" name="name" placeholder="Seu nome">
                    <input type="text" id="lastname" class="il-input" name="lastname" placeholder="Seu sobrenome">
                    <input type="email" id="email" class="il-input" name="email" placeholder="Seu email">
                    <input type="tel" id="phone" class="il-input" name="phone" placeholder="(xx) xxxx-xxxx">
                    <input type="tel" id="mobil" class="il-input" name="mobil" placeholder="(xx) xxxx-xxxx">
                    <select name="frowhere" id="frowhere" class="il-select">
                      <option value="fromfriends" selected>Meus amigos me indicaram</option>
                      <option value="fromface">Conheci a página no facebook</option>
                      <option value="fromemail">Recebi um email convidando</option>
                      <option value="fromcards">Li num encarte</option>
                  </select>
                  <input type="hidden" name="form-name" value="contact" />
                </div>
                <button class="il-btn il-btn--submit">Enviar</button>
            </form>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: 'Modal',
    data() {
        return {
        }
    },
    computed: {
        activeModal() {
            if (this.$parent.showModal) {
                this.active =
                    'il-section il-section--modal il-color--background__modal il-section--modal__active';
                return true;
            }
            this.active = 'il-section il-section--modal il-color--background__modal';
            return false;
        }
    },

    data() {
        return {
            active: 'il-section il-section--modal il-color--background__modal'
        };
    },

    methods: {
        _activeModal() {
            /*const modal = document.querySelector('.il-section--modal');
                        modal.classList.add('il-section--modal__active')
                        console.log(modal)
                        return this.active;
                        /*let rota = this.$route.name;
                        if (rota == 'home' && this.active !="il-section--modal__no-active") {

                            setTimeout( () => {
                                this.active = "il-section--modal__active"                 
                                this.$parent.modal.title = "Aula Experimental";
                                this.$parent.modal.content = "Não perca tempo! Agende um aula experimental grátis. Clique no botão e faça uma ligação no telefone 32311661";
                                this.$parent.modal.footer = "";

                            }, 4000);
                            return this.active;
                        }*/
        },

        closeModal() {
            this.$parent.modal.title = '';
            this.$parent.modal.content = '';
            this.active = 'il-section il-section--modal il-color--background__modal';
            this.$parent.showModal = false;
        }
    }
};
</script>
