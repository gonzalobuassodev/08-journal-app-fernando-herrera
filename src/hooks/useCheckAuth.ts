import { useDispatch } from "react-redux";
import { useAppSelector } from "../store/auth/hook";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { login, logout } from "../store/auth";
import { FirebaseAuth } from "../firebase/config";

export const useCheckAuth = () => {

    const { status } = useAppSelector((state) => state.auth)
    const dispatch = useDispatch();

    useEffect(() => {

        onAuthStateChanged(FirebaseAuth, async (user) => {
            console.log(user)
            if (!user) return dispatch(logout({ errorMessage: 'No hay usuario' }));

            dispatch(login({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoUrl: user.photoURL,
                errorMessage: ''
            }))

        })

    }, []);
    
  return {
    status
  }
}
