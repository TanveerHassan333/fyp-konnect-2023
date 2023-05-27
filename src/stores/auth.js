
import { defineStore } from 'pinia'
import { auth, app } from '../firebase/init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { sendPasswordResetEmail, sendEmailVerification, fetchSignInMethodsForEmail } from 'firebase/auth';
import { AuthErrorCodes } from 'firebase/auth';
export const useAuthStore = defineStore('auth', {
    state: () => ({
      user: null,
      error: null,
      resetPasswordEmailSent: false,
      verificationSent: false,
    }),
    actions: {
      async signUp(firstName, lastName, email, password) {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password)
          const user = userCredential.user
          await sendEmailVerification(user);
          this.verificationSent = true;
          console.log('Email verification sent.');
          // await user.updateProfile({
          //   displayName: `${firstName} ${lastName}`,
          // })
          this.user = user
          this.error = null
          
        } catch (error) {
          this.user = null
          this.error = error.message
        }
        
      },
      async signIn(email, password) {
        try {
          const auth = getAuth();
          const signInMethods = await fetchSignInMethodsForEmail(auth, email);
          if (signInMethods.length === 0) {
            throw new Error('User is not registered');
          }
  
          await signInWithEmailAndPassword(auth, email, password);
          this.error = null; // Clear any previous errors
          return true; // Sign-in successful
        } catch (error) {
          console.error('Sign-in error:', error);
          switch (error.code) {
            case AuthErrorCodes.INVALID_EMAIL:
            case AuthErrorCodes.WRONG_PASSWORD:
            case AuthErrorCodes.USER_NOT_FOUND:
              this.error = new Error('Invalid email or password');
              break;
            case 'User is not registered':
              this.error = new Error('User is not registered');
              break;
            default:
              this.error = new Error('Something went wrong');
              break;
          }
          return false; // Sign-in failed
        }
      },
      clearError() {
        this.error = null;
      },
      
      
      async sendPasswordResetEmail(email) {
        try {
          await sendPasswordResetEmail(auth, email);
          console.log('Password reset email sent.');
          // Handle success (e.g., show a success message to the user)
        } catch (error) {
          console.error('Error sending password reset email:', error);
          // Handle error (e.g., show an error message to the user)
        }
      },
    },
        
    },
  );
   