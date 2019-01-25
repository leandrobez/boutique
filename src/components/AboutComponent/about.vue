<template>
<div class="il-container--wrapper">
    <section id="il-about" class="il-section il-section--about">
        <h1 class="il-section--title il-title--full">
            <!--<i :class="whatIcon"></i>-->Boutique
            <span class="il-color--text__gold">Pilates</span>
        </h1>
        <h2 class="il-section--sub-title">E assim dizia Pilates:</h2>
    
        <div class="il-about--content il-color--background__verylight">
            <p class="il-color--text__dark"> Equilíbrio perfeito entre corpo e mente é aquela qualidade do homem civilizado, que não somente dá a ele uma superioridade sobre o reino selvagem e animal, mas também provê ao mesmo todos os poderes físicos e mentais que são indispensáveis para atingir o objetivo da humanidade!.</p>
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
