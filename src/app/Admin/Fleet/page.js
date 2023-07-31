import AddVehicle from '@/components/AddVehicle'
import React from 'react'

const Page = async () => {
    const FleetData = await fetch("http://localhost:3000/api/fleet")
    const fleet = await FleetData.json()

    return (
        <div className='w-full flex flex-col gap-6 min-h-[60vh] mt-2 p-2 items-center justify-center align-middle'>
            <h1 className="text-xl font-bold">Fleet Management</h1>

            <AddVehicle />

            <div>List vehicles here and find a way to edit them</div>
        </div>
    )
}

export default Page