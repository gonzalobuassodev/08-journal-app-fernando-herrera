import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";
import { FirebaseError } from "firebase/app";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);

        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid,
        }



    } catch (error: unknown) {

        console.error(error)
        // const errorCode = error.code;
        // const errorMessage = error.message;

        // const credential = GoogleAuthProvider.credentialFromError(error);

        return {
            ok: false,
            errorMessage: "Error en el login con google",
        }
    }
}

export const registerUserWithEmailPassword = async ({ email, password, name }: { email: string, password: string, name: string }) => {

    try {

        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;
        console.log(resp.user)

        if (!FirebaseAuth.currentUser) return { ok: false, errorMessage: "Error en el registro con email y password" };

        await updateProfile(FirebaseAuth.currentUser, { displayName: name });

        return {
            ok: true,
            uid,
            email,
            displayName: name,
            photoURL
        }

    } catch (error) {
        if (error instanceof FirebaseError) {

            // console.error({error})
            let errorMessage = '';

            if (error.code === 'auth/email-already-in-use') {
                errorMessage = "El correo ya esta en uso"
            } else {
                errorMessage = error.message
            }

            return {
                ok: false,
                errorMessage
            }

        } else {
            return {
                ok: false,
                errorMessage: "Error en el registro con email y password"
            }
        }
    }
}

export const loginWithEmailPassword = async ({ email, password }: { email: string, password: string }) => {

    try {

        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL, displayName } = resp.user;

        if (!FirebaseAuth.currentUser) return {
            ok: false,
            errorMessage: "Error en el login con email y password"
        }

        return {
            ok: true,
            uid,
            email,
            displayName,
            photoURL,
            errorMessage: ''
        }

    } catch (error) {
        if (error instanceof FirebaseError) {
            return {
                ok: false,
                errorMessage: error.message
            }
        }
        return {
            ok: false,
            errorMessage: "Error en el login con email y password"
        }
    }

}

export const logoutFirebase = async (): Promise<void> => {
    return await FirebaseAuth.signOut();
}
