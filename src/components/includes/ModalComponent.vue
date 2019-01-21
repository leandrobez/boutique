<template>
<!--MODAL-->
<section id="il-modal" class="il-section il-section--modal il-color--background__modal">
    <div class="il-modal--content">
        <div class="il-modal--caption">
            <h2 class="il-section-sub--title il-color--text__dark">Entre em contato</h2>
            <i class="mdi mdi-close mdi-24px il-color--text__dark" id="il-closeModal"></i>
        </div>
        <div class="il-modal--body">
            <!--Formulário de contato-->
            <form action="#" class="il-form">
                <div class="il-form--content">
                    <div class="il-form--side">
                        <div class="il-field--wrapper">
                            <label for="name">Nome</label>
                            <input id="name" type="text" class="il-input">
                                </div>

                            <div class="il-field--wrapper">
                                <label for="email">Email</label>
                                <input id="email" type="email" class="il-input">
                                </div>

                                <div class="il-field--wrapper">
                                    <label for="message">Mensagem</label>
                                    <textarea name="message" id="message" cols="30" rows="10" class="il-input--message"></textarea>
                                </div>
                            </div>
                            <div class="il-form--side il-info">
                                <div class="il-address">
                                    <div class="il-location">
                                        <span>Address:</span>
                                        <span>2322 Street Burger, Grisy, TN 988989-000</span>
                                    </div>

                                    <div class="il-contacts">
                                        <span>Phone:</span>
                                        <span>+55 51 090900-8989</span>
                                    </div>

                                    <div class="il-email">
                                        <span>Email:</span>
                                        <span>xyz@gfgf.io</span>
                                    </div>
                                </div>
                            </div>
                        </div>
            </form>
        </div>
        <!--newsletter-->
        <div class="il-modal--footer">
            <form action="#" class="il-form">
                <div class="il-form--content">
                    <div class="il-field--wrapper">
                        <input type="text" name="fname" placeholder="Your Full Name">
                        <input type="text" name="fname" placeholder="Your Phone">
                        <input type="submit" name="submit" value="Send Request" id="jsubmit">
                            </div>
                    </div>
            </form>
        </div>

    </div>
</section>
</template>

<script>
export default {
    name: "Modal"
}
</script>
