import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaTwitter, FaSquareInstagram } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'


const Footer = () => {
    return (
        <div className='h-20 w-full relative p-2 flex gap-2 items-center justify-around align-middle mt-6 border-t border-gray-50 mx-auto '>

            <Link href="/" className='relative p-2 w-10 h-10 object-cover object-center' >
                <Image src="/carart64.ico" alt="logo loading" priority placeholder='logo' fill />
            </Link>

            <section className='flex flex-col items-center justify-center align-middle gap-2 md:flex-row mt-4'>

                <Link href="/Booking">Book Now!</Link>

                <Link className=' p-1 text-blue-700 font-bold ' href='www.facebook.com' target="_blank">
                    <FaFacebook className='text-2xl  hover:scale-125  ' />
                </Link>
                <Link className=' p-1 text-sky-500 font-bold ' href='www.twitter.com' target="_blank">
                    <FaTwitter className='hover:scale-125 text-2xl   ' />
                </Link>
                <Link className=' p-1 text-yellow-300 font-bold ' href='www.instagram.com' target="_blank">
                    <AiFillInstagram className='hover:scale-125 text-2xl ' />
                </Link>
            </section>


            <Link href="/Profile" className='p-2 bg-sky-400 text-white shadow-md rounded-sm hover:opacity-70'>
                Profile
            </Link>

        </div>
    )
}

export default Footer