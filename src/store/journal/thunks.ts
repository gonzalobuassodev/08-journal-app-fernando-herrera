import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { AppDispatch, RootState } from '../store';
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, deleteNoteById, isCreatingNewNote, Note, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from './journalSlice';
import { fileUpload, loadNotes } from "../../helpers";

export const startNewNote = () => {
    return async (dispatch: AppDispatch, getState:() => RootState) => {

        dispatch(isCreatingNewNote())

        const uid = getState().auth.uid;

        const newNote: Note = {
            title: 'New Note',
            body: '',
            date: new Date().getTime(),
            imageUrls: []
        }

        const newDoc = doc( collection(FirebaseDB, `${uid}/journal/notes`));
        await setDoc( newDoc, newNote );

        newNote.id = newDoc.id;

        dispatch( addNewEmptyNote( newNote ))
        dispatch( setActiveNote( newNote ))

    }
}

export const startLoadingNotes = () => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {

        const uid = getState().auth.uid;

        if (!uid) throw new Error('No uid');

        const docs = await loadNotes(uid);

        dispatch(setNotes(docs));
        // dispatch(setActiveNote(docs[0]));
       
    }
}   

export const startUpdatingNote = () => {

    return async (dispatch: AppDispatch, getState: () => RootState) => { 

        dispatch(setSaving());

        const {uid} = getState().auth;
        const {active: note } = getState().journal;

        const noteToFirestore: Note = {...note}
        delete noteToFirestore.id;

        const docRef = doc( FirebaseDB, `${uid}/journal/notes/${note.id}`);

        await setDoc(docRef, noteToFirestore, { merge: true});

        // console.log({...note, id: note.id})
        dispatch(updateNote(note))

    }
}

export const uploadImageToCloudinary = (files: FileList
) => {
    return async (dispatch: AppDispatch) => {
        dispatch(setSaving());

        const fileUploadPromises = [];

        for (const file of files) {
            fileUploadPromises.push(fileUpload(file));
        }

        const urls = await Promise.all(fileUploadPromises);

        dispatch(setPhotosToActiveNote(urls));

    }
}

export const startToDeleteNoteById = () => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {

        const { uid } = getState().auth;
        const { active: note } = getState().journal;
        
        if (!note.id) throw new Error('No id');

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);

        await deleteDoc(docRef);
        
        dispatch(deleteNoteById(note.id));

    }
}