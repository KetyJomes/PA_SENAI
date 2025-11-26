// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3f3UiqR-BwhlMXJLQfVBBRrf0yGyC5Fk",
  authDomain: "native-147ae.firebaseapp.com",
  projectId: "native-147ae",
  storageBucket: "native-147ae.firebasestorage.app",
  messagingSenderId: "710143889630",
  appId: "1:710143889630:web:fe783290a7ba006bc7324f",
  measurementId: "G-9SY6NMGF4Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);