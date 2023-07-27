import { db } from "@/libs/Firebase"
import { collection, getDocs } from "firebase/firestore"

const Page = async () => {
    const messagesCollectionRef = collection(db, 'messages')
    const messagesDocs = await getDocs(messagesCollectionRef)
    const messages = messagesDocs.docs

    console.log(messages);

    return (
        <div className="w-full flex flex-col gap-2 md:gap-4 md:flex-row md:justify-evenly align-middle mt-3">
            <div className="flex-1 bg-orange-200 p-1 border-none border-0 rounded-md min-h-[50vh] ">Unread Messaged</div>
            <div className="flex-1 bg-orange-200 p-1 border-none border-0 rounded-md min-h-[50vh] ">Read Messaged</div>
        </div>
    )
}

export default Page