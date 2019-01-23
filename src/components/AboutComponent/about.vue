<template>
<div class="il-container--wrapper">
    <section id="il-about" class="il-section il-section--about">
        <h1 class="il-section--title il-title--full">
            <!--<i :class="whatIcon"></i>-->Boutique
            <span class="il-color--text__gold">Pilates</span>
        </h1>
    </section>
    <section class="il-section il-section--about__content">
        <div class="il-about--content">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur aspernatur soluta rem. Ipsam.</p>
            <blockquote class="il-color--text__light">
                Equilíbrio perfeito entre corpo e mente é aquela qualidade do homem civilizado, que não somente
                dá a ele
                uma superioridade
                sobre o reino selvagem e animal, mas também provê ao mesmo todos os poderes físicos e mentais
                que são
                indispensáveis
                para atingir o objetivo da humanidade!
            </blockquote>
        </div>
    </section>
</div>
</template>

<script>
export default {
  name: 'About',

  data() {
    return {
      whatIcon: 'il-pilates-icon flaticon-side-bending-posture'
    };
  }
};
</script>
