<template>
    <section class="il-section il-section--about">
        <div class="il-container--wrapper">
        <h1 class="il-section--title il-title--full">{{$parent.titleCompost.title}}
            <span class="il-color--text__very-light">{{$parent.titleCompost.subTitle}}</span>
        </h1>
        <h2 class="il-section--sub-title il-color--text__very-light text-right">E assim dizia Pilates:</h2>

        <div class="il-about--content">
            <div class="il-box il-color--background__clean">
                <p class="il-color--text__accent il-content--description">Equilíbrio perfeito entre corpo e mente é aquela qualidade do homem civilizado, que não somente dá a ele uma superioridade sobre o reino selvagem e animal, mas também provê ao mesmo todos os poderes físicos e mentais que são indispensáveis para atingir o objetivo da humanidade!.</p>
            </div>
        </div>
        <h2 class="il-section--sub-title il-color--text__very-light text-right">Temos como missão:</h2>
        <div class="il-about--content">
            <div class="il-box--items">
                <div class="il-item il-color--background__clean il-box">
                    <i class="il-pilates-icon flaticon-exercises-with-body-arc"></i>
                    <p class="il-color--text__accent">
                        
                        Potencializar as qualidades físicas individuais do aluno tendo como base os princípios do pilates.
                    </p>
                </div>
                <div class="il-item il-color--background__clean il-box">
                    <i class="il-pilates-icon flaticon-breath-position"></i>
                    <p class="il-color--text__accent">
                        
                        Primar pela busca de uma postura mais equilibrada através do fortalecimento da musculatura profunda com a finalidade precípua de melhorar a qualidade de vida do indivíduo.
                    </p>
                </div>
            </div>
        </div>
        </div>
    </section>

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
