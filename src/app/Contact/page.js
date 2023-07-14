'use client'
import Image from 'next/image'
import React from 'react'
import { BsFillSendFill } from 'react-icons/bs'




export const metadata = {
    title: 'CarBuk Contact',
    description: 'Contact page for CarBuk',
}

const Page = () => {
    return (
        <div className="w-full flex flex-col items-center align-middle justify-center gap-4 p-2">
            <h1 className="text-3xl text-transparent font-bold bg-gradient-to-r from-cyan-400 to-amber-300 text-clip bg-clip-text mb-5 mt-2">
                Contact us ...
            </h1>

            <div className="flex flex-wrap md:flex-nowrap items-center align-middle justify-around p-2 gap-2 ">
                <div className='w-full md:w-1/2 p-2 relative object-cover h-[300px] '>
                    <Image src="contact.svg" alt='contact_image' height={300} width={350} objectFit="cover" />
                </div>
                <div className='w-full md:w-1/2 p-2 object-contain '>
                    <form className='flex flex-col items-center align-middle justify-center gap-2 w-full'>
                        <p className='text-md font-semibold italic bg-gradient-to-r from-cyan-400 to-amber-300 text-clip bg-clip-text' >Fill in the Form</p>

                        <div className="w-full p-1 flex flex-col mb-3">
                            <label className='w-full text-md mb-1' htmlFor="Name">Your Name</label>
                            <input type="text" className='p-2 bg-opacity-80 ring-0 border-none bg-slate-700 rounded-md active:ring-0 focus:ring-0 w-full ' name="Name" id="Name" placeholder='Your name' />
                        </div>

                        <div className="w-full p-1 flex flex-col mb-3">
                            <label className='w-full text-md mb-1' htmlFor="Email">Your Email</label>
                            <input type="email" className='p-2 bg-opacity-80 ring-0 border-none bg-slate-700 rounded-md active:ring-0 focus:ring-0 w-full ' name="Email" id="Email" placeholder='Your email address' />
                        </div>

                        <div className="w-full p-1 flex flex-col mb-3">
                            <label className='w-full text-md mb-1' htmlFor="Message">Your Message</label>
                            <textarea
                                name='Message'
                                id='Message'
                                rows="10"
                                className='w-full p-2  bg-opacity-80 ring-0 border-none bg-slate-700 rounded-md active:ring-0 focus:ring-0'>

                            </textarea>
                        </div>

                        <button type="submit" className=' w-1/2 p-2 bg-sky-500 text-white rounded-lg font-semibold flex items-center align-middle gap-1 justify-center cursor-pointer' >
                            Send Message  <BsFillSendFill />
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Page