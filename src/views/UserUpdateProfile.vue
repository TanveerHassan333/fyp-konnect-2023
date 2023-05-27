<template>
  <div>
    <h2>User Profile</h2>
    <img :src="user.photoURL" :alt="user.displayName">

    <div>
      <label>Age:</label>
      <span>{{ user.age }}</span>
    </div>

    <div>
      <label>CNIC:</label>
      <span>{{ user.cnic }}</span>
    </div>

    <div>
      <label>Education:</label>
      <span>{{ user.education }}</span>
    </div>

    <div>
      <label>Address:</label>
      <span>{{ user.address }}</span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useAuthStore } from '../stores/userProfile';

export default defineComponent({
  setup() {
    const authStore = useAuthStore();
    const user = authStore.user;

    return { user };
  },
});
</script>
