import React from 'react'
import { ClipLoader } from 'react-spinners'

const Page = () => {
    return (
        <div className='w-full p-4 flex flex-col gap-3 items-center align-middle justify-center mt-4'>
            <h1 className="text-3xl font-bold">Loading Admin Panel ...</h1>
            <div className='flex-1'><ClipLoader /></div>
            <div className='flex-1'><ClipLoader /></div>
            <div className='flex-1'><ClipLoader /></div>
            <div className='flex-1'><ClipLoader /></div>
        </div>
    )
}

export default Page