<template>
  <div>
    <form @submit.prevent="sendPasswordResetEmail">
      <input v-model="email" type="email" placeholder="Email" required />
      <button type="submit">Reset Password</button>
    </form>
    <p v-if="resetPasswordEmailSent">Password reset email sent.</p>
  </div>
</template>

<script setup>
import { useAuthStore } from '../stores/auth';
import {ref} from  'vue'
import { useRouter } from 'vue-router' // import router
    const authStore = useAuthStore();
    const email = ref('');
    const router = useRouter() // get a reference to our vue router
    const sendPasswordResetEmail = () => {
      authStore.sendPasswordResetEmail(email.value);
      alert('check your email to reset password')
      router.push('/account/signIn')
      email.value = ''
      return {
      email,
      sendPasswordResetEmail,
    };
    };

</script>
