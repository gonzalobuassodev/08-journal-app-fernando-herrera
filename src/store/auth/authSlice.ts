import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
    status?: string;
    uid: string | null | undefined;
    email: string | null | undefined;
    displayName: string| null | undefined;
    photoUrl: string| null | undefined;
    errorMessage: string| null | undefined; 
}

const initialState: AuthState = {
    status: 'checking',  // 'checking' | 'not-authenticated' | 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoUrl: null,
    errorMessage: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, {payload}: PayloadAction<AuthState>) => {
            state.status = 'authenticated';
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoUrl = payload.photoUrl;
            state.errorMessage = payload.errorMessage;
        },
        logout: (state, { payload }: PayloadAction<{errorMessage: string | undefined}>) => {
            state.status = 'not-authenticated';
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoUrl = null;
            state.errorMessage = payload.errorMessage;
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        }
    },
})
export const { 
    checkingCredentials,
    login, 
    logout, 
} = authSlice.actions

// export default counterSlice.reducer