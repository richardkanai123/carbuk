'use client'

import { useState, useContext, useEffect } from "react"
import { BsSearch } from 'react-icons/bs'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import { format, addDays } from 'date-fns'
import dayjs from 'dayjs'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { UserAuth } from "@/Context/AuthContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/libs/Firebase";


const FleetFilters = ({ fleet }) => {


    const { LoggedUser } = UserAuth()


    const [BodyType, setBodyType] = useState('Select')
    const [fuelType, setfuelType] = useState('Select')
    const [roadType, setroadType] = useState('Select')
    const [FleetData, setFleetData] = useState(fleet)

    // initial range for the range picker, changes using the handleselect function
    const [Range, SetRange] = useState(
        [
            {
                startDate: new Date(),
                endDate: addDays(new Date(), 1),
                key: 'selection',

            }
        ])
    const [selectedDate, setSelectedDate] = useState(Range)
    const [filteredFleetData, setFilteredFleetData] = useState(FleetData)
    const [SelectedDuration, setSelectedDuration] = useState()
    const [SelectedVehicleReg, setSelectedVehicleReg] = useState("Select")


    // toast dismissal function
    const dismissToast = () => toast.dismiss();

    // returns booking details if a valid car is selected
    function showBookingDetails() {
        let newBooking = {}
        // get selected vehicle details
        const SelectedVehicleData = FleetData.filter((vehicle) => {
            return vehicle.registration === SelectedVehicleReg
        })

        if ((SelectedVehicleReg === null || SelectedVehicleReg === undefined) || SelectedVehicleReg === "Select") {
            toast(
                "Please select a vehicle",
                {
                    type: "error",
                    autoClose: 3000,
                    theme: "colored",
                    toastId: 'newConfirmToast'
                }
            )
            return false;
        }

        else {

            // data for a new booking record to be uploaded into the db
            newBooking = {
                "lastBookingDate": format(selectedDate[0]?.endDate, 'MM/dd/yyyy'),
                "startBookingDate": format(selectedDate[0]?.startDate, 'MM/dd/yyyy'),
                "bookingDuration": SelectedDuration,
                "selectedVehicle": SelectedVehicleReg,
                "bookingCost": SelectedVehicleData[0].rentalRatePerDay * SelectedDuration,
                "bookingStatus": "Pending"
            }

            toast(
                <div className="p-2 flex flex-col gap-2 align-middle justify-center items-center">
                    <p className="text-xl" >Booking: {SelectedVehicleReg} </p>
                    <p className="text-sm">Body:{SelectedVehicleData[0].bodyType}</p>
                    <p className="text-sm">Fuel:{SelectedVehicleData[0].fuelType}</p>
                    <p className="text-base">Duration:{SelectedDuration} days </p>
                    <p className="text-sm">
                        {format(selectedDate[0]?.startDate, 'MM/dd/yyyy')} to {format(selectedDate[0]?.endDate, 'MM/dd/yyyy')}
                    </p>
                    <p className="text-xl">Total Cost: {SelectedVehicleData[0].rentalRatePerDay * SelectedDuration}</p>

                    <div className="w-full flex p-1 align-middle justify-evenly">
                        <button
                            onClick={async () => {

                                if (!LoggedUser) {
                                    toast.dismiss()
                                    toast.error("Log in to Book")
                                }


                                toast.update("Booking...")
                                const newBooking = {
                                    "to": format(selectedDate[0]?.endDate, 'MM/dd/yyyy'),
                                    "from": format(selectedDate[0]?.startDate, 'MM/dd/yyyy'),
                                    "duration": SelectedDuration,
                                    "vehicleReg": SelectedVehicleReg,
                                    "cost": SelectedVehicleData[0].rentalRatePerDay * SelectedDuration,
                                    "status": "Pending",
                                    "customeruid": LoggedUser.uid,

                                }
                                console.log(newBooking)
                                const bookingCollectionRef = collection(db, "bookings")
                                const newBookinDoc = await addDoc(bookingCollectionRef, newBooking)
                                    .then((doc) => {
                                        console.log(doc)
                                    })
                            }}

                            className="bg-green-800 text-white p-2 rounded-md">Yes</button>
                        <button onClick={dismissToast} className="bg-red-800 text-white p-2 rounded-md">No</button>
                    </div>
                </div>,
                {
                    closeButton: false,
                    closeOnClick: false,
                    type: "info",
                    autoClose: false,
                    position: "top-center",
                    theme: "colored",
                    icon: false,
                    draggable: false,

                }
            )

            console.log(newBooking);
        }
    }

    // sets ranges after a selection has been made on the picker
    const handleSelect = (ranges) => {
        SetRange([ranges.selection])

    }

    // set selected dates and recalculate the duration every time there is a change in range
    useEffect(() => {
        setSelectedDate(Range)
        // handle dayjs to get the number of days between the selected range
        var relativeTime = require('dayjs/plugin/relativeTime')
        dayjs.extend(relativeTime)
        const startDate = dayjs(format(Range[0]?.startDate, 'MM/dd/yyyy'));
        const endDate = dayjs(format(Range[0]?.endDate, 'MM/dd/yyyy'))
        const duration = endDate.diff(startDate, 'days')
        setSelectedDuration(duration + 1)

    }, [Range])

    return (

        <>
            <div className="w-full p-2 flex flex-col flex-wrap bg-opacity-80 bg-blend-overlay md:flex-row justify-around gap-2 border-b-2 border-white ">
                <div className="mb-2 flex flex-col  p-2 gap-2 align-middle items-center justify-center ">
                    <p className="text-xl"> Type</p>
                    <select value={BodyType} onChange={(e) => {
                        setBodyType(e.target.value)
                        if (e.target.value != "Select") {
                            const matchingData = FleetData.filter((car) => {
                                return car.bodyType === e.target.value
                            })

                            setFilteredFleetData(matchingData)
                        } else {
                            // filter the data to match  the selected bodyType
                            const matchingData = FleetData
                            setFilteredFleetData(matchingData)
                        }
                    }} className="w-[80%] md:w-80 p-2 bg-slate-700 bg-opacity-95 rounded-md ring-0 outline-none border-none" >
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

                <div className="mb-2 flex p-2 gap-2 align-middle items-center justify-center flex-col  ">
                    <p className="text-xl">Fuel</p>
                    <select value={fuelType} onChange={(e) => {
                        setfuelType(e.target.value)

                        if (e.target.value != "Select") {
                            const matchingData = FleetData.filter((car) => {
                                return car.fuelType === e.target.value
                            })

                            setFilteredFleetData(matchingData)
                        } else {
                            // filter the data to match  the selected bodyType
                            const matchingData = FleetData
                            setFilteredFleetData(matchingData)
                        }
                    }} className="w-[80%] md:w-80 p-2 bg-slate-700 bg-opacity-95 rounded-md ring-0 outline-none border-none" >
                        <option value="Select" className="p-2 font-semibold">Select</option>
                        <option value="Petrol" className="p-2 font-semibold">Petrol</option>
                        <option value="Diesel" className="p-2 font-semibold">Diesel</option>
                    </select>
                </div>

                <div className="mb-2 flex p-2 gap-2 align-middle items-center justify-center flex-col ">
                    <p className="text-xl">Terrain</p>
                    <select value={roadType} onChange={(e) => {
                        setroadType(e.target.value)
                        if (e.target.value != "Select") {
                            const matchingData = FleetData.filter((car) => {
                                return car.recommendedUsage === e.target.value
                            })

                            setFilteredFleetData(matchingData)
                        } else {
                            // filter the data to match  the selected bodyType
                            const matchingData = FleetData
                            setFilteredFleetData(matchingData)
                        }
                    }} className="w-[80%] md:w-80 p-2 bg-slate-700 bg-opacity-95 rounded-md ring-0 outline-none border-none" >
                        <option value="Select" className="p-2 font-semibold">Select</option>
                        <option value="Onroad" className="p-2 font-semibold">On-road</option>
                        <option value="Offroad" className="p-2 font-semibold">Off-road</option>
                    </select>
                </div>

            </div>


            <div className="p-2 w-full flex flex-col gap-2 items-center justify-center align-middle ">
                <div className="w-full p-2 flex self-center items-center justify-center align-middle gap-2 flex-col md:flex-row ">
                    <label htmlFor="CarReg">Car Registration</label>
                    <select className="w-[80%] md:w-80 p-2 bg-slate-700 bg-opacity-95 rounded-md ring-0 outline-none border-none" name="CarReg" id="CarReg"
                        value={SelectedVehicleReg}
                        onChange={(e) => setSelectedVehicleReg(e.target.value)}>
                        <option value="Select">Select Vehicle</option>                        {
                            filteredFleetData.map((item) => (
                                <option className="p-2 font-semibold" key={item.registration} value={item.registration} >{item.registration}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="w-full flex flex-col  align-middle justify-center items-center mx-auto self-center rounded-md  p-4">


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
                    <p className="flex flex-col md:flex-row gap-2 text-md align-middle justify-center mt-2">
                        Selected Dates:
                        <span>
                            {format(selectedDate[0]?.startDate, 'MM/dd/yyyy')}
                        </span>
                        TO :
                        <span>
                            {format(selectedDate[0]?.endDate, 'MM/dd/yyyy')}
                        </span>
                        <span>
                            a duration of: {SelectedDuration} day(s)
                        </span>
                    </p>


                </div>



                <button className="px-3 py-2 bg-sky-700 rounded-md hover:bg-opacity-70 " onClick={() => showBookingDetails()}>Confirm Booking Details </button>

                <ToastContainer
                    limit={1}
                />
            </div>


        </>
    )
}

export default FleetFilters