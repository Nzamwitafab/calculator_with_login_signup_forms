// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVomBFSQ4QYWAQSGKUcN8-Xo9dvVLJmfw",
  authDomain: "authoticationproject.firebaseapp.com",
  projectId: "authoticationproject",
  storageBucket: "authoticationproject.appspot.com",
  messagingSenderId: "754419236985",
  appId: "1:754419236985:web:ceb6f5f67126cd0bfa54a8"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_FIRESTORE = getFirestore(FIREBASE_APP);