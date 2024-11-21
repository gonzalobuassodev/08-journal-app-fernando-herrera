import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface JournalState {
    isSavingNewNote: boolean;
    messageSaved: string;
    notes: Note[];
    active: Note;
}

export interface Note {
    id?: string;
    title: string;
    body: string;
    date: number;
    imageUrls: string[];
}

const initialState: JournalState = {
    isSavingNewNote: false,
    messageSaved: '',
    notes: [],
    active: {
        id: '',
        title: '',
        body: '',
        date: 0,
        imageUrls: []
    } as Note,
}

export const journalSlice = createSlice({
    name: 'journal',
    initialState,
    reducers: {
        isCreatingNewNote: (state) => {
            state.isSavingNewNote = !state.isSavingNewNote;
        },
        addNewEmptyNote: (state, action: PayloadAction<Note>) => {
            state.notes.push(action.payload);
            state.isSavingNewNote = false;
        },
        setActiveNote: (state, action: PayloadAction<Note>) => {
            state.active = action.payload;
            state.messageSaved = '';
        },
        setNotes: (state, action: PayloadAction<Note[]>) => {
            state.notes = action.payload;
        },
        setSaving: (state) => {
            state.isSavingNewNote = true;
            state.messageSaved = '';
        },
        updateNote: (state, action: PayloadAction<Note>) => {
            state.isSavingNewNote = false;
            state.notes = state.notes.map((note) => {
                if (note.id === action.payload.id){
                    return action.payload;
                }
                return note;
            })
            state.messageSaved = `La nota ${action.payload.title}, actualizada correctamente`;
        },
        setPhotosToActiveNote: (state, action: PayloadAction<string[]>) => {
            state.active.imageUrls = [...state.active.imageUrls, ...action.payload]
            state.isSavingNewNote = false;
        },
        clearNotesLogout: (state) => {
            state.isSavingNewNote = initialState.isSavingNewNote;
            state.messageSaved = initialState.messageSaved;
            state.notes = initialState.notes;
            state.active = initialState.active;
        },
        deleteNoteById: (state, action: PayloadAction<string>) => {
            state.notes = state.notes.filter((note) => note.id !== action.payload);
            state.active = initialState.active;
        }
    },
})

export const {
    addNewEmptyNote,
    clearNotesLogout,
    deleteNoteById,
    isCreatingNewNote,
    setActiveNote,
    setNotes,
    setPhotosToActiveNote,
    setSaving,
    updateNote,
} = journalSlice.actions

// export default counterSlice.reducer