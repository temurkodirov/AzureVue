<script>
import { defineComponent } from "vue";

import FlowbiteSetup from "@/FlowbiteSetup.vue";
import axios from "@/plugins/axios";

import NavbarWatchMovie from "@/components/common/NavbarWatchMovie.vue";

export default defineComponent({
    components: { NavbarWatchMovie,  FlowbiteSetup },
        data(){
        return{
            id: Number,
            videoUrl: String,
            title : String
          }
        },
    methods: {
        async getMovie()
        {
            this.id = this.$route.params.id;
            var response = await axios.get("api/Video/one/" + this.id);
            console.log(response.data);
            this.videoUrl = response.data.videoUrl;
            this.title = response.data.title;
            console.log("Bu URL " + this.videoUrl);
        },
        handleKeyDown(event) {
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
        volumeUp() {
            const video = this.$refs.videoPlayer;
            if (video.volume < 1.0) {
                video.volume += 20; // Adjust the volume increment as needed
            }
        },

        volumeDown() {
            const video = this.$refs.videoPlayer;
            if (video.volume > 0.0) {
                video.volume -= 20; // Adjust the volume decrement as needed
            }
        },
        togglePlayPause() {
            const video = this.$refs.videoPlayer;
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        },
        seekBackward() {
            const video = this.$refs.videoPlayer;
            video.currentTime -= 10; // Adjust the seek duration as needed
        },
        seekForward() {
            const video = this.$refs.videoPlayer;
            video.currentTime += 10; // Adjust the seek duration as needed
        },
        toggleMute() {

            const video = this.$refs.videoPlayer;
            video.muted = !video.muted;
        },
        toggleFullScreen() {
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

    async mounted() {
        // Add the keydown event listener to the document
        document.addEventListener('keydown', this.handleKeyDown);
        await this.getMovie();
    },

    beforeUnmount() {
        // Remove the keydown event listener when the component is unmounted
        document.removeEventListener('keydown', this.handleKeyDown);
    },
});
</script>
<template>

    <FlowbiteSetup></FlowbiteSetup>

    <div class="mody h-screen  ">
        <NavbarWatchMovie></NavbarWatchMovie>

        <div class="body flex mt-4 justify-center  ">
            <video class="rounded-xl myshadow "  width="1080" height="720" ref="videoPlayer" controls
                   :src="videoUrl" @keydown="handleKeyDown">
            </video>
        </div>
            <div class=" pt-2 bg-white:dark max-w-screen-lg flex align-middle items-center justify-between  mx-auto  bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg">
                <p class="text-white text-2xl ">{{title}}</p>
            </div>
      </div>

</template>

<style scoped>
.mody{
   background-image: url("@/assets/images/2.png")!important;
    /*background: aliceblue!important;*/
}
.myshadow
{
    box-shadow: 0 0 31px 8px rgba(111, 119, 126, 0.36);
    max-width: 1080px;
    max-height: 720px;
}

</style>


