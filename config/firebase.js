import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBqwIkWly-NDz1vb--XeVXRJw6VqW3kWgk",
  authDomain: "careercarve-bb442.firebaseapp.com",
  projectId: "careercarve-bb442",
  storageBucket: "careercarve-bb442.appspot.com",
  messagingSenderId: "591567613863",
  appId: "1:591567613863:web:867abf88afb8ccd0481082",
  measurementId: "G-DB2FLJYGQ0"
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();