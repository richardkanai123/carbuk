'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from 'react'
import { MdOutlineMenuOpen } from 'react-icons/md'


const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false)



    const navLinks = [
        {
            tag: "About Us",
            url: "/#About"
        },
        {
            tag: "Book",
            url: "/Booking"
        },

        {
            tag: "Our Fleet",
            url: "/Fleet"
        },

        {
            tag: "Contact",
            url: "/Contact"
        },
    ]

    return (
        <div className='z-20 h-10 w-full max-w-5xl relative p-1 flex items-center justify-center align-middle mb-6'>
            <div className='w-full fixed p-4 top-0 bg-inherit flex flex-1 items-center justify-center align-middle border-b border-gray-50'>
                <Link href="/" className='relative p-2 w-10 h-10 object-cover object-center' >
                    <Image src="/carart64.ico" alt="logo loading" priority placeholder='logo' fill />
                </Link>

                <div className="relative flex-1 ">

                    <nav className={
                        menuOpen ? "relative flex flex-1 items-center justify-center align-middle  text-lg" : "flex flex-1 items-center justify-center align-middle  text-lg"
                    }>
                        {/* create links by mapping through navLinks */}
                        <ul
                            className={menuOpen ? 'w-[80vw] left-0 bg-sky-800 absolute top-10 flex flex-col items-center justify-center align-middle gap-3 z-50 p-4 left[10px] transition-opacity ease-linear duration-500 ' : 'hidden md:flex items-center justify-center align-middle gap-3 z-10 transition-all ease-linear duration-500 '}
                        >

                            {navLinks.map((link) => (
                                <li

                                    className='hover:underline p-2 rounded-md md:rounded-none w-full md:w-fit hover:bg-emerald-500   text-gray-300 bg-opacity-90  sm:border-b border-gray-50 md:border-0 underline-offset-2 pointer-events-none ' key={link.tag}>
                                    <Link
                                        onClick={(prev) => setMenuOpen(!prev)}
                                        className=' pointer-events-auto w-full h-full active:underline' href={link.url}>{link.tag}</Link>
                                </li>
                            ))}

                        </ul>

                    </nav>

                </div>

                <div className="w-fit flex  items-center align-middle justify-center gap-1 self-end p-1">
                    <Link href="/Profile" className='p-2 bg-sky-400 text-white shadow-md rounded-sm hover:opacity-70'>
                        Account
                    </Link>

                    <span
                        onClick={() => setMenuOpen(!menuOpen)}
                        className='md:hidden text-3xl text-sky-400 cursor-pointer text-clip bg-clip-text font-extrabold hover:text-zinc-800'>
                        {
                            menuOpen ? < MdOutlineMenuOpen /> : <GiHamburgerMenu />
                        }
                    </span>
                </div>

            </div>
        </div>
    )
}

export default Nav