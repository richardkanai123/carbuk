'user client'
import React from 'react'
import { firebaseAuth } from '@/libs/Firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
const LoginButton = ({ width }) => {

    const GoogleProvider = new GoogleAuthProvider()

    const handleLogIn = () => {
        signInWithPopup(firebaseAuth, GoogleProvider)
    }

    return (
        <button onClick={handleLogIn} className={`p-3 rounded-md bg-sky-500 hover:bg-opacity-80 hover:px-2 hover:py-3 w-${width} outline-0 ring-0 border-0 font-bold `}>Log in</button>
    )
}

export default LoginButton