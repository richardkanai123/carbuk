'use client'

import { useState, useContext, useEffect } from "react"
import { BsSearch } from 'react-icons/bs'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import { format, addDays } from 'date-fns'

const FleetFilters = ({ fleet }) => {

    const [BodyType, setBodyType] = useState('Select')
    const [fuelType, setfuelType] = useState('Select')
    const [roadType, setroadType] = useState('Select')
    const [FleetData, setFleetData] = useState(fleet)
    const [Range, SetRange] = useState(
        [
            {
                startDate: new Date(),
                endDate: addDays(new Date(), 1),
                key: 'selection',

            }
        ])
    const [selectedDate, setSelectedDate] = useState(Range)


    const handleSelect = (ranges) => {
        // console.log(ranges.selection);
        SetRange([ranges.selection])
    }

    useEffect(() => {
        setSelectedDate(Range)
    }, [Range])

    console.log(selectedDate[0].endDate);

    return (

        <>
            <div className="w-full p-2 flex flex-col flex-wrap bg-opacity-80 bg-blend-overlay md:flex-row justify-around gap-2 border-b-2 border-white ">
                <div className="min-w-[200px] mb-2 flex  p-2 gap-2 align-middle items-center justify-center ">
                    <p className="text-xl"> Type</p>
                    <select value={BodyType} onChange={(e) => setBodyType(e.target.value)} className="w-full md:w-80 p-2 bg-slate-700 bg-opacity-95 rounded-md ring-0 outline-none border-none" >
                        <option value="Select" className="p-2 font-semibold">Select</option>
                        <option value="Sedan" className="p-2 font-semibold">Sedan</option>
                        <option value="Hatchback" className="p-2 font-semibold">Hatchback</option>
                        <option value="Minivan" className="p-2 font-semibold">MiniVan</option>
                        <option value="SUV" className="p-2 font-semibold">SUV</option>
                        <option value="Truck" className="p-2 font-semibold">Truck</option>
                        <option value="Van" className="p-2 font-semibold">Van</option>
                        <option value="MPV" className="p-2 font-semibold">MPV</option>
                        <option value="Convertible" className="p-2 font-semibold">Convertible</option>
                        <option value="Motorcycle" className="p-2 font-semibold">Motorcycle</option>
                    </select>
                </div>

                <div className="min-w-[200px] mb-2 flex p-2 gap-2 align-middle items-center justify-center  ">
                    <p className="text-xl">Fuel</p>
                    <select value={fuelType} onChange={(e) => setfuelType(e.target.value)} className="w-full md:w-80 p-2 bg-slate-700 bg-opacity-95 rounded-md ring-0 outline-none border-none" >
                        <option value="Select" className="p-2 font-semibold">Select</option>
                        <option value="Petrol" className="p-2 font-semibold">Petrol</option>
                        <option value="Diesel" className="p-2 font-semibold">Diesel</option>
                    </select>
                </div>

                <div className="min-w-[200px] mb-2 flex p-2 gap-2 align-middle items-center justify-center  ">
                    <p className="text-xl">Terrain</p>
                    <select value={roadType} onChange={(e) => setroadType(e.target.value)} className="w-full md:w-80 p-2 bg-slate-700 bg-opacity-95 rounded-md ring-0 outline-none border-none" >
                        <option value="Select" className="p-2 font-semibold">Select</option>
                        <option value="OnRoad" className="p-2 font-semibold">On-road</option>
                        <option value="Offroad" className="p-2 font-semibold">Off-road</option>
                    </select>
                </div>

            </div>


            <form className="p-2 w-full flex flex-col gap-2 items-center justify-center align-middle ">

                <div className="w-full flex flex-col md:flex-row md:flex-nowrap  align-middle justify-center items-center mx-auto self-center rounded-md  p-4">
                    <DateRange
                        showPreview={false}
                        displayMode="dateRange"
                        className="text-red-800 p-2 rounded-md "
                        minDate={new Date()}
                        onChange={handleSelect}
                        showMonthAndYearPickers={false}
                        showDateDisplay={false}
                        months={1}
                        direction="horizontal"
                        ranges={Range}
                        editableDateInputs={true}
                        moveRangeOnFirstSelection={false}
                    />
                    <p className="flex gap-2 align-middle justify-center "> Selected Dates:
                        <span>
                            {format(selectedDate[0]?.startDate, 'MM/dd/yyyy')}
                        </span>
                        TO :
                        <span>
                            {format(selectedDate[0]?.endDate, 'MM/dd/yyyy')}
                        </span>
                    </p>
                </div>
            </form>

        </>
    )
}

export default FleetFilters