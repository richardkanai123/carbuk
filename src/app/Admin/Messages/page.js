import { Suspense } from "react"
import ReadMessage from "@/components/ReadMessage"
import UnreadMessage from "@/components/UnreadMessage"
import { BiMessageRoundedCheck, BiMessageRoundedDots } from 'react-icons/bi'

const Page = () => {

    return (
        <div className="w-full flex flex-col gap-2 md:gap-4 md:flex-row align-middle mt-3">
            <div className="flex-1  p-1 border-none border-0 rounded-md ">
                <p className="italic flex align-middle gap-1">
                    <BiMessageRoundedDots className="text-lg text-yellow-300" />
                    Unread Messages
                </p>
                <Suspense fallback={
                    <div className="animate-pulse w-full ">
                        <p>Loading Messages...</p>
                    </div>
                }>
                    <UnreadMessage />
                </Suspense>
            </div>
            <div className="flex-1  p-1 border-none border-0 rounded-md ">
                <p className="italic flex align-middle gap-1">
                    <BiMessageRoundedCheck className="text-lg text-green-800" />
                    Read Messages
                </p>
                <Suspense fallback={
                    <div className="animate-pulse w-full ">
                        <p>Loading Messages...</p>
                    </div>
                }>
                    <ReadMessage />
                </Suspense>
            </div>
        </div>
    )
}

export default Page