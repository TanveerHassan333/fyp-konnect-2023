 <template>
  <div class="register">
      <h1>Login to Your Account</h1>
      <input type="text" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <p v-if="error" class="error">{{ error }}</p>
      <button class="register-btn" @click="signIn">Submit</button>
      <div v-if="success" class="alert">
        <p>Login Successful!</p>
      </div>
      <p>Forgot password? <router-link to="/forgotPass">Forgot password</router-link></p>
      <p class="have-account">Do you have an Account? <router-link to="/account/register">Create</router-link></p>
  </div>
      
    </template>
    
<script setup>
import { ref , watch } from 'vue';
import { useAuthStore } from '../stores/auth';
import { useRouter } from 'vue-router';

const email = ref('');
    const password = ref('');
    const success = ref(false);
    const error = ref('');

    const authStore = useAuthStore();
    const router = useRouter();

    const signIn = async () => {
      try {
        const success = await authStore.signIn({ email: email.value, password: password.value });
        if (success) {
          // Sign-in successful, navigate to the main page
          router.push('/main'); // Replace '/main' with your desired main page route
          showSuccessAlert();
        }
      } catch (error) {
        console.error('Sign-in error:', error);
        setError(error.message);
      }
      return {
      email,
      password,
      success,
      error,
      signIn,
    };
    };

    const setError = (errorMessage) => {
      error.value = errorMessage;
    };

    const showSuccessAlert = () => {
      success.value = true;
      setTimeout(() => {
        success.value = false;
      }, 3000); // Hide the alert after 3 seconds
    };

   
</script>
    
    <style scoped>
   
   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }
   html{
    font-size: 15px;
   }
  .register{
    width: 50%;
    margin: 2rem auto;
    background-color: rgb(185, 141, 227);
    border-radius: 0.8rem;
    padding: 1rem;
    
  }
  .register h1{
    text-align: center;
    margin-top: 1rem;
    color: white;
  }
  .register input{
    display: block;
    margin: 2rem 1rem;
    width: 90%;
    height: 2.5rem;
    border: none; 
    border-radius: 0.4rem;
    padding-left: 0.8rem;
  }
  .register input:focus{
    border: none;
  }
  .register-btn{
    margin: 0.6rem 1rem;
    background-color: rgba(75, 59, 245, 0.616);
    color: white;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 8px;
    padding: 0.5rem 2rem;
    border: none;
    cursor: pointer;
    
  }
  .register p{
      margin-left: 1rem;
      color: red;
      font-size: 0.90rem;
  }
  .have-account{
      line-height: 2.4;
  }
  .error {
    color: red;
  }
  .alert {
    background-color: #c1e7c1;
    padding: 10px;
    margin-top: 10px;
    border-radius: 5px;
  }
    </style> 

     