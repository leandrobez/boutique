<template>
    <div class="il-video--youtube">
        <i class="mdi mdi-close mdi-24px" @click.prevent="closeVideo()"></i>
        <iframe :src="player.sources[0].src" frameborder="0" :allowfullscreen="player.allowfullscreen"
        :width="player.size"
        :height="player.height"
        ></iframe>
    </div>
</template>

<script>
export default {
  name: 'youtube',
  props: {
    player: Object
  },
  data () {
    return {};
  },
  methods: {

    closeVideo () {
      let iFrame = document.querySelector('iframe');
      //let trailer = document.getElementById('il-video');

      setTimeout (() => {
        this.$parent.show = false;
        iFrame.setAttribute('src', '');
        iFrame.style.width = 0;
        iFrame.style.height = 0;
        this.$parent.player = {}
      }, 1000);
    }
  }
};
</script>

