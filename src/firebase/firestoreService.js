import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { firebaseConfig } from '../config/firebaseConfig';
import { initializeApp } from "firebase/app";


// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Fungsi login dan simpan ke database Firestore
export async function loginUserAndSave(email, password) {
    try {
        // Login pengguna
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        console.log("Login berhasil:", user);

        // Menambahkan atau memperbarui data pengguna ke Firestore
        await setDoc(doc(db, "users", user.uid), {
            email: user.email,
            lastLogin: new Date(), // Menyimpan waktu login terakhir
        });

        console.log("Data pengguna berhasil disimpan di Firestore.");
    } catch (error) {
        console.error("Login gagal:", error.code, error.message);
    }
}