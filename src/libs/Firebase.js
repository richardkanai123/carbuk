// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB_k7fg_ZXc-FB94rYpqRtwqjMmriqjK14",
    authDomain: "carbuk-001next13.firebaseapp.com",
    projectId: "carbuk-001next13",
    storageBucket: "carbuk-001next13.appspot.com",
    messagingSenderId: "830012863067",
    appId: "1:830012863067:web:9d587ec92ffd7a9e7b057e",
    measurementId: "G-2DB74J40PT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const firebaseAuth = getAuth(app)