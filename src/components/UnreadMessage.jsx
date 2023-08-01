'use client'
import { db, firebaseAuth } from "@/libs/Firebase";
import { collection, doc, getDocs, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { BiMessageAltCheck } from "react-icons/bi";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import dayjs from "dayjs";
const UnreadMessage = () => {

    const [unReadMessages, setUnreadMessages] = useState([])


    useEffect(() => {
        // async function FetchMessages() {
        const messagesCollectionRef = collection(db, 'messages')
        const UnreadMessagesQuery = query(messagesCollectionRef, where("status", "==", "unread"))
        const messagesDocs = onSnapshot(UnreadMessagesQuery,
            (data) => {
                const messages = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                setUnreadMessages(messages)
            }
        )

    }, [])




    // update doc given id
    const UpdateMessageStatus = async (doc_id) => {
        const DocRef = doc(db, 'messages', doc_id)
        try {
            await updateDoc(DocRef, {
                status: "read"
            })
                .then(() => {
                    toast.success('Read Message!', {
                        theme: "colored",
                        duration: 1000
                    })

                })


        } catch (error) {
            toast.error(error.message)
        }
    }


    if (unReadMessages.length === 0) {
        return (
            <h1 className="italic text-sm text-center text-gray-600 ">No unread messages</h1>
        )
    }

    return (
        <ul className="w-full p-2 flex flex-col items-center justify-center gap-2 list-none">
            {
                unReadMessages.map((message) => (
                    <li className="w-full rounded-md bg-slate-500 p-2 bg-opacity-90 border-b border-b-zinc-300 flex flex-col" key={message.id}>
                        <div className="w-full flex flex-col align-middle md:flex-row items-center justify-between border-b mb-1">
                            <p className="font-light self-start text-sm"> {message.senderName}</p>
                            <p className="font-light self-start text-sm text-gray-200">{message.senderEmail}</p>
                            <span className="self-end text-xl font-semibold cursor-pointer text-lime-500 hover:text-green-600">
                                <BiMessageAltCheck onClick={() => UpdateMessageStatus(message.id)} />
                            </span>
                        </div>
                        <p className=" text-base p-1">{message.senderMessage}</p>
                        <span className="text-xs italic font-light self-end text-right">
                            {(message.timeSent).toDate().toLocaleString()}
                        </span>
                    </li>
                ))
            }
            <ToastContainer />
        </ul>
    )
}

export default UnreadMessage