import React from 'react'
import CarBooking from '@/components/CarBooking'

const Page = async ({ params }) => {
    const { reg } = params
    const FleetData = await fetch("http://localhost:3000/api/fleet")
    const fleet = await FleetData.json()
    const carData = fleet.filter((car) => {
        return car.registration === reg
    }
    )


    return (
        <div className='p-2 flex flex-col align-middle justify-center gap-3'>
            <CarBooking carData={carData} />
        </div>
    )
}

export default Page