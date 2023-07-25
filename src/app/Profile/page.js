import UserProfile from '@/components/UserProfile'

const Page = () => {
    return (
        <div className='w-full p-4 flex flex-col gap-4 align-middle justify-center items-center'>
            <h1 className='text-xl mt-4 font-semibold'>Profile</h1>
            <UserProfile />
        </div>
    )
}

export default Page