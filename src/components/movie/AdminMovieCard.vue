

<script>
import IconDuration from "@/components/icons/IconDuration.vue";
import IconPlay from "@/components/icons/IconPlay.vue";
import router from "@/router";
import DeleteMovieModal from "@/components/admin/deleteMovieModal.vue";

export default {
    name: "AdminMovieCard",
    components: {DeleteMovieModal, IconDuration, IconPlay},
    props:{
        id : Number,
        title : String,
        videoName : String,
        videoUrl : String,
        videoImageName : String,
        videoImageUrl : String,
        videoDuration : Number,
    },
    methods:{
        openPlayer(){
            router.push({ name: 'movie', params: { id: this.id } });
        },
        async secondsToHms() {
            var d = this.videoDuration ;
            if(d>60){
                var h = Math.floor(d / 3600);
                var m = Math.floor(d % 3600 / 60);

                var hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " Hr ") : "";
                var mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " Min ") : "";

                this.duration =  hDisplay + mDisplay ;
            }
            else {
                var h = Math.floor(d);
                this.duration = h +" Sec"}
        }
    },
    data(){
        return{
            duration : String
        }
    },
    async mounted() {
        await this.secondsToHms();
    }
}
</script>
<template>
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img class="pt-8 px-8 pb-3 IMGsquare rounded-t-lg" :src="videoImageUrl" alt="product image" />
        </a>
        <div class="px-5 pb-5">
            <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">

                    {{title}} </h5>
            </a>

            <div class="flex items-center justify-between">
                <span class=" font-mono flex align-middle items-center font-medium text-gray-900 dark:text-white">
                    <IconDuration class="mr-1"></IconDuration> {{duration}}
                     </span>

                <button @click="openPlayer()"  class="text-white mybtn flex align-middle items-center  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center
                            "><IconPlay class="mr-2"> </IconPlay> Play </button>


            </div>
            <div class="w-full mt-3">


                <DeleteMovieModal
                :videoId = id ></DeleteMovieModal>
            </div>

        </div>
    </div>
</template>
<style scoped>
.IMGsquare{
    aspect-ratio: 1/1;
    object-fit: cover;
}
.mybtn{
    background: #9F7AEA;
}
.mybtn:hover{
    background: #553C9A;
}
</style>