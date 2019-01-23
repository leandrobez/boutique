<template>
<div class="il-container--wrapper">
    <section id="il-class" class="il-section il-section--class">
        <h1 class="il-section--title il-title--full">
            <!--<i :class="whatIcon"></i>-->As
            <span class="il-color--text__gold">Aulas</span>
        </h1>
        <h2 class="il-section--sub-title">Venha fazer uma aula com a gente.</h2>
    </section>
    <section class="il-section il-section--about__content">
        <div class="il-space--content il-color--background__verylight">
            <h3 class="il-section--title__small il-color--text__dark">Olá!</h3>
            <p class="il-color--text__dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, repellat hic. In eligendi rerum fuga soluta ipsam facere quam, architecto vel repellendus ducimus modi accusantium nostrum saepe dolorum ratione. Accusamus?.</p>
        </div>
    </section>
</div>
</template>

<script>
export default {
  name: 'Class',

  data() {
    return {
      whatIcon: 'il-pilates-icon flaticon-exercises-with-chair'
    };
  }
};
</script>
