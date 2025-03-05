// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGMKevHVHH0ENxX4_XuLskjiLc7fdArVs",
  authDomain: "krishi-5c822.firebaseapp.com",
  projectId: "krishi-5c822",
  storageBucket: "krishi-5c822.firebasestorage.app",
  messagingSenderId: "767206831413",
  appId: "1:767206831413:web:8b77268a35f41e4ad7887c",
  measurementId: "G-6C5P78JLGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);