<template>
<form action="#" class="il-form">
    <div class="il-form--content">
        <div class="il-form--side">
            <div class="il-field--wrapper">
                <label for="name">Nome</label>
                <input id="name" type="text" class="il-input" />
            </div>
        </div>

        <div class="il-form--side">
            <div class="il-field--wrapper">
                <label for="email">Email</label>
                <input id="email" type="email" class="il-input" />
            </div>
        </div>

        <div class="il-form--side">
            <div class="il-field--wrapper">
                <label for="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
            </div>
        </div>

        <div class="il-form--side">
            <div class="il-field--wrapper">
                <label for="fone">Fone</label>
                <input type="fone" name="fone" id="fone" class="il-input" />
            </div>
        </div>

        <div class="il-form--side">
            <div class="il-field--wrapper">
                <input type="submit" name="submit" value="Enviar" id="ilsubmit">
            </div>
        </div>

    </div>
</form>
<!--Formulário de contato--
<form action="#" class="il-form">
    <div class="il-form--content">
        <div class="il-form--side">
            
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
            <div class="il-form--content">
                <div class="il-field--wrapper">
                    <input type="text" name="fname" placeholder="Your Full Name">
                    <input type="text" name="fname" placeholder="Your Phone">
                    <input type="submit" name="submit" value="Send Request" id="jsubmit">
                            </div>
                </div>
</form>-->
</template>

<script>
export default {
    name: "FormContato"
}
</script>
