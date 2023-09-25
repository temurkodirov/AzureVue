<script>
import axios from "@/plugins/axios";

export default {
    name: "uploadModal",
    components: {

    },
    data() {
        return {
            showModal:false ,
            name: "" ,
            description: "",
            createError: false,
            title:"",
            selectedVideo : null,
            selectedImage: null,
            spinnerShow:false,
            percentCompleted:0,
            videoLoading: 0,
        };
    },
    methods: {
        handleVideoChange(event) {
            this.selectedVideo = event.target.files[0];
        },
        handleImageChange(event) {
            this.selectedImage = event.target.files[0];
        },
        openModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        async createAsync() {
            const formData = new FormData();
            formData.append("Title", this.title);
            formData.append("Video", this.selectedVideo);
            formData.append("VideoImage", this.selectedImage);
            this.spinnerShow = true;
            this.videoLoading = 0;

            const response = await axios.post("api/Video", formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                onUploadProgress: ({ loaded, total }) => {
                    // Update the loading progress for the Video file
                    this.videoLoading = Math.floor((loaded / total) * 100);
                }
            });
            if (response.status === 200) {

                location.reload();
                this.files = [];
                this.spinnerShow = false;
                this.closeModal();
                this.videoLoading = 0;
            }
            else {
                this.createError = true;
            }
        }
    },
}
</script>
<template>

    <div class="flex w-100 justify-end">
        <button @click="openModal" type="button"
                class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Upload Movie
        </button>
    </div>
    <!-- progress bar -->
    <div v-if="spinnerShow" class="fixed top-0 left-0 right-0 z-50 w-full h-screen flex items-center justify-center bg-black bg-opacity-70 ">
        <div class="w-1/4  flex flex-col items-center ">
                <span class="px-5 py-2 mb-2 text-white bg-white bg-opacity-20 backdrop-blur-lg rounded-full drop-shadow-lg">Uploading: {{ videoLoading + '%' }}</span>
            <div class="w-full h-8  bg-white bg-opacity-20 backdrop-blur-lg rounded-full drop-shadow-lg">
                <div class=" h-8 text-xs font-medium dark:bg-purple-500 bg-purple-500
                text-blue-100 align-middle text-center p-0.5 leading-none rounded-full"  :style="{ width: videoLoading + '%' }">  </div>
            </div>
        </div>
    </div>
    <!--    progress bar-->
    <!--spinner-->

<!--        <div v-if="spinnerShow" class="">-->
<!--            <div role="status" class="fixed top-0 left-0 right-0 z-50 w-full h-screen flex items-center justify-center bg-black bg-opacity-60 ">-->
<!--                <svg aria-hidden="true" class="inline w-16 h-16 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>-->
<!--                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>-->
<!--                </svg>-->
<!--                <br>-->
<!--                <div>-->
<!--                    <span class="text-2xl text-white">Video: {{ videoLoading + '%' }}</span>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->

    <!--spinner-->


    <!-- Main modal -->
    <div v-if="showModal"

         class="fixed top-0 left-0 right-0 z-40 w-full h-screen flex items-center justify-center bg-black bg-opacity-50">

        <div class="relative w-full max-w-md max-h-full">

            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button @click="closeModal"
                        class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="edit-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <div class="px-6 py-6 lg:px-8">
                    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                        </h3>
                    <form @submit.prevent="createAsync" class="space-y-6" action="#">

                        <div>
                            <label  class="block mb-2  text-sm font-medium text-gray-900 dark:text-white">
                                Title
                            </label>
                            <input v-model="title" required
                            class="bg-gray-50 border border-gray-300 text-gray-900
                                       text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                                        block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500
                                        dark:text-white">
                        </div>
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">
                                Video </label>
                            <input required ref="selectedVideo" @change="handleVideoChange" accept="video/mp4, video/mkv" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"  type="file">
                        </div>
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">
                                Video Image </label>
                            <input required @change="handleImageChange" accept="image/png, image/gif, image/jpeg" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"  type="file">
                        </div>

                         <div class="m-5">
                            <button  type="submit"
                                     class="w-full text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800">
                                Create
                            </button>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    </div>

</template>



<style scoped>

</style>