import { createRouter, createWebHistory } from 'vue-router'
import homeLayout from "@/layouts/homeLayout.vue";
import WachtMovie from "@/views/WachtMovie.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path: '/',
    name: 'main',
    component: homeLayout,

   },
       {
              path : '/admin',
              name : 'admin',
              component: ()=> import("../layouts/adminLayout.vue")
       },
      {
          path : '/movie/:id',
          name : 'movie',
          component: WachtMovie
      }
  ]
})

export default router
