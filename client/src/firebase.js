// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a3585.firebaseapp.com",
  projectId: "mern-estate-a3585",
  storageBucket: "mern-estate-a3585.appspot.com",
  messagingSenderId: "433239337844",
  appId: "1:433239337844:web:8f5901cfd0e7c88f3f1a21",
  measurementId: "G-01W5RS3REW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);