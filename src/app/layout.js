'use client'
import Nav from '@/components/Nav'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CarBuk',
  description: 'Your Favourite Car Booking Site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-w-screen min-h-screen max-h-fit flex flex-col items-center justify-center align-middle gap-1 dark:bg-slate-900 dark:text-white bg-gray-200 text-slate-950 relative scroll-smooth
      `}>
        <Nav />
        <div className="w-full flex flex-col items-center justify-center align-middle gap-1">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  )
}
