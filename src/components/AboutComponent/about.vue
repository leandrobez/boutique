<template>
    <section class="il-section il-section--about">
        <div class="il-container--wrapper">
        <h1 class="il-section--title il-title--full">{{$parent.titleCompost.title}}
            <span class="il-color--text__very-light">{{$parent.titleCompost.subTitle}}</span>
        </h1>
        <h2 class="il-section--sub-title il-color--text__very-light text-right">Temos como missão:</h2>
        <div class="il-about--content">
            <div class="il-box--items">
                <div class="il-item il-box il-color--background__dark">
                    <i class="il-pilates-icon flaticon-exercises-with-body-arc light"></i>
                    <p class="il-color--text__gold">Potencializar as qualidades físicas individuais do aluno tendo como base os princípios do pilates.
                    </p>
                </div>
                <div class="il-item il-box il-color--background__dark">
                    <i class="il-pilates-icon flaticon-breath-position light"></i>
                    <p class="il-color--text__gold">
                        
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
