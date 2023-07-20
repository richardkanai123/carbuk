import CarInfoComponent from '@/components/CarInfoComponent';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: "Vehicle Information",
    description: 'CarBuk specific vehicle details',
}


const Page = async ({ params }) => {


    const { carid } = params

    const FleetData = await fetch("http://localhost:3000/api/fleet",
        { cache: "force-cache" }
    )
    const fleet = await FleetData.json()
    const carData = fleet.find((car) => car.registration === carid)





    return (
        <div
            className='w-full h-full p-4 flex flex-col  md:flex-row md:flex-nowrap items-center align-middle justify-center md:justify-around'
        >
            <div className="w-full md:w-1/2  h-[500px]  relative  object-contain object-center p-2">
                <Image src={carData.imgUrl} alt={carData.registration} fill={true} priority className='aspect-video sm:w-full' />
            </div>

            <div className="w-full md:w-1/2 h-[500px] text-center flex flex-col items-center justify-center align-middle gap-2 p-2">

                <CarInfoComponent vehicle={carData} />

            </div>

            <Link href={`/Booking/${carid}`} className='text-center items-center  p-2 bg-sky-600 hover:bg-sky-500 ring-0 border-none rounded-md font-semibold'>Book Vehicle </Link>

        </div>
    )
}

export default Page