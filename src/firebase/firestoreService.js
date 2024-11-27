import { getFirestore, collection, addDoc } from "firebase/firestore";
import { firebaseConfig } from '../config/firebaseConfig';

const db = getFirestore(firebaseConfig);

export async function addUser() {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            name: "Fikar",
            email: "Fikar13@gmail.com",
            age: 25
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}