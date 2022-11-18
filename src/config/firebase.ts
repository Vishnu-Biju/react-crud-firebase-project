// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import{ getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDpYC6IjeXxiaWWdSBiOsdZodF-P7qzBZM",
  authDomain: "react-pro-16cb5.firebaseapp.com",
  projectId: "react-pro-16cb5",
  storageBucket: "react-pro-16cb5.appspot.com",
  messagingSenderId: "754926053028",
  appId: "1:754926053028:web:d1e2a589289dc2d2362831",
  measurementId: "G-TM6BRCZPT4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);