<!-- App.vue -->
<template>
  <div class="container mt-lg-0">
   <div class="row">
       <div class="col-lg-6 col-md-12 col-sm-12 col-12">
           <img class="img-fluid register" src="../assets/registration-img.png" alt="Register">
       </div>
       <div class="col-lg-6 col-md-12 col-sm-12 col-12 form-reg">
           <img class="img-fluid logo"  src="../assets/logo.JPG" alt="logo">
           <p class="welcome-text">Welcome to Konnect Professional</p>
           <div class="routing">
               <router-link to="/account/register">
                   <button class="register-btn">Register</button>
               </router-link>
               <router-link to="/account/signIn">
                   <button class="login-btn">Login</button>
               </router-link>
           </div>
           <p class="account">Create an Account to get Register..!</p>
           <form>
               <label for="Email">First Name</label> <br>
               <input type="text" placeholder="Enter Your Name" v-model="name"> <br><br>
               <label for="Email">Last Name</label> <br>
               <input type="text" placeholder="Enter Your Name" v-model="name"> <br><br>
               <label for="Email">Email</label> <br>
               <input type="email" placeholder="Enter Your Email" v-model="email" required><br><br>
               <label for="Email">Password</label> <br>
               <input type="password" placeholder="Enter Password" v-model="password" required> <br>
               <div v-if="error" class="error">{{ error }}</div>
               <p v-if="verificationSent">Email verification link has been sent to your email address.</p>
               <router-link to="/account/signIn">
            </router-link>
               <button class="account-btn" @click="signUp">Register</button>
           </form>
       </div>
   </div>
   
  </div>
</template>

<script setup>
import { useAuthStore } from '../stores/auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router' // import router

    const authStore = useAuthStore()
    const router = useRouter() // get a reference to our vue router
    const firstName = ref('')
    const lastName = ref('')
    const email = ref('')
    const password = ref('')
    const verificationSent = ref(false);

    const signUp = () => {
      authStore.signUp(firstName.value, lastName.value, email.value, password.value)
      firstName.value = ''
      lastName.value = ''
      email.value = ''
      password.value = ''
      verificationSent.value = authStore.verificationSent;
      router.push('/account/signIn') 
      alert('Registration successful')
      
      return { firstName, lastName, email, password, signUp, error: authStore.error, verificationSent}
    }
   
 

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
html{
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
}
.register{
    width: 90%;
    height: 80vh;
    object-fit: contain;
}
.form-reg{
    box-shadow: 0px 4px 67px 0px #0000001A;
    border-radius: 0.9rem;
    padding-bottom: 2rem;
}
.logo{
    margin-left: 40%;
    margin-top: -1.2rem;
    width: 6rem;
    height: 6rem;
    object-fit: contain;
}
.welcome-text{
    text-align: center;
    margin-top: -1rem;
    color: #333;
    font-weight: 600;
    font-family: 'poppins';
}
.routing{
    margin-left: 25%;
    background-color: #FFF5CF;
    padding: 0.4rem 0.7rem;
    text-align: center;
    width: 50%;
    border-radius: 1.5rem;
    font-family: 'poppins';
}
.register-btn{
    background-color: #FFDC5F;
    color: #333;
    text-align: center;
    border: none;
    border-radius: 1.5rem;
    padding: 0.5rem 2.5rem;
    margin-left: -1.7rem;
    font-weight: 600;
}
.login-btn{
    background-color: transparent;
    color: #333;
    text-align: center;
    border: none;
    border-radius: 1rem;
    padding: 0.4rem 1.5rem;
    font-weight: 600;
}
.account{
    text-align: center;
    margin-top: 0.5rem;
    font-family: 'poppins';
}
form{
    position: relative;
}
#showIcon{
    position: absolute;
    right: 5rem;
    bottom: 5.5rem;
}
form label{
    color: #333;
    font-weight: 400;
    font-size: 0.85rem;
    font-family: 'poppins';
    margin-left: 3.3rem;
    line-height: 1.7;
}
form input{
    width: 75%;
    margin-left: 3rem;
    border: 1px solid #FFDC5F;
    border-radius: 1.5rem;
    height: 2.5rem;
    padding-left: 1rem;
    outline: none;
}
form input:focus {
    border: 1px solid #FFDC5F;
  }
  form input::placeholder{
    color: lightgray;
    font-size: 0.85rem;
  }
.account-btn{
    background-color: #FFDC5F;
    padding: 0.5rem 3rem;
    border: none;
    font-family: 'poppins';
    text-align: center;
    font-weight: 400;
    margin-top: 2rem;
    border-radius: 1.5rem;
    margin-left: 19rem;
}
</style>
