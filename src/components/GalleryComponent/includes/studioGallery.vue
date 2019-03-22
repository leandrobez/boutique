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
  name: 'StudioGallery',

  data() {
    return {
      gallery: [
        {
          type: '',
          caption: 'foto 1',
          photo: '1'
        },
        {
          type: 'il-item--large',
          caption: 'foto 2',
          photo: '2'
        },
        {
          type: '',
          caption: 'foto 3',
          photo: '3'
        },
        {
          type: 'il-item--large',
          caption: 'foto 4',
          photo: '4'
        },
        {
          type: 'il-item--medium',
          caption: 'foto 5',
          photo: '5'
        },
        {
          type: 'il-item--large',
          caption: 'foto 6',
          photo: '6'
        },
        {
          type: 'il-item--medium',
          caption: 'foto 7',
          photo: '7'
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
