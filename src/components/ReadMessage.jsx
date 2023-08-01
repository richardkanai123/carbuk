'use client'
import { db } from "@/libs/Firebase";
import { toDate } from "date-fns";
import dayjs from "dayjs";
import { collection, deleteDoc, doc, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const ReadMessage = () => {
    const [readMessages, setReadMessages] = useState([])


    useEffect(() => {
        // async function FetchMessages() {
        const messagesCollectionRef = collection(db, 'messages')
        const ReadMessagesQuery = query(messagesCollectionRef, where("status", "==", "read"))
        const messagesDocs = onSnapshot(ReadMessagesQuery,
            (data) => {
                const messages = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                setReadMessages(messages)
            }
        )

    }, [])

    const DeleteMessage = async (doc_id) => {
        const DocRef = doc(db, 'messages', doc_id)
        try {
            await deleteDoc(DocRef, {
                status: "read"
            })
                .then(() => {
                    toast.success('Message Deleted!🚮')

                })


        } catch (error) {
            toast.error(error.message)
        }
    }


    if (readMessages.length === 0) {
        return (
            <h1 className="italic text-sm text-center text-gray-600">No past messages</h1>
        )
    }


    return (
        <ul className="w-full p-2 flex flex-col items-center justify-center gap-2 list-none">
            {
                readMessages.map((message) => (
                    <li className="w-full rounded-md bg-gray-600 p-2 bg-opacity-90 border-b border-b-zinc-200 flex flex-col" key={message.id}>
                        <div className="w-full flex flex-col align-middle md:flex-row items-center justify-between border-b mb-1">
                            <p className="font-light self-start text-sm"> {message.senderName}</p>
                            <p className="font-light self-start text-sm text-gray-200">{message.senderEmail}</p>
                            <span className="self-end text-xl font-semibold cursor-pointer text-red-300 hover:text-red-600">
                                <AiFillDelete onClick={() => DeleteMessage(message.id)} />
                            </span>
                        </div>
                        <p className=" text-base p-1">{message.senderMessage}</p>
                        <span className="text-xs italic font-light self-end text-right">
                            {(message.timeSent).toDate().toLocaleString()}
                        </span>
                    </li>
                ))
            }

        </ul>
    )
}

export default ReadMessage