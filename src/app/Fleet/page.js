import VehicleCard from '@/components/VehicleCard';
import React, { Suspense } from 'react'



export const metadata = {
    title: 'CarBuk Fleet',
    description: 'A variety of vehicles to choose from',
}

const Page = async () => {

    const FleetData = await fetch("http://localhost:3000/api/fleet")
    const fleet = await FleetData.json()

    return (
        <div className="w-full flex flex-col items-center gap-4 justify-around align-middle">
            <h1 className="text-2xl fony-bold mt-4  ">Our Fleet</h1>

            <div className=" self-center w-full flex gap-2 flex-wrap p-2 items-center justify-evenly">
                <Suspense fallback={
                    <p className='text=3xl font-extrabold text-center'>
                        Loading Vehicles......
                    </p>}>
                    {
                        fleet.map((car) => (
                            <VehicleCard key={car.registration} vehicle={car} />
                        ))
                    }
                </Suspense>
            </div>
        </div>
    )
}

export default Page