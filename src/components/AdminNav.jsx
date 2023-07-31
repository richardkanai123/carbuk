'use client'

import Link from "next/link"
import { AiTwotoneMessage } from "react-icons/ai"
import { BsFillBookmarkPlusFill } from "react-icons/bs"
import { FaCarSide } from "react-icons/fa"
import { MdDashboard } from "react-icons/md"

const AdminNav = () => {

    const navLinks = [
        {
            icon: <MdDashboard />,
            tag: "DashBoard",
            url: "/Admin"
        },
        {
            icon: <FaCarSide />,
            tag: "Vehicles",
            url: "/Admin/Fleet"
        },
        {
            icon: <BsFillBookmarkPlusFill />,

            tag: "Booking",
            url: "/Admin/Booking"
        },

        {
            icon: <AiTwotoneMessage />,
            tag: "Messages",
            url: "/Admin/Messages"
        },
    ]

    return (
        <nav className='w-full md:w-fit self-start flex flex-wrap gap-4 md:gap-2 mt-4 lg:mt-5 border-gray-200 py-1 px-2 border-b-2 '>
            {
                navLinks.map((link) => (
                    <Link className="active:underline text-gray-200 text-base flex items-center align-middle hover:text-blue-300" href={link.url} key={link.tag}>
                        <span className="text-2xl">{link.icon}</span>
                        {link.tag}</Link>
                ))
            }

        </nav>
    )
}

export default AdminNav