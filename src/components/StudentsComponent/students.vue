<template>
<div class="il-container--wrapper">
    <section id="il-student" class="il-section il-section--studen">
        <h1 class="il-section--title">
            <!--<i :class="whatIcon"></i>-->Os <span class="il-color--text__gold">Alunos</span></h1>
        <h2 class="il-section--sub-title">Tudo isso é para eles</h2>
    </section>
    <section class="il-section il-section--about__content">
        <div class="il-space--content il-color--background__verylight">
            <h3 class="il-section--title__small il-color--text__dark">Vocês são os protagonistas</h3>
            <p class="il-color--text__dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, repellat hic. In eligendi rerum fuga soluta ipsam facere quam, architecto vel repellendus ducimus modi accusantium nostrum saepe dolorum ratione. Accusamus?.</p>
        </div>
    </section>
</div>
</template>

<script>
export default {
    name: "Student",

    data() {
        return {
            whatIcon: "il-pilates-icon flaticon-exercises-with-reformer"
        }
    },
}
</script>
