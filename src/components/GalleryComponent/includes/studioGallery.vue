<template>
<div class="il-gallery">
    <figure :class="`il-gallery--item il-gallery--item__${item.photo}`" v-for="item in gallery" :key="item.photo">
        <img :src="`${item.thumbnail}/kaizen${item.photo}.jpg`" class="il-gallery--img" :alt="`kaizen${item.photo}.jpg`" >
        <span @click="showBigImg(item.photo)" title="Veja outras imagens">{{item.description}}</span>
    </figure>
</div>
</template>

<script>
export default {
  name: 'StudioGallery',

  data() {
    return {
      gallery: [
        {
          type: '',
          caption: 'Kaizen Foto 1',
          thumbnail: '/images/gallery/studio',
          original: '/images/gallery/studio/big',
          name: 'kaizen',
          description: 'vista sala de Pilates',
          photo: '1'
        },
        {
          type: 'il-item--large',
          caption: 'Kaizen Foto 2',
          thumbnail: '/images/gallery/studio',
          original: '/images/gallery/studio/big',
          name: 'kaizen',
          description: 'vista sala CoreAlign',
          photo: '2'
        },
        {
          type: '',
          caption: 'Kaizen Foto3',
          thumbnail: '/images/gallery/studio',
          original: '/images/gallery/studio/big',
          name: 'kaizen',
          description: 'Molas',
          photo: '3'
        },
        {
          type: 'il-item--large',
          caption: 'Kaizen Foto 4',
          thumbnail: '/images/gallery/studio',
          original: '/images/gallery/studio/big',
          name: 'kaizen',
          description: 'CoreAlign',
          photo: '4'
        },
        {
          type: 'il-item--medium',
          caption: 'Kaizen Foto 5',
          thumbnail: '/images/gallery/studio',
          original: '/images/gallery/studio/big',
          name: 'kaizen',
          description: 'Reformers e Konnectors',
          photo: '5'
        },
        {
          type: 'il-item--large',
          caption: 'Kaizen Foto 6',
          thumbnail: '/images/gallery/studio',
          original: '/images/gallery/studio/big',
          name: 'kaizen',
          description: 'CoreAlign',
          photo: '6'
        },
        {
          type: 'il-item--medium',
          caption: 'Kaizen Foto 7',
          thumbnail: '/images/gallery/studio',
          original: '/images/gallery/studio/big',
          name: 'kaizen',
          description: 'Molas',
          photo: '7'
        },
        {
          type: 'il-item--medium',
          caption: 'Kaizen Foto 8',
          thumbnail: '/images/gallery/studio',
          original: '/images/gallery/studio/big',
          name: 'kaizen',
          description: 'Trapézio',
          photo: '8'
        }
      ]
    };
  },

  mounted() {
    this.$parent.title = 'do Studio';
  },

  methods: {
    getBack(photo) {
      let background = `background: url('../images/gallery/studio/gallery-studio-${photo}.jpg')`;
      return background;
    },
    showBigImg(photo) {
      this.$parent.showBigImg(photo);
    }
  }
};
</script>
