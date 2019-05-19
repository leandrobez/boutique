<template>
<div class="il-gallery">
    <figure :class="`il-gallery--item il-gallery--item__${item.photo}`" v-for="item in gallery" :key="item.photo">
        <img :src="`${item.thumbnail}/kaizen${item.photo}.jpg`" class="il-gallery--img" :title="item.description" :alt="`kaizen${item.photo}.jpg`">
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
          original: 'images/gallery/studio/big',
          name: 'kaizen',
          description: 'vista sala de Pilates',
          photo: '1'
        },
        {
          type: 'il-item--large',
          caption: 'Kaizen Foto 2',
          thumbnail: '/images/gallery/studio',
          original: 'images/gallery/studio/big',
          name: 'kaizen',
          description: 'vista sala CoreAlign',
          photo: '2'
        },
        {
          type: '',
          caption: 'Kaizen Foto3',
          thumbnail: '/images/gallery/studio',
          original: 'images/gallery/studio/big',
          name: 'kaizen',
          description: 'Molas',
          photo: '3'
        },
        {
          type: 'il-item--large',
          caption: 'Kaizen Foto 4',
          thumbnail: '/images/gallery/studio',
          original: 'images/gallery/studio/big',
          name: 'kaizen',
          description: 'CoreAlign',
          photo: '4'
        },
        {
          type: 'il-item--medium',
          caption: 'Kaizen Foto 5',
          thumbnail: '/images/gallery/studio',
          original: 'images/gallery/studio/big',
          name: 'kaizen',
          description: 'Reformers e Konnectors',
          photo: '5'
        },
        {
          type: 'il-item--large',
          caption: 'Kaizen Foto 6',
          thumbnail: '/images/gallery/studio',
          original: 'images/gallery/studio/big',
          name: 'kaizen',
          description: 'CoreAlign',
          photo: '6'
        },
        {
          type: 'il-item--medium',
          caption: 'Kaizen Foto 7',
          thumbnail: '/images/gallery/studio',
          original: 'images/gallery/studio/big',
          name: 'kaizen',
          description: 'Molas',
          photo: '7'
        },
        {
          type: 'il-item--medium',
          caption: 'Kaizen Foto 8',
          thumbnail: '/images/gallery/studio',
          original: 'images/gallery/studio/big',
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

      //console.log('background: url(../public/images/gallery/gallery-studio-1.jpg)')
    }
  }
};
</script>

<style lang="scss">
.il-gallery {
  display: grid;
  grid-template-columns: repeat(1, 360px);
  grid-template-rows: repeat(8, 270px);
  justify-content: center;
  grid-gap: 1px;

  @media screen and (min-width: 680px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 2px;
  }

  @media screen and(min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 5px;
  }
}

.il-gallery--img {
  width: 100%;
  height: 100%;
  object-fit: cover;

  &:hover {
    transform: scale(0.97);
    border: 4px solid #debbaa;
    opacity: 0.9;
  }
}

/*.il-gallery--item__1 {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 4;
}
.il-gallery--item__2 {
    grid-column-start: 4;
    grid-column-end: 8;
    grid-row-start: 1;
    grid-row-end: 8;
}
.il-gallery--item__3 {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 6;
    grid-row-end: 4
}
.il-gallery--item__4 {
grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 4;
    grid-row-end: 8;
}
.il-gallery--item__5 {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 8;
    grid-row-end: 10;
}
.il-gallery--item__6 {
    grid-column-start: 4;
    grid-column-end: 8;
    grid-row-start: 8;
    grid-row-end: 10;
}
.il-gallery--item__7 {
    grid-column-start: 1;
    grid-column-end: 9;
    grid-row-start: 9;
    grid-row-end: 12;
}
.il-gallery--item__8 {
    grid-column-start: 1;
    grid-column-end: 9;
    grid-row-start: 9;
    grid-row-end: 12;
}*/
</style>
