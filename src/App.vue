<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { useRouter } from 'vue-router'
import { useAuthStore } from './stores/auth';

const authStore = useAuthStore()
const router = useRouter()
const isUserSignedIn = authStore.isUserSignedIn;
const logout = () => {
      authStore.logOut();
      // Perform any additional logic after logout if needed
      return { isUserSignedIn, logOut };
    };
  
</script>


<template>
  <div id="nav">
  <nav class="container navbar sticky-top navbar-expand-lg navbar-light">
    <router-link to="/" class="navbar-brand" ><img src="../src/assets/logo.JPG" class="logo-img" alt="logo"></router-link> 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav ms-auto">
            <router-link to="/" class="nav-item nav-link">Home</router-link>
            <router-link to="/account/register" class="nav-item nav-link">Register</router-link>
            <router-link to="/account/signIn" class="nav-link">LogIn</router-link>
            <router-link to="/blogs/shareBlog" class="nav-link">Share Blog</router-link>
            <button v-if="isUserSignedIn" @click="logOut">Sign Out</button>
             
        </div>
        
    </div>
</nav>
 </div>
  <router-view/>
</template>

<style scoped>

html{
  font-size: 15px;
}
.logo-img{
  width: 5rem;
  height: 5rem;
  object-fit: contain;
}
</style>
