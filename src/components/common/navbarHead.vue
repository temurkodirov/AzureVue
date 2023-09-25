<script >

import { defineComponent} from 'vue';
import axios from '@/plugins/axios';
import IconAdmin from "@/components/icons/IconAdmin.vue";


export default defineComponent({
    components: {IconAdmin},
    data(){
        return{
            email: "" ,
            password: "" ,
            responseToken: "" ,
            existError: false,
            showModal: false
        }
    },
    methods:{
        openModal() {
            this.showModal = true;
        },
        async closeModal() {
            this.showModal = false;
        },
        async errorClose(){
            this.existError = false;
        },
        async loginAsync(){
            const loginDto = {email: this.email, password: this.password}
            let jsonContent = JSON.stringify(loginDto);

            try {
                const response = await axios.post("api/Admin/login",jsonContent,
                    {
                        headers:{
                            'Content-Type': 'application/json'
                        }
                    });

                if (response.status === 200) {
                    let token = response.data.token;
                    document.cookie = "access_token=" + token + "; expires: SESSION; path=/";
                    this.$router.push("/admin");
                } else {
                    await this.closeModal();
                    this.existError = true;
                }
            } catch (error) {
                // Handle errors
                console.error('Error:', error);
            }
        }
    }

});


</script>
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
                <button @click="openModal"
                        class=" p-3 border dark:border-gray-600 rounded-full"><IconAdmin></IconAdmin></button>
            </div>
        </div>
    </nav>
    <!-- Modal toggle -->

    <div v-if="showModal"
         class="fixed top-0 left-0 right-0 z-50 w-full h-screen flex items-center justify-center bg-black bg-opacity-50">
        <div class="relative w-full max-w-md max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button  @click="closeModal"
                         type="button"
                         class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <div class="px-6 py-6 lg:px-8">
                    <h3 class=" h-4 text-xl font-medium text-gray-900 dark:text-white"></h3>
                    <form @submit.prevent="loginAsync" class="space-y-6" action="#">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input  v-model="email"  type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required>
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input  v-model="password"  type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                        </div>

                        <button  class="w-full text-white mybtn focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Login </button>
                        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <hr class="h-px mb-5 bg-gray-200 border-0 dark:bg-gray-700">
</template>

<style scoped>

.mybtn{

    background: #5c03d3;
}
.mybtn:hover{
    background: #4a328d;
}
</style>