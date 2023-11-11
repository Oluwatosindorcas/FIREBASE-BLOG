


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3L9U-TwTMK94VbjlBiMu_wcA4P14BOdA",
  authDomain: "reactblog-b5628.firebaseapp.com",
  projectId: "reactblog-b5628",
  storageBucket: "reactblog-b5628.appspot.com",
  messagingSenderId: "666909276861",
  appId: "1:666909276861:web:9aa3279fabfd1977ac15d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth =getAuth(app);