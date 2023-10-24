'use client'
import Nav from '@/components/Nav'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer';
import { AuthContextProvider } from '@/Context/AuthContext';


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthContextProvider>
        <body className={`${inter.className} min-w-screen min-h-screen max-h-fit flex flex-col items-center justify-center align-middle gap-1 dark:bg-slate-900 dark:text-white bg-gray-200 text-slate-950 relative scroll-smooth mx-auto my-0 max-w-7xl
      `}>
          <Nav />
          <div className="w-full flex flex-col items-center justify-center align-middle gap-1">
            {children}
          </div>

          <Footer />
        </body>
      </AuthContextProvider>
    </html>
  )
}
