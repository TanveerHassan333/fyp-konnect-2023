import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjSsZtlBkQeti6lD6PMw0MqQfbZptDgc4",
  authDomain: "fyp-2023-b381b.firebaseapp.com",
  projectId: "fyp-2023-b381b",
  storageBucket: "fyp-2023-b381b.appspot.com",
  messagingSenderId: "1037048632685",
  appId: "1:1037048632685:web:af15bdcf800c43bfc07664"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {auth, app, db}