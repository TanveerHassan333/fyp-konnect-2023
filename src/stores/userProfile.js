import { defineStore } from 'pinia';
import { getAuth, updateProfile, uploadBytes, ref,  signOut } from 'firebase/auth';
import { getStorage, ref as storageRef, uploadBytesResumable, getDownloadURL } from 'firebase/firestore';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {
      age: '',
      cnic: '',
      education: '',
      address: '',
      photoURL: '',
    },
    isUploading: false,
  }),

  getters: {
    isUserSignedIn: (state) => state.user !== null,
  },

  actions: {
    async updateProfilePicture(file) {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user && file) {
        const storage = getStorage();
        const storageRef = storageRef(storage, `users/${user.uid}/profilePicture/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        try {
          await uploadTask;
          const downloadURL = await getDownloadURL(storageRef);
          await updateProfile(user, {
            photoURL: downloadURL,
          });
          this.user = {
            ...this.user,
            photoURL: downloadURL,
          };
        } catch (error) {
          console.error('Error uploading profile picture:', error);
        }
      }
    },

    async updateUserInfo(userInfo) {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        try {
          await updateProfile(user, userInfo);
          this.user = {
            ...this.user,
            ...userInfo,
          };
        } catch (error) {
          console.error('Error updating user information:', error);
        }
      }
    },

    async logout() {
      const auth = getAuth();
      await signOut(auth);
    },
  },
});
