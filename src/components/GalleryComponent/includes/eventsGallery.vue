<template>
<div>
    <div id="il-photos" class="il-photos" :data="getGallery">
        <div v-for="item in gallery" :key="item.photo">
            <img src="https://picsum.photos/600/600/?image=512" alt="">
            <a :href="`#lightbox-${item.photo}`">{{item.caption}}</a>
        </div>
    </div>
    <div v-for="(item, index) in gallery" :key="index" class="lightbox" :id="`lightbox-${item.photo}`">
        <div class="content">
            <img src="https://picsum.photos/1920/1080/?image=512"/>
            <div class="title">No. <b>512</b> from Picsum</div>
            <a class="close" href="#il-photos"></a>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'EventsGallery',

  data() {
    return {
      gallery: []
    };
  },

  mounted() {
    this.$parent.title = 'Eventos';
  },
  computed: {
    getGallery() {
      this.setGallery()
      return true
    }
  },
  methods: {
    setGallery(){
      let gallery = this.$parent.eventos;
      this.gallery = gallery
    },
    getBack(photo) {
      let background = `background: url('../images/gallery/gallery-studio-${photo}.jpg')`;
      return background;
    }
  }
};
</script>
