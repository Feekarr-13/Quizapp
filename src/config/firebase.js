// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics"; // Tambahkan logEvent

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBRlL1B5vlharwCK0PXJ5Xl8DrXt6Dm6Es",
    authDomain: "quiz-app-76578.firebaseapp.com",
    projectId: "quiz-app-76578",
    storageBucket: "quiz-app-76578.firebasestorage.app",
    messagingSenderId: "253828230334",
    appId: "1:253828230334:web:3e33c032b9a3700a13c2ef",
    measurementId: "G-TFTZ3G9Q90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Contoh penggunaan analytics
logEvent(analytics, 'page_view'); // Mengirim event "page_view" ke Firebase Analytics