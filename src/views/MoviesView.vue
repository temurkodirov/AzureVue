<script>
import axios from "@/plugins/axios";
import MovieCard from "@/components/movie/movieCard.vue";


export default {
    name: "MoviesView",
    components: { MovieCard},
    data() {
        return {
            moviesList: [],
            search : ""
        };
    },
    methods :
    {
       async getMovies(){
           let response = await axios.get("api/Video/all");
          // console.log(response.data);
           this.moviesList = response.data;
        }
    },
    async mounted() {
        await  this.getMovies();
    },
}
</script>
<template>


   <div class="mt-5"  v-for="element in moviesList">
       <movieCard
           :id = element.id
           :title = element.title
           :videoName = element.videoName
           :videoUrl = element.videoUrl
           :videoImageName = element.videoImageName
           :videoImageUrl = element.videoImageUrl
           :videoDuration = element.videoDuration
       ></movieCard>
   </div>




</template>



<style scoped>

</style>