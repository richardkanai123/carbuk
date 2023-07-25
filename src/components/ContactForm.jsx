'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { BsFillSendFill } from 'react-icons/bs'
import { db } from '@/libs/Firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
// toast
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    const [senderName, setSenderName] = useState('')
    const [senderEmail, setSenderEmail] = useState('')
    const [senderMessage, setSenderMessage] = useState('')

    const handleSendMessage = async (ev) => {
        ev.preventDefault()
        const messagesCollectionRef = collection(db, "messages")



        if (senderEmail !== "" || senderMessage !== "") {
            const Message = {
                senderName,
                senderEmail,
                senderMessage,
                status: "unread",
                timeSent: serverTimestamp()
            }

            try {
                const newDoc = await addDoc(messagesCollectionRef, Message)
                    .then((newDoc) => {
                        toast('Message Sent', {
                            position: "bottom-center",
                            type: 'success'
                        })

                        setSenderEmail('');
                        setSenderMessage('');
                        setSenderName('');
                    })
            } catch (error) {
                toast.error(error.message, {
                    position: "top-left",
                })
            }
        }
        else {
            toast.info('Missing info')
        }
    }

    return (
        <form onSubmit={(e) => handleSendMessage(e)} className='flex flex-col items-center align-middle justify-center gap-1 w-full md:w-[75%]'>
            <p className='text-md font-semibold italic bg-gradient-to-r from-cyan-400 to-amber-300 text-clip bg-clip-text' >Fill in the Form</p>
            <div className="w-full p-1 flex flex-col mb-3">
                <label className='w-full text-md mb-1' htmlFor="Name">Your Name</label>
                <input type="text" className='p-2 bg-opacity-80 ring-0 border-none bg-slate-700 rounded-md active:ring-0 active:border-0 focus:ring-0 w-full ' name="Name" id="Name" placeholder='Your name'
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    required
                />
            </div>

            <div className="w-full p-1 flex flex-col mb-3">
                <label className='w-full text-md mb-1' htmlFor="Email">Your Email</label>
                <input type="email" className='p-2 bg-opacity-80 ring-0 border-none bg-slate-700 rounded-md active:ring-0 focus:ring-0 w-full ' name="Email" id="Email" placeholder='Your email address'
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    required />
            </div>

            <div className="w-full p-1 flex flex-col mb-3">
                <label className='w-full text-md mb-1' htmlFor="Message">Your Message</label>
                <textarea
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    name='Message'
                    id='Message'
                    rows="10"
                    required
                    className='w-full p-2  bg-opacity-80 ring-0 border-none bg-slate-700 rounded-md active:ring-0 focus:ring-0'>
                </textarea>
            </div>

            <button type="submit" className=' w-1/2 p-2 bg-sky-500 text-white rounded-lg font-semibold flex items-center align-middle gap-1 justify-center cursor-pointer' >
                Send Message  <BsFillSendFill />
            </button>
            <ToastContainer limit={1} />
        </form>
    )
}

export default ContactForm