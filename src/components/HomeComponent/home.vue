<template>
<div>
    <!--SECTION HOME-->
    <section id="il-home" class="il-section il-section--home">
        <div class="il-container--wrapper">

            <h1 class="il-section--title"><!--<i :class="whatIcon"></i>-->Claudia <span class="il-color--text__gold">Muraguti</span></h1>
            <h2 class="il-section--sub-title">Educadora Physio Pilates, Master Trainer CoreAlign, Educadora
                Física</h2>
            <!--<h3 class="il-section--sm-title il-color--text__gold">Proprietária da Boutique Pilates e CoreAlign</h3>-->
            <p class="il-section--description il-color--text__gold">Palestrante e Instrutora.</p>
            <div class="il-icons">
                <a href="#" class="il-icons--link"><i class="mdi mdi-facebook mdi-48px"></i></a>
                <a href="#" class="il-icons--link"><i class="mdi mdi-instagram mdi-48px"></i></a>
                <a href="#" class="il-icons--link"><i class="mdi mdi-git mdi-48px"></i></a>
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
}
</script>
