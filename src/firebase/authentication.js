import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from '../config/firebaseConfig';
import { initializeApp } from "firebase/app";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Fungsi untuk registrasi pengguna
export function registerUser(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("User registered: ", user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
        });
}