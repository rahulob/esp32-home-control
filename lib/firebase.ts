// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCffmVdzge-K_-U9UcqPgWPrBmBvEHCgFA",
  authDomain: "esp32-b773a.firebaseapp.com",
  databaseURL: "https://esp32-b773a-default-rtdb.firebaseio.com",
  projectId: "esp32-b773a",
  storageBucket: "esp32-b773a.appspot.com",
  messagingSenderId: "906558572728",
  appId: "1:906558572728:web:2b3442abc62d0cad324c4d",
  measurementId: "G-LX2BJTFQGG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);