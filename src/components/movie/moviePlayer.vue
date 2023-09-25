<script>
import { defineComponent } from "vue";
export default defineComponent({

    methods: {
       async handleKeyDown(event) {
            switch (event.key) {
                case 'Space':
                    this.togglePlayPause();
                    break;
                case 'ArrowLeft':
                    this.seekBackward();
                    break;
                case 'ArrowRight':
                    this.seekForward();
                    break;
                case 'm':
                    this.toggleMute();
                    break;
                case 'f':
                    this.toggleFullScreen();
                    break;
                case 'ArrowUp':
                    this.volumeUp();
                    break;
                case 'ArrowDown':
                    this.volumeDown();
                    break;
                default:
                    // Handle other key events if needed
                    break;
            }
        },
       async volumeUp() {
            const video = this.$refs.videoPlayer;
            if (video.volume < 1.0) {
                video.volume += 20; // Adjust the volume increment as needed
            }
        },

        async volumeDown() {
            const video = this.$refs.videoPlayer;
            if (video.volume > 0.0) {
                video.volume -= 20; // Adjust the volume decrement as needed
            }
        },
       async togglePlayPause() {
            const video = this.$refs.videoPlayer;
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        },
      async  seekBackward() {
            const video = this.$refs.videoPlayer;
            video.currentTime -= 10; // Adjust the seek duration as needed
        },
        async seekForward() {
            const video = this.$refs.videoPlayer;
            video.currentTime += 10; // Adjust the seek duration as needed
        },
        async toggleMute() {

            const video = this.$refs.videoPlayer;
            video.muted = !video.muted;
        },
        async toggleFullScreen() {
            const video = this.$refs.videoPlayer;

            if (!document.fullscreenElement && !document.mozFullScreenElement &&
                !document.webkitFullscreenElement && !document.msFullscreenElement) {
                if (video.requestFullscreen) {
                    video.requestFullscreen();
                } else if (video.mozRequestFullScreen) {
                    video.mozRequestFullScreen();
                } else if (video.webkitRequestFullscreen) {
                    video.webkitRequestFullscreen();
                } else if (video.msRequestFullscreen) {
                    video.msRequestFullscreen();
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            }
        },

    },
    props:{
        videoUrl : String
    },

    async mounted() {
        await this.$refs.videoPlayer.addEventListener('keydown', this.handleKeyDown);
    },
   async beforeDestroy() {
        await  this.$refs.videoPlayer.removeEventListener('keydown', this.handleKeyDown);
    },
});
</script>
<template>
    <div class="video" >
        <video ref="videoPlayer" class="video" width="1080" height="720" controls
               @src="videoUrl" @keydown="handleKeyDown">


        </video>
    </div>
</template>

<style scoped>
.video{
    height: 720px!important;
    width: 1080px!important;
}

</style>


