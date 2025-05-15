// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnSUV0vQtiSPlBFhvMlaedJyRdMiuiswI",
  authDomain: "coffee-store-auth-28bce.firebaseapp.com",
  projectId: "coffee-store-auth-28bce",
  storageBucket: "coffee-store-auth-28bce.firebasestorage.app",
  messagingSenderId: "550897975206",
  appId: "1:550897975206:web:ba2336f612a70b202c9967"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);