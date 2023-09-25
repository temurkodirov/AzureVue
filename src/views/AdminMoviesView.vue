<script>
import axios from "@/plugins/axios";
import AdminMovieCard from "@/components/movie/AdminMovieCard.vue";

export default {
    name: "AdminMoviesView",
    components: {AdminMovieCard},
    data() {
        return {
            moviesList: [],
        };
    },
    methods :
        {
            async getMovies(){
                var response = await axios.get("api/Video/all");
               console.log(response.data);
                this.moviesList = response.data;
            }
        },
    async mounted() {
        await  this.getMovies();
    },
}
</script>
<template>

  <!--        <div class="movie rounded-xl py-4">-->
  <!--            <h1 class="text-white text-center font-medium text-7xl">Barcha filmlar</h1>-->
  <!--        </div>-->

    <div class="mt-5"  v-for="element in moviesList">
        <AdminMovieCard
                :id = element.id
                :title = element.title
                :videoName = element.videoName
                :videoUrl = element.videoUrl
                :videoImageName = element.videoImageName
                :videoImageUrl = element.videoImageUrl
                :videoDuration = element.videoDuration
        ></AdminMovieCard>
    </div>




</template>



<style scoped>
.movie{
    background: rgba(92, 3, 211, 0.48);
}
</style>