<template>
<section id="il-gallery" class="il-section il-section--gallery">
  <div class="il-container--wrapper">
        <!--studios' gallery or events'gallery-->
        <div class="il-header--box">
          <!--<i class="il-pilates-icon flaticon-exercises-with-chair"></i>-->
          <h4 class="il-section--sub-title il-color--text__light text-left">{{title}}</h4>
        </div>
        <RouterView />
  </div>
</section>
</template>

<script>
export default {
  name: 'StudioGallery',

  data() {
    return {
      title: ''
    };
  },

  methods: {}
};
</script>
