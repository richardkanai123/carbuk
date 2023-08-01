'use client'
import { firebaseAuth } from "@/libs/Firebase";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useContext, createContext, useEffect, useState } from "react";

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {

    const [LoggedUser, setLoggedUser] = useState(null)

    const GoogleProvider = new GoogleAuthProvider()

    const handleLogIn = () => {
        signInWithPopup(firebaseAuth, GoogleProvider)
    }

    const handleLogOut = () => {
        signOut(firebaseAuth);
    }


    useEffect(() => {
        const unsub = onAuthStateChanged(firebaseAuth, (CurrentUser) => {
            console.log(CurrentUser);
            setLoggedUser(CurrentUser)
        })

        return () => unsub()
    }, [LoggedUser])


    return (
        <AuthContext.Provider value={{ LoggedUser, handleLogIn, handleLogOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}