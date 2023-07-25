import AdminNav from '@/components/AdminNav'
import React from 'react'

const AdminLayout = ({ children }) => {
    return (
        <div className='w-full min-h-[60vh] px-4 flex flex-col relative'>
            <AdminNav />
            {children}
        </div>
    )
}

export default AdminLayout