import Image from 'next/image'
import React from 'react'
import { TbManualGearbox, TbEngine } from 'react-icons/tb'
import { BsFuelPumpFill, BsFuelPump } from 'react-icons/bs'
import Link from 'next/link'


const VehicleCard = ({ vehicle }) => {
    const { imgUrl, engineCapacity,
        recommendedUsage, fuelType,
        consumptionRating,
        transmission, bookingStatus, registration } = vehicle
    return (
        <div className='w-full flex flex-col items-center align-middle justify-center gap-2 md:w-[350px] bg-slate-700 rounded-lg shadow-sm p-3 relative '>
            {
                bookingStatus === true ? <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    Booked
                </span> :
                    <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        Available
                    </span>

            }
            <div className="w-full  max-w-[350px] p-2 relative h-[250px] object-contain object-center ">
                <Image src={imgUrl} fill={true} className=' aspect-video ' alt={registration} />
            </div>

            <div className="w-full flex gap-2 items-center justify-around align-middle p-1 backdrop-blur-sm rounded-xl bg-opacity-90 bg-slate-500 ">
                <div className="flex flex-col items-center justify-center align-middle ">
                    <p className="text-bold text-2xl">
                        <TbManualGearbox />
                    </p>
                    <span className='text-lg font-light' >
                        {transmission === "Manual" ? "M" : "A"}
                    </span>
                </div>
                <div className="flex flex-col items-center justify-center align-middle ">
                    <p className="text-bold text-2xl">
                        <BsFuelPumpFill />
                    </p>
                    <span className='text-lg font-light' >
                        {consumptionRating}Km/L
                    </span>
                </div>
                <div className="flex flex-col items-center justify-center align-middle ">
                    <p className="text-bold text-2xl">
                        <TbEngine />
                    </p>
                    <span className='text-lg font-light' >
                        {engineCapacity}L
                    </span>
                </div>
                <div className="flex flex-col items-center justify-center align-middle  ">
                    <p className="text-bold text-2xl">
                        <BsFuelPump />
                    </p>
                    <span className='text-lg font-light' >
                        {fuelType === "Petrol" ? "P" : "D"}
                    </span>
                </div>
            </div>

            <Link
                href={`/Fleet/${registration} `}
                className='p-2 mt-2 bg-sky-600 text-white rounded-md shadow-sm hover:bg-sky-900 font-semibold text-lg '>
                More Info
            </Link>
        </div>
    )
}

export default VehicleCard