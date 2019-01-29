<template>
<div class="il-gallery">
    <div class="il-gallery--item" v-for="item in gallery" :key="item.photo" :class="item.type" :style="getBack(item.photo)">
        <div class="il-gallery--item__details">
            {{item.caption}}
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'EventsGallery',

    data() {
        return {
            gallery: [{
                    type: '',
                    caption: 'evento nr 1',
                    photo: '1'
                },
                {
                    type: 'il-item--large',
                    caption: 'evento nr 2',
                    photo: '2'
                },
                {
                    type: 'il-item--large',
                    caption: 'evento nr 3',
                    photo: '3'
                },
                {
                    type: '',
                    caption: 'evento nr 4',
                    photo: '4'
                },
                {
                    type: 'il-item--medium',
                    caption: 'evento nr 5',
                    photo: '5'
                },
                {
                    type: '',
                    caption: 'evento nr 6',
                    photo: '6'
                },
            ]
        };
    },

    mounted() {
      this.$parent.title = "dos Eventos";
    },

    methods: {
        getBack(photo) {
            let background = `background: url('../images/gallery/gallery-studio-${photo}.jpg')`;
            return background;

            //console.log('background: url(../public/images/gallery/gallery-studio-1.jpg)')
        }
    }
};
</script>
