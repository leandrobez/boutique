<template>
<div class="il-container--wrapper">
    <section id="il-advantage" class="il-section il-section--advantages">
        <h1 class="il-section--title">
            <!--<i :class="whatIcon"></i>-->As <span class="il-color--text__gold">Vantagens</span></h1>
        <h2 class="il-section--sub-title">Nossos diferencias falam por si só</h2>
    </section>
    <section class="il-section il-section--class__content">
        
        <div class="il-class--items">
            <ul class="il-advantage--list">
                <li><span>1item</span></li>
                <li><span>2item</span></li>
                <li><span>3item</span></li>
                <li><span>4item</span></li>
            </ul>
        </div>
    </section>
</div>
</template>

<script>
export default {
    name: "Advantage",

    data() {
        return {
            whatIcon: "il-pilates-icon flaticon-pilates-equipment"
        }
    },
}
</script>
