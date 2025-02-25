import { createRouter, createWebHistory } from "vue-router";
import store from "@/store"; // Importer Vuex pour vérifier l'auth

import Home from "@/views/Home.vue";
import Library from "@/views/Library.vue";
import Profile from "@/views/Profile.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import ResetPassword from "@/views/ResetPassword.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/library", component: Library },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/reset-password", component: ResetPassword },
  {
    path: "/profile",
    component: Profile,
    meta: { requiresAuth: true }, // Protection Auth
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

//  Vérification d'auth avant chaque navigation
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters["auth/isAuthenticated"]) {
    next("/login"); //  Rediriger vers login si non connecté
  } else {
    next();
  }
});

export default router;
