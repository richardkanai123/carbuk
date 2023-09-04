'use client'
import ContactForm from '@/components/ContactForm'
import Image from 'next/image'
import React from 'react'
import { BsFillSendFill } from 'react-icons/bs'



const Page = () => {
    return (
        <div className="w-full flex flex-col items-center align-middle justify-center gap-4 p-2">
            <h1 className="text-3xl text-transparent font-bold bg-gradient-to-r from-cyan-400 to-amber-300 text-clip bg-clip-text mb-5 mt-10">
                Contact us ...
            </h1>

            <div className="w-full flex flex-wrap md:flex-nowrap items-center align-middle justify-center p-2 gap-2 ">
                <ContactForm />
            </div>

        </div>
    )
}

export default Page
