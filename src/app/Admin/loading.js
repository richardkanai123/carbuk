import { ClipLoader } from 'react-spinners'


const Page = () => {
    return (
        <div className='w-full p-4 flex flex-col gap-4 md:flex-row flex-wrap lg:flex-nowrap items-center align-middle justify-center mt-4'>
            <div className='bg-slate-600 p-4 animate-pulse rounded-md  flex flex-col items-center align-middle flex-1'>
                <ClipLoader />
            </div>
            <div className='bg-slate-600 p-4 animate-pulse rounded-md  flex flex-col items-center align-middle flex-1'>
                Loading ....
            </div>
            <div className='bg-slate-600 p-4 animate-pulse rounded-md  flex flex-col items-center align-middle flex-1'>
                Loading ....
            </div>
            <div className='bg-slate-600 p-4 animate-pulse rounded-md  flex flex-col items-center align-middle flex-1'>
                <ClipLoader />
            </div>
        </div>
    )
}

export default Page