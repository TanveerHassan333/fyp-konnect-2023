import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/account/register",
      component: () => import("../components/SignUp.vue"),
    },
    {
      path: "/account/signIn",
      component: () => import("../components/SignIn.vue"),
    },
    {
      path: '/forgotPass',
      name: 'forgot-pass',
      component: () => import("../components/ForgotPass.vue") 
  },
    {
      path: "/sharePost",
      component: () => import("../components/SharePost.vue"),
    },
    {
      path: "/account/updateProfile",
      component: () => import("../views/EditProfile.vue"),
    },
    {
      path: "/account/profile",
      component: () => import("../views/UserUpdateProfile.vue"),
    },
    {
      path: "/account/userDashboard",
      component: () => import("../views/UserDashboard.vue"),
    },
    {
      path: "/blogs/shareBlog",
      component: () => import("../components/ShareBlog.vue"),
    },
    { 
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import ("../views/NotFound.vue") 
    },
    
  ],
});

export default router;

