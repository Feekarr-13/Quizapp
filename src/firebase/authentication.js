import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from '../config/firebaseConfig';
import { initializeApp } from "firebase/app";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Fungsi untuk login pengguna
export function loginUser(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Login berhasil: ", user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Login gagal: ", errorCode, errorMessage);
        });
}