// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAb3QZWsbToIyiNMXAfot1T1-VJueaxOsM",
    authDomain: "react-cursos-4bb38.firebaseapp.com",
    projectId: "react-cursos-4bb38",
    storageBucket: "react-cursos-4bb38.firebasestorage.app",
    messagingSenderId: "967676911310",
    appId: "1:967676911310:web:1b852a41e5e9d08e0e3a9f"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
