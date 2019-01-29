<template>

<div class="il-container--wrapper">
    <section class="il-section">
        <h1 class="il-section--title">Fotos
            <span class="il-color--text__gold"> {{title}}</span>
        </h1>
        <!--studios' gallery or events'gallery-->
        <RouterView />
    </section>

</div>
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
