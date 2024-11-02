// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUTWXnm0tD6jep4gTMSgawcBA5BDapGO4",
  authDomain: "contacts-ffb37.firebaseapp.com",
  projectId: "contacts-ffb37",
  storageBucket: "contacts-ffb37.appspot.com",
  messagingSenderId: "652572710288",
  appId: "1:652572710288:web:59d57088dedc2cc70c4f15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);