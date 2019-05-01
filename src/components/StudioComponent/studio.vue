<template>
<section id="il-space" class="il-section il-section--space">
    <div class="il-container--wrapper">
        <h1 class="il-section--title">O <span class="il-color--text__very-light">Studio</span></h1>
        <h2 class="il-section--sub-title il-color--text__very-light text-right">{{$parent.title}}</h2>
        <div class="il-space--content">
            <div class="il-box--items">
                <div class="il-item il-box il-color--background__lighten">
                  <i class="il-pilates-icon flaticon-exercises-with-body-arc light"></i>
                  <p class="il-content--description il-color--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nostrum sint esse culpa repudiandae earum vero. A, magnam voluptatibus. Sunt, ex laboriosam maxime ratione, eligendi reiciendis similique aliquam voluptas qui ad aliquid. Debitis voluptatibus accusantium praesentium rem pariatur quasi. Error at dicta enim asperiores vero.</p>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import { animeStudio } from '../../common/animation';
export default {
  name: 'Studio',

  data() {
    return {
      whatIcon: 'il-pilates-icon flaticon-pilates-reformer'
    };
  },
  mounted() {
    this.startAnime();
  },
  mixins: [animeStudio]
};
</script>
