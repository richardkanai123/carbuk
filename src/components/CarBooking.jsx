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
import LoginButton from "./LoginButton";
import { db } from "@/libs/Firebase";
import { addDoc, collection } from "firebase/firestore";


const FleetFilters = ({ carData }) => {
    const { registration, bodyType, fuelType, recommendedUsage, rentalRatePerDay } = carData[0]

    const { LoggedUser } = UserAuth()

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
    const [SelectedDuration, setSelectedDuration] = useState()


    // toast dismissal function
    const dismissToast = () => toast.dismiss();

    // returns booking details if a valid car is selected
    function showBookingDetails() {
        let newBooking = {}

        // data for a new booking record to be uploaded into the db
        newBooking = {
            "lastBookingDate": format(selectedDate[0]?.endDate, 'MM/dd/yyyy'),
            "startBookingDate": format(selectedDate[0]?.startDate, 'MM/dd/yyyy'),
            "bookingDuration": SelectedDuration,
            "selectedVehicle": registration,
            "bookingCost": rentalRatePerDay * SelectedDuration,
            "bookingStatus": "Pending"
        }

        toast(
            <div className="p-2 flex flex-col gap-2 align-middle justify-center items-center">
                <p className="text-xl" >Booking: {registration} </p>
                <p className="text-sm">Body:{bodyType}</p>
                <p className="text-sm">Fuel:{fuelType}</p>
                <p className="text-base">Duration:{SelectedDuration} days </p>
                <p className="text-sm">
                    {format(selectedDate[0]?.startDate, 'MM/dd/yyyy')} to {format(selectedDate[0]?.endDate, 'MM/dd/yyyy')}
                </p>
                <p className="text-xl">Total Cost: {rentalRatePerDay * SelectedDuration}</p>

                <div className="w-full flex p-1 align-middle justify-evenly">
                    <button className="bg-green-800 text-white p-2 rounded-md">Yes</button>
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
                toastId: "newConfirmToast"

            }
        )

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
            <div className="w-full p-2 flex flex-col bg-opacity-80 bg-blend-overlay md:flex-row justify-around gap-2 border-b-2 border-white ">
                <div className="w-full gap-4 mb-2 flex flex-col md:flex-row  p-2 align-middle items-center justify-center ">
                    <p className="text-xl font-bold">{registration}</p>
                    <p className="text-xl"> Type:{bodyType}</p>
                    <p className="text-xl"> Fuel:{fuelType}</p>
                    <p className="text-xl"> Terrain:{recommendedUsage}</p>
                </div>
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


                {
                    LoggedUser != null ? (

                        <button
                            className="px-3 py-2 mt-6 bg-sky-700 rounded-md hover:bg-opacity-70 "
                            onClick={() => showBookingDetails()}>Confirm Booking Details
                        </button>
                    ) : (
                        <>
                            <p className="text-gray-400 font-light italic mt-8">
                                Log in to Book
                            </p>
                            <LoginButton />
                        </>
                    )
                }

                <ToastContainer
                    limit={1}
                />
            </div>


        </>
    )
}

export default FleetFilters