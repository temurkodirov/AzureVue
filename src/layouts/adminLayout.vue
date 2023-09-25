<template>
    <nav class=" py-8 dark-bg  ">
        <div class="max-w-screen-xl flex  items-center justify-between mx-auto ">
            <RouterLink to="/">
                <div class="flex items-center">
                    <img src="@/assets/logo.png" class="h-12 mr-2" alt=" Logo" />
                    <span class="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Ab Cinema</span>
                </div>
            </RouterLink>
            <div class="flex">
                <div class="relative ">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input  type="text" id="search-navbar"
                            class="block w-80 p-2 pl-10 text-sm text-gray-900
                           border  rounded-lg dark-bg focus:ring-blue-500
                            focus:border-blue-500  dark:border-gray-600
                            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                            dark:focus:border-blue-500 " placeholder="Search...">
                </div>
            </div>
            <div>
                <UploadModal></UploadModal>
            </div>
        </div>
    </nav>

    <div class="max-w-screen-xl mx-auto ">
          <hr class="h-px mb-5 bg-gray-200 border-0 dark:bg-gray-700">

        <div class="grid grid-cols-4 md:grid-cols-4 gap-2">
            <AdminMoviesView>  </AdminMoviesView>

        </div>

    </div>

</template>

<script>
import UploadModal from "@/components/admin/uploadModal.vue";
import AdminMoviesView from "@/views/AdminMoviesView.vue";

export default {
    name: "adminLayout",
    components: {AdminMoviesView, UploadModal}
}
</script>

<style scoped>

</style>