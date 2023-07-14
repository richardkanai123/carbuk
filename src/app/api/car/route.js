import { NextResponse } from 'next/server'

export async function GET(req, res) {


    console.log(req.protocol)


    const fleet = [
        {
            "registration": "KCB123",
            "bodyType": "Sedan",
            "consumptionRating": 12,
            "fuelType": "Petrol",
            "recommendedUsage": "Onroad",
            "transmission": "Manual",
            "rentalRatePerHour": 1000,
            "rentalRatePerDay": 5000,
            "imgUrl": 'https://freepngimg.com/thumb/toyota/6-toyota-png-image-car-image.png',
            "engineCapacity": 2.6,
            "bookingStatus": true,
            "bookingID": "567865esxsxsffd"
        },
        {
            "registration": "KCA456",
            "bodyType": "SUV",
            "consumptionRating": 15,
            "fuelType": "Diesel",
            "recommendedUsage": "Offroad",
            "transmission": "Automatic",
            "rentalRatePerHour": 1500,
            "rentalRatePerDay": 7500,
            "imgUrl": "https://freepngimg.com/thumb/toyota/8-white-toyota-png-image-car-image.png",
            "engineCapacity": 2.0,
            "bookingStatus": false,
            "bookingID": ""
        },
        {
            "registration": "KCD789",
            "bodyType": "Minivan",
            "consumptionRating": 10,
            "fuelType": "Petrol",
            "recommendedUsage": "Onroad",
            "transmission": "Manual",
            "rentalRatePerHour": 800,
            "rentalRatePerDay": 4000,
            "imgUrl": "https://freepngimg.com/thumb/toyota/8-white-toyota-png-image-car-image.png",
            "engineCapacity": 3.6,
            "bookingStatus": true,
            "bookingID": "ssjkhdhs2ewewyyudus"
        },
        {
            "registration": "KCE012",
            "bodyType": "Convertible",
            "consumptionRating": 18,
            "fuelType": "Petrol",
            "recommendedUsage": "Onroad",
            "transmission": "Automatic",
            "rentalRatePerHour": 2000,
            "rentalRatePerDay": 10000,
            "imgUrl": "https://freepngimg.com/thumb/toyota/11-toyota-png-image-car-image.png",
            "engineCapacity": 1.5,
            "bookingStatus": false,
            "bookingID": ""
        },
        {
            "registration": "KCF345",
            "bodyType": "Hatchback",
            "consumptionRating": 11,
            "fuelType": "Petrol",
            "recommendedUsage": "Onroad",
            "transmission": "Manual",
            "rentalRatePerHour": 700,
            "rentalRatePerDay": 3500,
            "imgUrl": "https://freepngimg.com/thumb/toyota/8-white-toyota-png-image-car-image.png",
            "engineCapacity": 2.6,
            "bookingStatus": true,
            "bookingID": "567865esxsxssdsdhsdjsffd"
        },
        {
            "registration": "KCG678",
            "bodyType": "Sports Car",
            "consumptionRating": 20,
            "fuelType": "Petrol",
            "recommendedUsage": "Onroad",
            "transmission": "Manual",
            "rentalRatePerHour": 2500,
            "rentalRatePerDay": 12500,
            "imgUrl": "https://freepngimg.com/thumb/toyota/8-white-toyota-png-image-car-image.png",
            "engineCapacity": 0.9,
            "bookingStatus": false,
            "bookingID": ""
        },
        {
            "registration": "KCH901",
            "bodyType": "Truck",
            "consumptionRating": 16,
            "fuelType": "Diesel",
            "recommendedUsage": "Offroad",
            "transmission": "Manual",
            "rentalRatePerHour": 2000,
            "rentalRatePerDay": 10000,
            "imgUrl": "https://freepngimg.com/thumb/toyota/8-white-toyota-png-image-car-image.png",
            "engineCapacity": 1.6,
            "bookingStatus": true,
            "bookingID": "567865esxsxwwww23232sffd"
        },
        {
            "registration": "KBI234",
            "bodyType": "Van",
            "consumptionRating": 13,
            "fuelType": "Petrol",
            "recommendedUsage": "Onroad",
            "transmission": "Manual",
            "rentalRatePerHour": 1000,
            "rentalRatePerDay": 5000,
            "imgUrl": "https://freepngimg.com/thumb/toyota/8-white-toyota-png-image-car-image.png",
            "engineCapacity": 1.8,
            "bookingStatus": true,
            "bookingID": "76373egwfdgvdgs"
        },
        {
            "registration": "KCJ567",
            "bodyType": "MPV",
            "consumptionRating": 14,
            "fuelType": "Petrol",
            "recommendedUsage": "Onroad",
            "transmission": "Automatic",
            "rentalRatePerHour": 1200,
            "rentalRatePerDay": 6000,
            "imgUrl": "https://freepngimg.com/thumb/toyota/8-white-toyota-png-image-car-image.png",
            "engineCapacity": 1.5,
            "bookingStatus": false,
            "bookingID": ""
        },
    ];


    return NextResponse.json(fleet)


}