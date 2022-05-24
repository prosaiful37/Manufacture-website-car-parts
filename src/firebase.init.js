// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9mEWGsRQ9HtD6PisvYcNwUSq9uGKEIPo",
  authDomain: "cart-parts-9dcb7.firebaseapp.com",
  projectId: "cart-parts-9dcb7",
  storageBucket: "cart-parts-9dcb7.appspot.com",
  messagingSenderId: "582421621496",
  appId: "1:582421621496:web:e92c97ec19caa50c35290d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;