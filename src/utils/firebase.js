import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCaoUQpS3tW0WdDy4d6HoHvp1LzSPusICo",
    authDomain: "replace-ecommerce-4fbf3.firebaseapp.com",
    projectId: "replace-ecommerce-4fbf3",
    storageBucket: "replace-ecommerce-4fbf3.appspot.com",
    messagingSenderId: "665777010530",
    appId: "1:665777010530:web:1a75ca2977937f16185e3b"
  };

  const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app);