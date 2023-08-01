import React from 'react'
import Link from 'next/link'

const Page = async () => {
    const FleetData = await fetch("http://localhost:3000/api/fleet")
    const fleet = await FleetData.json()

    return (
        <div className='w-full flex flex-col gap-6 min-h-[60vh] mt-2 p-2 items-center justify-center align-middle'>
            <h1 className="text-xl font-bold">Fleet Management</h1>

            <Link href="./Fleet/AddNewVehicle" className='self-start align-top underline text-gray-500 hover:decoration-transparent p-1 hover:text-gray-300 '>
                Add New
            </Link>

            <div>List vehicles here and find a way to edit them</div>
        </div>
    )
}

export default Page