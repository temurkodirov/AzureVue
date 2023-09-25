<script setup >

import FlowbiteSetup from "@/FlowbiteSetup.vue";
import NavbarHead from "@/components/common/navbarHead.vue";
import MovieCard from "@/components/movie/movieCard.vue";
import MoviePlayer from "@/components/movie/moviePlayer.vue";
import MoviesView from "@/views/MoviesView.vue";


</script>

<template>  
<FlowbiteSetup></FlowbiteSetup>
    <div class=" max-w-screen-xl mx-auto">
        <NavbarHead></NavbarHead>

        <div class="grid grid-cols-4 md:grid-cols-4 gap-2">
            <MoviesView>  </MoviesView>

        </div>

    </div>
</template>

<style scoped>

</style>