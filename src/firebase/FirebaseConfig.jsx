// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCwq7j5nWJJnvQTkSBPrCJZ32d5W1jXE_M",
  authDomain: "ecommerce-7e47a.firebaseapp.com",
  projectId: "ecommerce-7e47a",
  storageBucket: "ecommerce-7e47a.firebasestorage.app",
  messagingSenderId: "400118000532",
  appId: "1:400118000532:web:a5747dd42e1a147ad17d81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }