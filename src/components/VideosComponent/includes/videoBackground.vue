<template>
    <div class="il-back--video">
        <div class="il-video" id="il-video">
            <div class="il-content--video">
                <video autoplay loop muted type="video/mp4">
              <source :src="videoBack" />
            </video>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "VideoBack",

    data(){
        return{
            videoBack: 'video/video-esteira.mp4',
        }
    }
}
</script>