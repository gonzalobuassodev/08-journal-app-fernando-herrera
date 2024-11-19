import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { AppDispatch } from "../store";
import { checkingCredentials, login, logout } from "./authSlice"
import { FirebaseAuth } from "../../firebase/config";
import { FirebaseError } from "firebase/app";


export const checkingAuthentication = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(checkingCredentials());
        const result = await signInWithGoogle();

        if (!result.ok) dispatch(logout({ errorMessage: result.errorMessage }));

        dispatch(login({
            uid: result.uid,
            email: result.email,
            displayName: result.displayName,
            photoUrl: result.photoURL,
            errorMessage: null
        }));
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, name }: { email: string, password: string, name: string }) => {

    return async (dispatch: AppDispatch) => {
        dispatch(checkingCredentials());

        const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({ email, password, name })

        console.log(uid)
        
        if (!ok) return dispatch(logout({ errorMessage }));

        dispatch(login({
            uid,
            email,
            displayName: name,
            photoUrl: photoURL,
            errorMessage: ''
        }))

    }

}

export const startLoginWithEmailPassword = ({email, password}: {email: string, password: string}) => {

    return async (dispatch: AppDispatch) => {
        
        const {ok, uid, photoURL, errorMessage} = await loginWithEmailPassword({email, password})

        if (!ok) return dispatch(logout({errorMessage}));
        
        dispatch(login({
            uid,
            email,
            displayName: FirebaseAuth.currentUser?.displayName,
            photoUrl: photoURL,
            errorMessage: ''
        }))


    }
}

export const startLogout = () => {

    return async (dispatch: AppDispatch) => {
        try {
            await logoutFirebase();
            dispatch(logout({ errorMessage: '' }));
            
        } catch (error) {
            if (error instanceof FirebaseError) {
                return {
                    ok: false,
                    errorMessage: error.message
                }
            }else{
                return {
                    ok: false,
                    errorMessage: "Error en el logout"
                }
            }
        }
    }

}