// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_pEL3Gss7RDUGLx5yBj6iJuXOzTyk-2U",
  authDomain: "cards-179ed.firebaseapp.com",
  projectId: "cards-179ed",
  storageBucket: "cards-179ed.appspot.com",
  messagingSenderId: "562128767409",
  appId: "1:562128767409:web:5a5e80f68f23cbe86d9590",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Firestore database
const db = getFirestore(app);

export default db;
