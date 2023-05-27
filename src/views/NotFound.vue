<template>
    <div class="not-found">
        <h1>404</h1>
        <h4>Oops! This page couldn't be found</h4>
        <p>SORRY BUT THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST, HAVE BEEN REMOVED. NAME CHANGED OR IS TEMPORARILY UNAVAILABLE</p>
        <router-link to="/">
            <button class="homepage">Go to Home</button>
          </router-link>
    </div>
   
</template>

<script setup>
import { useRouter, RouterLink } from 'vue-router';
// import HomeView from './HomeView.vue';


</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400;500;600;700&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html{
  font-size: 15px;
  font-family: 'Josefin Sans', sans-serif;
}
.not-found{
    width: 50%;
    margin: auto;
    font-family: Josefin Sans;
}
.not-found h1{
    font-size: 8rem;
    font-weight: 900;
    color: lightgray;
}
.not-found h4{
    font-size: 2rem;
    font-weight: 500;
    color: black;
}
.not-found p{
    color: gray;
    font-size: 0.90rem;
    margin-top: 0.7rem;
    line-height: 1.7;
}
.homepage{
    background-color: rgb(0, 162, 255);
    color: white;
    border-radius: 10px;
    font-size: 0.95rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border: none;
    margin-top: 0.6rem;
}
</style>