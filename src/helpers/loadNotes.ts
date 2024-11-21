import { collection, DocumentData, getDocs, QuerySnapshot } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";
import { Note } from "../store";

export const loadNotes = async (uid: string) => {
    if (!uid) throw new Error('No uid');

    const collectionRef = collection( FirebaseDB, `${uid}/journal/notes`);
    const docs: QuerySnapshot<DocumentData> = await getDocs(collectionRef);

    const notes: Note[] = docs.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    } as Note));

    return notes;
}