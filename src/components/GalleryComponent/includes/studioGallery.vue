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
    name: 'StudioGallery',

    data() {
        return {
            gallery: [{
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
      this.$parent.title = "do Studio";
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
