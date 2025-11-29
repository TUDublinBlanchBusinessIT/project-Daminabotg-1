// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCK4pONIFNwBp8FrtpVmXQ3UaKZ8QXVNzo",
  authDomain: "gym-form-radar.firebaseapp.com",
  projectId: "gym-form-radar",
  storageBucket: "gym-form-radar.appspot.com",
  messagingSenderId: "364755850342",
  appId: "1:364755850342:web:630b4e03a4138ec9f589a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore Database
export const db = getFirestore(app);
