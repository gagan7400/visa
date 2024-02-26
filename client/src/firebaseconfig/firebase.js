// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyANksBsyu1wdGEs_eMzJI7MBDF9UnYnGfY",
    authDomain: "adventure-visa.firebaseapp.com",
    projectId: "adventure-visa",
    storageBucket: "adventure-visa.appspot.com",
    messagingSenderId: "885845688486",
    appId: "1:885845688486:web:13e1eea28c8903aeb13467",
    measurementId: "G-LWPRZ73N9V"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const analytics = getAnalytics(app);