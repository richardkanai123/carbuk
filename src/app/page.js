import CarComponent from "@/components/CarInfoComponent";
import Image from "next/image";
import Link from "next/link";
import { GiTrophy } from 'react-icons/gi'



const Home = () => {

  // const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': 'b0c2f4b431msh5522d9a69eeb6acp18a86bjsn3663cde40bc4',
  //     'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  //   }
  // }

  // const carData = await fetch(url, options)
  // const res = await carData.json()

  // console.log(res);


  return (
    <div className="w-full flex flex-col items-center justify-center align-middle self-center p-1 max-w-7xl ">
      <div className='h-screen text-center mx-auto flex flex-wrap lg:flex-nowrap items-center justify-around md:justify-center align-middle gap-4 font-extrabold w-full relative'>
        <div className="h-full sm:h-[80vh] w-full md:w-[48%]  flex flex-col  items-center justify-center align-middle gap-4">
          <h1 className="text-7xl text-transparent bg-gradient-to-r from-cyan-400 to-amber-500 text-clip bg-clip-text my-4 p-2">
            CarBuk
          </h1>
          <p className="text-4xl font-semibold line-clamp-3">Your Partners in Personal Onroad and OffRoad Transport</p>
          <div className="w-full flex justify-center align-middle p-2 gap-4">

            <Link href={"/Booking"}
              className="w-[200px] mx-auto bg-gradient-to-l from-cyan-400 via-sky-700 to-amber-500 p-2 ring-0 outline-none border-0 text-lg font-semibold rounded-lg shadow-md shadow-sky-800 hover:opacity-75 hover:bg-sky-400 hover:shadow-none transition-all ease-in mt-4"
            >
              Book Now
            </Link>

            <Link href={"/Fleet"}
              className="w-[200px] mx-auto p-2 ring-0 outline-none border-0 text-lg font-semibold rounded-lg underline underline-offset-1 hover:opacity-75 hover:bg-sky-400 hover:underline transition-all ease-in mt-4"
            >
              Our Fleet
            </Link>

          </div>
        </div>

        {/* image */}
        <div className="h-full w-full md:w-[50%]  items-center hidden md:flex justify-center align-middle  object-center object-contain relative  p-4 transition-all duration-[5000] ease-linear delay-100 ">
          <Image src="/suv 1000.png" alt="Hero Car Loading" priority width={1000} height={900} className=" scale-[85%] -z-20 object-contain  " />
        </div>
      </div>

      {/* about section */}
      <div className="w-full h-fit flex flex-col items-center justify-center align-middle p-2" id="About">
        <h1 className="bg-gradient-to-l from-cyan-400 via-sky-700 to-amber-500 text-2xl font-bold text-clip bg-clip-text text-transparent mb-4 ">About CarBuk</h1>

        <div className="h-full flex items-center flex-wrap md:flex-nowrap justify-around align-middle gap-2 ">
          <section
            className="self-center p-2 relative w-full md:w-[50%] object-cover object-center  "
          >
            <Image src="/audi-picture.png" alt="Hero Image" width={900} height={500} />
          </section>
          <section
            className=" self-center p-2 relative w-full md:w-[50%] object-cover object-center  "
          >
            <h1 className="text-lg flex flex-col gap-2 font-bold mb-2 leading-9 " >CarBuk: The Easy Way to Rent a Car in Kenya</h1>
            <p className="sm:text-base md:text-lg leading-relaxed mb-4 ">
              Looking for a car rental in Kenya? Look no further than CarBuk! We offer a wide variety of cars to choose from, at competitive prices. Our friendly and efficient staff will make sure you get the car you need, when you need it.
            </p>

            <p className="sm:text-base md:text-lg leading-relaxed ">
              {
                "Whether you're visiting Nairobi for business or pleasure, CarBuk can help you get around town with ease. We have cars available for all budgets, so you're sure to find the perfect one for your needs.And because we're based in Nairobi, we know the city like the back of our hands. We can help you plan your itinerary, or recommend the best places to visit."
              }
            </p>

            <p className="text-lg mt-3 font-semibold">So what are you waiting for? Book your car rental with CarBuk today!</p>

          </section>
        </div>

      </div>

      <div className="w-full h-fit flex flex-col items-center justify-center align-middle p-2 mt-5" id="Booking Process">
        <h1 className="bg-gradient-to-l from-cyan-400 via-sky-700 to-amber-500 text-2xl font-bold text-clip bg-clip-text text-transparent mb-4 ">Booking Process</h1>
        <div className="w-full h-fit flex flex-col md:flex-row md:flex-wrap items-center justify-evenly align-middle gap-2" id="HowToBook">
          <div className="py-2 text-center px-4 bg-slate-700 flex flex-col align-middle justify-center gap-3 rounded-md flex-1 w-[full] md:min-w-[300px] min-h-[320px] md:max-w-[350px]">
            <h3 className="text-3xl font-bold text-center">Step 1</h3>
            <ul className="font-semibold text-lg list-outside list-disc text-left px-2">
              <li className="list-item">Visit Our Website and go to <a className="text-sky-500 font-semibold underline" href='/Fleet'>Fleet</a> to see our vehicles List.</li>
              <li className="list-item">Click on any vehicle that you would like to view more details and book.</li>
              <li className="list-item">
                See the details provided about the vehicle and ensure it meets your specific needs.
              </li>
            </ul>
          </div>
          <div className="py-2 text-center px-4 bg-slate-700 flex flex-col align-middle justify-center gap-3 rounded-md flex-1 w-[full] md:min-w-[300px] min-h-[320px] md:max-w-[350px]">
            <h3 className="text-3xl font-bold text-center">Step 2</h3>
            <ul className="font-semibold text-lg list-outside list-disc text-left px-2">
              <li className="list-item">
                Click the Book Vehicle Button on the Vehicle Details Page
              </li>
              <li className="list-item">Alternatively, Go to the <a className="text-sky-500 font-semibold underline" href="/Booking">Booking Page</a> and Select a Car of Your Choice.</li>
              <li className="list-item ">Use the filters to filter Vehicles by Body Type, Terrain or Fuel</li>
              <li className="list-item "> Select the duration on the calender </li>
            </ul>
          </div>
          <div className="py-2 text-center px-4 bg-slate-700 flex flex-col align-middle justify-center gap-3 rounded-md flex-1 w-[full] md:min-w-[300px] min-h-[320px] md:max-w-[350px]">
            <h3 className="text-3xl font-bold text-center">Step 3</h3>
            <ul className="font-semibold text-lg list-outside list-disc text-left px-2">
              <li className="list-item">
                Click Confirm Booking Details and ensure the details are correct from the pop up.
              </li>
              <li className="list-item">Confirm the details by clicking Yes on the pop up. A pending Booking will be updated.</li>
              <li className="list-item ">Go to your  <a className="text-sky-500 font-semibold underline" href="/Profile">Profile Page</a> to see the status and details of your booking.</li>
            </ul>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Home