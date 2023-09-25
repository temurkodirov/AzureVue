<template>
    <nav class=" py-3 bg-white:dark  bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg ">
        <div class="max-w-screen-xl flex  items-center justify-between mx-auto ">
            <RouterLink to="/">
                <div class="flex items-center">
                    <img src="@/assets/logo.png" class="h-12 mr-2" alt=" Logo" />
                    <span class="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Ab Cinema</span>
                </div>
            </RouterLink>
        </div>
    </nav>
</template>

<script>
import IconAdmin from "@/components/icons/IconAdmin.vue";

export default {
    name: "NavbarWatchMovie",
    components: {IconAdmin}
}
</script>

<style scoped>

</style>