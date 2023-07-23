import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/modals",
      name: "modals",
      component: () => import("../views/ModalsView.vue"),
    },
    {
      path: "/posts",
      name: "posts",
      component: () => import("../views/PostsView.vue"),
    },
    {
      path: "/postsDetails/:id",
      name: "postsDetails",
      component: () => import("../views/PostsDetailsView.vue"),
    },
  ],
});

export default router;
