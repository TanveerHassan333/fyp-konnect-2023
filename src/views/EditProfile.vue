<template>
  <div>
    <h2>Edit Profile</h2>
    <input type="text" v-model="user.age" placeholder="Age">
    <input type="text" v-model="user.cnic" placeholder="CNIC">
    <input type="text" v-model="user.education" placeholder="Education">
    <input type="text" v-model="user.address" placeholder="Address">
    <input type="file" @change="onFileChange">

    <button @click="updateUser">Update</button>
  </div>
</template>

<script>
import { ref, defineComponent } from 'vue';
import { useAuthStore } from '../stores/userProfile';

export default defineComponent({
  setup() {
    const authStore = useAuthStore();
    const user = ref(authStore.user);

    const updateUser = () => {
      authStore.updateUserInfo(user.value);
    };

    const onFileChange = (event) => {
      const file = event.target.files[0];
      user.value.photoURL = URL.createObjectURL(file);
      authStore.updateProfilePicture(file);
    };

    return {
      user,
      updateUser,
      onFileChange,
    };
  },
});
</script>
