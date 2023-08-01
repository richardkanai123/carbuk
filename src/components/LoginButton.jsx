'user client'
import React from 'react'
import { UserAuth } from '@/Context/AuthContext'
const LoginButton = () => {

    const { handleLogIn } = UserAuth()

    return (
        <button onClick={handleLogIn} className={`p-3 rounded-md text-center bg-sky-500 hover:bg-opacity-80 w-40 outline-0 ring-0 border-0 font-bold `}>Log in</button>
    )
}

export default LoginButton