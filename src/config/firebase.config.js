// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiaGtMYorZmLFYVY_oVI28IYNu6U-vUBg",
  authDomain: "football-flix-client.firebaseapp.com",
  projectId: "football-flix-client",
  storageBucket: "football-flix-client.appspot.com",
  messagingSenderId: "679739597768",
  appId: "1:679739597768:web:0f75b4c73889de2a8f96fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth