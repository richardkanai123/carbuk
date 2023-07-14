import FleetFilters from '@/components/FleetFilter'
import React from 'react'

const Page = async () => {

    const FleetData = await fetch("http://localhost:3000/api/fleet")
    const fleet = await FleetData.json()

    return (
        <div className='flex flex-col gap-2 items-center justify-center align-middle p-4'>
            <h1 className="font-bold text-3xl text-transparent bg-gradient-to-r from-cyan-400 to-amber-300 text-clip bg-clip-text mb-5 mt-2">
                Book Now
            </h1>

            <FleetFilters fleet={fleet} />

        </div>
    )
}

export default Page