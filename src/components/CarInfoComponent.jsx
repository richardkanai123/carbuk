'use client'
import { TbManualGearbox, TbEngine } from 'react-icons/tb'
import { BsFuelPumpFill, BsFuelPump } from 'react-icons/bs'
import { GiMountainRoad } from 'react-icons/gi'
import { TbRoad } from 'react-icons/tb'
import { AiFillCar } from 'react-icons/ai'
import { HiIdentification } from 'react-icons/hi'

const CarInfoComponent = ({ vehicle }) => {
    const { engineCapacity, bodyType,
        recommendedUsage, fuelType,
        consumptionRating,
        transmission, rentalRatePerDay,
        rentalRatePerHour, registration } = vehicle
    return (
        <div className='relative w-full items-baseline text-center flex flex-col gap-2'>
            <div className="w-full flex gap-2 font-bold items-center">
                <p className="text-xl"><HiIdentification /></p>
                <span className="text-3xl">{registration}</span>
            </div>
            <div className="w-full flex gap-2 items-center">
                <p className="text-xl"><AiFillCar /></p>
                <span>{bodyType}</span>
            </div>
            <div className="w-full flex gap-2 items-center">
                <p className="text-xl"><TbManualGearbox /></p>
                <span>{transmission}</span>
            </div>
            <div className="w-full flex gap-2 items-center">
                <p className="text-xl"><TbEngine /></p>
                <span>{engineCapacity}L</span>
            </div>
            <div className="w-full flex gap-2 items-center">
                <p className="text-xl" ><BsFuelPumpFill /></p>
                <span>{consumptionRating}km/l</span>
            </div>
            <div className="w-full flex gap-2 items-center">
                <p className="text-xl" ><BsFuelPump /></p>
                <span>{fuelType}</span>
            </div>
            <div className="w-full flex gap-2 items-center">
                <p className="text-xl" >{recommendedUsage === "Onroad" ? <TbRoad /> : <GiMountainRoad />}</p>
                <span>{recommendedUsage}</span>
            </div>
            <div className="w-full flex flex-col gap-2 font-bold">
                <p className="text-2xl" >Rental Rates</p>
                <span>ksh. {rentalRatePerHour}/day</span>
            </div>
        </div>
    )
}

export default CarInfoComponent