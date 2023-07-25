'use client'
import { useAuthState } from 'react-firebase-hooks/auth';
import { firebaseAuth } from '@/libs/Firebase'
import LoginButton from '@/components/LoginButton';
import { signOut } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const UserProfile = () => {
    const [user, loading, error] = useAuthState(firebaseAuth)
    const Router = useRouter()

    if (loading) {
        return (
            <div className="flex items-center justify-center">
                <p className="text-3xl font-bold">Loading User...</p>
            </div>
        )
    }
    if (error) {
        return (
            <div className='flex flex-col items-center gap-4 align-middle justify-center'>
                <p>Error Occured!</p>
                <p>{error.message}</p>
                <button className='w-[200px] rounded-lg py-4 px-2' onClick={() => Router.push('/')}>
                    Go Back Home
                </button>
            </div>
        )
    }

    if (user === null || user === undefined) {
        return (
            <div className="p-2 flex flex-col gap-4 align-middle items-center">
                <p>No user, Please Log In</p>
                <LoginButton width={['200px']} />
            </div>
        )
    }

    return (
        <div className='p-4 h-[60vh] w-[90%] self-center flex flex-col align-middle justify-center items-center'>
            <div className="w-full self-center p-1 flex flex-col items-center justify-center align-middle ">
                <div className="flex items-center justify-center align-middle self-center relative object-contain object-center">
                    <Image className='rounded-full ' src={user.photoURL} alt={user.photoURL} width={100} height={100} />
                </div>
                <p>{user.displayName}</p>
                <p>{user.email}</p>
                <button onClick={async () => {
                    try {
                        await signOut(firebaseAuth)
                            .then(() => {
                                toast.info('Logged Out!')
                            })
                    } catch (error) {
                        toast.error(`Error Occured: ${error.message}`)
                    }
                }} className='p-3 mt-2 rounded-md bg-sky-500 hover:bg-opacity-80 hover:px-2 hover:py-3 w-[150px] outline-0 ring-0 border-0 font-bold'>
                    Log Out
                </button></div>

            <ToastContainer />
        </div>
    )

}

export default UserProfile