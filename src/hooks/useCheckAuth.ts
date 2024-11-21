import { useAppSelector } from "../store/auth/hook";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { login, logout } from "../store/auth";
import { FirebaseAuth } from "../firebase/config";
import { startLoadingNotes, useAppDispatch } from "../store";

export const useCheckAuth = () => {

    const { status } = useAppSelector((state) => state.auth)
    const dispatch = useAppDispatch();

    useEffect(() => {

        onAuthStateChanged(FirebaseAuth, async (user) => {
            if (!user) return dispatch(logout({ errorMessage: '' }));

            dispatch(login({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoUrl: user.photoURL,
                errorMessage: ''
            }));

            dispatch(startLoadingNotes());

        })

    }, []);
    
  return {
    status
  }
}
